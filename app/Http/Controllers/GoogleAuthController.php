<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class GoogleAuthController extends Controller
{
    public function redirect(Request $request) {
        return Socialite::driver("google")->redirect();
    }


    public function callback(Request $request) {
        $googleUser = Socialite::driver("google")->user();

        $user = User::updateOrCreate(
            ['google_id' => $googleUser->id],
            [
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'password' => Str::password(12),
                'email_verified_at' => now()
            ]
        );
        Auth::login($user);
    
        return redirect(config("app.frontend_url") . "/dashboard");
    }

    public function logout() {
        Auth::logout();
        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
