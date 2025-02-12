import { Images } from "./Images.js"
const date = new Date()
const Data = {
    navbar: {
        logo: Images.logo,
        links: ["home", "about us", "services", "testimonials", "company"],
        navBtn: "let's talk"
    },
    hero: {
        title: "COMPLETE IT SOLUTIONS FOR BUSINESS SUCCESS",
        description: "E-Ovation is your complete IT partner - delivering enterprise-grade hardware, networking, and software solutions. We handle everything from server installations and data security to disaster recovery and custom software development, ensuring your business technology runs seamlessly.",
        ctaButton: "Get Started",
        images: [
            { src: Images.img1, alt: 'Image 1' },
            { src: Images.img2, alt: 'Image 2' },
            { src: Images.img3, alt: 'Image 3' }
        ],
        decorativeImages: {
            topLeft: Images.topLeft,
            bottomRight: Images.bottomRight
        }
    },
    about: {
        welcome: "Welcome to",
        businessName: "E-Ovation",
        businessModel: "Your Partner in Making IT Happen",
        businessSummary: "With over a decade of experience, E-Ovation delivers comprehensive IT solutions that drive business growth. Our expert team provides end-to-end technology services, from robust hardware infrastructure and networking to custom software development and cybersecurity. We pride ourselves on reliable, efficient, and personalized service that keeps your business running smoothly.",
        businessImg: Images.img1
    },
    services: {
        heading1: "what can",
        businessName: "E-Ovation",
        heading2: "offer you",
        subheading: "Quick, Secure and Professional",
        btnText: "Enquire",
        services: [
            {
                id: "infrastructure-networking",
                icon: Images.server,
                serviceName: "Infrastructure & Networking",
                summary: "Complete hardware and networking solutions for your business, delivering robust infrastructure setups that ensure maximum uptime and performance",
                more: {
                    images: [{ img: Images.img1, alt: "Server and Network Infrastructure" }],
                    serviceDescription: "Comprehensive IT infrastructure and networking solutions that provide the foundation for your business operations. From server installations to network management, we ensure your systems run efficiently and securely.",
                    features: [
                        {
                            feature: "Server Solutions",
                            description: "Enterprise-grade server setup, maintenance and management",
                            skills: ["Server Installation", "Server Maintenance", "Performance Optimization", "Virtualization", "Storage Solutions", "Load Balancing"]
                        },
                        {
                            feature: "Network Infrastructure",
                            description: "Complete networking solutions for seamless connectivity",
                            skills: ["Network Design", "Implementation", "WiFi Solutions", "Network Security", "Performance Monitoring", "Troubleshooting"]
                        },
                        {
                            feature: "Hardware Support",
                            description: "Comprehensive hardware solutions and support services",
                            skills: ["PC Support", "Laptop Support", "Hardware Upgrades", "Repairs", "Maintenance", "Equipment Supply"]
                        }
                    ]
                }
            },
            {
                id: "web-cloud-solutions",
                icon: Images.web,
                serviceName: "Cabling & Infrastructure Services",
                summary: "Professional cabling and wiring solutions ensuring reliable, scalable, and high-performance network infrastructure for businesses.",
                more: {
                    images: [{ img: Images.img1, alt: "Cabling & Infrastructure Services" }],
                    serviceDescription: "Expert cabling and wiring services designed to enhance network reliability, manageability, and scalability. Whether you're constructing a new office, relocating, or upgrading, we have you covered.",
                    features: [
                        {
                            feature: "Network Cabling",
                            description: "Comprehensive network cabling solutions including needs analysis and system design.",
                            skills: ["LAN/WAN Setup", "Ethernet Cabling", "Fiber Optics", "Cable Management", "Network Optimization", "System Design"]
                        },
                        {
                            feature: "Data & Communications Cabling",
                            description: "Structured data and VoIP cabling solutions for seamless business operations.",
                            skills: ["VoIP Infrastructure", "Data Cable Installation", "Structured Cabling", "Wireless Access Points", "Telephone Cabling", "Signal Optimization"]
                        },
                        {
                            feature: "Cable & Wiring Maintenance",
                            description: "Diagnosis, repair, and management of network and infrastructure cabling.",
                            skills: ["Cable Fault Diagnosis", "Repair & Maintenance", "Infrastructure Audits", "Performance Monitoring", "Scalability Planning", "Server Rack Management"]
                        }
                    ]
                }
            },
            {
                id: "software-solutions",
                icon: Images.software,
                serviceName: "Software Solutions",
                summary: "Custom software development and enterprise applications that streamline your operations and drive business growth through tailored digital solutions",
                more: {
                    images: [{ img: Images.img1, alt: "Software Development" }],
                    serviceDescription: "Tailored software solutions that streamline your business processes and enhance operational efficiency. From custom development to software integration, we deliver solutions that meet your specific needs.",
                    features: [
                        {
                            feature: "Custom Development",
                            description: "Bespoke software solutions for your business",
                            skills: ["Application Development", "Database Design", "API Integration", "Mobile Apps", "Desktop Applications", "Testing", "Web Development", "Web Maintenance", "E-commerce"]
                        },
                        {
                            feature: "Enterprise Software",
                            description: "Implementation and management of enterprise applications",
                            skills: ["ERP Systems", "CRM Solutions", "Business Intelligence", "Workflow Automation", "Integration", "Support"]
                        },
                        {
                            feature: "Software Maintenance",
                            description: "Ongoing support and updates for software systems",
                            skills: ["Updates", "Bug Fixing", "Performance Optimization", "Security Patches", "Feature Enhancement", "Documentation"]
                        }
                    ]
                }
            },
            {
                id: "technical-support",
                icon: Images.technical,
                serviceName: "Technical Support",
                summary: "Comprehensive IT support and maintenance services providing round-the-clock assistance to keep your business running smoothly and efficiently",
                more: {
                    images: [{ img: Images.img1, alt: "Technical Support" }],
                    serviceDescription: "Round-the-clock technical support services ensuring your business operations run smoothly. Our expert team provides fast, reliable assistance for all your IT needs.",
                    features: [
                        {
                            feature: "IT Support",
                            description: "Professional IT support for all your technology needs",
                            skills: ["Help Desk", "Remote Support", "On-site Support", "System Monitoring", "Problem Resolution", "User Training"]
                        },
                        {
                            feature: "Security Services",
                            description: "Comprehensive security solutions for your business",
                            skills: ["Antivirus", "Firewall", "Data Security", "Access Control", "Security Audits", "Threat Prevention"]
                        },
                        {
                            feature: "Disaster Recovery",
                            description: "Robust backup and recovery solutions",
                            skills: ["Data Backup", "Recovery Planning", "Business Continuity", "Risk Assessment", "Emergency Response", "Data Restoration"]
                        }
                    ]
                }
            },
            {
                id: "it-consultancy",
                icon: Images.internet,
                serviceName: "IT Consultancy & Implementation",
                summary: "Expert IT solutions designed to optimize business operations through strategic planning, implementation, and maintenance of IT systems.",
                more: {
                    images: [{ img: Images.img1, alt: "IT Consultancy & Implementation" }],
                    serviceDescription: "Comprehensive IT consultancy services that enhance business performance through cutting-edge technology, efficient system integration, and expert advisory solutions.",
                    features: [
                        {
                            feature: "Internet Optimization",
                            description: "Enhance your business internet performance with traffic prioritization and usage policies.",
                            skills: ["Bandwidth Management", "Traffic Shaping", "Web Filtering", "Load Balancing", "Usage Auditing", "Network Monitoring"]
                        },
                        {
                            feature: "Migration & Upgrades",
                            description: "Seamless server and software migrations to minimize downtime and improve performance.",
                            skills: ["Server Upgrades", "Cloud Migration", "System Integration", "Disaster Recovery Planning", "Performance Optimization", "Risk Assessment"]
                        },
                        {
                            feature: "IT Projects & Solutions",
                            description: "Bespoke IT solutions designed to align with your business goals and technological needs.",
                            skills: ["IT Infrastructure Design", "Business IT Strategy", "Software Implementation", "Technology Consulting", "Solution Architecture", "Project Management"]
                        },
                        {
                            feature: "Network & Systems Auditing",
                            description: "Comprehensive auditing services to identify areas of improvement in IT infrastructure.",
                            skills: ["Network Security Auditing", "System Performance Analysis", "IT Compliance Checks", "Infrastructure Optimization", "Vulnerability Assessment", "IT Governance"]
                        }
                    ]
                }
            }
            ,
            {
                id: "security-compliance",
                icon: Images.tech,
                serviceName: "Security & Compliance",
                summary: "Enterprise-grade security solutions and compliance management ensuring your business assets are protected while meeting industry regulations",
                more: {
                    images: [{ img: Images.img1, alt: "Security & Compliance" }],
                    serviceDescription: "Comprehensive security and compliance solutions that protect your business from evolving threats while ensuring regulatory compliance. Our expert team implements robust security measures tailored to your industry needs.",
                    features: [
                        {
                            feature: "Cybersecurity",
                            description: "Advanced security solutions for comprehensive protection",
                            skills: ["Threat Detection", "Penetration Testing", "Security Audits", "Incident Response", "Security Training", "24/7 Monitoring"]
                        },
                        {
                            feature: "Compliance Management",
                            description: "Complete compliance and regulatory adherence solutions",
                            skills: ["Risk Assessment", "Policy Development", "Compliance Audits", "GDPR Compliance", "Industry Standards", "Regular Updates"]
                        },
                        {
                            feature: "Network Security",
                            description: "Robust network protection and monitoring services",
                            skills: ["Firewall Management", "VPN Solutions", "Intrusion Detection", "Email Security", "Web Filtering", "Access Control"]
                        }
                    ]
                }
            }
        ]

    },
    testimonials: {
        title: "testimonials",
        text: "We always make sure our customers get the best prices possible, as loyal as possible.",
        testimonials: [{
            text: "The customer service was outstanding. Very quick to respond and so helpful. Dr. Jordana took the time to call my doctor to have them clarify my prescription and helped manage my time delivery...",
            author: "Mirena Goyette",
            rating: 5,
        },
        {
            text: "Anytime I call and need help, they are always there and help me in every way possible. I love working with them. Best service ever!",
            author: "Leonard Krasner",
            rating: 5,
        },
        {
            text: "It is very easy to order with them. The prices are great and the shipping is so quick. Highly recommend them!",
            author: "Lindsay Walton",
            rating: 5,
        },
        {
            text: "Test testimonial for scrolling effect. The entire process was smooth and quite nice. I would definitely recommend their services to others.",
            author: "John Smith",
            rating: 5,
        }]
    },
    clients: {
        title: "Our clients",
        clients: [
            { img: Images.client1, alt: "client 1" },
            { img: Images.client2, alt: "client 2" },
            { img: Images.client3, alt: "client 3" },
            { img: Images.client4, alt: "client 4" },
        ]
    },

    footer: {
        logo: Images.logo,
        text: "At E-Ovation, we empower your business with innovative IT solutions and unparalleled support. Our expertise in infrastructure, networking, software development, and cybersecurity ensures that your technology is optimized for growth and reliability. Partner with us to navigate the digital landscape with confidence, knowing your IT needs are in expert hands.",
        menuTitle: "menu",
        company: {
            title: "company",
            tel: "+27 76 123 4567",
            email: "info@eovation.co.za",
            address: "64 Voortrekker Rd, Townsend Estate, Cape Town, 7460"
        },
        connect: {
            title: "connect with us",
            social: [
                { link: "https://www.youtube.com/Antonycja", label: "YouTube" },
                { link: "https://github.com/antonycja", label: "GitHub" },
                { link: "https://www.linkedin.com/in/antony-maposa/", label: "LinkedIn" }
            ],
            newsletter: {
                btnText: "Subscribe",
                caption: "Your email address"
            }
        },
        footerText: `Copyright ${date.getFullYear()} by E-Ovation. All rights reserved.`
    }

}

export default Data;