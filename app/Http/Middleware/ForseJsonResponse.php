<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ForseJsonResponse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $request->header('Accept','application/json');
        return $next($request);
    }
}
