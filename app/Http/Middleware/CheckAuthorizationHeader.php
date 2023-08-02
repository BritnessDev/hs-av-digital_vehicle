<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAuthorizationHeader
{
    public function handle(Request $request, Closure $next)
    {
        if (!$request->headers->has('Authorization')) {
            return response()->json([
                'auth' => false,
                'message' => 'Please log in again.'
            ], 401);
        }

        $token = str_replace('Bearer ', '', $request->header('Authorization'));

        if (!Auth::guard('api')->check(['api_token' => $token])) {
            return response()->json([
                'success' => false,
                'auth' => false,
                'message' => 'Invalid authorization token.'
            ], 401);
        }

        return $next($request);
    }
}
