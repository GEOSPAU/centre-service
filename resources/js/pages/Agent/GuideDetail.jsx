import { router } from "@inertiajs/react";

const BLEU = "#1a2b5a";

export default function GuideDetail({ guide }) {
    const etapes = guide.contenu.split('|').map(e => e.trim()).filter(e => e !== '');

    return (
        <div style={styles.body}>
            {/* HEADER */}
            <header style={styles.header}>
                <img src="/images/logo_mtfp.png" alt="Logo MTFP" style={styles.logo} />
            </header>

            {/* TITRE */}
            <div style={styles.titleBar}>
                <button style={styles.backBtn} onClick={() => router.get('/guides')}>
                    ← Retour aux guides
                </button>
                <h1 style={styles.title}>📋 {guide.nom_outil}</h1>
                <p style={styles.subtitle}>Suivez les étapes ci-dessous pour utiliser cet outil.</p>
            </div>

            {/* ÉTAPES */}
            <main style={styles.main}>
                {etapes.map((etape, index) => {
                    const parts = etape.split(':');
                    const titre = parts[0].trim();
                    const contenu = parts.slice(1).join(':').trim();
                    return (
                        <div key={index} style={styles.etapeCard}>
                            <div style={styles.etapeNum}>{index + 1}</div>
                            <div style={styles.etapeContent}>
                                <h3 style={styles.etapeTitre}>{titre}</h3>
                                {contenu && <p style={styles.etapeTexte}>{contenu}</p>}
                            </div>
                        </div>
                    );
                })}
            </main>

            {/* FOOTER */}
            <footer style={styles.footer}>
                © 2026 — Centre de Service des Fonctionnaires | Ministère de l'Économie et des Finances chargé du budget et de la Fonction Publique — République du Bénin
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
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        width: "100%",
        boxSizing: "border-box",
    },
    etapeCard: {
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        padding: "20px 24px",
        marginBottom: "16px",
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        borderLeft: "4px solid " + BLEU,
    },
    etapeNum: {
        background: BLEU,
        color: "white",
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px",
        fontWeight: "700",
        flexShrink: 0,
    },
    etapeContent: {
        flex: 1,
    },
    etapeTitre: {
        color: BLEU,
        fontSize: "15px",
        fontWeight: "700",
        margin: "0 0 6px 0",
    },
    etapeTexte: {
        color: "#444",
        fontSize: "14px",
        lineHeight: "1.6",
        margin: 0,
    },
    footer: {
        background: BLEU,
        color: "#a8bce0",
        textAlign: "center",
        padding: "12px",
        fontSize: "12px",
    },
};