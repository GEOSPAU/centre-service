import { useState } from "react";
import { router } from "@inertiajs/react";

const BLEU = "#1a2b5a";

export default function Messages({ messages }) {
    const [copied, setCopied] = useState(null);
    const [search, setSearch] = useState("");

    const handleCopy = (texte, num) => {
        navigator.clipboard.writeText(texte);
        setCopied(num);
        setTimeout(() => setCopied(null), 2000);
    };

    const filtered = messages.filter(m =>
        m.texte_a_ecrire.toLowerCase().includes(search.toLowerCase()) ||
        m.categorie.toLowerCase().includes(search.toLowerCase()) ||
        m.num_message.toString().includes(search)
    );

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <img src="/images/logo_mtfp.png" alt="Logo MTFP" style={styles.logo} />
            </header>

            <div style={styles.titleBar}>
                <button style={styles.backBtn} onClick={() => router.get('/accueil')}>
                    ← Retour
                </button>
                <h1 style={styles.title}>Messages types</h1>
                <p style={styles.subtitle}>Cliquez sur "Copier" pour copier un message et l'envoyer via WhatsApp.</p>
            </div>

            <div style={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Rechercher par numéro, catégorie ou mot clé..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={styles.searchInput}
                />
            </div>

            <main style={styles.main}>
                {filtered.map(msg => (
                    <div key={msg.id} style={styles.msgCard}>
                        <div style={styles.msgHeader}>
                            <span style={styles.msgNum}>{msg.num_message}</span>
                            <span style={styles.msgCategorie}>{msg.categorie}</span>
                            <button
                                style={{
                                    ...styles.copyBtn,
                                    background: copied === msg.num_message ? "#28a745" : BLEU,
                                }}
                                onClick={() => handleCopy(msg.texte_a_ecrire, msg.num_message)}
                            >
                                {copied === msg.num_message ? "✓ Copié !" : "Copier"}
                            </button>
                        </div>
                        <p style={styles.msgTexte}>{msg.texte_a_ecrire}</p>
                    </div>
                ))}
            </main>

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
    searchBar: {
        padding: "20px 40px 0 40px",
    },
    searchInput: {
        width: "100%",
        padding: "12px 16px",
        border: "2px solid #d0d8ec",
        borderRadius: "8px",
        fontSize: "14px",
        outline: "none",
        boxSizing: "border-box",
    },
    main: {
        flex: 1,
        padding: "20px 40px 40px 40px",
    },
    msgCard: {
        background: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        padding: "16px 20px",
        marginBottom: "12px",
        borderLeft: "4px solid " + BLEU,
    },
    msgHeader: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "10px",
    },
    msgNum: {
        background: BLEU,
        color: "white",
        borderRadius: "50%",
        width: "28px",
        height: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
        fontWeight: "700",
        flexShrink: 0,
    },
    msgCategorie: {
        flex: 1,
        color: BLEU,
        fontWeight: "600",
        fontSize: "13px",
    },
    copyBtn: {
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "6px 16px",
        fontSize: "13px",
        fontWeight: "600",
        cursor: "pointer",
    },
    msgTexte: {
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