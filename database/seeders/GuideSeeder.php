<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Guide;

class GuideSeeder extends Seeder
{
    public function run(): void
    {
        Guide::create([
            'titre' => 'Guide WECHE Administration',
            'nom_outil' => 'WECHE Administration',
            'contenu' => 'Étape 1 — Accéder à la section Agents : Après connexion sur la plateforme, cliquer sur l\'onglet "Agents" dans le menu de navigation à gauche. | Étape 2 — Rechercher le matricule : Dans la barre de recherche, saisir le matricule de l\'usager transmis via WhatsApp, puis valider en cliquant sur le bouton "Chercher". | Étape 3 — Vérifier l\'identité : Vérifier que le matricule saisi correspond bien au nom et prénom communiqués par l\'usager. | Étape 4 — Vérifier la disponibilité de l\'acte : Consulter les résultats affichés et vérifier si l\'acte administratif demandé est disponible. | Étape 5a — Si l\'acte est disponible : Cliquer sur l\'icône de fichier pour télécharger et transmettre à l\'usager via WhatsApp. | Étape 5b — Si l\'acte n\'est pas disponible : Passer à la Consultation du Niveau de Traitement ou au SIGRH.',
        ]);

        Guide::create([
            'titre' => 'Guide Consultation du Niveau de Traitement',
            'nom_outil' => 'Consultation du Niveau de Traitement',
            'contenu' => 'Étape 1 — Accéder au module Carrières : Après connexion, cliquer sur le module "Carrières" dans le menu principal. | Étape 2 — Accéder à la consultation : Dans le menu "Information", sélectionner "Consultation Niveau de Traitement Dossier". | Étape 3 — Saisir le matricule : Saisir le matricule de l\'usager puis cliquer sur "Rechercher". | Étape 4 — Vérifier l\'identité : Vérifier que le matricule correspond au nom et prénom de l\'usager. | Étape 5 — Consulter l\'état du dossier : En cours de traitement, Validé, Rejeté ou Non encore traité. | Étape 6 — Informer l\'usager : Communiquer l\'état du dossier à l\'usager via WhatsApp.',
        ]);

        Guide::create([
            'titre' => 'Guide SIGRH Administration',
            'nom_outil' => 'SIGRH Administration',
            'contenu' => 'Partie 1 — Consultation des actes de carrière : Après connexion, cliquer sur "Carrières" puis "Consultations des actes de carrière avec visualisation des actes". Saisir le matricule et vérifier l\'identité. Si l\'acte est disponible, transmettre à la personne compétente. Sinon informer l\'usager. | Partie 2 — Consultation du Bordereau d\'Envoi (BE) : Cliquer sur "Workflow" puis "Consultation BE". Saisir le matricule et rechercher. Si le bordereau est disponible, envoyer à l\'usager : BE : [numéro] Transmis : [date].',
        ]);
    }
}