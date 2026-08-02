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
            'password' => Hash::make('admin202'),
            'role' => 'admin',
        ]);

        // Compte agent partagé
        User::create([
            'login' => 'CDS-MBFP',
            'password' => Hash::make('mbfp2026'),
            'role' => 'agent',
        ]);

        // Seeders guides et messages
        $this->call([
            GuideSeeder::class,
            MessageSeeder::class,
        ]);
    }
}