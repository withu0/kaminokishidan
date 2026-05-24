<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use App\Mail\ContactInquiryMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Throwable;

class ContactController extends Controller
{
    public function store(ContactFormRequest $request): RedirectResponse
    {
        try {
            Mail::to(config('mail.contact.to'))
                ->send(new ContactInquiryMail($request->validated()));
        } catch (Throwable $exception) {
            report($exception);

            return back()
                ->withInput()
                ->with('contactStatus', 'error');
        }

        return redirect()
            ->to(route('recruitment').'#contact')
            ->with('contactStatus', 'sent');
    }
}
