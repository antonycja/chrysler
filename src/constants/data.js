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
    about: {welcome: "Welcome to",
        businessName: "Business Name here",
        businessModel: "business model here",
        businessSummary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est qui, consequuntur officiis iure asperiores ex ab placeat itaque architecto molestiae dolor amet, saepe quidem quis numquam provident veniam corporis. Eligendi.", businessImg: Images.img1},
    services: {
        heading1:"heading1",
        businessName: "Business Name",
        heading2:"heading2",
        subheading:"subheading",
        btnText:"modal button",
        services: [
            { icon:Images.server,
            serviceName:"service name",
            summary:"short summary",
            more: {
                images: [{img:Images.img1, alt:"Image"}],
                serviceDescription:"long description",
                features: [
                    {feature: "feature1",
                    description:"feature1 description",
                    skills:["skill1","skill2","skill3","skill4","skill5","skill6"],
                    },
                    {feature: "feature2",
                        description:"feature2 description",
                        skills:["skill1","skill2","skill3","skill4","skill5","skill6"],
                    },
                    {feature: "feature3",
                        description:"feature3 description",
                        skills:["skill1","skill2","skill3","skill4","skill5","skill6"],
                    },
                    {feature: "",
                        description:"",
                        skills:[""]
                    },
                    {feature: "",
                        description:"",
                        skills:[""]
                    },
                ]
            }},
            { icon:Images.web,
                serviceName:"",
                summary:"",
                more: {
                    images: [{img:Images.img1, alt:"Image"}],
                    serviceDescription:"",
                    features: [
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                    ]
                }},
            { icon:Images.software,
                serviceName:"",
                summary:"",
                more: {
                    images: [{img:Images.img1, alt:"Image"}],
                    serviceDescription:"",
                    features: [
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                    ]
                }},
            { icon:Images.technical,
                serviceName:"",
                summary:"",
                more: {
                    images: [{img:Images.img1, alt:"Image"}],
                    serviceDescription:"",
                    features: [
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                        {feature: "",
                            description:"",
                            skills:[""]
                        },
                    ]
                }},
        ]
    }
}

export default Data;