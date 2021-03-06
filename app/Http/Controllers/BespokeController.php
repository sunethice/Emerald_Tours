<?php

namespace App\Http\Controllers;

use App\Bespoke;
use App\Mail\BespokeConfirmation;
use App\Mail\BespokeMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class BespokeController extends Controller
{
    public function cpStore(Request $request)
    {
        $this->validate($request, [
            'clientname' => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'message' => 'required|string'
        ]);

        $bespoke = Bespoke::create($request->all());

        // dd($request->input('email'));
        //send an email to emerald tours
        Mail::to('suneth_perera@outlook.com')->send(new BespokeMail($bespoke));
        if (!Mail::failures()) {
            Mail::to($request['email'])->send(new BespokeConfirmation($bespoke));
        }

        // Mail::send('Html.view', $data, function ($message) {
        //     $message->from('john@johndoe.com', 'John Doe');
        //     $message->sender('john@johndoe.com', 'John Doe');
        //     $message->to('john@johndoe.com', 'John Doe');
        //     $message->cc('john@johndoe.com', 'John Doe');
        //     $message->bcc('john@johndoe.com', 'John Doe');
        //     $message->replyTo('john@johndoe.com', 'John Doe');
        //     $message->subject('Subject');
        //     $message->priority(3);
        //     $message->attach('pathToFile');
        // });

        //send a confirmation email to the client
        // Mail::send('Html.view', $data, function ($message) {
        //     $message->from('john@johndoe.com', 'John Doe');
        //     $message->sender('john@johndoe.com', 'John Doe');
        //     $message->to('john@johndoe.com', 'John Doe');
        //     $message->cc('john@johndoe.com', 'John Doe');
        //     $message->bcc('john@johndoe.com', 'John Doe');
        //     $message->replyTo('john@johndoe.com', 'John Doe');
        //     $message->subject('Subject');
        //     $message->priority(3);
        //     $message->attach('pathToFile');
        // });
        return response('bespoke request sent successfully');
    }

    public function cpListBespokeEnquiries(Request $request)
    {
        $bespokeTours = Bespoke::orderBy('status', 'ASC')->get();
        return response()->json($bespokeTours, 200);
        // response(['message' => 'bespoke inquiries listed successfully.', 'result' => $bespokeTours], 200);
    }

    public function cpMarkInquiry(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'id' => 'required',
        ]);

        if ($validate->fails()) {
            return response(['message' => $validate->failed()], 422);
        }

        $bespokeInquiry = Bespoke::where('id', $request['id'])->first();
        $isUpdated = Bespoke::where('id', $request['id'])->update(['status' => ($bespokeInquiry["status"] == 1 ? 2 : 1)]);
        if ($isUpdated) {
            $inquiryUpdated = $bespokeInquiry->refresh();
            return response(["message" => "Bespoke inquiry marked successfully", "inquiryEntry" => $inquiryUpdated], 200);
        }
        return response(['message' => 'Bespoke inquiry counld not be marked.'], 500);
    }

    public function cpMarkAsComplete(Request $request)
    {
    }
}
