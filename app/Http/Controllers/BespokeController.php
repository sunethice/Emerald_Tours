<?php

namespace App\Http\Controllers;

use App\Bespoke;
use App\Mail\BespokeConfirmation;
use App\Mail\BespokeMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class BespokeController extends Controller
{
    public function store(Request $request){
        $this->validate($request,[
            'clientname' => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric',
            'message' => 'required|string'
        ]);

        $bespoke = Bespoke::create($request->input());

        // dd($request->input('email'));
        //send an email to emerald tours
        Mail::to($request->input('email'))->send(new BespokeMail($bespoke));
        if (!Mail::failures()) {
            Mail::to($request->input('email'))->send(new BespokeConfirmation($bespoke));
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
}
