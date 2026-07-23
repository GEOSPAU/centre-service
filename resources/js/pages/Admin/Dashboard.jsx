import { useState } from "react";
import { router, usePage } from "@inertiajs/react";

const BLEU = "#1a2b5a";

export default function AdminDashboard({ guides, messages, compte }) {
    const { props } = usePage();
    const flash = props.flash || {};

    const [activeTab, setActiveTab] = useState("guides");

    // États guides
    const [newGuide, setNewGuide] = useState({ titre: "", nom_outil: "", contenu: "" });
    const [editGuide, setEditGuide] = useState(null);

    // États messages
    const [newMessage, setNewMessage] = useState({ num_message: "", categorie: "", texte_a_ecrire: "" });
    const [editMessage, setEditMessage] = useState(null);

    // État compte
    const [newCompte, setNewCompte] = useState({ login: compte?.login || "", password: "" });

    // GUIDES
    const handleCreateGuide = () => {
        router.post("/admin/guides", newGuide, {
            onSuccess: () => setNewGuide({ titre: "", nom_outil: "", contenu: "" }),
        });
    };

    const handleUpdateGuide = () => {
        router.put(`/admin/guides/${editGuide.id}`, editGuide, {
            onSuccess: () => setEditGuide(null),
        });
    };

    const handleDeleteGuide = (id) => {
        if (confirm("Supprimer ce guide ?")) {
            router.delete(`/admin/guides/${id}`);
        }
    };

    // MESSAGES
    const handleCreateMessage = () => {
        router.post("/admin/messages", newMessage, {
            onSuccess: () => setNewMessage({ num_message: "", categorie: "", texte_a_ecrire: "" }),
        });
    };

    const handleUpdateMessage = () => {
        router.put(`/admin/messages/${editMessage.id}`, editMessage, {
            onSuccess: () => setEditMessage(null),
        });
    };

    const handleDeleteMessage = (id) => {
        if (confirm("Supprimer ce message ?")) {
            router.delete(`/admin/messages/${id}`);
        }
    };

    // COMPTE
    const handleUpdateCompte = () => {
        router.put("/admin/compte", newCompte);
    };

    return (
        <div style={styles.body}>
            {/* HEADER */}
            <header style={styles.header}>
                <img src="/images/logo_mtfp.png" alt="Logo MTFP" style={styles.logo} />
                <div style={styles.headerRight}>
                    <span style={styles.adminBadge}>Administrateur</span>
                    <button style={styles.logoutBtn} onClick={() => router.post('/logout')}>
                        Se déconnecter
                    </button>
                </div>
            </header>

            {/* TITRE */}
            <div style={styles.titleBar}>
                <h1 style={styles.title}>Tableau de bord — Administration</h1>
                <p style={styles.subtitle}>Gérez les guides, les messages types et le compte d'accès.</p>
            </div>

            {/* FLASH */}
            {flash.success && <div style={styles.flashSuccess}>{flash.success}</div>}

            {/* TABS */}
            <div style={styles.tabs}>
                <button style={{ ...styles.tab, ...(activeTab === "guides" ? styles.tabActive : {}) }} onClick={() => setActiveTab("guides")}>
                    📋 Guides ({guides.length})
                </button>
                <button style={{ ...styles.tab, ...(activeTab === "messages" ? styles.tabActive : {}) }} onClick={() => setActiveTab("messages")}>
                    💬 Messages ({messages.length})
                </button>
                <button style={{ ...styles.tab, ...(activeTab === "compte" ? styles.tabActive : {}) }} onClick={() => setActiveTab("compte")}>
                    🔑 Compte d'accès
                </button>
            </div>

            <main style={styles.main}>

                {/* ===== GUIDES ===== */}
                {activeTab === "guides" && (
                    <div>
                        {/* Formulaire ajout */}
                        <div style={styles.formCard}>
                            <h3 style={styles.formTitle}>Ajouter un guide</h3>
                            <input style={styles.input} placeholder="Titre" value={newGuide.titre} onChange={e => setNewGuide({ ...newGuide, titre: e.target.value })} />
                            <input style={styles.input} placeholder="Nom de l'outil" value={newGuide.nom_outil} onChange={e => setNewGuide({ ...newGuide, nom_outil: e.target.value })} />
                            <textarea style={styles.textarea} placeholder="Contenu (séparez les étapes avec |)" rows={4} value={newGuide.contenu} onChange={e => setNewGuide({ ...newGuide, contenu: e.target.value })} />
                            <button style={styles.addBtn} onClick={handleCreateGuide}>+ Ajouter</button>
                        </div>

                        {/* Formulaire modification */}
                        {editGuide && (
                            <div style={{ ...styles.formCard, borderLeft: "4px solid orange" }}>
                                <h3 style={{ ...styles.formTitle, color: "orange" }}>✏️ Modifier le guide</h3>
                                <input style={styles.input} placeholder="Titre" value={editGuide.titre} onChange={e => setEditGuide({ ...editGuide, titre: e.target.value })} />
                                <input style={styles.input} placeholder="Nom de l'outil" value={editGuide.nom_outil} onChange={e => setEditGuide({ ...editGuide, nom_outil: e.target.value })} />
                                <textarea style={styles.textarea} placeholder="Contenu" rows={4} value={editGuide.contenu} onChange={e => setEditGuide({ ...editGuide, contenu: e.target.value })} />
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <button style={styles.addBtn} onClick={handleUpdateGuide}>Enregistrer</button>
                                    <button style={styles.cancelBtn} onClick={() => setEditGuide(null)}>Annuler</button>
                                </div>
                            </div>
                        )}

                        {/* Liste guides */}
                        {guides.map(guide => (
                            <div key={guide.id} style={styles.itemCard}>
                                <div style={styles.itemInfo}>
                                    <strong style={styles.itemTitle}>{guide.nom_outil}</strong>
                                    <span style={styles.itemSub}>{guide.titre}</span>
                                </div>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <button style={styles.editBtn} onClick={() => setEditGuide(guide)}>Modifier</button>
                                    <button style={styles.deleteBtn} onClick={() => handleDeleteGuide(guide.id)}>Supprimer</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ===== MESSAGES ===== */}
                {activeTab === "messages" && (
                    <div>
                        {/* Formulaire ajout */}
                        <div style={styles.formCard}>
                            <h3 style={styles.formTitle}>Ajouter un message type</h3>
                            <input style={styles.input} placeholder="Numéro" type="number" value={newMessage.num_message} onChange={e => setNewMessage({ ...newMessage, num_message: e.target.value })} />
                            <input style={styles.input} placeholder="Catégorie" value={newMessage.categorie} onChange={e => setNewMessage({ ...newMessage, categorie: e.target.value })} />
                            <textarea style={styles.textarea} placeholder="Texte du message" rows={4} value={newMessage.texte_a_ecrire} onChange={e => setNewMessage({ ...newMessage, texte_a_ecrire: e.target.value })} />
                            <button style={styles.addBtn} onClick={handleCreateMessage}>+ Ajouter</button>
                        </div>

                        {/* Formulaire modification */}
                        {editMessage && (
                            <div style={{ ...styles.formCard, borderLeft: "4px solid orange" }}>
                                <h3 style={{ ...styles.formTitle, color: "orange" }}>✏️ Modifier le message</h3>
                                <input style={styles.input} placeholder="Numéro" type="number" value={editMessage.num_message} onChange={e => setEditMessage({ ...editMessage, num_message: e.target.value })} />
                                <input style={styles.input} placeholder="Catégorie" value={editMessage.categorie} onChange={e => setEditMessage({ ...editMessage, categorie: e.target.value })} />
                                <textarea style={styles.textarea} placeholder="Texte" rows={4} value={editMessage.texte_a_ecrire} onChange={e => setEditMessage({ ...editMessage, texte_a_ecrire: e.target.value })} />
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <button style={styles.addBtn} onClick={handleUpdateMessage}>Enregistrer</button>
                                    <button style={styles.cancelBtn} onClick={() => setEditMessage(null)}>Annuler</button>
                                </div>
                            </div>
                        )}

                        {/* Liste messages */}
                        {messages.map(msg => (
                            <div key={msg.id} style={styles.itemCard}>
                                <div style={styles.itemInfo}>
                                    <strong style={styles.itemTitle}>{msg.num_message}. {msg.categorie}</strong>
                                    <span style={styles.itemSub}>{msg.texte_a_ecrire.substring(0, 80)}...</span>
                                </div>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <button style={styles.editBtn} onClick={() => setEditMessage(msg)}>Modifier</button>
                                    <button style={styles.deleteBtn} onClick={() => handleDeleteMessage(msg.id)}>Supprimer</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ===== COMPTE ===== */}
                {activeTab === "compte" && (
                    <div style={styles.formCard}>
                        <h3 style={styles.formTitle}>🔑 Modifier le compte d'accès agent</h3>
                        <p style={styles.formDesc}>Login actuel : <strong>{compte?.login}</strong></p>
                        <label style={styles.label}>Nouveau login</label>
                        <input style={styles.input} placeholder="Login" value={newCompte.login} onChange={e => setNewCompte({ ...newCompte, login: e.target.value })} />
                        <label style={styles.label}>Nouveau mot de passe</label>
                        <input style={styles.input} placeholder="Mot de passe (min 6 caractères)" type="password" value={newCompte.password} onChange={e => setNewCompte({ ...newCompte, password: e.target.value })} />
                        <button style={styles.addBtn} onClick={handleUpdateCompte}>Mettre à jour</button>
                    </div>
                )}

            </main>

            <footer style={styles.footer}>
                © 2026 — Centre de Service des Fonctionnaires | Ministère de l'Économie et des Finances chargé du Budget et de la Fonction Publique — République du Bénin
            </footer>
        </div>
    );
}

const styles = {
    body: { fontFamily: "'Segoe UI', Arial, sans-serif", background: "#f0f2f5", minHeight: "100vh", display: "flex", flexDirection: "column", margin: 0 },
    header: { background: BLEU, width: "100%", padding: "15px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box" },
    logo: { height: "90px", width: "auto", display: "block" },
    headerRight: { display: "flex", alignItems: "center", gap: "16px" },
    adminBadge: { background: "rgba(255,255,255,0.2)", color: "white", padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: "600" },
    logoutBtn: { background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.5)", borderRadius: "6px", padding: "8px 16px", fontSize: "13px", cursor: "pointer" },
    titleBar: { background: "white", padding: "20px 40px", borderBottom: "3px solid " + BLEU },
    title: { color: BLEU, fontSize: "22px", fontWeight: "700", margin: 0 },
    subtitle: { color: "#555", fontSize: "14px", margin: "6px 0 0 0" },
    flashSuccess: { background: "#d4edda", color: "#155724", padding: "12px 40px", fontSize: "14px", borderBottom: "1px solid #c3e6cb" },
    tabs: { display: "flex", background: "white", borderBottom: "1px solid #ddd", padding: "0 40px" },
    tab: { padding: "14px 24px", border: "none", background: "transparent", fontSize: "14px", cursor: "pointer", color: "#555", fontWeight: "600", borderBottom: "3px solid transparent" },
    tabActive: { color: BLEU, borderBottom: "3px solid " + BLEU },
    main: { flex: 1, padding: "30px 40px", maxWidth: "900px", width: "100%", margin: "0 auto", boxSizing: "border-box" },
    formCard: { background: "white", borderRadius: "10px", padding: "24px", marginBottom: "24px", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" },
    formTitle: { color: BLEU, fontSize: "16px", fontWeight: "700", margin: "0 0 16px 0" },
    formDesc: { color: "#666", fontSize: "13px", margin: "0 0 16px 0" },
    label: { display: "block", fontSize: "13px", fontWeight: "600", color: BLEU, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" },
    input: { width: "100%", padding: "10px 14px", border: "1.5px solid #d0d8ec", borderRadius: "6px", fontSize: "14px", marginBottom: "12px", boxSizing: "border-box", outline: "none" },
    textarea: { width: "100%", padding: "10px 14px", border: "1.5px solid #d0d8ec", borderRadius: "6px", fontSize: "14px", marginBottom: "12px", boxSizing: "border-box", outline: "none", resize: "vertical" },
    addBtn: { background: BLEU, color: "white", border: "none", borderRadius: "6px", padding: "10px 24px", fontSize: "14px", fontWeight: "700", cursor: "pointer" },
    cancelBtn: { background: "#888", color: "white", border: "none", borderRadius: "6px", padding: "10px 24px", fontSize: "14px", fontWeight: "700", cursor: "pointer" },
    itemCard: { background: "white", borderRadius: "8px", padding: "16px 20px", marginBottom: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: "4px solid " + BLEU },
    itemInfo: { display: "flex", flexDirection: "column", gap: "4px", flex: 1 },
    itemTitle: { color: BLEU, fontSize: "14px" },
    itemSub: { color: "#666", fontSize: "13px" },
    editBtn: { background: "#f0a500", color: "white", border: "none", borderRadius: "6px", padding: "6px 16px", fontSize: "13px", cursor: "pointer" },
    deleteBtn: { background: "#dc3545", color: "white", border: "none", borderRadius: "6px", padding: "6px 16px", fontSize: "13px", cursor: "pointer" },
    footer: { background: BLEU, color: "#a8bce0", textAlign: "center", padding: "12px", fontSize: "12px" },
};