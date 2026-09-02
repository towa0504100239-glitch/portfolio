import "../styles/Home.css";
import { useState,useEffect } from "react";

const Home = () => {
const [menuOpen, setMenuOpen] = useState(false);
const [showBackToTop, setShowBackToTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const distanceFromBottom =
      document.documentElement.scrollHeight -
      (window.scrollY + window.innerHeight);

    setShowBackToTop(distanceFromBottom <= 800);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
const [introVisible, setIntroVisible] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIntroVisible(false);
  }, 3500);

  return () => clearTimeout(timer);
}, []);
  return (
    <div className="home">
        {introVisible && (
        <div className="intro">
            <div className="introText">
            <span>Think.</span>
            <span>Build.</span>
            <span>Refine.</span>
            </div>
        </div>
        )}
      <header className="header">
        <a href="#top" className="logo">
          SERIKA OSHIMA
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#works">Works</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
            className={`menuButton ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
            >
            <span />
            <span />
        </button>
        <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
                About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
            </a>
            <a href="#works" onClick={() => setMenuOpen(false)}>
                Works
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
            </a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="heroText">
            <p className="heroSub">PORTFOLIO / 2026</p>

            <h1>
              Design,
              <br />
              Develop,
              <br />
              <span>and Create.</span>
            </h1>

            <p className="heroDescription">
              ユーザーにとって使いやすいものを考え、
              <br />
              デザインから開発まで形にしていきます。
            </p>

            <a href="#works" className="viewWorks">
              View Works
              <span>↓</span>
            </a>
          </div>

          <div className="heroVisual">
            <div className="heroImage">
              <span>IMAGE</span>
            </div>
            <p className="imageCaption">WEB / APPLICATION / DESIGN</p>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="sectionHeading">
            <p>01</p>
            <h2>About</h2>
          </div>

          <div className="aboutContent">
            <div className="aboutImage">
              <span>PHOTO</span>
            </div>

            <div className="aboutText">
              <p className="smallTitle">WHO I AM</p>

              <h3>
                考えて、試して、
                <br />
                より良い形へ。
              </h3>

              <p>
                名古屋工学院専門学校で情報技術を学びながら、
                Web・アプリケーション開発に取り組んでいます。
              </p>

              <p>
                フロントエンドを中心に、バックエンドや設計にも領域を広げ、
                ユーザーの課題を技術で解決できるエンジニアを目指しています。
              </p>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="sectionHeading">
            <p>02</p>
            <h2>Skills</h2>
          </div>

          <div className="skillGrid">
            <div className="skillCard">
              <span>01</span>
              <h3>Frontend</h3>
              <p>React / TypeScript / JavaScript / HTML / CSS</p>
            </div>

            <div className="skillCard">
              <span>02</span>
              <h3>Backend</h3>
              <p>Java / Spring Boot / PHP / Laravel / MySQL</p>
            </div>

            <div className="skillCard">
              <span>03</span>
              <h3>Others</h3>
              <p>Git / GitHub / WordPress / Illustrator / Photoshop</p>
            </div>
          </div>
        </section>

        <section className="works section" id="works">
          <div className="sectionHeading worksHeading">
            <div>
              <p>03</p>
              <h2>Works</h2>
            </div>

            <a href="/works" className="moreLink">
              More Works →
            </a>
          </div>

          <div className="workGrid">
            <article className="workCard">
              <div className="workImage">
                <span>PROJECT IMAGE</span>
              </div>

              <div className="workInfo">
                <div>
                  <p>01 / WEB APPLICATION</p>
                  <h3>Task Quest</h3>
                </div>
                <span className="workArrow">↗</span>
              </div>
            </article>

            <article className="workCard">
              <div className="workImage">
                <span>PROJECT IMAGE</span>
              </div>

              <div className="workInfo">
                <div>
                  <p>02 / MOBILE APPLICATION</p>
                  <h3>FitBuddy</h3>
                </div>
                <span className="workArrow">↗</span>
              </div>
            </article>
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="sectionHeading">
            <p>04</p>
            <h2>Experience</h2>
          </div>

          <div className="experienceList">
            <div className="experienceItem">
              <p>2024 — PRESENT</p>
              <div>
                <h3>Web Development</h3>
                <span>Long-term Internship</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2026</p>
              <div>
                <h3>Hackathon</h3>
                <span>Application Development</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2026</p>
              <div>
                <h3>Personal Development</h3>
                <span>React / Spring Boot</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="contactNumber">05 / CONTACT</p>

          <h2>
            Thank you for
            <br />
            <span>viewing.</span>
          </h2>

          <p>ご覧いただきありがとうございました。</p>

          <div className="contactLinks">
            <a
                href="https://github.com/towa0504100239-glitch"
                target="_blank"
                rel="noopener noreferrer"
                className="contactButton"
            >
                GitHub
                <span>↗</span>
            </a>

            <a
                href="https://x.com/towa_engn?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="contactButton"
            >
                X
                <span>↗</span>
            </a>
        </div>
        </section>
      </main>

      <footer>
        <p>© 2026 SERIKA OSHIMA</p>
      </footer>
      <a
        href="#top"
        className={`backToTop ${showBackToTop ? "show" : ""}`}
        aria-label="ページトップへ戻る"
        >
        ↑
        </a>
    </div>
  );
};

export default Home;