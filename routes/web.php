<?php

use App\Http\Controllers\GoogleAuthController;
use Illuminate\Support\Facades\Route;

Route::get('/{path?}', function () {
    return view('app');
});

// api/
// Route::group(['prefix' => 'api'], function() {
//     Route::post('/task', [TaskApiController::class, 'saveTask']);
// });



Route::get('/auth/google/redirect', [GoogleAuthController::class, 'redirect']);
Route::get('/auth/google/callback', [GoogleAuthController::class, 'callback']);
