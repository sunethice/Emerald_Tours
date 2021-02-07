<?php

namespace App\Http\Controllers;

use App\Admin;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function cpAdminSignIn(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
            'rememberMe' => 'boolean'
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }
        $mUser = Admin::where('email', $request['email'])->first();
        if ($mUser) {
            if (Hash::check($request['password'], $mUser->password)) {
                config(['auth.guards.api.provider' => 'admin']);
                $tokenObj = $mUser->createToken('Emerald Tours User', ['admin']);
                if ($request['rememberMe']) {
                    $tokenObj->token->expires_at = Carbon::now()->addWeeks(1);
                }
                $tokenObj->token->save();
                return response([
                    'access_token' => $tokenObj->accessToken,
                    // 'refresh_token'=>$tokenObj->refreshToken,
                    'token_type' => 'Bearer',
                    'expires_at' => Carbon::parse($tokenObj->token->expires_at)->toDateTimeString()
                ], 200);
            }
        } else {
            return response()->json(['error' => ['Email and Password are Wrong.']], 200);
        }
    }

    public function cpAdminDashboard(Request $request)
    {
        return response(['message' => 'cpAdminDashboard'], 200);
    }

    public function cpSignIn(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
            'rememberMe' => 'boolean'
        ]);
        if ($validator->fails()) {
            return response(['errors' => $validator->errors()->all()], 422);
        }

        $mUser = User::where('email', $request['email'])->first();
        if ($mUser) {
            if (Hash::check($request['password'], $mUser->password)) {
                $tokenObj = $mUser->createToken('Emerald Tours User');
                if ($request['rememberMe']) {
                    $tokenObj->token->expires_at = Carbon::now()->addWeeks(1);
                }
                $tokenObj->token->save();
                return response([
                    'access_token' => $tokenObj->accessToken,
                    // 'refresh_token'=>$tokenObj->refreshToken,
                    'token_type' => 'Bearer',
                    'expires_at' => Carbon::parse($tokenObj->token->expires_at)->toDateTimeString()
                ], 200);
            } else {
                return response(['message' => 'Password mismatch'], 422);
            }
        } else {
            return response(['message' => 'User does not exist'], 422);
        }
    }

    public function cpSignUp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => [
                'required',
                'string',
                'min:8',
                'regex:/[a-z]/',      // must contain at least one lowercase letter
                'regex:/[A-Z]/',      // must contain at least one uppercase letter
                'regex:/[0-9]/',      // must contain at least one digit
                'regex:/[@$!%*#?&]/', // must contain a special character
                'confirmed'
            ],
            'password_confirmation' => 'same:password'
        ]);
        if ($validator->fails()) {
            // 422 Unprocessable Entity - occurs when a request is well-formed, however, due to semantic errors it is unable to be processed.
            return response([
                'errors' => $validator->failed()
                // 'errors'=> ['must contain at least one lowercase letter',
                //             'must contain at least one uppercase letter',
                //             'must contain at least one digit',
                //             'must contain a special character']
            ], 422);
        }
        $request['password'] = Hash::make($request['password']);
        $request['rememberToken'] = Str::random(10);
        $mUser = User::create($request->toArray());
        $token = $mUser->createToken('Emerald Tours User')->accessToken;
        return response(['token' => $token], 200);
    }

    public function cpSignOut(Request $request)
    {
        return response(['message' => 'You have been successfully logged out.'], 200);
        // $request->user()->token()->revoke();
        // return response(['message'=>'You have been successfully logged out.'],200);
    }

    public function cpGetUser(Request $request)
    {
    }
}
