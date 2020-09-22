<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTourMapTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tour_map',function(Blueprint $table){
            $table->bigIncrements('map_id');
            $table->unsignedBigInteger('package_id');
            $table->decimal('start_point');
            $table->decimal('end_point');
            $table->timestamps();

            $table->foreign('package_id')->references('package_id')->on('packages');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tour_map');
    }
}
