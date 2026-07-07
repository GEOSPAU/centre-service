<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Guide;
use App\Models\MessageType;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'guides' => Guide::all(),
            'messages' => MessageType::orderBy('num_message')->get(),
            'compte' => User::where('role', 'agent')->first(),
        ]);
    }

    // COMPTE
    public function updateCompte(Request $request)
    {
        $request->validate([
            'login' => 'required|string',
            'password' => 'required|string|min:6',
        ]);
        $agent = User::where('role', 'agent')->first();
        $agent->update([
            'login' => $request->login,
            'password' => Hash::make($request->password),
        ]);
        return back()->with('success', 'Compte mis à jour avec succès.');
    }

    // GUIDES
    public function createGuide(Request $request)
    {
        $request->validate([
            'titre' => 'required|string',
            'nom_outil' => 'required|string',
            'contenu' => 'required|string',
        ]);
        Guide::create($request->all());
        return back()->with('success', 'Guide créé avec succès.');
    }

    public function updateGuide(Request $request, $id)
    {
        $request->validate([
            'titre' => 'required|string',
            'nom_outil' => 'required|string',
            'contenu' => 'required|string',
        ]);
        Guide::findOrFail($id)->update($request->all());
        return back()->with('success', 'Guide modifié avec succès.');
    }

    public function deleteGuide($id)
    {
        Guide::findOrFail($id)->delete();
        return back()->with('success', 'Guide supprimé.');
    }

    // MESSAGES
    public function createMessage(Request $request)
    {
        $request->validate([
            'num_message' => 'required|integer',
            'categorie' => 'required|string',
            'texte_a_ecrire' => 'required|string',
        ]);
        MessageType::create($request->all());
        return back()->with('success', 'Message créé avec succès.');
    }

    public function updateMessage(Request $request, $id)
    {
        $request->validate([
            'num_message' => 'required|integer',
            'categorie' => 'required|string',
            'texte_a_ecrire' => 'required|string',
        ]);
        MessageType::findOrFail($id)->update($request->all());
        return back()->with('success', 'Message modifié avec succès.');
    }

    public function deleteMessage($id)
    {
        MessageType::findOrFail($id)->delete();
        return back()->with('success', 'Message supprimé.');
    }
}