<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Excursion extends Model
{
    use HasFactory;
    protected $primaryKey = "excursion_id";
    protected $fillable = ['name', 'description'];
}
