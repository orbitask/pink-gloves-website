import React, { useEffect, useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        contactMethod: 'phone', // Default to phone
        contactValue: '',
        serviceType: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Listen for changes to the service type dropdown from external sources
    useEffect(() => {
        const serviceTypeSelect = document.getElementById('serviceType');
        if (serviceTypeSelect) {
            const handleExternalChange = () => {
                setFormData(prevState => ({
                    ...prevState,
                    serviceType: serviceTypeSelect.value
                }));
            };

            serviceTypeSelect.addEventListener('change', handleExternalChange);

            return () => {
                serviceTypeSelect.removeEventListener('change', handleExternalChange);
            };
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            // Prepare the data payload with a formatted field for contact info
            const payload = {
                ...formData,
                contactInfo: formData.contactMethod === 'phone'
                    ? `Phone: ${formData.contactValue}`
                    : `Email: ${formData.contactValue}`,
                submittedAt: new Date().toISOString()
            };

            // Send the data to the Zapier webhook
            const response = await fetch('https://hooks.zapier.com/hooks/catch/776190/2ngwoz2/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            // Handle successful submission
            console.log('Form submitted successfully:', await response.json());
            setSubmitted(true);

            // Reset form after submission
            setFormData({
                contactMethod: 'phone',
                contactValue: '',
                serviceType: '',
                message: '',
            });

            // After 5 seconds, reset the submitted state
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Something went wrong. Please try again or call us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-title">
                    <h2>Contact Us</h2>
                    <p>Get in touch for a free quote or to schedule your cleaning service</p>
                </div>
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <span style={{ fontSize: '20px' }}>📍</span>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Serving Broward & West Palm Beach Counties, FL</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <span style={{ fontSize: '20px' }}>📱</span>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>(941) 287-9038</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <span style={{ fontSize: '20px' }}>✉️</span>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>info@pinkglovescleaning.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <span style={{ fontSize: '20px' }}>⏰</span>
                            </div>
                            <div>
                                <h4>Hours</h4>
                                <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '30px' }}>
                                <h3 style={{ color: '#FF69B4', marginBottom: '15px' }}>Thank You!</h3>
                                <p>Your message has been sent. We'll get back to you shortly!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                    <label>How would you like us to contact you?</label>
                                    <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                                        <label style={{
                                            flex: 1,
                                            padding: '10px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            backgroundColor: formData.contactMethod === 'phone' ? '#FFF9FC' : 'transparent',
                                            cursor: 'pointer',
                                            textAlign: 'center',
                                            border: formData.contactMethod === 'phone' ? '2px solid #FF69B4' : '1px solid #ddd'
                                        }}>
                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                value="phone"
                                                checked={formData.contactMethod === 'phone'}
                                                onChange={handleChange}
                                                style={{ marginRight: '5px' }}
                                            />
                                            Phone
                                        </label>
                                        <label style={{
                                            flex: 1,
                                            padding: '10px',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            backgroundColor: formData.contactMethod === 'email' ? '#FFF9FC' : 'transparent',
                                            cursor: 'pointer',
                                            textAlign: 'center',
                                            border: formData.contactMethod === 'email' ? '2px solid #FF69B4' : '1px solid #ddd'
                                        }}>
                                            <input
                                                type="radio"
                                                name="contactMethod"
                                                value="email"
                                                checked={formData.contactMethod === 'email'}
                                                onChange={handleChange}
                                                style={{ marginRight: '5px' }}
                                            />
                                            Email
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contactValue">
                                        {formData.contactMethod === 'phone' ? 'Your Phone Number' : 'Your Email Address'}
                                    </label>
                                    <input
                                        type={formData.contactMethod === 'phone' ? 'tel' : 'email'}
                                        id="contactValue"
                                        name="contactValue"
                                        value={formData.contactValue}
                                        onChange={handleChange}
                                        placeholder={formData.contactMethod === 'phone' ? '(123) 456-7890' : 'your@email.com'}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="serviceType">Service Type</label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        <option value="standard1">Standard Cleaning (1-2 bed, 1 bath)</option>
                                        <option value="standard2">Standard Cleaning (3 bed, 2 bath)</option>
                                        <option value="deep">Deep Cleaning (2-3 bed, 2 bath)</option>
                                        <option value="moveOut">Move-out Cleaning (3-4 bed, 2-3 bath)</option>
                                        <option value="commercial">Commercial Cleaning</option>
                                        <option value="recurring">Recurring Service</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Anything else we should know?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Additional details about your home, schedule preferences, etc."
                                    />
                                </div>

                                {errorMessage && (
                                    <div style={{ color: '#ff4d4d', marginBottom: '15px', textAlign: 'center' }}>
                                        {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="button primary-button"
                                    style={{ width: '100%' }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Request a Callback'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact; 