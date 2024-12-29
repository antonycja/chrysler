import { Images } from "./Images.js"

const Data = {
    navbar: {
        logo: Images.logo,
        links: ["home", "about us", "services", "testimonials", "company"],
        navBtn: "let's talk"
    },
    hero: {
        title: "BEST SOFTWARE SOLUTION COMPANY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        businessName: "Business Name",
        businessModel: "making it happen",
        businessSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est qui, consequuntur officiis iure asperiores ex ab placeat itaque architecto molestiae dolor amet, saepe quidem quis numquam provident veniam corporis. Eligendi.", businessImg: Images.img1
    },
    services: {
        heading1: "what can",
        businessName: "Business Name",
        heading2: "offer you",
        subheading: "quick, reliable and professional services",
        btnText: "modal button",
        services: [
            {
                icon: Images.server,
                serviceName: "service name",
                summary: "short summary",
                more: {
                    images: [{ img: Images.img1, alt: "Image" }],
                    serviceDescription: "long description",
                    features: [
                        {
                            feature: "feature1",
                            description: "feature1 description",
                            skills: ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6"],
                        },
                        {
                            feature: "feature2",
                            description: "feature2 description",
                            skills: ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6"],
                        },
                        {
                            feature: "feature3",
                            description: "feature3 description",
                            skills: ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6"],
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                    ]
                }
            },
            {
                icon: Images.web,
                serviceName: "",
                summary: "",
                more: {
                    images: [{ img: Images.img1, alt: "Image" }],
                    serviceDescription: "",
                    features: [
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                    ]
                }
            },
            {
                icon: Images.software,
                serviceName: "",
                summary: "",
                more: {
                    images: [{ img: Images.img1, alt: "Image" }],
                    serviceDescription: "",
                    features: [
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                    ]
                }
            },
            {
                icon: Images.technical,
                serviceName: "",
                summary: "",
                more: {
                    images: [{ img: Images.img1, alt: "Image" }],
                    serviceDescription: "",
                    features: [
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                        {
                            feature: "",
                            description: "",
                            skills: [""]
                        },
                    ]
                }
            },
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
    }

}

export default Data;