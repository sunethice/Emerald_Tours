<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bespoke extends Model
{
    use HasFactory;
    protected $table = 'bespoketours';
    protected $fillable = ['clientname', 'email', 'country', 'phone','message'];

}
