"use client";

import { useEffect, useId, useMemo, useState } from "react";
import {
  ArrowDown,
  Baby,
  Building2,
  Clock,
  Globe,
  HeartHandshake,
  HeartPulse,
  Home,
  Info,
  MapPinCheckInside,
  Menu,
  Navigation,
  Phone,
  PhoneCall,
  Plane,
  PlusCircle,
  Shield,
  ShieldCheck,
  Signpost,
  Stethoscope,
  Truck,
  UserCheck,
  Users,
  X,
} from "lucide-react";

function Icon({ name, size = 18, style, className }) {
  const icons = useMemo(
    () => ({
      "plus-circle": PlusCircle,
      clock: Clock,
      "shield-check": ShieldCheck,
      truck: Truck,
      stethoscope: Stethoscope,
      "phone-call": PhoneCall,
      info: Info,
      "heart-pulse": HeartPulse,
      "building-2": Building2,
      "map-pin-check-inside": MapPinCheckInside,
      shield: Shield,
      "heart-handshake": HeartHandshake,
      users: Users,
      signpost: Signpost,
      globe: Globe,
      navigation: Navigation,
      plane: Plane,
      "user-check": UserCheck,
      baby: Baby,
      home: Home,
      phone: Phone,
      x: X,
    }),
    []
  );

  const Cmp = icons[name];
  if (!Cmp) return null;
  return <Cmp size={size} style={style} className={className} />;
}

const NAV_ITEMS = [
  "A UNIMED",
  "NOSSAS UNIDADES",
  "SEJA CLIENTE",
  "ATENDIMENTO",
  "ANS",
  "PESQUISA DE SATISFAÇÃO",
];

function UnimedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="unimed-site-header">
      {/* Accessibility bar — hidden on mobile */}
      <div className="unimed-access-bar">
        <div className="unimed-access-inner">
          <div className="unimed-access-links">
            <a href="#conteudo" className="unimed-access-link">
              <span className="unimed-access-num">1</span>
              Ir para o conteúdo
            </a>
            <a href="#menu" className="unimed-access-link">
              <span className="unimed-access-num">2</span>
              Ir para o menu
            </a>
            <a href="#busca" className="unimed-access-link">
              <span className="unimed-access-num">3</span>
              Ir para a busca
            </a>
          </div>
          <div className="unimed-access-controls">
            <button className="unimed-access-btn" title="Alto contraste">
              <span className="unimed-access-ctrl-icon">◑</span>
              Alto-contraste
            </button>
            <button className="unimed-access-btn" title="Aumentar fonte">
              <span className="unimed-access-ctrl-icon">A+</span>
              Aumentar fonte
            </button>
            <button className="unimed-access-btn" title="Diminuir fonte">
              <span className="unimed-access-ctrl-icon">A-</span>
              Diminuir fonte
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="unimed-navbar" id="menu">
        <div className="unimed-navbar-inner">
          <a href="https://unimedfortaleza.com.br" className="unimed-logo-link" aria-label="Unimed Fortaleza — página inicial">
            <img src="/assets/logo_unimed-fortaleza-01.png" alt="Unimed Fortaleza" style={{ height: 42 }} />
          </a>

          <nav className="unimed-nav" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => (
              <button key={item} className="unimed-nav-item">
                {item}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </nav>

          <div className="unimed-navbar-actions" id="busca">
            <a href="https://unimedfortaleza.com.br/comprar-plano" className="unimed-btn-buy">
              COMPRAR PLANO
            </a>
            <a href="https://unimedfortaleza.com.br/cooperado" className="unimed-btn-outline unimed-desktop-only">
              COOPERADO
            </a>
            <a href="https://unimedfortaleza.com.br/minha-unimed" className="unimed-btn-outline unimed-desktop-only">
              MINHA UNIMED
            </a>
            <button className="unimed-btn-search unimed-desktop-only" aria-label="Buscar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <button
              className="unimed-hamburger"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {mobileMenuOpen && (
        <div className="unimed-mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <nav className="unimed-mobile-nav">
            {NAV_ITEMS.map((item) => (
              <button key={item} className="unimed-mobile-nav-item" onClick={closeMenu}>
                {item}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </nav>
          <div className="unimed-mobile-actions">
            <a
              href="https://unimedfortaleza.com.br/comprar-plano"
              className="unimed-btn-buy"
              style={{ display: "flex", justifyContent: "center" }}
              onClick={closeMenu}
            >
              COMPRAR PLANO
            </a>
            <a
              href="https://unimedfortaleza.com.br/cooperado"
              className="unimed-btn-outline"
              style={{ display: "flex", justifyContent: "center" }}
              onClick={closeMenu}
            >
              COOPERADO
            </a>
            <a
              href="https://unimedfortaleza.com.br/minha-unimed"
              className="unimed-btn-outline"
              style={{ display: "flex", justifyContent: "center" }}
              onClick={closeMenu}
            >
              MINHA UNIMED
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function ScrollHint({ show, onClick }) {
  const uid = useId();
  if (!show) return null;

  const pathId = `scrollTextPath-${uid}`;

  return (
    <button
      type="button"
      className="scroll-hint"
      onClick={onClick}
      aria-label="Role para baixo"
      title="Role para baixo"
    >
      <svg className="scroll-hint-ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id={pathId} d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" />
        </defs>
        <text className="scroll-hint-text">
          <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
            UNIMED FORTALEZA • UNIMED FORTALEZA •
          </textPath>
        </text>
      </svg>
      <span className="scroll-hint-center" aria-hidden="true">
        <ArrowDown size={18} />
      </span>
    </button>
  );
}

const _HERO_SVG = `
<svg viewBox="0 0 600 680" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;min-height:600px;display:block">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a4a2a"/>
      <stop offset="100%" style="stop-color:#0a2015"/>
    </linearGradient>
    <linearGradient id="skinGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#E8B896"/>
      <stop offset="100%" style="stop-color:#D4956A"/>
    </linearGradient>
    <linearGradient id="skinGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#C8845A"/>
      <stop offset="100%" style="stop-color:#B06840"/>
    </linearGradient>
    <linearGradient id="uniformGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#00995D"/>
      <stop offset="100%" style="stop-color:#005A2B"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" style="stop-color:rgba(93,204,138,0.2)"/>
      <stop offset="100%" style="stop-color:rgba(0,0,0,0)"/>
    </radialGradient>
  </defs>
  <rect width="600" height="680" fill="url(#bgGrad)"/>
  <ellipse cx="300" cy="280" rx="280" ry="260" fill="url(#glow)"/>
  <ellipse cx="300" cy="650" rx="240" ry="22" fill="rgba(0,0,0,0.3)"/>

  <rect x="380" y="510" width="28" height="120" rx="12" fill="#08484c"/>
  <rect x="416" y="510" width="28" height="120" rx="12" fill="#152e1a"/>
  <ellipse cx="394" cy="632" rx="20" ry="8" fill="#0a0a0a"/>
  <ellipse cx="430" cy="632" rx="20" ry="8" fill="#0a0a0a"/>
  <path d="M365 370 Q368 350 400 345 Q432 350 435 370 L445 520 H355 Z" fill="url(#uniformGrad)"/>
  <rect x="394" y="385" width="12" height="30" rx="3" fill="rgba(255,255,255,0.9)"/>
  <rect x="387" y="393" width="26" height="12" rx="3" fill="rgba(255,255,255,0.9)"/>
  <path d="M388 345 Q400 360 412 345" stroke="white" stroke-width="2" fill="none"/>
  <path d="M365 380 Q340 420 330 470" stroke="url(#uniformGrad)" stroke-width="30" stroke-linecap="round" fill="none"/>
  <path d="M435 380 Q462 410 470 440" stroke="url(#uniformGrad)" stroke-width="30" stroke-linecap="round" fill="none"/>
  <rect x="450" y="420" width="52" height="42" rx="8" fill="#e8e8e8"/>
  <rect x="450" y="420" width="52" height="42" rx="8" fill="none" stroke="#ccc" stroke-width="1.5"/>
  <rect x="470" y="430" width="12" height="22" rx="2" fill="var(--accent)" opacity="0.8"/>
  <rect x="464" y="436" width="24" height="10" rx="2" fill="var(--accent)" opacity="0.8"/>
  <ellipse cx="328" cy="474" rx="14" ry="12" fill="url(#skinGrad2)"/>
  <ellipse cx="470" cy="444" rx="14" ry="12" fill="url(#skinGrad2)"/>
  <rect x="392" y="320" width="16" height="28" rx="7" fill="url(#skinGrad2)"/>
  <ellipse cx="400" cy="300" rx="38" ry="42" fill="url(#skinGrad2)"/>
  <ellipse cx="400" cy="268" rx="38" ry="20" fill="#1a0a00"/>
  <path d="M435 270 Q450 280 448 310 Q445 320 438 315 Q442 295 430 285 Z" fill="#1a0a00"/>
  <ellipse cx="387" cy="300" rx="5" ry="4.5" fill="#2a1a10"/>
  <ellipse cx="413" cy="300" rx="5" ry="4.5" fill="#2a1a10"/>
  <ellipse cx="388" cy="299" rx="1.5" ry="1.5" fill="white"/>
  <ellipse cx="414" cy="299" rx="1.5" ry="1.5" fill="white"/>
  <path d="M392 314 Q400 320 408 314" stroke="#8a4a2a" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M362 290 Q363 252 400 248 Q437 252 438 290 Z" fill="url(#uniformGrad)"/>
  <rect x="360" y="285" width="80" height="8" rx="4" fill="var(--green-dark,#005A2B)" opacity="0.8"/>

  <rect x="230" y="510" width="30" height="122" rx="13" fill="#08484c"/>
  <rect x="268" y="515" width="30" height="117" rx="13" fill="#152e1a"/>
  <ellipse cx="245" cy="634" rx="22" ry="9" fill="#0a0a0a"/>
  <ellipse cx="283" cy="634" rx="22" ry="9" fill="#0a0a0a"/>
  <path d="M210 365 Q215 340 260 334 Q305 340 310 365 L320 520 H200 Z" fill="#009948"/>
  <rect x="210" y="365" width="18" height="80" rx="5" fill="rgba(255,255,255,0.15)" transform="rotate(-5 210 365)"/>
  <rect x="254" y="375" width="12" height="30" rx="3" fill="rgba(255,255,255,0.95)"/>
  <rect x="247" y="383" width="26" height="12" rx="3" fill="rgba(255,255,255,0.95)"/>
  <path d="M210 375 Q175 430 165 490" stroke="#009948" stroke-width="32" stroke-linecap="round" fill="none"/>
  <path d="M310 375 Q338 415 350 455" stroke="#009948" stroke-width="32" stroke-linecap="round" fill="none"/>
  <ellipse cx="164" cy="494" rx="16" ry="13" fill="url(#skinGrad1)"/>
  <ellipse cx="350" cy="458" rx="16" ry="13" fill="url(#skinGrad1)"/>
  <rect x="253" y="304" width="18" height="32" rx="8" fill="url(#skinGrad1)"/>
  <ellipse cx="262" cy="280" rx="42" ry="46" fill="url(#skinGrad1)"/>
  <path d="M222 268 Q223 234 262 230 Q301 234 302 268 Q290 250 262 248 Q234 250 222 268 Z" fill="#1a0a05"/>
  <ellipse cx="262" cy="308" rx="28" ry="8" fill="rgba(80,40,10,0.18)"/>
  <ellipse cx="248" cy="276" rx="5.5" ry="5" fill="#1a0a05"/>
  <ellipse cx="276" cy="276" rx="5.5" ry="5" fill="#1a0a05"/>
  <ellipse cx="249" cy="275" rx="2" ry="2" fill="white"/>
  <ellipse cx="277" cy="275" rx="2" ry="2" fill="white"/>
  <path d="M242 267 Q248 263 255 266" stroke="#1a0a05" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M270 266 Q276 263 282 267" stroke="#1a0a05" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M254 296 Q262 300 270 296" stroke="#b07050" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M220 270 Q220 228 262 224 Q304 228 304 270 Z" fill="#005A2B"/>
  <rect x="218" y="264" width="88" height="9" rx="4.5" fill="#003d1e"/>
  <rect x="222" y="270" width="80" height="4" rx="2" fill="rgba(93,204,138,0.4)"/>

  <rect x="490" y="480" width="22" height="110" rx="10" fill="#c8d4c0"/>
  <rect x="516" y="488" width="22" height="102" rx="10" fill="#b8c4b0"/>
  <ellipse cx="501" cy="591" rx="18" ry="7" fill="#2a2a2a"/>
  <ellipse cx="527" cy="591" rx="18" ry="7" fill="#2a2a2a"/>
  <path d="M478 360 Q480 342 504 337 Q528 342 530 360 L536 490 H472 Z" fill="#c8d4e0"/>
  <path d="M530 370 Q545 390 555 405" stroke="#c8d4e0" stroke-width="24" stroke-linecap="round" fill="none"/>
  <rect x="497" y="312" width="14" height="26" rx="6" fill="url(#skinGrad1)"/>
  <ellipse cx="504" cy="293" rx="32" ry="36" fill="url(#skinGrad1)"/>
  <path d="M473 287 Q474 256 504 252 Q534 256 535 287 Q524 265 504 263 Q484 265 473 287 Z" fill="#5a3010"/>
  <ellipse cx="494" cy="293" rx="4" ry="4" fill="#2a1a10"/>
  <ellipse cx="514" cy="293" rx="4" ry="4" fill="#2a1a10"/>
  <path d="M497 308 Q504 313 511 308" stroke="#9a5a3a" stroke-width="1.8" fill="none" stroke-linecap="round"/>

  <rect x="20" y="560" width="160" height="88" rx="10" fill="#007034" opacity="0.85"/>
  <rect x="20" y="560" width="160" height="88" rx="10" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
  <rect x="30" y="570" width="60" height="36" rx="5" fill="rgba(200,230,255,0.3)"/>
  <rect x="108" y="578" width="10" height="26" rx="2" fill="rgba(255,255,255,0.9)"/>
  <rect x="102" y="586" width="22" height="10" rx="2" fill="rgba(255,255,255,0.9)"/>
  <text x="108" y="632" font-family="var(--font-unimed-sans),sans-serif" font-size="9" fill="rgba(255,255,255,0.8)" font-weight="700">UNIMED URGENTE</text>
  <ellipse cx="155" cy="560" rx="10" ry="6" fill="#ff4444" opacity="0.9"/>

  <path d="M540 0 L600 0 L600 200 Z" fill="rgba(93,204,138,0.06)"/>
  <path d="M480 0 L600 0 L600 120 Z" fill="rgba(93,204,138,0.04)"/>
</svg>
`;


export default function Page() {
  const [tweaksOpen, setTweaksOpen] = useState(false);
  const [heroTheme, setHeroTheme] = useState("floresta");
  const [cardsStyle, setCardsStyle] = useState("border");
  const [activeAnchor, setActiveAnchor] = useState(null);

  useEffect(() => {
    const onMessage = (e) => {
      if (e?.data?.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e?.data?.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", onMessage);

    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: "__edit_mode_available" }, "*");
      }
    } catch {
      // ignore cross-origin parent
    }

    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    const ids = ["unimed-urgente", "area-protegida", "aeromedico"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveAnchor(entry.target.id);
        });
      },
      { rootMargin: "-48px 0px -50% 0px", threshold: 0 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const closeTweaks = () => {
    setTweaksOpen(false);
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*");
      }
    } catch {
      // ignore
    }
  };

  const setHero = (theme) => {
    const themes = {
      floresta: { c1: "#08484c", c2: "#0a2015" },
      escuro: { c1: "#003020", c2: "#001a0c" },
      verdeVivo: { c1: "#005A2B", c2: "#00995D" },
    };
    const t = themes[theme] ?? themes.floresta;

    setHeroTheme(theme);
    document.documentElement.style.setProperty("--green-deep", t.c1);
    const heroEl = document.querySelector(".hero");
    if (heroEl) heroEl.style.background = t.c1;
  };

  const setCards = (style) => {
    setCardsStyle(style);
    document.querySelectorAll(".mini-card").forEach((c) => {
      if (style === "shadow") {
        c.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        c.style.borderColor = "transparent";
      } else if (style === "flat") {
        c.style.boxShadow = "none";
        c.style.borderColor = "transparent";
        c.style.background = "var(--green-light)";
      } else {
        c.style.boxShadow = "none";
        c.style.borderColor = "var(--border)";
        c.style.background = "#fff";
      }
    });
  };

  const scrollToFirstSection = () => {
    const el = document.getElementById("unimed-urgente");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <UnimedHeader />

      <nav className="anchor-nav">
        <div className="container">
          <div className="anchor-nav-inner">
            <a
              href="#unimed-urgente"
              className={activeAnchor === "unimed-urgente" ? "active" : ""}
            >
              Unimed Urgente
            </a>
            <a
              href="#aeromedico"
              className={activeAnchor === "aeromedico" ? "active" : ""}
            >
              Aeromédico
            </a>
            <a
              href="#area-protegida"
              className={activeAnchor === "area-protegida" ? "active" : ""}
            >
              Área Protegida
            </a>
          </div>
        </div>
      </nav>

      <div className="hero-boundary">
        <section className="hero hero--ref" aria-label="Apresentação">
          <div className="hero-left">
            <p className="hero-top-note">
              Atendimento pré-hospitalar com remoção terrestre e aérea inter-hospitalar.
            </p>

            <div className="hero-bottom-group">
              <h1 className="hero-title-ref">
                Agilidade
                <br />
                quando a vida 
                <br />
                mais precisa
              </h1>

              <div className="hero-cta hero-cta-ref">
                <a href="#unimed-urgente" className="hero-btn hero-btn-primary">
                  Adicionar ao meu plano
                </a>
                <a
                  href="#unimed-urgente"
                  className="hero-btn hero-btn-secondary"
                  onClick={(e) => { e.preventDefault(); scrollToFirstSection(); }}
                >
                  Conhecer Serviços
                </a>
              </div>

              <div className="hero-image-mobile" aria-hidden="true">
                <img src="/assets/hero-photo.png" alt="" />
              </div>

              <div className="hero-social-proof" aria-label="Usuários que já fazem parte">
                <div className="hero-avatars" aria-hidden="true">
                  <span className="hero-avatar">
                    <img src="/assets/avatar-1.png" alt="" />
                  </span>
                  <span className="hero-avatar">
                    <img src="/assets/avatar-2-v2.png" alt="" />
                  </span>
                  <span className="hero-avatar">
                    <img src="/assets/avatar-3-new.png" alt="" />
                  </span>
                  <span className="hero-avatar">
                    <img src="/assets/avatar-4-novo.png" alt="" />
                  </span>
                </div>
                <p className="hero-social-proof-text">
                  <strong>100.000</strong> usuários já fazem parte e contam com atendimento pré-hospitalar e remoção terrestre.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-right" aria-hidden="true">
            <div className="hero-media hero-media-ref">
              <div className="hero-photo-frame">
                <img className="hero-photo" src="/assets/hero-photo.png" alt="" />

                <div className="hero-info-card">
                  <div className="hero-info-thumb" aria-hidden="true">
                    <Icon name="heart-pulse" size={18} />
                  </div>
                  <div className="hero-info-text">
                    <strong>Atendimento rápido no centro de saúde</strong>
                    <span>
                      Atendimento rápido no centro de saúde, geralmente em até 24 horas. Profissionais de saúde
                      licenciados e experientes.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollHint show={true} onClick={scrollToFirstSection} />
      </div>

      <section className="trust" aria-label="Resumo de benefícios">
        <div className="container">
          <div className="trust-inner">
            <h2 className="trust-title">
              Confie na Unimed para apoiar sua jornada rumo à saúde e bem-estar que você merece
            </h2>

            <div className="trust-floats" aria-hidden="true">
              <span className="trust-float tf-1">
                <img src="/assets/trust-1.png" alt="" />
              </span>
              <span className="trust-float tf-2">
                <img src="/assets/trust-2.png" alt="" />
              </span>
              <span className="trust-float tf-3">
                <img src="/assets/trust-3.png" alt="" />
              </span>
            </div>

            <div className="trust-metrics" role="list" aria-label="Indicadores e diferenciais">
              <div className="trust-metric" role="listitem">
                <div className="tm-icon" aria-hidden="true">
                  <Icon name="shield-check" size={18} />
                </div>
                <div className="tm-text">
                  <strong>99%</strong>
                  <span>
                    de satisfação com o atendimento, refletindo agilidade, cuidado e segurança
                    na sua remoção.
                  </span>
                </div>
              </div>
              <div className="trust-metric" role="listitem">
                <div className="tm-icon" aria-hidden="true">
                  <Icon name="users" size={18} />
                </div>
                <div className="tm-text">
                  <strong>100.000+</strong>
                  <span>
                    usuários já fazem parte e contam com atendimento pré-hospitalar e
                    remoção terrestre.
                  </span>
                </div>
              </div>
              <div className="trust-metric" role="listitem">
                <div className="tm-icon" aria-hidden="true">
                  <Icon name="clock" size={18} />
                </div>
                <div className="tm-text">
                  <strong>24h de suporte</strong>
                  <span>
                    Com uma central preparada e uma equipe técnica especializada.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="unimed-urgente">
        <div className="container">
          <div className="split split-service">
            <div className="split-service__top">
              <div className="label-tag">Serviço 01</div>
              <h2 style={{ marginBottom: 16 }}>
                Unimed Urgente: Segurança e Agilidade quando cada segundo conta.
              </h2>
              <p className="intro-text">
                Com mais de 30 anos de liderança em remoção terrestre, a Unimed Urgente une
                tecnologia de ponta e humanização para oferecer o melhor atendimento pré-hospitalar.
              </p>
            </div>

            <div className="fig-wrap col-img">
              <div className="fig-main" style={{ height: 520 }}>
                <img
                  src="/assets/Gemini_Generated_Image_kbpv54kbpv54kbpv.png"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "95% center", display: "block", transform: "scale(1.25)", transformOrigin: "left center" }}
                />
              </div>
              <div className="fig-badge" style={{ bottom: -18, right: 24 }}>
                <div className="fb-icon">
                  <Icon name="heart-pulse" size={18} />
                </div>
                <div>
                  <strong>UTI Móvel</strong>
                  <span>Equipada para alta complexidade</span>
                </div>
              </div>
            </div>

            <div className="split-service__bottom">
              <div style={{ marginTop: 32 }}>
                <div className="feature-row">
                  <div className="fr-icon">
                    <Icon name="clock" size={20} />
                  </div>
                  <div className="fr-text">
                    <strong>Atendimento 24h</strong>
                    <p>Cobertura terrestre em toda a região urbana de Fortaleza.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="fr-icon">
                    <Icon name="truck" size={20} />
                  </div>
                  <div className="fr-text">
                    <strong>UTIs Móveis Modernas</strong>
                    <p>Veículos equipados com padrão de segurança e tecnologia avançada.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="fr-icon">
                    <Icon name="stethoscope" size={20} />
                  </div>
                  <div className="fr-text">
                    <strong>Equipe Especializada</strong>
                    <p>Médicos e enfermeiros altamente qualificados em medicina aeroespacial.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="fr-icon">
                    <Icon name="phone-call" size={20} />
                  </div>
                  <div className="fr-text">
                    <strong>Orientações por Telefone</strong>
                    <p>Suporte médico imediato durante toda a ocorrência.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://unimedfortaleza.com.br/minha-unimed/cliente/opcionais"
                className="btn-green"
                style={{ width: "100%", justifyContent: "center", marginTop: 32 }}
              >
                <Icon name="building-2" size={15} />
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="aeromedico">
        <div className="container">
          <div className="split reverse split-service">
            <div className="split-service__top">
              <div className="label-tag">Serviço 02</div>
              <h2 style={{ marginBottom: 16 }}>
                Aeromédico Unimed: A distância não é obstáculo para o melhor cuidado.
              </h2>
              <p className="intro-text">
                Transporte inter-hospitalar de alta complexidade, unindo agilidade aérea a suporte médico completo para garantir segurança absoluta.
              </p>
            </div>

            <div className="fig-wrap col-img">
              <div className="fig-main" style={{ height: 560 }}>
                <img
                  src="/assets/Gemini_Generated_Image_c9cl6rc9cl6rc9cl.png"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block", transform: "scale(1.15)", transformOrigin: "center center" }}
                />
              </div>
              <div className="fig-badge" style={{ bottom: -18, left: 24 }}>
                <div className="fb-icon">
                  <Icon name="globe" size={18} />
                </div>
                <div>
                  <strong>Cobertura nacional</strong>
                  <span>Aeronaves com tecnologia de ponta</span>
                </div>
              </div>
            </div>

            <div className="split-service__bottom">
              <div style={{ marginTop: 32 }}>
                <div className="feature-row">
                  <div className="fr-icon">
                    <Icon name="globe" size={20} />
                  </div>
                  <div className="fr-text">
                    <strong>Atendimento para todos os estados do Brasil</strong>
                    <p>Disponível 7 dias por semana em todo o território brasileiro.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="fr-icon">
                    <Icon name="plane" size={20} />
                  </div>
                  <div className="fr-text">
                    <strong>UTI Aérea de Ponta</strong>
                    <p>Aeronaves com modernos recursos tecnológicos para suporte à vida.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="fr-icon">
                    <Icon name="user-check" size={20} />
                  </div>
                  <div className="fr-text">
                    <strong>Equipe Especializada</strong>
                    <p>Médicos e enfermeiros altamente qualificados em medicina aeroespacial.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="fr-icon">
                    <Icon name="baby" size={20} />
                  </div>
                  <div className="fr-text">
                    <strong>Referência Neonatal e Pediátrica</strong>
                    <p>Expertise no transporte seguro de recém-nascidos e crianças.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <div className="fr-icon">
                    <Icon name="navigation" size={20} />
                  </div>
                  <div className="fr-text">
                    <strong>Serviço de Repatriamento</strong>
                    <p>Transferência para sua rede de origem — retorno ao local de domicílio para continuidade do tratamento.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://unimedfortaleza.com.br/minha-unimed/cliente/opcionais"
                className="btn-green"
                style={{ marginTop: 32, display: "flex", width: "100%", justifyContent: "center" }}
              >
                <Icon name="plus-circle" size={15} />
                Contratar
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="section" id="area-protegida">
        <div className="container">
          <div className="split split-service">
            <div className="split-service__top">
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div className="label-tag white">Serviço 03</div>
                <div className="tag-pill">
                  <Icon name="building-2" size={13} />
                  Disponível para empresas não clientes Unimed
                </div>
              </div>
              <h2 className="white" style={{ marginBottom: 16 }}>
                Área Protegida: Segurança para o seu negócio.
              </h2>
              <p className="intro-text white">
                Transforme seu estabelecimento em um ambiente de cuidado absoluto. Com
                o Área Protegida, a Unimed Fortaleza estende sua excelência médica para
                dentro da sua empresa, oferecendo assistência pré-hospitalar de urgência e
                emergência a todos os presentes, garantindo tranquilidade para quem circula.
              </p>
            </div>

            <div className="fig-wrap col-img">
              <div className="fig-main" style={{ height: 500 }}>
                <img
                  src="/assets/area-protegia.png"
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div
                className="fig-badge"
                style={{
                  bottom: -18,
                  right: 24,
                  background: "rgba(20,40,25,0.95)",
                  border: "1px solid rgba(93,204,138,0.3)",
                }}
              >
                <div className="fb-icon" style={{ background: "rgba(93,204,138,0.15)", color: "var(--accent)" }}>
                  <Icon name="building-2" size={18} />
                </div>
                <div>
                  <strong style={{ color: "#fff" }}>Para empresas</strong>
                  <span style={{ color: "rgba(255,255,255,0.6)" }}>Não exige plano ativo</span>
                </div>
              </div>
            </div>

            <div className="split-service__bottom">
              <div style={{ marginTop: 32 }}>
                <div className="feature-row feature-row--dark">
                  <div className="fr-icon dark">
                    <Icon name="map-pin-check-inside" size={20} />
                  </div>
                  <div className="fr-text white">
                    <strong>Cobertura no Local</strong>
                    <p>Atendimento ágil sem exigência de plano ativo.</p>
                  </div>
                </div>
                <div className="feature-row feature-row--dark">
                  <div className="fr-icon dark">
                    <Icon name="shield" size={20} />
                  </div>
                  <div className="fr-text white">
                    <strong>Redução de Riscos</strong>
                    <p>Suporte imediato em acidentes ou mal súbitos.</p>
                  </div>
                </div>
                <div className="feature-row feature-row--dark">
                  <div className="fr-icon dark">
                    <Icon name="truck" size={20} />
                  </div>
                  <div className="fr-text white">
                    <strong>Remoção para a Emergência Certa</strong>
                    <p>Garantimos o transporte para a unidade hospitalar adequada ao perfil do paciente (Privada ou SUS).</p>
                  </div>
                </div>
                <div className="feature-row feature-row--dark">
                  <div className="fr-icon dark">
                    <Icon name="signpost" size={20} />
                  </div>
                  <div className="fr-text white">
                    <strong>Sinalização Área Protegida</strong>
                    <p>Espaço da empresa sinalizado, transmitindo segurança e cuidado, e colaboradores treinados em como acionar o atendimento.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://unimedfortaleza.com.br/minha-unimed/cliente/opcionais"
                className="btn-green"
                style={{ width: "100%", justifyContent: "center", marginTop: 32 }}
              >
                <Icon name="building-2" size={15} />
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="como-solicitar">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div className="label-tag" style={{ display: "block", textAlign: "center" }}>
              Como acionar
            </div>
            <h2 style={{ fontSize: "clamp(20px,2.2vw,28px)", maxWidth: 440, margin: "0 auto" }}>
              Precisou acionar? A agilidade é a nossa prioridade.
            </h2>
          </div>

          <div className="solicitar-grid">
            <div className="sol-block">
              <h3>
                <span className="dot" />
                Unimed Urgente
              </h3>
              <div className="steps">
                <div className="step">
                  <div className="step-n">1</div>
                  <div className="step-c">
                    <strong>Ligue para o 0800</strong>
                    <span>Tenha em mãos seu CPF ou cartão Unimed.</span>
                    <div className="phone-tag">
                      <Icon name="phone" size={15} />
                      0800 275 0123
                    </div>
                  </div>
                </div>
                <div className="step">
                  <div className="step-n">2</div>
                  <div className="step-c">
                    <strong>Informe a ocorrência</strong>
                    <span>Nossa central registra e aciona a equipe mais próxima.</span>
                  </div>
                </div>
                <div className="step">
                  <div className="step-n">3</div>
                  <div className="step-c">
                    <strong>Aguarde o atendimento</strong>
                    <span>Equipe chega com todo equipamento necessário.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sol-block">
              <h3>
                <span className="dot" style={{ background: "#5DCC8A" }} />
                Aeromédico
              </h3>
              <div className="steps">
                <div className="step">
                  <div className="step-n">1</div>
                  <div className="step-c">
                    <strong>Entre em contato com a Central</strong>
                    <span>Informe dados do paciente e hospital de origem.</span>
                    <div className="phone-tag">
                      <Icon name="phone" size={15} />
                      0800 275 0123
                    </div>
                  </div>
                </div>
                <div className="step">
                  <div className="step-n">2</div>
                  <div className="step-c">
                    <strong>Avaliação médica remota</strong>
                    <span>Equipe avalia o caso e autoriza o transporte aeromédico.</span>
                  </div>
                </div>
                <div className="step">
                  <div className="step-n">3</div>
                  <div className="step-c">
                    <strong>Transporte com UTI aérea</strong>
                    <span>Aeronave equipada realiza a remoção com segurança total.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sol-block">
              <h3>
                <span className="dot" style={{ background: "#00995D" }} />
                Área Protegida
              </h3>
              <div className="steps">
                <div className="step">
                  <div className="step-n">1</div>
                  <div className="step-c">
                    <strong>Acione pelo número exclusivo</strong>
                    <span>Informe o nome da empresa e o local da ocorrência.</span>
                    <div className="phone-tag">
                      <Icon name="phone" size={15} />
                      0800 275 0123
                    </div>
                  </div>
                </div>
                <div className="step">
                  <div className="step-n">2</div>
                  <div className="step-c">
                    <strong>Central registra e despacha</strong>
                    <span>A equipe mais próxima é acionada imediatamente para o endereço.</span>
                  </div>
                </div>
                <div className="step">
                  <div className="step-n">3</div>
                  <div className="step-c">
                    <strong>Atendimento no local</strong>
                    <span>Profissionais prestam socorro e realizam remoção para a unidade adequada, se necessário.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-final">
        <div className="container">
          <div className="cta-final-inner">
            <h2>
              Sua proteção começa com <em>uma decisão</em>.
            </h2>
            <p>
              Adicione ao seu plano hoje e garanta atendimento ágil para você e sua família. Reduza riscos e tenha suporte quando mais precisar.
            </p>
            <a
              href="https://unimedfortaleza.com.br/minha-unimed/cliente/opcionais"
              className="cta-final-btn"
            >
              Adicionar ao meu plano
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-bar">
        <div className="footer-bar-shield">
          <ShieldCheck size={22} strokeWidth={1.8} />
        </div>

        <div className="footer-bar-inner">
          {/* Center — copyright & address */}
          <div className="footer-bar-center">
            <p className="footer-bar-copy">
              Unimed Fortaleza | 2026 - © Todos os direitos reservados
            </p>
            <p className="footer-bar-address">
              Av. Santos Dumont, 949 – CEP: 60.150-160 – Fortaleza – Ceará | CNPJ: 05.868.278/0001-07
            </p>
            <p className="footer-bar-links">
              <a href="#">Privacidade</a>
              <span>|</span>
              <a href="#">Termo de Uso</a>
              <span>|</span>
              <a href="#">Canal de Ética</a>
            </p>
          </div>

          {/* Right — social icons */}
          <div className="footer-bar-social">
            <a href="#" aria-label="Facebook" className="footer-social-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="footer-social-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="footer-social-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="footer-social-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="footer-social-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </footer>

      <div id="tweaks-panel" className={tweaksOpen ? "open" : ""}>
        <div className="tw-head">
          <h4>Tweaks</h4>
          <button onClick={closeTweaks} aria-label="Fechar">
            <Icon name="x" size={16} />
          </button>
        </div>

        <div className="tw-row">
          <label>Cor primária</label>
          <input
            type="color"
            defaultValue="#00995D"
            onInput={(e) => {
              const value = e.currentTarget.value;
              document.documentElement.style.setProperty("--green", value);
              try {
                if (window.parent && window.parent !== window) {
                  window.parent.postMessage(
                    { type: "__edit_mode_set_keys", edits: { primaryColor: value } },
                    "*"
                  );
                }
              } catch {
                // ignore
              }
            }}
          />
        </div>

        <div className="tw-row">
          <label>Fundo do hero</label>
          <div className="tw-tog">
            <button
              className={heroTheme === "floresta" ? "on" : ""}
              onClick={() => setHero("floresta")}
            >
              Floresta
            </button>
            <button
              className={heroTheme === "escuro" ? "on" : ""}
              onClick={() => setHero("escuro")}
            >
              Escuro
            </button>
            <button
              className={heroTheme === "verdeVivo" ? "on" : ""}
              onClick={() => setHero("verdeVivo")}
            >
              Verde vivo
            </button>
          </div>
        </div>

        <div className="tw-row">
          <label>Estilo dos cards</label>
          <div className="tw-tog">
            <button className={cardsStyle === "border" ? "on" : ""} onClick={() => setCards("border")}>
              Borda
            </button>
            <button className={cardsStyle === "shadow" ? "on" : ""} onClick={() => setCards("shadow")}>
              Sombra
            </button>
            <button className={cardsStyle === "flat" ? "on" : ""} onClick={() => setCards("flat")}>
              Flat
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

