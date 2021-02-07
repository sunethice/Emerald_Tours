<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExploreController extends Controller
{
    //
    public function cpAddPlace(Request $request)
    {
        DB::beginTransaction();
        $mPrimaryImg = $request['primaryImg'];
        

        DB::commit();
    }
}
