<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfers extends Model
{
    use HasFactory;
    protected $fillable = ['from', 'to', 'drivetime', 'charge'];
}
