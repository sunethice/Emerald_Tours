<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostsController extends Controller
{
    public function show($slug){
        //method 01
        // \DB - trying to access the DB class from the global namespace root
        // $post = \DB::table('posts')->where('slug', $slug)->first();
    
        //method 02
        //using Eloquent Model - Post model (created by php artisan make:Model Post)
        //the following statement can be simplified using model data binding method
        $post = Post::where('slug', $slug)->firstOrFail();

        return view('post',[
            'post' => $post
        ]);
    }
}
