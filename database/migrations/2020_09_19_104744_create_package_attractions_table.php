<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackageAttractionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('package_attractions',function(Blueprint $table){
            $table->unsignedBigInteger('attractions_id');
            $table->unsignedBigInteger('package_id');
            $table->timestamps();

            $table->foreign('package_id')->references('package_id')->on('packages')->onDelete('cascade');
            $table->foreign('attractions_id')->references('attractions_id')->on('attractions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('package_attractions');
    }
}
