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
        DB::table('users')->insert([
            'name' => 'shohan perera',
            'email' => 'shone@emerladtours.co',
            'password' => '$2y$10$Y.WJULHLeULz23kzZdv3Zub6fbbCZ30Tx.1ugd9ov6CnQgLJSTXKK',
            'remember_token' => false
        ]);

        DB::table('package_category')->insert([
            'category_id' => 2,
            'name' => 'Ayurvedic'
        ]);

        DB::table('packages')->insert([
            'name' => 'SEA AND TEA',
            'category_id' => 2,
            'no_of_days' => 6,
            'no_of_nights' => 5,
            'featured' => false
        ]);
    }
}
