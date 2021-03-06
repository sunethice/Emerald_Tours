<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Itinerary extends Model
{
    use HasFactory;
    protected $primaryKey = 'itinerary_id';
    protected $fillable = ['description', 'features', 'package_id'];

    protected $table = "itinerary";

    public function package()
    {
        return $this->belongsTo('App\Package', 'package_id');
    }
}
