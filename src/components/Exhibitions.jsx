import React, { useEffect, useRef } from "react";

function Exhibitions() {
  const exhibitionsRef = useRef(null);

  useEffect(() => {
    const container = exhibitionsRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".exhibition-card");

    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="exhibitions" id="exhibitions" ref={exhibitionsRef}>
        <div className="container">
          <h2 className="exhibitions-title">Free Exhibitions and Displays</h2>

          <div className="exhibitions-grid">
            <article className="exhibition-card">
              <div className="exhibition-info">
                <h3>
                  <span className="accent accent-muted">Nordic noir</span>
                  <br />
                  Works on paper from Edvard Munch to Mamma Andersson
                </h3>

                <div className="exhibition-meta">
                  <p>Exhibition</p>
                  <p>9 October 2025 – 22 March 2026</p>
                </div>

                <span className="badge muted">Free</span>
              </div>

              <div className="exhibition-image">
                <img
                  src="images/exhibit1.png"
                  alt="Nordic noir exhibition"
                />
              </div>
            </article>

            <article className="exhibition-card">
              <div className="exhibition-info">
                <h3>
                  <span className="accent accent-bright">Sufi life and art</span>
                </h3>

                <div className="exhibition-meta">
                  <p>Exhibition</p>
                  <p>27 October 2025 – 26 July 2026</p>
                </div>

                <span className="badge bright">Free</span>
              </div>

              <div className="exhibition-image">
                <img
                  src="images/exhibit2.png"
                  alt="Sufi life and art exhibition"
                />
              </div>
            </article>

            <article className="exhibition-card">
              <div className="exhibition-info">
                <h3>
                  <span className="accent accent-muted">Ancient Persia</span>
                  <br />
                  Treasures from the Achaemenid Empire
                </h3>

                <div className="exhibition-meta">
                  <p>Exhibition</p>
                  <p>15 November 2025 – 30 April 2026</p>
                </div>

                <span className="badge muted">Free</span>
              </div>

              <div className="exhibition-image">
                <img
                  src="images/exhibit3.png"
                  alt="Ancient Persia exhibition"
                />
              </div>
            </article>

            <article className="exhibition-card">
              <div className="exhibition-info">
                <h3>
                  <span className="accent accent-bright">Digital Futures</span>
                </h3>

                <div className="exhibition-meta">
                  <p>Exhibition</p>
                  <p>1 December 2025 – 28 February 2026</p>
                </div>

                <span className="badge bright">Free</span>
              </div>

              <div className="exhibition-image">
                <img
                  src="images/exhibit4.png"
                  alt="Digital Futures exhibition"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="explore" id="visit">
        <div className="container">
          <h2 className="explore-title">Explore the museum</h2>

          <div className="explore-grid">
            <a href="#" className="explore-card">
              <h3>Collection</h3>
              <p>
                Discover millions of objects spanning over two million years of
                human history and culture.
              </p>
              <span className="explore-link">
                Explore the collection <i className="bi bi-arrow-right" />
              </span>
            </a>

            <a href="#" className="explore-card" id="collection">
              <h3>Galleries</h3>
              <p>
                Wander through permanent galleries showcasing world cultures,
                art, and archaeology.
              </p>
              <span className="explore-link">
                View galleries <i className="bi bi-arrow-right" />
              </span>
            </a>

            <a href="#" className="explore-card">
              <h3>Tours and talks</h3>
              <p>
                Join guided tours and expert-led talks designed for all
                audiences.
              </p>
              <span className="explore-link">
                Find tours <i className="bi bi-arrow-right" />
              </span>
            </a>

            <a href="#" className="explore-card" id="support">
              <h3>Families and schools</h3>
              <p>
                Interactive experiences, trails, and resources for families and
                educators.
              </p>
              <span className="explore-link">
                Plan a family visit <i className="bi bi-arrow-right" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="online">
        <div className="container">
          <h2 className="online-title">What’s online…</h2>

          <div className="online-grid">
            <article className="online-card">
              <img src="images/online1.jpg" alt="Hawaii exhibition" />

              <div className="online-content">
                <h3>Introduction to ‘Hawaiʻi’</h3>
                <p>
                  Join the curator of our new exhibition to explore the
                  exceptional objects and extraordinary stories of this Pacific
                  island nation.
                </p>
              </div>
            </article>

            <article className="online-card">
              <img src="images/online2.jpg" alt="Egyptian icon" />

              <div className="online-content">
                <h3>Learn about an Egyptian icon</h3>
                <p>
                  Discover one of the Museum’s flagship objects, the colossal
                  statue of Ramesses II, which inspired Shelley’s ‘Ozymandias’.
                </p>
              </div>
            </article>

            <article className="online-card">
              <img src="images/online3.jpg" alt="Samurai unboxing" />

              <div className="online-content">
                <h3>Unboxing a surprising Samurai</h3>
                <p>
                  Watch this behind-the-scenes video following the unpacking of
                  an unusual addition to the forthcoming Samurai exhibition.
                </p>
              </div>
            </article>

            <article className="online-card">
              <img src="images/online4.jpg" alt="South Pacific armour" />

              <div className="online-content">
                <h3>Ingenious armour from the South Pacific</h3>
                <p>
                  Learn how islanders created traditional armour and weapons
                  from natural resources, and what they were used for.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="connect">
        <div className="container connect-grid">
          <div className="connect-intro">
            <h2>Let’s stay curious.</h2>
            <p>
              This project explores how cultural institutions translate history
              into digital experiences. If you’re interested in thoughtful
              design, research-driven UI, or collaboration — let’s connect.
            </p>
          </div>

          <div className="connect-actions">
            <a href="#" className="connect-item">
              <span className="label">LinkedIn</span>
              <span className="meta">Professional profile</span>
            </a>

            <a
              href="https://github.com/Ida45-fd"
              target="_blank"
              rel="noreferrer"
              className="connect-item"
            >
              <span className="label">GitHub</span>
              <span className="meta">Code & experiments</span>
            </a>

            <a href="mailto:your@email.com" className="connect-item">
              <span className="label">Email</span>
              <span className="meta">Direct contact</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Exhibitions;

