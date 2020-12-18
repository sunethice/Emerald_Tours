<?php

namespace App\Http\Controllers;

use App\Package;
use Illuminate\Http\Request;

class PackagesController extends Controller
{
    //
    public function cpIndex(){
        // $packages = Package::where('featured', true)->get();

        $packages = Package::with('packageCategory')->get();

        foreach($packages as $key => $value)
        {
            $packages[$key]['category_name'] = ($value->packageCategory->name);
        }
        return $packages->toJson();
    }

    public function cpShow(){

    }

    public function cpCreate(){

    }

    public function cpStore(){

    }

    public function cpEdit(){

    }

    public function cpUpdate(){

    }

    public function cpDestroy(){

    }
}
