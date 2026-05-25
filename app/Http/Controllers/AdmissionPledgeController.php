<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdmissionPledgeRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class AdmissionPledgeController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('admission-pledge');
    }

    public function store(AdmissionPledgeRequest $request): RedirectResponse
    {
        $reference = '#SOV-'.strtoupper(Str::random(4)).'-ALPHA';

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
