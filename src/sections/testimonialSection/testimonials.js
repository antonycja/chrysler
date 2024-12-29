import React from 'react';
import { User, Quote } from 'lucide-react';
import './testimonials.css';
import Data from '@/constants/data';
import Marquee from 'react-fast-marquee';

const testimonialData = Data.testimonials

const TestimonialCard = ({ text, author, rating }) => (
    <div className="testimonial-card">
        <div className="quote-icon-container">
            <Quote size={24} color="#2268f0" strokeWidth={1.5} fill='white' style={{ transform: 'rotate(-180deg)' }} />
        </div>

        <div className="rating-container">
            {[...Array(rating)].map((_, i) => (
                <svg key={i} className="star-icon" width="16" height="16" fill="#FBBF24" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>

        <p className="testimonial-text">{`"${text}"`}</p>

        <div className="author-container">
            <div className="author-avatar">
                <User size={16} color="#3B82F6" />
            </div>
            <span className="author-name">{author}</span>
        </div>
    </div>
);

export default function Testimonials() {
    return (
        <section id='testimonials'>
            <div className="testimonials-container">
                <div className="testimonials">
                    <div className="test-header">
                        <h1>{testimonialData.title}</h1>
                        <p>{testimonialData.text}</p>
                    </div>

                    <div className="scroll-container">
                        <Marquee
                            pauseOnHover={true}
                            pauseOnClick={true}
                            speed={25}
                            delay={2}
                            style={{ overflowX: 'visible' }}
                        >
                            {/* Triple the testimonials for smoother infinite scroll */}
                            {[...testimonialData.testimonials, ...testimonialData.testimonials, ...testimonialData.testimonials, ...testimonialData.testimonials].map((testimonial, idx) => (
                                <TestimonialCard key={idx} {...testimonial} />
                            ))}
                        </Marquee>
                    </div>
                </div>

                <div>
                </div>
            </div>
        </section>
    );
}