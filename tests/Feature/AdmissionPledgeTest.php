<?php

use App\Mail\AdmissionPledgeAdminMail;
use App\Mail\AdmissionPledgeUserMail;
use Illuminate\Support\Facades\Mail;

test('admission pledge form sends admin and user emails with valid data', function () {
    Mail::fake();

    config(['mail.admission_pledge.to' => 'admin@example.com']);

    $response = $this->post(route('admission.pledge.store'), [
        'full_name' => '山田 太郎',
        'company' => '株式会社サンプル',
        'email' => 'taro@example.com',
        'phone' => '03-1234-5678',
        'message' => '聖なる面談についてお伺いしたく、ご連絡いたしました。',
    ]);

    $response->assertRedirect(route('admission.pledge.accepted'));

    Mail::assertSent(AdmissionPledgeAdminMail::class, function (AdmissionPledgeAdminMail $mail) {
        return $mail->hasTo('admin@example.com')
            && $mail->pledge['full_name'] === '山田 太郎'
            && $mail->pledge['company'] === '株式会社サンプル'
            && $mail->pledge['email'] === 'taro@example.com'
            && $mail->pledge['phone'] === '03-1234-5678'
            && $mail->pledge['message'] === '聖なる面談についてお伺いしたく、ご連絡いたしました。'
            && str_starts_with($mail->pledge['reference'], '#SOV-');
    });

    Mail::assertSent(AdmissionPledgeUserMail::class, function (AdmissionPledgeUserMail $mail) {
        return $mail->hasTo('taro@example.com')
            && $mail->pledge['full_name'] === '山田 太郎'
            && $mail->pledge['phone'] === '03-1234-5678'
            && $mail->pledge['message'] === '聖なる面談についてお伺いしたく、ご連絡いたしました。'
            && str_starts_with($mail->pledge['reference'], '#SOV-')
            && $mail->envelope()->subject === '【神の騎士団】汝の声を確かに承った';
    });
});

test('admission pledge form validates required fields', function () {
    Mail::fake();

    $response = $this->post(route('admission.pledge.store'), []);

    $response
        ->assertSessionHasErrors(['full_name', 'company', 'email', 'phone', 'message'])
        ->assertRedirect();

    Mail::assertNothingSent();
});

test('admission pledge form reports error when mail fails', function () {
    Mail::shouldReceive('to')
        ->andThrow(new RuntimeException('SMTP connection failed'));

    config(['mail.admission_pledge.to' => 'admin@example.com']);

    $response = $this->from(route('admission.pledge'))
        ->post(route('admission.pledge.store'), [
            'full_name' => '山田 太郎',
            'company' => '株式会社サンプル',
            'email' => 'taro@example.com',
            'phone' => '03-1234-5678',
            'message' => '聖なる面談についてお伺いしたく、ご連絡いたしました。',
        ]);

    $response
        ->assertRedirect(route('admission.pledge'))
        ->assertSessionHas('pledgeStatus', 'error')
        ->assertSessionHasInput('full_name', '山田 太郎');
});
