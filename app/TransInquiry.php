<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransInquiry extends Model
{
    use HasFactory;
    protected $table = 'transinquiries';
    protected $fillable = ['clientname', 'email', 'country', 'phone', 'message'];
}
