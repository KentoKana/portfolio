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
            </div>
          </div>
        </Container>
      </main>
    </ScrollableAnchor>
  );
}

export default TitleSection;