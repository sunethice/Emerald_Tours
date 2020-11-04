<?php

namespace App\Http\Controllers;

use App\Bespoke;
use Illuminate\Http\Request;

class BespokeController extends Controller
{
    public function store(Request $request){
        Bespoke::create($request->input());
        return response('bespoke request sent successfully');
    }
}
