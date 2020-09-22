<?php

namespace Database\Factories;

use App\Package;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PackageFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Package::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'category_id' => \App\PackageCategory::factory(),
            'no_of_days' => 8,
            'no_of_nights' => 7,
            'featured' => true
        ];
    }
}
