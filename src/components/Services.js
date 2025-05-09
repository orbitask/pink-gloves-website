import React from 'react';

function Services() {
    const services = [
        {
            title: 'Standard Cleaning (Small)',
            description: 'Thorough cleaning for 1-2 bed, 1 bath homes (1,000-1,200 sq ft).',
            price: 'Starting at $89',
            icon: '🏠',
            value: 'standard1'
        },
        {
            title: 'Standard Cleaning (Large)',
            description: 'Complete cleaning for 3 bed, 2 bath homes (1,500-2,000 sq ft).',
            price: 'Starting at $129',
            icon: '🏡',
            value: 'standard2'
        },
        {
            title: 'Deep Cleaning',
            description: 'Intensive cleaning of hard-to-reach areas and detailed surfaces for 2-3 bed, 2 bath homes.',
            price: 'Starting at $159',
            icon: '✨',
            value: 'deep'
        },
        {
            title: 'Move-Out Cleaning',
            description: 'Comprehensive cleaning to prepare your 3-4 bed, 2-3 bath property for new occupants.',
            price: 'Starting at $200',
            icon: '📦',
            value: 'moveOut'
        },
        {
            title: 'Commercial Cleaning',
            description: 'Professional cleaning solutions for businesses and office spaces. Custom quotes based on size and needs.',
            price: 'Custom Quote',
            icon: '🏢',
            value: 'commercial'
        },
        {
            title: 'Recurring Service',
            description: 'Regular scheduled cleaning with discounted rates. Weekly, bi-weekly, or monthly options available.',
            price: '10-20% Discount',
            icon: '🔄',
            value: 'recurring'
        },
    ];

    const handleServiceClick = (serviceValue) => {
        // Use a simple href navigation with a hash to leverage native smooth scrolling
        window.location.href = `#contact`;

        // Set the selected value in the service type dropdown
        setTimeout(() => {
            const serviceTypeSelect = document.getElementById('serviceType');
            if (serviceTypeSelect) {
                serviceTypeSelect.value = serviceValue;

                // Trigger a change event so the form state updates
                const event = new Event('change', { bubbles: true });
                serviceTypeSelect.dispatchEvent(event);
            }
        }, 800); // Longer delay to ensure the scrolling is complete
    };

    return (
        <section id="services" className="section">
            <div className="container">
                <div className="section-title">
                    <h2>Our Services & Pricing</h2>
                    <p>
                        We provide top-quality cleaning services in Broward and
                        West Palm Beach counties at competitive rates.
                    </p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            onClick={() => handleServiceClick(service.value)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="service-icon">
                                <span style={{ fontSize: '30px' }}>{service.icon}</span>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-price">
                                <span>{service.price}</span>
                            </div>
                            <div className="service-cta">
                                <span>Click to request this service</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="service-note">
                    <p>* Prices may vary based on specific requirements and condition of the space.</p>
                    <p>* Additional services like refrigerator cleaning, oven cleaning, or window washing may incur extra charges.</p>
                    <p>* Discounts available for recurring service plans.</p>
                </div>
            </div>
        </section>
    );
}

export default Services; 