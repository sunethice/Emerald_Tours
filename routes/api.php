<?php

use App\Http\Controllers\PackagesController;
use App\Http\Controllers\TransfersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('packages', 'PackagesController@cpIndex');
Route::post('bespoke', 'BespokeController@cpStore');

Route::post('addtransfer', 'TransfersController@cpAddTrasfer');
Route::post('edittransfer', 'TransfersController@cpUpdateTrasfer');
Route::get('gettransferlist', 'TransfersController@cpGetTransferList');
Route::group(['prefix' => 'auth', 'middleware' => ['cors', 'json.response']], function () {
    Route::post('signin', 'AuthController@cpSignIn');
    Route::post('signup', 'AuthController@cpSignUp');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('signout', 'AuthController@cpSignOut');
        Route::get('user', 'AuthController@cpGetUser');
    });
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
