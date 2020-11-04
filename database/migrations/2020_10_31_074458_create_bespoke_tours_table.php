<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBespokeToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bespoketours', function (Blueprint $table) {
            $table->id();
            $table->string('clientname', 50);
            $table->string('email');
            $table->string('country',30);
            $table->string('phone',20);
            $table->string('message',250);
            $table->integer('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bespoketours');
    }
}
