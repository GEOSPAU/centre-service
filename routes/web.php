<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AgentController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('login');
});

// Authentification
Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('login.post');
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Routes agent
Route::middleware(['auth'])->group(function () {
    Route::get('/accueil', [AgentController::class, 'index'])->name('agent.dashboard');
    Route::get('/guides', [AgentController::class, 'guides'])->name('agent.guides');
    Route::get('/guides/{id}', [AgentController::class, 'showGuide'])->name('agent.guide.show');
    Route::get('/messages', [AgentController::class, 'messages'])->name('agent.messages');
});

// Routes admin
Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::put('/admin/compte', [AdminController::class, 'updateCompte'])->name('admin.compte.update');
    Route::post('/admin/guides', [AdminController::class, 'createGuide'])->name('admin.guide.create');
    Route::put('/admin/guides/{id}', [AdminController::class, 'updateGuide'])->name('admin.guide.update');
    Route::delete('/admin/guides/{id}', [AdminController::class, 'deleteGuide'])->name('admin.guide.delete');
    Route::post('/admin/messages', [AdminController::class, 'createMessage'])->name('admin.message.create');
    Route::put('/admin/messages/{id}', [AdminController::class, 'updateMessage'])->name('admin.message.update');
    Route::delete('/admin/messages/{id}', [AdminController::class, 'deleteMessage'])->name('admin.message.delete');
});