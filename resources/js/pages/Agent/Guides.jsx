import { router } from "@inertiajs/react";

const BLEU = "#1a2b5a";

export default function Guides({ guides }) {
    return (
        <div style={styles.body}>
            {/* HEADER */}
            <header style={styles.header}>
                <img src="/images/logo_mtfp.png" alt="Logo MTFP" style={styles.logo} />
            </header>

            {/* TITRE */}
            <div style={styles.titleBar}>
                <button style={styles.backBtn} onClick={() => router.get('/accueil')}>
                    ← Retour
                </button>
                <h1 style={styles.title}>Guides d'utilisation des outils</h1>
                <p style={styles.subtitle}>Sélectionnez un outil pour voir son guide d'utilisation.</p>
            </div>

            {/* LISTE DES GUIDES */}
            <main style={styles.main}>
                {guides.map(guide => (
                    <div
                        key={guide.id}
                        style={styles.card}
                        onClick={() => router.get(`/guides/${guide.id}`)}
                    >
                        <div style={styles.cardIcon}>📋</div>
                        <h2 style={styles.cardTitle}>{guide.nom_outil}</h2>
                        <p style={styles.cardDesc}>{guide.titre}</p>
                        <button style={styles.cardBtn}>Voir le guide</button>
                    </div>
                ))}
            </main>

            {/* FOOTER */}
            <footer style={styles.footer}>
                © 2026 — Centre de Service des Fonctionnaires | Ministère du Travail et de la Fonction Publique — République du Bénin
            </footer>
        </div>
    );
}

const styles = {
    body: {
        fontFamily: "'Segoe UI', Arial, sans-serif",
        background: "#f0f2f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: 0,
    },
    header: {
        background: BLEU,
        width: "100%",
        padding: "15px 40px",
        display: "flex",
        alignItems: "center",
    },
    logo: {
        height: "90px",
        width: "auto",
        display: "block",
    },
    titleBar: {
        background: "white",
        padding: "20px 40px",
        borderBottom: "3px solid " + BLEU,
    },
    backBtn: {
        background: "transparent",
        color: BLEU,
        border: "none",
        fontSize: "14px",
        cursor: "pointer",
        fontWeight: "600",
        marginBottom: "8px",
        padding: 0,
    },
    title: {
        color: BLEU,
        fontSize: "22px",
        fontWeight: "700",
        margin: 0,
    },
    subtitle: {
        color: "#555",
        fontSize: "14px",
        margin: "6px 0 0 0",
    },
    main: {
        flex: 1,
        display: "flex",
        gap: "30px",
        padding: "40px",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    card: {
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
        width: "300px",
        padding: "36px 30px",
        cursor: "pointer",
        textAlign: "center",
        borderTop: "4px solid " + BLEU,
    },
    cardIcon: {
        fontSize: "48px",
        marginBottom: "16px",
    },
    cardTitle: {
        color: BLEU,
        fontSize: "17px",
        fontWeight: "700",
        marginBottom: "12px",
    },
    cardDesc: {
        color: "#555",
        fontSize: "14px",
        lineHeight: "1.6",
        marginBottom: "24px",
    },
    cardBtn: {
        background: BLEU,
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "10px 24px",
        fontSize: "14px",
        fontWeight: "700",
        cursor: "pointer",
    },
    footer: {
        background: BLEU,
        color: "#a8bce0",
        textAlign: "center",
        padding: "12px",
        fontSize: "12px",
    },
};