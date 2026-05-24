<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactInquiryMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @param  array{name: string, email: string, inquiry_type: string, message: string}  $inquiry
     */
    public function __construct(public array $inquiry) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            replyTo: [
                new Address($this->inquiry['email'], $this->inquiry['name']),
            ],
            subject: '【お問い合わせ】'.$this->inquiryTypeLabel(),
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'mail.contact-inquiry',
            with: [
                'inquiryTypeLabel' => $this->inquiryTypeLabel(),
            ],
        );
    }

    private function inquiryTypeLabel(): string
    {
        return match ($this->inquiry['inquiry_type']) {
            'recruitment' => '採用について',
            'business' => '事業に関するご相談',
            'press' => '広報・取材について',
            default => 'その他',
        };
    }
}
