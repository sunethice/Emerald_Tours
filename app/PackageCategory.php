<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PackageCategory extends Model
{
    use HasFactory;
    protected $table = "package_category";

    // public function package(){
    //     return $this->hasOne('App\Package');
    // }

    public function packages(){
        return $this->hasMany('App\Package');
    }
}
