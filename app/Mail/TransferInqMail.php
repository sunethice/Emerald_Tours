<?php

namespace App\Mail;

use App\TransInquiry;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TransferInqMail extends Mailable
{
    use Queueable, SerializesModels;

    public $cTransInquiry;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(TransInquiry $pTransInquiry)
    {
        $this->cTransInquiry = $pTransInquiry;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.transinquiry');
    }
}
