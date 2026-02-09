

export default function Home() {
    return (
        <div className="container">
            <section className="hero card">
                <div className="hero-left">
                    <div className="pill">Renato & Raffaele annunciano il lieto evento</div>
                    <h1 className="h1">Benvenuti sul sito del nostro matrimonio!</h1>
                    <p className="p">
                        È proprio vero, ci sposiamo il
                        <b> 31 Luglio 2026! ❤</b>
                    </p>
                </div>

                <div className="hero-right">
                    <div className="info-box">
                        <div className="info-title">Contatti</div>
                        <ul className="list">
                            <li><span className="k">Nomi:</span>Renato Della Polla e Raffaele Graviero</li>
                            <li><span className="k">Web:</span> <a href="mailto:info@renatoeraffaele.it">https://matrimoniorenatoeraffaele.it</a></li>
                            <li><span className="k">Email:</span> <a href="mailto:info@renatoeraffaele.it">info@renatoeraffaele.it</a></li>
                            <li><span className="k">Paese:</span> Italia</li>
                            <li><span className="k">WhatsApp:</span> usato solo per comunicazioni relative all’evento</li>
                        </ul>
                    </div>

                    <div className="info-box">
                        <div className="info-title">Requisiti tecnici</div>
                        <ul className="list">
                            <li>Il sito è pubblico</li>
                            <li>Il sito non presenta redirect JS / challenge / WAF aggressivo</li>
                            <li>E' possibile consultare la sezione Privacy e quella di Note Legali</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="grid">
                <div className="card">
                    <h2 className="h2">Messaggio da Renato & Raffaele: </h2>
                    <p className="p">
                        È nostro desiderio condividere con voi il nostro giorno speciale.
                        Nell'attesa, abbiamo creato questo spazio web dove troverete
                        tutte le informazioni utili sulla festa che stiamo organizzando.
                        Un abbraccio,
                        Renato e Raffaele.
                    </p>
                </div>

                <div className="card">
                    <h2 className="h2">FAQ rapida</h2>
                    <ul className="list">
                        <li><span className="k">Perché esiste questa pagina?</span> Per annunciare il matrimonio e il ricevimento di nozze di Renato Della Polla e Raffaele Graviero, per rendere fruibili informazioni su di esso per gli invitati al ricevimento</li>
                        <li><span className="k">Riguarda un evento privato?</span> Sì. Tutto il sito riguarda la festa di nozze di Renato e Raffaele.</li>
                        <li><span className="k">L'evento è a scopo di lucro?</span> No, l'evento e l'utilizzo di whatsapp non verranno dedicati a scopi di lucro, nè a potenziale raccolta fondi, ma servirà solo per dare informazioni di tipo logistico, organizzativo e riguardo le varie modalità in cui gli invitati potranno richiedere i link e i dati bancari per la lista di nozze.</li>
                        <li><span className="k">Perchè il sito utilizza Whatsapp Business API?</span> Per inviare informazioni agli invitati sotto loro esplicita richiesta e autorizzazione consapevole.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
