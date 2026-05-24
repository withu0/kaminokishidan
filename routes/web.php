<?php

use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/recruitment', function (Request $request) {
    return Inertia::render('recruitment', [
        'contactStatus' => $request->session()->get('contactStatus'),
    ]);
})->name('recruitment');

Route::post('/contact', [ContactController::class, 'store'])
    ->middleware('throttle:5,1')
    ->name('contact.store');

Route::get('/company', function () {
    return Inertia::render('company');
})->name('company');

Route::get('/business', function () {
    return Inertia::render('business');
})->name('business');

Route::get('/admission', function () {
    return Inertia::render('admission');
})->name('admission');

Route::get('/oath', function () {
    return Inertia::render('oath');
})->name('oath');

Route::get('/members', function () {
    return Inertia::render('members');
})->name('members');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
