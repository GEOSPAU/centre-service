import { router } from "@inertiajs/react";

const BLEU = "#1a2b5a";

export default function Dashboard() {
    return (
        <div style={styles.body}>
            {/* HEADER */}
            <header style={styles.header}>
                <img src="/images/logo_mtfp.png" alt="Logo MTFP" style={styles.logo} />
                <button
                    style={styles.logoutBtn}
                    onClick={() => router.post('/logout')}
                >
                    Se déconnecter
                </button>
            </header>

            {/* TITRE */}
            <div style={styles.titleBar}>
                <h1 style={styles.title}>Centre de Service des Fonctionnaires</h1>
                <p style={styles.subtitle}>Bienvenue ! Choisissez une section pour commencer.</p>
            </div>

            {/* MENU PRINCIPAL */}
            <main style={styles.main}>
                {/* CARTE GUIDES */}
                <div style={styles.card} onClick={() => router.get('/guides')}>
                    <div style={styles.cardIcon}>📋</div>
                    <h2 style={styles.cardTitle}>Guides d'utilisation</h2>
                    <p style={styles.cardDesc}>
                        Consultez les guides d'utilisation des outils du centre :
                        WECHE Administration, Consultation du Niveau de Traitement et SIGRH.
                    </p>
                    <button style={styles.cardBtn}>Consulter les guides</button>
                </div>

                {/* CARTE MESSAGES */}
                <div style={styles.card} onClick={() => router.get('/messages')}>
                    <div style={styles.cardIcon}>💬</div>
                    <h2 style={styles.cardTitle}>Messages types</h2>
                    <p style={styles.cardDesc}>
                        Accédez aux messages prédéfinis à envoyer aux usagers
                        via WhatsApp selon leur préoccupation.
                    </p>
                    <button style={styles.cardBtn}>Consulter les messages</button>
                </div>
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
        justifyContent: "space-between",
        boxSizing: "border-box",
    },
    logo: {
        height: "90px",
        width: "auto",
        display: "block",
    },
    logoutBtn: {
        background: "transparent",
        color: "white",
        border: "1px solid rgba(255,255,255,0.5)",
        borderRadius: "6px",
        padding: "8px 16px",
        fontSize: "13px",
        cursor: "pointer",
        fontWeight: "600",
    },
    titleBar: {
        background: "white",
        padding: "20px 40px",
        borderBottom: "3px solid " + BLEU,
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
        width: "320px",
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
        fontSize: "18px",
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