<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('login')->unique();
            $table->string('password');
            $table->enum('role', ['admin', 'agent'])->default('agent');
            $table->date('date_arrivee')->nullable();
            $table->timestamps();
        });

        Schema::create('guides', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->string('nom_outil');
            $table->longText('contenu');
            $table->timestamps();
        });

        Schema::create('message_types', function (Blueprint $table) {
            $table->id();
            $table->integer('num_message');
            $table->string('categorie');
            $table->longText('texte_a_ecrire');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('guides');
        Schema::dropIfExists('message_types');
    }
};