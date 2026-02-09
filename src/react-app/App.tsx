import { Navigate, Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function TopNav() {
	const loc = useLocation();
	const isActive = (path: string) => loc.pathname === path;

	return (
		<header className="nav">
			<div className="nav-inner">
				<div className="brand">
					<div className="brand-dot" aria-hidden />
					<div>
						<div className="brand-title">Il Matrimonio di Renato &amp; Raffaele</div>
						<div className="brand-sub">Benvenuti sul sito del nostro matrimonio</div>
					</div>
				</div>

				<nav className="nav-links" aria-label="Navigazione">
					<Link className={`nav-link ${isActive("/") ? "active" : ""}`} to="/">
						Home
					</Link>
					<Link className={`nav-link ${isActive("/privacy") ? "active" : ""}`} to="/privacy">
						Privacy
					</Link>
					<Link className={`nav-link ${isActive("/terms") ? "active" : ""}`} to="/terms">
						Note legali
					</Link>
				</nav>
			</div>
		</header>
	);
}

export default function App() {
	return (
		<div className="app">
			<TopNav />

			<main className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/terms" element={<Terms />} />

					{/* fallback */}
					<Route path="/privacy.html" element={<Navigate to="/privacy" replace />} />
					<Route path="/terms.html" element={<Navigate to="/terms" replace />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>

			<footer className="footer">
				<div className="footer-inner">
					<div>© {new Date().getFullYear()} Renato &amp; Raffaele - All rights reserved</div>
					<div className="footer-note">
						Matrimonio di Renato & Raffaele 31 Luglio 2026
					</div>
				</div>
			</footer>
		</div>
	);
}
