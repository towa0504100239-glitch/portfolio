import "../styles/Works.css";
import { Link } from "react-router-dom";
import { worksNewestFirst } from "../data/works";

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
          {worksNewestFirst.map((work, index) => (
            <article className="worksItem" key={work.slug}>
              <div className="worksItemNumber">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="worksItemContent">
                <div className="worksItemHeader">
                  <div>
                    <p className="worksCategory">
                      {work.listCategory}
                    </p>

                    <h2>{work.title}</h2>

                    <p className="worksCatch">
                      {work.catchphrase}
                    </p>
                  </div>

                  <p className="worksTech">
                    {work.technology}
                  </p>
                </div>

                <div className="worksImage">
                  <img
                    src={work.image}
                    alt={work.imageAlt}
                  />
                </div>

                <div className="worksBottom">
                  <p className="worksDescription">
                    {work.description}
                  </p>

                  <Link
                    to={`/works/${work.slug}`}
                    className="viewProject"
                  >
                    View Project
                    <span
                      className="arrowIcon"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
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