<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->bigIncrements('package_id');
            $table->string('name', 50);
            $table->bigInteger('category_id')->unsigned();
            $table->integer('no_of_days');
            $table->integer('no_of_nights');
            $table->boolean('featured')->default(false);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('category_id')->references('category_id')->on('package_category');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packages');
    }
}
