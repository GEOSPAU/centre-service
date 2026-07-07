<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Guide;
use App\Models\MessageType;

class AgentController extends Controller
{
    public function index()
    {
        return Inertia::render('Agent/Dashboard');
    }

    public function guides()
    {
        return Inertia::render('Agent/Guides', [
            'guides' => Guide::all(),
        ]);
    }

    public function showGuide($id)
    {
        $guide = Guide::findOrFail($id);
        return Inertia::render('Agent/GuideDetail', [
            'guide' => $guide,
        ]);
    }

    public function messages()
    {
        return Inertia::render('Agent/Messages', [
            'messages' => MessageType::orderBy('num_message')->get(),
        ]);
    }
}