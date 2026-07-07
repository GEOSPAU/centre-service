<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Compte administrateur
        User::create([
            'login' => 'admin',
            'password' => Hash::make('admin2026'),
            'role' => 'admin',
        ]);

        // Compte agent partagé
        User::create([
            'login' => 'MTFP',
            'password' => Hash::make('FP2026'),
            'role' => 'agent',
        ]);

        // Seeders guides et messages
        $this->call([
            GuideSeeder::class,
            MessageSeeder::class,
        ]);
    }
}