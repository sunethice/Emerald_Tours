<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;
    //
    // protected $fillable = ['name','no_of_days','no_of_nights','featured'];
    protected $table = "packages";

    public function packageCategory(){
        return $this->belongsTo('App\PackageCategory','category_id','category_id');
    }
}
