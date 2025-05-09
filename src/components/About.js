import React from 'react';
import { smoothScrollTo } from '../utils/scrollUtils';

function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-title">
                    <h2>About Pink Gloves</h2>
                    <p>A Women-Owned Business Supporting Busy Moms & Women On-The-Go</p>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            <strong>Pink Gloves</strong> was born from my experience as a mother of two, understanding
                            firsthand the challenges women face balancing work, family, and household responsibilities.
                            As a woman entrepreneur, I created this business with a specific mission: to support women on
                            the go and mothers who need an extra helping hand along the way.
                        </p>
                        <p style={{ marginTop: '15px' }}>
                            I know what it's like to juggle multiple priorities and still want a clean,
                            organized home. Our team of professional cleaners—many of whom are mothers
                            themselves—bring empathy and understanding to every home we service in Broward
                            and West Palm Beach counties.
                        </p>
                        <p style={{ marginTop: '15px' }}>
                            We use eco-friendly products and pay special attention to the details
                            that matter to you. More than just a cleaning service, we're your partners in creating
                            the peaceful, clean space you deserve amidst life's beautiful chaos.
                        </p>
                        <div style={{ marginTop: '25px' }}>
                            <a
                                href="#contact"
                                className="button primary-button"
                                onClick={smoothScrollTo}
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="about-image">
                        <img
                            src="/images/pink-gloves-cleaner.jpg"
                            alt="Pink Gloves Cleaning Professional"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About; 