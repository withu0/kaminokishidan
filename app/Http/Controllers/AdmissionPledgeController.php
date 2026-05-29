<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdmissionPledgeRequest;
use App\Mail\AdmissionPledgeAdminMail;
use App\Mail\AdmissionPledgeUserMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class AdmissionPledgeController extends Controller
{
    public function create(Request $request): Response
    {
        return Inertia::render('admission-pledge', [
            'pledgeStatus' => $request->session()->get('pledgeStatus'),
        ]);
    }

    public function store(AdmissionPledgeRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $reference = '#SOV-'.strtoupper(Str::random(4)).'-ALPHA';
        $pledge = array_merge($validated, ['reference' => $reference]);

        try {
            Mail::to(config('mail.admission_pledge.to'))
                ->send(new AdmissionPledgeAdminMail($pledge));

            Mail::to($validated['email'], $validated['full_name'])
                ->send(new AdmissionPledgeUserMail($pledge));
        } catch (Throwable $exception) {
            report($exception);

            return back()
                ->withInput()
                ->with('pledgeStatus', 'error');
        }

        return redirect()
            ->route('admission.pledge.accepted')
            ->with('reference', $reference);
    }

    public function accepted(): Response
    {
        $reference = session('reference', '#SOV-'.strtoupper(Str::random(4)).'-ALPHA');

        return Inertia::render('admission-pledge-accepted', [
            'reference' => $reference,
        ]);
    }
}
