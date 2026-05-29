<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AdmissionPledgeUserMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @param  array{full_name: string, company: string, email: string, phone: string, message: string, reference: string}  $pledge
     */
    public function __construct(public array $pledge) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: '【神の騎士団】汝の声を確かに承った',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'mail.admission-pledge-user',
        );
    }
}
