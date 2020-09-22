<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test', function(){
    return "test page";
});
Route::view('/{path?}', 'app'); //redirects all first level url paths in the browser to app view

//-----------------Routing--------------------------
Route::get('test',function(){

    //reading query string in the url
    //?name=sarah
    $name = request('name');
    // return $name;

    //return a view(welcome.blade.php)
    //any arguments can be passed in an array
    /*in the view it can be refered as in php syntax <?= htmlspecialchars($name, ENT_QUOTES); ?>
        OR
      laravel syntax {{ $name }}
      Note:
        {{ $name }} - escapes data, {!! $name !!} - does not escape data
        ex: if we pass ?name=<script>alert('hello');</script>
            {{ $name }} output = <script>alert('hello');</script>
            {!! $name !!} output = an alert with hello as message
    */
    return view('welcome',[
        'name' => $name
    ]);
});


//wild card - when you want the request to be something dynamic like id
//you can capture it within the callback function as a parameter
Route::get('/post/{post}', function($post){
    $posts = [
        "1" => "first entry",
        "2" => "second entry"
    ];

    if(!array_key_exists($post,$posts)){
       abort(404, "Sorrty, that post waas not found");
    }

    return view('post',[
        'post' => $posts[$post]
    ]);
});

//to create a controller either create controller file in app/Http/Controllers
//  OR
//use php artisan make:controller PostsController in the terminal
// to call the controller from the route use as follows, @show is the function to be called
// within the PostsController

Route::get('/posts/{post}', 'PostsController@show');

//-----------------Database access--------------------------

//to make a table in the database from laravel use migration
// php artisan make:migration create_posts_table
//      this creates create_posts_table.php migration in database/migrations
//
// you can make alterations in this file like adding a column in the table
//      $table->string('slug');
// then, to add the table in the database: php artisan migrate
//
// Later if you add a nother column and run the above command, it will produce nothing to migrate as this file
// is already migrated. You can update the table in two ways.
//      1. php artisan make:rollback - this will rollback all the changes done at each previous step and not recommended
//          in the production environment
//      2. php artisan make:fresh - this will drop all the table and recreate the table, which is a good option if your
//          tables are empty
//
// creating model, controller, migration separately would feel overwhelming, so to create all at once use flags
//      php artisan make:model projects -mc ; -m for migration -c for controller
//  you can check for available options by php artisan help make:model
//      Options:
//          -a, --all             Generate a migration, seeder, factory, and resource controller for the model
//          -c, --controller      Create a new controller for the model
//          -f, --factory         Create a new factory for the model
//              --force           Create the class even if the model already exists
//          -m, --migration       Create a new migration file for the model
//          -s, --seed            Create a new seeder file for the model
//          -p, --pivot           Indicates if the generated model should be a custom intermediate table model
//          -r, --resource        Indicates if the generated controller should be a resource controller
//              --api             Indicates if the generated controller should be an API controller
//          -h, --help            Display this help message
//          -q, --quiet           Do not output any message
//          -V, --version         Display this application version
//              --ansi            Force ANSI output
//              --no-ansi         Disable ANSI output
//          -n, --no-interaction  Do not ask any interactive question
//              --env[=ENV]       The environment the command should run under
//          -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
//
// --------------- Using Tinker to generate dummy data -----------------
// need to create a factory and relevant model
// Package::factory()->count(3)->create()
//

//-----------------Forms--------------------------

//Seven restful controller actions
//
//index() - render a list of resources(list of articles, list of projects)
//show($id) - render a specific one(a specific article, a specific project)
//create() - shows a view to create a new resource
//store() - persist data passed through creating new resource
//edit() - show a view to edit an existing resource
//update() - persist the edited resource
//destroy() - destroy the resource
//
//Restful routing
//
//use GET, POST, PUT, DELETE to perform above actions
//GET - read/get data; GET /articles, GET /articles/:id
//POST -  create data; POST /articles
//PUT or PATCH - update data; PUT /articles/:id
//DELETE - delete data; DELETE /articles/:id
//
// Note: to pass an object to a form in a view in a situation like edit
//       $article = Article::find($id);
//       return view('articles.edit',['article'=>$article]) OR view('articles.edit',compact('article'))
//
//       in the form you can refer the values using like {{ article->title }}
//       ex:<teaxtarea class="" name"">{{ article->title }}</teaxtarea>

// Note: form method only allow GET and POST
//       to use PUT, PATCH, and DELETE we need a tweak as follows;
//       <form method="POST" action="/articles/{{ $article->id }}">
//          @method('PUT')
//       </form>
//
// Validation
//      in the controller
//          request()->validate([
//              'title' => 'required',
//              'excerpt' => 'required',
//              'body' => 'required'
//          ]);
//
//      @if($error->has('title')) //if there is an error regards to title
//          <p class="">{{ $error->first('title') }}</p>
//      @endif
//      OR
//      @error('title')
//          <p class="">{{ $error->first('title') }}</p>
//      @enderror
//
//      once a form is submitted with empty values it will redirected to the same page with error messages
//      but the entries that had values will be lost. to overcome that use the old() method
//      ex: <input class="" value="{{ old('title') }}"
//
// to create an entry of any entity you can use as follows;
//      Article::create([
//          'title' => request('title'),
//          'excerpt' => request('excerpt'),
//          'body' => request('body')
//      ])
//      but this would create an 'mass assignable' error, and this happens due to protection reasons which
//      avoids users from inserting values to fields that cannot be changed like id. to overcome this while
//      allowing the protection to remain is to add following in the Article Model
//
//      protected $fillable = ['title','except','body'];
//
//      if you dont want any protection and override it with your handle use guarded as follows,
//
//      protected $guarded = [];
//
// Named Routes
//  Route::get('/articles/{article}',ArticleController@show)->name('articles.show');
//
//  refer the named route in the view | controller (better to use named routes as actual route can change in the future
//  so the name referred to it won't change)
//      ex: <a href="/article/{{ $article->id }}"></a> ==> <a href="{{ route('article.show', $article) }}"></a>
//  In the controller -> ex: return redirect(route('article.show', $article));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

