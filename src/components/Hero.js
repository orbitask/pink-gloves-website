import React, { useEffect, useRef, useState } from 'react';
import { smoothScrollTo } from '../utils/scrollUtils';

function Hero() {
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);
    const [activeVideo, setActiveVideo] = useState(1);

    useEffect(() => {
        // Get references to both video elements
        const video1 = video1Ref.current;
        const video2 = video2Ref.current;

        if (video1 && video2) {
            // Function to handle when first video ends
            const handleVideo1End = () => {
                // Hide first video, show second video
                setActiveVideo(2);
                // Play the second video
                video2.play();
            };

            // Function to handle when second video ends
            const handleVideo2End = () => {
                // Hide second video, show first video
                setActiveVideo(1);
                // Play the first video again
                video1.play();
            };

            // Add event listeners to videos
            video1.addEventListener('ended', handleVideo1End);
            video2.addEventListener('ended', handleVideo2End);

            // Start the first video
            video1.play();

            // Cleanup event listeners on component unmount
            return () => {
                video1.removeEventListener('ended', handleVideo1End);
                video2.removeEventListener('ended', handleVideo2End);
            };
        }
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-video-container">
                <video
                    ref={video1Ref}
                    muted
                    playsInline
                    className={`hero-video ${activeVideo === 1 ? 'active' : 'inactive'}`}
                >
                    <source src="images/homeVideo.mp4" type="video/mp4" />
                </video>
                <video
                    ref={video2Ref}
                    muted
                    playsInline
                    className={`hero-video ${activeVideo === 2 ? 'active' : 'inactive'}`}
                >
                    <source src="images/homeVideo2.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>
                            <span className="hero-highlight">Pink Gloves</span>
                            <span className="hero-main-text">Professional Cleaning Services</span>
                            <span className="hero-location">Broward & West Palm Beach</span>
                        </h1>

                        <p className="hero-description">
                            Exceptional cleaning services with attention to detail.
                            We bring sparkle to homes and businesses throughout South Florida.
                        </p>

                        <div className="hero-features">
                            <div className="hero-feature">
                                <span className="feature-icon">✓</span>
                                <span>Affordable Rates</span>
                            </div>
                            <div className="hero-feature">
                                <span className="feature-icon">✓</span>
                                <span>Thorough Cleaning</span>
                            </div>
                            <div className="hero-feature">
                                <span className="feature-icon">✓</span>
                                <span>Reliable Service</span>
                            </div>
                        </div>

                        <div className="hero-buttons">
                            <a
                                href="#contact"
                                className="button primary-button"
                                onClick={smoothScrollTo}
                            >
                                Get a Free Quote
                            </a>
                            <a
                                href="#services"
                                className="button secondary-button"
                                onClick={smoothScrollTo}
                            >
                                Our Services
                            </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="hero-image-decoration">
                            <div className="hero-badge">
                                <span className="badge-text">Trusted Cleaning Professionals</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero; 