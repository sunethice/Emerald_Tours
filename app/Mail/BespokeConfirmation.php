<?php

namespace App\Mail;

use App\Bespoke;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BespokeConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    public $cBespoke;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Bespoke $pBespoke)
    {
        $this->cBespoke = $pBespoke;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("$this->cBespoke->clientname")->view('emails.bespokeconf');
    }
}
