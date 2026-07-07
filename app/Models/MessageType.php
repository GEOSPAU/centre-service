<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MessageType extends Model
{
    protected $fillable = [
        'num_message',
        'categorie',
        'texte_a_ecrire',
    ];
}