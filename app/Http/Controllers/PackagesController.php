<?php

namespace App\Http\Controllers;

use App\Package;
use Illuminate\Http\Request;

class PackagesController extends Controller
{
    //
    public function index(){
        // $packages = Package::where('featured', true)->get();

        $packages = Package::with('packageCategory')->get();

        foreach($packages as $key => $value)
        {
            $packages[$key]['category_name'] = ($value->packageCategory->name);
        }
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
