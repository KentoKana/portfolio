import React from 'react';
import Container from 'react-bootstrap/Container';
import ScrollableAnchor from 'react-scrollable-anchor';

function TitleSection() {
  return (
    <ScrollableAnchor id={'home'}>
      <main className="section center titleSection primary-text">
        <Container>
          <div className="titleWrap">
            <a href="/#home">
              <img
                src="/images/logo.png"
                alt="Logo" id="logo"
              />
            </a>
            <h1>I'm Kento.</h1>
            <p>A full-stack web developer currently based in Toronto.</p>
            <p className="">Curious about how I built this portfolio site? Visit my GitHub repository<a className="modalLink" href="https://github.com/KentoKana/portfolio" target="_blank" rel="noopener noreferrer"
            >here!</a></p>
            <div className="socialMediaLinks">
              <a
                href="https://github.com/kentokana"
                aria-label="Visit GitHub Repository"
                target="_blank" rel="noopener noreferrer"
              >
                <i className="fab fa-github" aria-hidden="false" title="Visit My GitHub"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kento-kanazawa-7147b266/"
                aria-label="Visit GitHub Repository"
                target="_blank" rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" aria-hidden="false" title="Visit My LinkedIn"></i>
              </a>
              <a href="mailto:kanazawakento91@gmail.com"><i className="far fa-envelope" aria-hidden="false" title="kanazawakento91@gmail.com"></i></a>
              <div className="downloadResume">
                <a
                  href="/kentokanazawa-resume.pdf"
                  aria-label="Download My Resume"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i className="fas fa-file-download" aria-hidden="false" title="Download My Resume"></i> View My Resume
                </a>
              </div>

            </div>
          </div>

          <div className="downArrow">
            <a href="#projects"><i class="fas fa-chevron-down"></i></a>
          </div>
        </Container>
      </main>
    </ScrollableAnchor>
  );
}

export default TitleSection;