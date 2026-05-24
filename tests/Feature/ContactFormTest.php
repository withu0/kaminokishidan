<?php

use App\Mail\ContactInquiryMail;
use Illuminate\Support\Facades\Mail;

test('contact form sends an email with valid data', function () {
    Mail::fake();

    config(['mail.contact.to' => 'inbox@example.com']);

    $response = $this->from('/recruitment')->post(route('contact.store'), [
        'name' => '山田 太郎',
        'email' => 'taro@example.com',
        'inquiry_type' => 'recruitment',
        'message' => '応募について質問があります。',
    ]);

    $response
        ->assertRedirect(route('recruitment').'#contact')
        ->assertSessionHas('contactStatus', 'sent');

    Mail::assertSent(ContactInquiryMail::class, function (ContactInquiryMail $mail) {
        return $mail->hasTo('inbox@example.com')
            && $mail->inquiry['name'] === '山田 太郎'
            && $mail->inquiry['email'] === 'taro@example.com'
            && $mail->inquiry['inquiry_type'] === 'recruitment'
            && $mail->inquiry['message'] === '応募について質問があります。';
    });
});

test('contact form validates required fields', function () {
    Mail::fake();

    $response = $this->from('/recruitment')->post(route('contact.store'), []);

    $response
        ->assertSessionHasErrors(['name', 'email', 'inquiry_type', 'message'])
        ->assertRedirect('/recruitment');

    Mail::assertNothingSent();
});
