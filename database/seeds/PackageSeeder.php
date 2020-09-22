<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('packages')->
        DB::table('package_category')->insert([
            'category_id' => 2,
            'name' => 'Ayurvedic'
        ]);

        DB::table('packages')->insert([
            'name'=> 'SEA AND TEA',
            'category_id' => 2,
            'no_of_days' => 6,
            'no_of_nights' => 5,
            'featured'=> false
        ]);
    }
}
