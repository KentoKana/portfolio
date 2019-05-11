import React from 'react';
import Container from 'react-bootstrap/Container';
import ScrollableAnchor from 'react-scrollable-anchor';


function TitleSection() {
  return (
    <ScrollableAnchor id={'home'}>
      <main className="section center titleSection primary-text">
        <Container>
          <div>
            <img
              src="/images/logo.png"
              alt="Logo" id="logo"
              style={{
                width: '100px',
              }}
            />
            <h1>I'm Kento.</h1>
            <p>A full-stack web developer currently based in Toronto.</p>
          </div>
        </Container>
      </main>
    </ScrollableAnchor>
  );
}

export default TitleSection;