<?php

use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\PropertyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::post('/auth/logout', [GoogleAuthController::class, 'logout']);

Route::get('/get-property', [PropertyController::class, 'getProperty']);


