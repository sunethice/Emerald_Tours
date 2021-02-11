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

    public function cpListBespokeEnquiries(Request $request)
    {
        $bespokeTours = Bespoke::orderBy('status', 'ASC')->get();
        return response()->json($bespokeTours, 200);
        // response(['message' => 'bespoke inquiries listed successfully.', 'result' => $bespokeTours], 200);
    }

    public function cpMarkAsRead(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'id' => 'required'
        ]);

        if ($validate->fails()) {
            return response(['message' => 'Bespoke inquire ID required'], 200);
        }

        $bespokeInquiry = Bespoke::where('id', $request['id'])->update(['status' => 2]);
        if ($bespokeInquiry) {
            return response(['message' => 'Bespoke inquire marked as read.'], 200);
        }
    }

    public function cpMarkAsComplete(Request $request)
    {
    }
}
