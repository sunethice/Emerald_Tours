<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'description', 'destination', 'no_of_days', 'no_of_nights', 'featured'];
    protected $primaryKey = 'package_id';
    protected $table = "packages";

    // public function packageCategory()
    // {
    //     return $this->belongsTo('App\PackageCategory', 'category_id', 'category_id');
    // }
}
