<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MessageType;

class MessageSeeder extends Seeder
{
    public function run(): void
    {
        $messages = [
            [1, 'Présentation', 'Bonjour monsieur/ madame, veuillez-vous présenter en précisant votre nom, prénoms, matricule, contact, e-mail, et posez votre préoccupation. Merci'],
            [2, 'Acte non disponible', 'L\'acte que vous demandez n\'est pas disponible pour le moment sur notre plateforme. Diligence sera faite pour votre satisfaction. Pendant ce temps, nous vous prions de vous rendre à votre ministère pour avoir copie. Merci'],
            [3, 'Acte en attente', 'Je ne saurais vous le dire exactement. Veuillez patienter et relancez-nous de temps à autre afin que nous puissions suivre l\'évolution. Merci.'],
            [4, 'Message vocal', 'Bonjour Mme. /Mr. Nous ne traitons pas les messages vocaux, cet espace étant réservé à un usage administratif. Nous vous prions de bien vouloir formuler votre préoccupation par écrit.'],
            [5, 'Appel', 'Bonjour Mme. /Mr. Cet espace étant exclusivement dédié aux échanges administratifs, nous ne sommes pas habilités à y recevoir des appels. Nous vous prions de bien vouloir formuler votre préoccupation par écrit. Merci.'],
            [6, 'Double matricule', 'Bonsoir madame/monsieur. Puisqu\'un agent de l\'État ne saurait être titulaire de deux matricules, nous vous prions de bien vouloir demander à l\'intéressé de nous adresser personnellement son message. Merci'],
            [7, 'Acte non numérisé', 'Votre acte est paru, mais pas encore numérisé, patienter quelques jours encore pour en avoir copie.'],
            [8, 'Réorientation DGFP', 'Bonjour Mme/M. Veuillez vous rapprocher du Ministère de la Fonction Publique. Merci.'],
            [9, 'Commission', 'La commission dont vous parlez est plutôt interne à votre ministère. C\'est après cette commission que la grande qui sort les actes siège. Tel n\'est pas le cas chez vous.'],
            [10, 'Dossier rejeté', 'Bonsoir Mme/ M. votre situation de carrière en est rejetée pour motif : dossier non déposé. Nous vous suggérons de vous rendre au DPAF de votre ministère pour le dépôt de votre dossier.'],
            [11, 'Dossier rejeté A3-8', 'Bonjour Mme/M. Votre situation de carrière en A3-8 a été rejetée. Veuillez reconstituer votre dossier en y ajoutant votre attestation de présence au poste et déposer le tout au DPAF de votre ministère. Merci.'],
            [12, 'Fausse information', 'Bonsoir M/Mme. Cette information qui circule concernant la connexion sur cette plateforme est fausse. Merci.'],
            [13, 'Acte en cours', 'Bonjour Mme/M. Votre acte est en cours de traitement. Veuillez patienter.'],
            [14, 'Aucune traçabilité', 'Bonjour M./Mme. Nous n\'avons trouvé aucune traçabilité à propos de votre dossier sur notre plateforme, prière vous rapprocher du DPAF de votre ministère pour en savoir plus. Merci.'],
            [15, 'Acte en validation', 'Bonjour Mme/M. Votre acte est en cours de validation. Veuillez patienter. Merci.'],
            [16, 'Réorientation Trésor', 'Veuillez-vous rendre au Trésor pour avoir satisfaction. Merci.'],
            [17, 'Numéro de contact', 'Veuillez appeler le 21306654 pour qu\'on vous aide. Merci.'],
            [18, 'Références disponibles', 'Seules les références de l\'acte que vous demandez, sont disponibles. Merci.'],
            [19, 'Acte non disponible plateforme', 'Les actes que vous demandez, ne sont pas disponibles sur la plateforme. Merci de vous rapprocher de votre ministère pour en savoir plus.'],
            [20, 'Contrat non disponible', 'Bonjour monsieur/madame. Votre contrat/acte n\'est pas encore disponible sur la plateforme. Veuillez patienter.'],
            [21, 'Archives ministère', 'Veuillez-vous rendre aux archives de votre ministère pour prendre copie.'],
            [22, 'Présentation complète', 'Présentation complète s\'il vous plaît.'],
            [23, 'Lien démarches', 'https://demarchesmtfp.gouv.bj'],
            [24, 'Lien WECHE', 'https://weche.fpbenin.net/administration/details-agent/915644'],
            [25, 'Main d\'Oeuvre', 'Veuillez-vous rapprocher de la Main d\'Œuvre à AKPAKPA derrière la SOBEBRA.'],
            [26, 'Contrat non disponible 2', 'Bonjour monsieur/madame. Votre contrat/acte n\'est pas encore disponible sur la plateforme. Merci de Patienter.'],
            [27, 'Réorientation DPAF', 'Veuillez-vous rapprocher du DPAF de votre ministère.'],
            [28, 'Lien Trésor', 'www.tresorbenin.gouv.bj'],
            [29, 'Constituer dossier', 'Veuillez constituer le dossier et déposer. Merci.'],
            [30, 'Compte réinitialisé', 'Votre compte a été réinitialisé. Veuillez vous inscrire avec un nouveau mot de passe et e-mail valide.'],
            [31, 'Attestation au poste', 'Veuillez constituer le dossier en ajoutant à cela votre attestation au poste que vous déposez à votre ministère pour son acheminement à la Fonction Publique. Merci.'],
            [32, 'Compte inactif', 'Votre compte étant inactif, je viens de le réinitialiser. A présent, inscrivez-vous en ajoutant votre mail valide et un mot de passe que vous ne pouvez pas oublier. Une fois terminé, notifiez-le-nous. Merci.'],
            [33, 'Documents confidentiels', 'Les documents que nous envoyons sont confidentiels et spécifiques à chaque agent de l\'État. Par conséquent, nous ne pouvons vous transmettre des informations qui ne vous sont pas destinées.'],
            [34, 'Compte réinitialisé 2', 'Votre compte a été réinitialisé. Veuillez vous inscrire à nouveau.'],
            [35, 'Formuler plainte', 'Formuler une plainte en y insérant vos coordonnées : matricule, nom, prénoms.'],
            [36, 'Direction départementale', 'Merci de vous rendre à la direction départementale de votre localité pour de plus amples informations.'],
            [37, 'Erreur matricule', 'S\'agit-il réellement de votre matricule ? Ne pourrait-il pas y avoir, par inadvertance, une erreur dans la transcription des chiffres ?'],
            [38, 'Conduite à tenir', 'Veuillez-vous rapprocher du DPAF de votre ministère pour savoir réellement la conduite à tenir. Merci.'],
            [39, 'Documents confidentiels 2', 'Bonsoir madame/monsieur. Les documents que nous envoyons sont confidentiels et spécifiques à chaque agent de l\'État. Par conséquent, nous ne pouvons vous transmettre des informations qui ne vous sont pas destinées. Nous vous prions de bien vouloir demander à l\'intéressé de nous adresser personnellement son message. Merci.'],
            [40, 'Réorientation DGT', 'Nous avons bien accusé réception de votre requête. Toutefois pour une meilleure prise en charge de ladite requête, vous voudrez bien vous rapprocher de la Direction Générale du Travail (DGT) situé en face de la mosquée centrale de ZONGO, ancien immeuble de Libercom. Merci.'],
            [41, 'Réinscription WECHE', 'Nous allons essayer de vous aider en ligne. Êtes-vous disponible actuellement ? Je vous envoie les instructions et on essaye de vous réinscrire. Je viens de réinitialiser votre compte. A présent, vous ouvrez le navigateur CHROME, vous tapez WECHE, vous appuyez sur s\'inscrire. Inscrivez-vous en ajoutant votre mail valide et un mot de passe que vous ne pouvez oublier et remplissez tous les autres champs correctement. Votre numéro de téléphone à saisir doit contenir les huit chiffres, c\'est-à-dire sans le 01. Une fois l\'inscription terminée, revenez nous je vous prie. Votre compte est désormais accessible. Vous pouvez à présent vous connecter.'],
            [42, 'Dossier A3-9 rejeté', 'Bonjour monsieur. Avez-vous déposé votre dossier en A3-9 au DPAF de votre ministère ? Parce qu\'ici sur notre plateforme, votre dossier en A3-9 est rejeté pour motif : SANS DOSSIER. Si c\'est le cas, nous vous suggérons de vous rendre au DPAF de votre ministère pour le dépôt de votre dossier. Mais si votre dossier a été réellement déposé, êtes-vous certain que votre dossier a été validé et transféré vers notre ministère pour le traitement ? Veuillez donc vous rendre au DPAF de votre ministère afin d\'en avoir réellement la certitude. Et veuillez nous envoyer le bordereau d\'envoi certifiant l\'envoi de votre dossier à la fonction publique pour un meilleur suivi. Merci.'],
            [43, 'Grade promotion A3-8', 'Bonjour Mme/Mr. Étant FE, A3-8 est un grade de promotion. Si effectivement vous avez pu déposer votre dossier, nous portons à votre connaissance que la commission au niveau de votre ministère n\'a pu siéger en 2025. Par conséquent nous vous demandons de prendre patience.'],
            [44, 'Grade promotion patience', 'Bonsoir M./Mme, étant FE, A3-8 est un grade de promotion. Si effectivement vous avez pu déposer votre dossier, et que votre nom ne figure pas dans la liste des rejets, nous vous demandons de prendre patience. Merci.'],
            [45, 'Finances agents', 'Bonjour PF. La Fonction Publique n\'est pas habilitée à répondre aux préoccupations liées aux finances des Agents de l\'État. Veuillez bien orienter l\'usager au Budget pour la révision de sa pension ou à la Trésorerie de la Préfecture de son lieu de résidence. Merci.'],
            [46, 'Acte non disponible DPAF', 'L\'acte que vous demandez n\'est pas disponible pour le moment sur notre plateforme. Veuillez vous rendre au DPAF de votre ministère afin d\'avoir une copie. Merci.'],
            [47, 'Faux et usage de faux', 'Vous êtes identifié et serez poursuivi pour faux et usage de faux des informations d\'autrui à caractères personnel. Apprêtez-vous pour répondre de vos actes devant les juridictions compétentes.'],
            [48, 'Acte non disponible actualisation', 'Bonjour M./Mme, l\'acte que vous demandez n\'est disponible sur aucune de nos plateformes. Merci de vous rapprocher du DPAF de votre ministère muni de tous vos actes présents à votre disposition ainsi que votre attestation de présence au poste délivrée par le DPAF pour actualisation.'],
            [49, 'Acte avant dématérialisation', 'Bonsoir M./Mme, veuillez-vous rapprocher du DPAF de votre ministère afin d\'avoir copie car votre acte C1-3 date d\'avant la dématérialisation. Merci.'],
        ];

        foreach ($messages as $msg) {
            MessageType::create([
                'num_message' => $msg[0],
                'categorie' => $msg[1],
                'texte_a_ecrire' => $msg[2],
            ]);
        }
    }
}