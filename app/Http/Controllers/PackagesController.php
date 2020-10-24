<?php

namespace App\Http\Controllers;

use App\Package;
use Illuminate\Http\Request;

class PackagesController extends Controller
{
    //
    public function index(){
        $packages = Package::where('featured', true)->get();

        //$packages = Package::get();//with('PackageCategory')->

        // foreach ($packages as $package) {
        //     echo $package->PackageCategory->name;
        // }
        return $packages->toJson();
    }

    public function show(){

    }

    public function create(){

    }

    public function store(){

    }

    public function edit(){

    }

    public function update(){

    }

    public function destroy(){

    }
}
