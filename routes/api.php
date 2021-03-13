<?php

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
Route::get('packageids', 'PackagesController@cpListPackageIDs');
Route::post('addpackage', 'PackagesController@cpAddPackage');
Route::post('editpackage', 'PackagesController@cpUpdatePackage');
Route::get('packagewithitinerary/{packageId}', 'PackagesController@cpGetPackageWithItinerary');

Route::get('itineraries', 'ItineraryController@cpIndex');
Route::get('itineraries/{id}', 'ItineraryController@cpIndexByID');
Route::post('additinerary', 'ItineraryController@cpAddItinerary');
Route::post('edititinerary', 'ItineraryController@cpUpdateItinerary');

Route::get('excursions', 'ExcursionsController@cpIndex');
Route::get('excursionids', 'ExcursionsController@cpListExcursionIDs');
Route::post('addexcursion', 'ExcursionsController@cpAddExcursion');
Route::post('editexcursion', 'ExcursionsController@cpUpdateExcursion');

Route::post('bespoke', 'BespokeController@cpStore');
Route::get('inquiries', 'BespokeController@cpListBespokeEnquiries');
Route::post('mark_inquiry', 'BespokeController@cpMarkInquiry');

Route::post('addtransfer', 'TransfersController@cpAddTrasfer');
Route::post('edittransfer', 'TransfersController@cpUpdateTrasfer');
Route::get('gettransferlist', 'TransfersController@cpGetTransferList');
Route::post('transferinquiry', 'TransfersController@cpSendTransferInquiry');
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
