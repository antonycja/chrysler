"use client"
export default function HeroBtn({ text }) {

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            const navbar = document.querySelector('nav'); // Adjust selector based on your navbar
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            
            const elementPosition = servicesSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    
    return (
        <>
            <button className="hero-cta" onClick={scrollToServices}>{text}</button>
        </>
    )
};
