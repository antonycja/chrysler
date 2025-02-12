"use client"
import React, { useState, useEffect } from 'react';
import './contact.css';

// Phone validation helper function remains the same
const isValidPhoneNumber = (phone) => {
    const cleaned = phone.replace(/(?!^\+)[^\d]/g, '');

    if (phone === '') return true;

    if (cleaned.startsWith('+')) {
        const digits = cleaned.slice(1);
        if (digits.length < 10 || digits.length > 15) return false;
    } else {
        if (cleaned.length < 10 || cleaned.length > 15) return false;
    }

    if (/^(?:\+)?(\d)\1{3,}/.test(cleaned)) return false;

    return true;
};

const formatPhoneNumber = (phone) => {
    const hasPlus = phone.startsWith('+');
    const digits = phone.replace(/[^\d]/g, '');

    if (hasPlus) {
        const groups = digits.match(/.{1,3}/g) || [];
        return '+' + groups.join('-');
    } else {
        if (digits.length <= 3) return digits;
        if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
        return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
};

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    selectedServices: [],
    description: ''
};

const ContactFormModal = ({ isOpen, onClose, services }) => {
    const [formData, setFormData] = useState(initialFormState);
    const [errors, setErrors] = useState({});
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        if (isOpen) {
            // Store current scroll position
            const scrollY = window.scrollY;

            // Add styles to prevent scrolling and maintain position
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';

            return () => {
                // Restore scrolling and position when modal closes
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [isOpen]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const formattedPhone = value.startsWith('+')
                ? '+' + value.slice(1).replace(/[^\d]/g, '')
                : formatPhoneNumber(value);

            setFormData(prev => ({
                ...prev,
                [name]: formattedPhone
            }));

            setErrors(prev => ({
                ...prev,
                phone: ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleServiceToggle = (serviceId) => {
        setFormData(prev => {
            const services = prev.selectedServices.includes(serviceId)
                ? prev.selectedServices.filter(id => id !== serviceId)
                : [...prev.selectedServices, serviceId];
            return { ...prev, selectedServices: services };
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.phone && !isValidPhoneNumber(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                })

                const data = await res.json();

                if (data.success) {
                    setResponseMessage("Your message was sent successfully!")
                    setFormData(initialFormState)
                } else {
                    setResponseMessage(`Error: ${data.error}`);
                }

            }
            catch (error) {
                console.log(error)
                setResponseMessage("An error occurred while sending your message.")
            }

        }
    };

    if (!isOpen) return null;

    return (
        <div className="contact-modal-overlay" onClick={onClose}>
            <div className="contact-modal" onClick={e => e.stopPropagation()}>
                <div className="contact-modal-header">
                    <h2>Get in Touch</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name *</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number (Optional)</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="e.g. +27123456789"
                                className={errors.phone ? 'error' : ''}
                            />
                            {errors.phone && (
                                <span className="error-message">{errors.phone}</span>
                            )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="companyName">Company Name (Optional)</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Services of Interest (Optional)</label>
                        <div className="services-group">
                            {services.map((service) => (
                                <div key={service.id} className="service-checkbox">
                                    <input
                                        type="checkbox"
                                        id={`service-${service.id}`}
                                        checked={formData.selectedServices.includes(service.id)}
                                        onChange={() => handleServiceToggle(service.id)}
                                    />
                                    <label htmlFor={`service-${service.id}`}>{service.serviceName}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">How can we help?</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Please describe your needs or project requirements..."
                            rows="4"
                        />
                    </div>

                    <button type="submit" className="submit-button">Send Message</button>
                    {responseMessage && <p>{responseMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactFormModal;