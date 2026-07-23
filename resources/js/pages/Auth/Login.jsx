import { useState } from "react";
import { router, usePage } from "@inertiajs/react";

const BLEU = "#1a2b5a";

export default function Login() {
    const errors = usePage().props.errors || {};
    const [form, setForm] = useState({ login: "", password: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setLoading(true);
        router.post("/login", form, {
            onFinish: () => setLoading(false),
        });
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <img src="/images/logo_mtfp.png" alt="Logo MTFP" style={styles.logo} />
            </header>

            <main style={styles.main}>
                <div style={styles.card}>

                    {errors.login && (
                        <div style={styles.errorBox}>
                            ⚠️ {errors.login}
                        </div>
                    )}

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Login</label>
                        <input
                            type="text"
                            name="login"
                            value={form.login}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        style={styles.btnConnect}
                    >
                        {loading ? "CONNEXION..." : "SE CONNECTER"}
                    </button>
                </div>
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
    main: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
    },
    card: {
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        width: "100%",
        maxWidth: "420px",
        padding: "40px 36px",
    },
    errorBox: {
        background: "#fff3f3",
        border: "1px solid #f5c6cb",
        color: "#dc3545",
        borderRadius: "6px",
        padding: "12px 16px",
        fontSize: "14px",
        marginBottom: "20px",
        textAlign: "center",
    },
    formGroup: {
        marginBottom: "20px",
    },
    label: {
        display: "block",
        fontSize: "15px",
        color: "#222",
        marginBottom: "6px",
    },
    input: {
        width: "100%",
        padding: "10px 12px",
        border: "1.5px solid #999",
        borderRadius: "4px",
        fontSize: "15px",
        color: "#333",
        background: "white",
        outline: "none",
        boxSizing: "border-box",
    },
    btnConnect: {
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "6px",
        fontSize: "14px",
        fontWeight: "700",
        cursor: "pointer",
        letterSpacing: "0.5px",
        background: BLEU,
        color: "white",
        marginTop: "8px",
    },
    footer: {
        background: BLEU,
        color: "#a8bce0",
        textAlign: "center",
        padding: "12px",
        fontSize: "12px",
    },
};