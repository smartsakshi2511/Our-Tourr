import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
 

const Banner = () => {
  useEffect(() => {
    const video = document.getElementById('my-video');
    if (video) {
      video.addEventListener('canplay', () => {
        video.play();
      });
    }
  }, []);

  return (
    <section className="banner">
      <Container className="banner-box">
        <div className="intro-text">
          <div className="intro-text-box">
            <h1>Aura Emanating Teknology</h1>
            <p>
              Aura Emanating Teknology is a group of innovators, providing innovative and pioneering
              Information and communications technologies (ICTs) solutions using skills for software
              development, hardware sizing and support in transforming societies of current global scenario.
              Aura is fully committed towards ensuring complete satisfaction to its customers.
            </p>
          </div>
        </div>
        <video id="my-video" style={{ width: '100%' }} muted loop>
          <source src="" type="video/mp4" />
          <source src="media/preview.ogv" type="video/ogg" />
          <source src="media/preview.webm" type="video/webm" />
        </video>
      </Container>
    </section>
  );
};

export default Banner;
