import "../styles/Works.css";

import { Link } from "react-router-dom";

import taskQuestImage from "../assets/taskQuest.png";
import fitBuddyImage from "../assets/fitbuddy.png";
import colorSelectImage from "../assets/color_select.png";

const Works = () => {
  return (
    <div className="worksPage">
      <header className="worksHeader">
        <Link to="/" className="worksLogo">
          SERIKA OSHIMA
        </Link>

        <Link to="/" className="backHome">
          Home
          <span className="arrowIcon" aria-hidden="true" />
        </Link>
      </header>

      <main>
        <section className="worksHero">
          <p className="worksHeroNumber">03 / WORKS</p>

          <h1>Works</h1>

          <p className="worksHeroDescription">
            これまでに取り組んだ個人開発・
            <br className="worksMobileBreak" />
            チーム開発・制作物を紹介します。
          </p>
        </section>

        <section className="worksList">
          <article className="worksItem">
            <div className="worksItemNumber">
              <span>01</span>
            </div>

            <div className="worksItemContent">
              <div className="worksItemHeader">
                <div>
                  <p className="worksCategory">
                    個人開発 / WEB APPLICATION
                  </p>

                  <h2>Task Quest</h2>

                  <p className="worksCatch">
                    タスク管理 × ゲーム要素
                  </p>
                </div>

                <p className="worksTech">
                  React / TypeScript / Spring Boot / MySQL
                </p>
              </div>

              <div className="worksImage">
                <img
                  src={taskQuestImage}
                  alt="Task Quest"
                />
              </div>

              <div className="worksBottom">
                <p className="worksDescription">
                  タスク管理にゲーム要素を取り入れたWebアプリケーションです。
                  タスクの達成を単なる「消化」ではなく、
                  自分の積み重ねとして実感できるサービスを目指して開発しています。
                </p>

                <Link
                  to="/works/task-quest"
                  className="viewProject"
                >
                  View Project
                  <span className="arrowIcon" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          <article className="worksItem">
            <div className="worksItemNumber">
              <span>02</span>
            </div>

            <div className="worksItemContent">
              <div className="worksItemHeader">
                <div>
                  <p className="worksCategory">
                    ハッカソン / TEAM DEVELOPMENT
                  </p>

                  <h2>FitBuddy</h2>

                  <p className="worksCatch">
                    歩くことをゲームに。
                  </p>
                </div>

                <p className="worksTech">
                  React Native / TypeScript / Expo
                </p>
              </div>

              <div className="worksImage">
                <img
                  src={fitBuddyImage}
                  alt="FitBuddy"
                />
              </div>

              <div className="worksBottom">
                <p className="worksDescription">
                  歩数とモンスター育成を組み合わせたアプリケーションです。
                  歩数に応じてモンスターが成長する仕組みを取り入れ、
                  日常の「歩く」をゲームとして楽しめる体験を目指しました。
                </p>

                <Link
                  to="/works/fitbuddy"
                  className="viewProject"
                >
                  View Project
                  <span className="arrowIcon" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>

          <article className="worksItem">
            <div className="worksItemNumber">
              <span>03</span>
            </div>

            <div className="worksItemContent">
              <div className="worksItemHeader">
                <div>
                  <p className="worksCategory">
                    文化祭 / WEB GAME
                  </p>

                  <h2>色合わせミニゲーム</h2>

                  <p className="worksCatch">
                    30秒で遊べる色合わせゲーム
                  </p>
                </div>

                <p className="worksTech">
                  React / TypeScript
                </p>
              </div>

              <div className="worksImage">
                <img
                  src={colorSelectImage}
                  alt="色合わせミニゲーム"
                />
              </div>

              <div className="worksBottom">
                <p className="worksDescription">
                  文化祭の来場者向けに制作したミニゲームです。
                  初めて触る人でもすぐに遊べるよう、
                  シンプルなルールとスマートフォンでの操作性を重視して制作しました。
                </p>

                <Link
                  to="/works/color-game"
                  className="viewProject"
                >
                  View Project
                  <span className="arrowIcon" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        </section>
      </main>

      <footer className="worksFooter">
        <Link to="/">← Back to Home</Link>
        <p>© 2026 SERIKA OSHIMA</p>
      </footer>
    </div>
  );
};

export default Works;