import "../../styles/WorkDetail.css";
import { Link, Navigate, useParams } from "react-router-dom";
import { getWorkBySlug } from "../../data/works";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const work = slug ? getWorkBySlug(slug) : undefined;

  if (!work) {
    return <Navigate to="/works" replace />;
  }

  return (
    <div className="workDetail">
      <header className="detailHeader">
        <Link to="/" className="detailLogo">
          SERIKA OSHIMA
        </Link>

        <Link to="/works" className="detailBack">
          Works
          <span className="arrowIcon" aria-hidden="true" />
        </Link>
      </header>

      <main>
        <section className="detailHero">
          <p className="detailNumber">
            {work.category}
          </p>

          <h1>{work.title}</h1>

          <p className="detailCatch">
            {work.catchphrase}
          </p>

          <div className="detailMeta">
            <div>
              <span>TYPE</span>
              <p>{work.type}</p>
            </div>

            <div>
              <span>TECHNOLOGY</span>
              <p>{work.technology}</p>
            </div>

            <div>
              <span>ROLE</span>
              <p>{work.role}</p>
            </div>

            <div>
              <span>YEAR</span>
              <p>{work.year}</p>
            </div>
          </div>
        </section>

        <div className="detailMainImage">
          <img
            src={work.image}
            alt={work.imageAlt}
          />
        </div>

        {work.sections.map((section, index) => {
          const sectionNumber = String(index + 1).padStart(
            2,
            "0"
          );

          const titleLines = section.title.split("\n");

          return (
            <section
              className={`detailSection ${
                section.variant === "features" ? "v2" : ""
              }`}
              key={`${work.slug}-${section.label}`}
            >
              <p className="detailSectionNumber">
                {sectionNumber} / {section.label}
              </p>

              <div className="detailSectionContent">
                <h2>
                  {titleLines.map((line, lineIndex) => (
                    <span key={lineIndex}>
                      {line}

                      {lineIndex <
                        titleLines.length - 1 && <br />}
                    </span>
                  ))}
                </h2>

                {section.features ? (
                  <div className="featureGrid">
                    {section.features.map(
                      (feature, featureIndex) => (
                        <div
                          className="featureItem"
                          key={`${feature.title}-${featureIndex}`}
                        >
                          <span>
                            {String(
                              featureIndex + 1
                            ).padStart(2, "0")}
                          </span>

                          <h3>{feature.title}</h3>

                          <p>
                            {feature.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                ) : (
                  <div className="detailText">
                    {section.paragraphs?.map(
                      (paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>
                          {paragraph}
                        </p>
                      )
                    )}
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {work.links && work.links.length > 0 && (
          <section className="detailLinks">
            <p>PROJECT LINKS</p>

            <div>
              {work.links.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.url}
                >
                  <span>{link.label}</span>
                  <span
                    className="arrowIcon"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="detailFooter">
        <Link to="/works">← Works</Link>
        <p>© 2026 SERIKA OSHIMA</p>
      </footer>
    </div>
  );
};

export default WorkDetail;