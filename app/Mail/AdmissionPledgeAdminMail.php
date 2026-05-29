<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AdmissionPledgeAdminMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @param  array{full_name: string, company: string, email: string, phone: string, message: string, reference: string}  $pledge
     */
    public function __construct(public array $pledge) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            replyTo: [
                new Address($this->pledge['email'], $this->pledge['full_name']),
            ],
            subject: '【新規申込】聖なる面談の申し込み（受付番号：'.$this->pledge['reference'].'）',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'mail.admission-pledge-admin',
        );
    }
}
