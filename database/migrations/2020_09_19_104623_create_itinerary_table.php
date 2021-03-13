<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItineraryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('itinerary', function (Blueprint $table) {
            $table->bigIncrements('itinerary_id');
            // $table->string('day_range_desc')->comment('days range description');
            // $table->string('heading')->comment('heading of the itinerary');
            $table->text('description')->comment('description of the itinerary');
            $table->text('features')->comment('features of the itinerary');
            $table->bigInteger('package_id')->unsigned()->comment('id of the related package');
            $table->timestamps();
            $table->softDeletes();

            $table->unique(['itinerary_id', 'package_id']);
            $table->foreign('package_id')->references('package_id')->on('packages')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('itinerary');
    }
}
