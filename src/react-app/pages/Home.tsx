import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
            <section className="hero card">
                <div className="hero-left">
                    <div className="pill">PUBBLICA • Nessun login • Nessun blocco bot</div>
                    <h1 className="h1">Pagina informativa per verifica WhatsApp Business</h1>
                    <p className="p">
                        Questa pagina è collegata a un <b>evento privato</b>. Non è un e-commerce e non promuove servizi al pubblico.
                        È pubblicata solo per consentire la verifica automatica dell’URL da parte di Meta/WhatsApp.
                    </p>

                    <div className="cta-row">
                        <Link className="btn" to="/privacy">Leggi Privacy</Link>
                        <Link className="btn ghost" to="/terms">Leggi Note legali</Link>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="info-box">
                        <div className="info-title">Contatti</div>
                        <ul className="list">
                            <li><span className="k">Email:</span> <a href="mailto:info@renatoeraffaele.it">info@renatoeraffaele.it</a></li>
                            <li><span className="k">Paese:</span> Italia</li>
                            <li><span className="k">WhatsApp:</span> usato solo per comunicazioni relative all’evento</li>
                        </ul>
                    </div>

                    <div className="info-box">
                        <div className="info-title">Requisiti tecnici (anti-blocco)</div>
                        <ul className="list">
                            <li>Accesso pubblico senza password</li>
                            <li>Nessun redirect JS / challenge / WAF aggressivo</li>
                            <li>Privacy e Note legali raggiungibili e 200 OK</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="grid">
                <div className="card">
                    <h2 className="h2">Uso di WhatsApp</h2>
                    <p className="p">
                        Il numero WhatsApp associato è utilizzato esclusivamente per comunicazioni informative relative all’evento
                        (richieste degli invitati, risposte e informazioni logistiche). <b>Nessun marketing</b> e nessuna profilazione.
                    </p>
                </div>

                <div className="card">
                    <h2 className="h2">FAQ rapida</h2>
                    <ul className="list">
                        <li><span className="k">Perché esiste questa pagina?</span> Per permettere a Meta di verificare un URL “reale” e conforme.</li>
                        <li><span className="k">È un evento privato?</span> Sì. Non è una raccolta fondi pubblica e non è un’attività commerciale.</li>
                        <li><span className="k">Posso rimuoverla dopo?</span> Sì, ma meglio lasciarla online finché la verifica è stabile.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
