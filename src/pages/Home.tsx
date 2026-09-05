import "../styles/Home.css";
import { useState,useEffect } from "react";
import taskQuestImage from "../assets/taskQuest.png";
import fitBuddyImage from "../assets/fitbuddy.png";

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
            <p className="heroSub">SYSTEM ENGINEER / PORTFOLIO 2026</p>
            <h1>
              Think,
              <br />
              Build,
              <br />
              <span>and Improve.</span>
            </h1>

            <p className="heroDescription">
              利用者の課題を考え、技術で形にする。
              <br />
              システム全体を考えられるエンジニアを目指しています。
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
                実装だけでなく、
                <br />
                システム全体を考える。
              </h3>

              <p>
                名古屋工学院専門学校 高度情報学科で、
                システム開発・ネットワーク・データベースなどのIT技術を学んでいます。
              </p>

              <p>
                約2年間の長期インターンではWeb開発を中心に、
                設計・データベース・実装・運用・保守まで経験しました。
                現在はJava / Spring Bootを使用したバックエンド開発にも取り組んでいます。
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
              <h3>Tools</h3>
              <p>Git / GitHub / WordPress / Postman</p>
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
                <img src={taskQuestImage} alt="Task Quest" />
              </div>

              <div className="workInfo">
                <div>
                  <p>01 / PERSONAL DEVELOPMENT</p>
                    <h3>Task Quest</h3>
                    <span className="workTech">
                      React / Spring Boot / MySQL
                    </span>
                </div>
                <span className="workArrow">↗</span>
              </div>
            </article>

            <article className="workCard">
             <div className="workImage">
              <img src={fitBuddyImage} alt="FitBuddy" />
            </div>

              <div className="workInfo">
                <div>
                  <p>02 / TEAM DEVELOPMENT</p>
                    <h3>FitBuddy</h3>
                    <span className="workTech">
                      React Native / TypeScript / Expo
                    </span>
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
              <p>2022.11</p>
              <div>
                <h3>ITパスポート 取得</h3>
                <span>資格</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2023.10</p>
              <div>
                <h3>北澤ゆうり様 HP制作</h3>
                <span>Webサイト制作</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2024.05 — 2026.03</p>
              <div>
                <h3>長期インターン</h3>
                <span>Web開発 / 設計 / DB / 実装 / 運用・保守</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2025.01</p>
              <div>
                <h3>基本情報技術者試験 取得</h3>
                <span>資格</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2026.05 — 現在</p>
              <div>
                <h3>個人開発「Task Quest」</h3>
                <span>React / TypeScript / Java / Spring Boot / MySQL</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2026.07</p>
              <div>
                <h3>Matsuriba 参加</h3>
                <span>ハッカソン / チーム開発</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2026.07</p>
              <div>
                <h3>Java SE Bronze 取得</h3>
                <span>資格</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2026.08</p>
              <div>
                <h3>The Hack 2026 出場</h3>
                <span>ハッカソン</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2026.08</p>
              <div>
                <h3>色合わせミニゲーム 制作</h3>
                <span>React / TypeScript</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2026.09</p>
              <div>
                <h3>ポートフォリオサイト 制作</h3>
                <span>React / TypeScript</span>
              </div>
            </div>

            <div className="experienceItem">
              <p>2026.09</p>
              <div>
                <h3>HACK STAGE 3 参加予定</h3>
                <span>ハッカソン / チーム開発</span>
              </div>
            </div>
            <div className="experienceItem">
              <p>2026.10</p>
              <div>
                <h3>技育CAMP ハッカソン 参加予定</h3>
                <span>ハッカソン / チーム開発</span>
              </div>
            </div>
            <div className="experienceItem">
            <p>2026.11</p>
            <div>
              <h3>AIピッチコンテスト 応募予定</h3>
              <span>AI / ピッチコンテスト</span>
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