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
Route::post('addpackage', 'PackagesController@cpAddPackage');
Route::post('editpackage', 'PackagesController@cpUpdatePackage');

Route::post('bespoke', 'BespokeController@cpStore');
Route::get('inquiries', 'BespokeController@cpListBespokeEnquiries');

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

Route::post('admin/signin', 'AuthController@cpAdminSignIn')->name('adminLogin');
Route::group(['prefix' => 'admin', 'middleware' => ['auth:admin-api', 'scopes:admin']], function () {
    // authenticated staff routes here
    Route::get('dashboard', 'AuthController@cpAdminDashboard');
    // Route::post('addtransfer', 'TransfersController@cpAddTrasfer');
    // Route::post('edittransfer', 'TransfersController@cpUpdateTrasfer');
    Route::get('gettransferlist', 'TransfersController@cpGetTransferList');
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
