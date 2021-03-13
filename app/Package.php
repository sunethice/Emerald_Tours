<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'destination', 'no_of_days', 'no_of_nights', 'featured'];
    protected $primaryKey = 'package_id';

    // public function packageCategory()
    // {
    //     return $this->belongsTo('App\PackageCategory', 'category_id', 'category_id');
    // }

    public function itineraries()
    {
        return $this->hasMany('App\Itinerary', 'package_id', 'package_id');
        //first 'package_id' for foreign key of Itinerary of packages and second 'package_id' is the primary
        //key of packages which is beign reffered to.
    }
}
