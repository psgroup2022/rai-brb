import { IMAGES, SVGICONS } from "./theme";
import iconBD01 from '../assets/img/bd01.svg';
import iconCD02 from '../assets/img/cd02.svg';
import iconCV03 from '../assets/img/cv03.svg';
import iconCDMetro from '../assets/img/cdmetro.svg';
import iconCD05 from '../assets/img/cd05.svg';
import iconBrasiliaprev from '../assets/img/brasiliaprev.svg';
import iconRegiusprev from '../assets/img/regiusprev.svg';
import iconPGA from '../assets/img/pga.svg';

export const menudata = [
    { title: "Home", link: "/", classChange: "navbar-dropdown menu-item-children", classChange2: "menu-item-has-children", subMenu: [{ title: "home 1", link: "/index" }, { title: "home 2", link: "/" }, { title: "home 3", link: "/index-3" }] },
    { title: "About", link: "/about" },
    { title: "Research", link: "/portfolio", classChange: "navbar-dropdown menu-item-children", classChange2: "menu-item-has-children", subMenu: [{ title: "portfolio", link: "/portfolio" }, { title: "portfolio details", link: "/portfolio-details" }] },
    { title: "Page", link: "/services", classChange: "navbar-dropdown menu-item-children", classChange2: "menu-item-has-children", subMenu: [{ title: "services", link: "/services" }, { title: "services details", link: "/services-details" }, { title: "testimonials", link: "/testimonials" }, { title: "pricing table", link: "/pricing-table" }, { title: "faq", link: "/faq" }, { title: "Appointment", link: "/contact" }] },
    { title: "Blog", link: "/our-blog", classChange: "navbar-dropdown menu-item-children", classChange2: "menu-item-has-children", subMenu: [{ title: "our blog", link: "/our-blog" }, { title: "blog details", link: "/blog-details" }] },
    { title: "Contact", link: "/contact" },
];

export const menudata2 = [
    {
        title: "Início",
        link: "/",
    },
    {
        title: "Institucional",
        link: "#",
        classChange: "navbar-dropdown menu-item-children",
        classChange2: "menu-item-has-children",
        subMenu: [
            { title: "Mensagem das Lideranças", link: "/mensagem-liderancas" },
            { title: "Perfil Corporativo", link: "/perfil-corporativo" },
            { title: "Governança", link: "/governanca" },
            { title: "Rentabilidade 2025", link: "/rentabilidade-2025" },
            { title: "Destaques 2025", link: "/destaques-2025" },
        ],
    },
    {
        title: "Nossos Planos",
        link: "#",
        classChange: "navbar-dropdown menu-item-children",
        classChange2: "menu-item-has-children",
        subMenu: [
            { title: "Plano BD-01", link: "/plano-bd-01" },
            { title: "Plano CD-02", link: "/plano-cd-02" },
            { title: "Plano CV-03", link: "/plano-cv-03" },
            { title: "Plano CD METRÔ-DF", link: "/plano-cd-metro" },
            { title: "Plano CD-05", link: "/plano-cd-05" },
            { title: "BrasíliaPrev", link: "/brasiliaprev" },
            { title: "BrasíliaPrev 2025", link: "/brasiliaprev-2025" },
            { title: "RegiusPrev", link: "/regiusprev" },
            { title: "PGA", link: "/pga" },
        ],
    },
    {
        title: "Anexos",
        link: "#",
    },
];
export const footerdata = [
    {
        title: "Link",
        links: [
            { title2: "About Us", url: "/about" },
            { title2: "Services", url: "/services" },
            { title2: "services Details", url: "/services-details" },
            { title2: "Doctors", url: "#" },
            { title2: "Contact Us", url: "/contact" },
        ],
    },
    {
        title: "Services",
        links: [
            { title2: "Patient Resources", url: "/services-details" },
            { title2: "Payment Options", url: "/services-details" },
            { title2: "Telemedicine Portal", url: "/services-details" },
            { title2: "Insurance Information", url: "/services-details" },
            { title2: "Appointment Booking", url: "/services-details" },
        ],
    },
];
export const servicesliderdata = [
    { icon: SVGICONS.medical, title: "Medical Services", },
    { icon: SVGICONS.preventiv, title: "Preventive Care", columnstand: "two", },
    { icon: SVGICONS.surgical, title: "Surgical Care", columnstand: "three", },
    { icon: SVGICONS.mental, title: "Dental Checkup", columnstand: "for", },
    { icon: SVGICONS.preventiv, title: "Preventive Care", columnstand: "two", },
]
export const servicedata2 = [
    { icon: <img src={iconBD01} alt="Plano BD" />, title: "Plano BD", number: '01', },
    { icon: <img src={iconCD02} alt="CD-02" />, title: "CD-02", number: '02', },
    { icon: <img src={iconCV03} alt="CV-03" />, title: "CV-03", number: '03', },
    { icon: <img src={iconCDMetro} alt="CD-METRÔ-DF" />, title: "CD-METRÔ-DF", number: '04', },
    { icon: <img src={iconCD05} alt="CD-05" />, title: "CD-05", number: '05', },
    { icon: <img src={iconBrasiliaprev} alt="BRASÍLIAPREV" />, title: "BRASÍLIAPREV", number: '06', },
    { icon: <img src={iconRegiusprev} alt="REGIUSPREV" />, title: "REGIUSPREV", number: '07', },
    { icon: <img src={iconPGA} alt="PGA" />, title: "PGA", number: '08', },
]
export const portfoliodata = [
    { image: IMAGES.portfolio1, title: "Dr. Robert Lee", span: "Chief Surgron", },
    { image: IMAGES.portfolio2, title: "Dr. Jonathan Smith", span: "Pathologist", },
    { image: IMAGES.portfolio3, title: "Diagnostic Centers", span: "Healthcare", },
]
export const teamdata = [
    { image: IMAGES.teamimg1, name: "Darlene Robertson", title: "Patient Advocates", },
    { image: IMAGES.teamimg2, name: "Cameron Williamson", title: "Patient Advocates", },
    { image: IMAGES.teamimg3, name: "Savannah Nguyen", title: "Patient Advocates", },
    { image: IMAGES.teamimg4, name: "Brooklyn Simmons", title: "Patient Advocates", },
]
export const blog2 = [
    { img: IMAGES.blogtwo1, title: "including proper hydration balanced nutrition.", },
    { img: IMAGES.blogtwo2, title: "the importance of regular check-ups, screenings.", },
    { img: IMAGES.blogtwo3, title: "Understand how a balanced diet can lower your.", },
]
export const dentaldata = [
    { icon: SVGICONS.genral, title: 'General Dentistry', },
    { icon: SVGICONS.comestic, title: 'Cosmetic Dentistry', },
    { icon: SVGICONS.restorative, title: 'Restorative Dentistry', },
    { icon: SVGICONS.pediatric, title: 'Pediatric Dentistry', },
]
export const dentalswiper = [
    { image: IMAGES.dentalproject1 },
    { image: IMAGES.dentalproject2 },
    { image: IMAGES.dentalproject3 },
    { image: IMAGES.dentalproject1 },
]
export const workingdata = [
    { number: '01', title: 'Initial Consultation', },
    { number: '02', title: 'Personalized Treatment', },
    { number: '03', title: 'Treatment Execution', },
]
export const reviewslider = [
    { image: IMAGES.review, title: 'DR Tamim Hossin', },
    { image: IMAGES.reviewimg2, title: 'Md Nuristan Sheik', },
    { image: IMAGES.review, title: 'DR Tamim Hossin', },
    { image: IMAGES.reviewimg2, title: 'Md Nuristan Sheik', },
]
export const dentalblog = [
    { image: IMAGES.blogone4, title: 'The Importance of Routine Dental Check-Ups.', },
    { image: IMAGES.blogone5, title: 'Simple strategies to keep your teeth free from.', },
    { image: IMAGES.blogone6, title: 'Explore safe and effective options to achieve.', },
]
export const ourprojectdata = [
    { image: IMAGES.project1, title: 'Reducing waste', },
    { image: IMAGES.project2, title: 'health education', },
    { image: IMAGES.project3, title: 'healthcare through', },
    { image: IMAGES.project4, title: 'medical innovation', },
    { image: IMAGES.project5, title: 'Community Health', },
    { image: IMAGES.project6, title: 'Dental Facility', },
    { image: IMAGES.project7, title: 'Smile Makeover', },
    { image: IMAGES.project8, title: 'Pediatric Dental', },
    { image: IMAGES.project9, title: 'Success Stories', },
    { image: IMAGES.project10, title: 'Dental Implant', },
    { image: IMAGES.project11, title: 'Digital Dentistry', },
    { image: IMAGES.project12, title: 'Patient Education', },
]
export const servicedata = [
    { icon: SVGICONS.service1, title: 'Medical Services', },
    { icon: SVGICONS.service2, title: 'Preventive Care', },
    { icon: SVGICONS.service3, title: 'Surgical Care', },
    { icon: SVGICONS.service4, title: 'Custom Mouth guards', },
    { icon: SVGICONS.service5, title: 'Emergency Dental', },
    { icon: SVGICONS.service6, title: 'Oral Surgery', },
    { icon: SVGICONS.service7, title: 'Pediatric Dentistry', },
    { icon: SVGICONS.service8, title: 'Periodontal Care', },
    { icon: SVGICONS.service9, title: 'Dental Implants', },
]
export const brandlgodata = [
    { img: IMAGES.brandlogo1 },
    { img: IMAGES.brandlogo3 },
    { img: IMAGES.brandlogo2 },
    { img: IMAGES.brandlogo4 },
    { img: IMAGES.brandlogo6 },
    { img: IMAGES.brandlogo5 },
    { img: IMAGES.brandlogo3 },
];
export const medicaldata = [
    { img: IMAGES.project1, title: "Reducing waste", },
    { img: IMAGES.project2, title: "health education", },
    { img: IMAGES.project3, title: "healthcare through", },
    { img: IMAGES.project4, title: "medical innovation", },
    { img: IMAGES.project1, title: "Reducing waste", },
]
export const accordiondata = [
    { key: 0, title: 'How often should I visit the dentist?', },
    { key: 1, title: 'Do you offer emergency dental services?', },
    { key: 2, title: 'How can I improve my oral hygiene at home?', },
    { key: 3, title: 'What insurance plans do you accept?', },
    { key: 4, title: 'What should I do if I experience dental anxiety?', },
]
export const lightgallerydata2 = [
    { image: IMAGES.instagram1, },
    { image: IMAGES.instagram2, },
    { image: IMAGES.instagram3, },
]
export const lightgallerydata = [
    { image: IMAGES.instagram1, },
    { image: IMAGES.instagram2, },
    { image: IMAGES.instagram3, },
    { image: IMAGES.instagram4, },
    { image: IMAGES.instagram5, },
    { image: IMAGES.instagram6, },
]
export const tags = [
    { title: "Wellness", },
    { title: "Community", },
    { title: "Volunteer", },
    { title: "Whitening", },
    { title: "Dentalium", },
    { title: "Summer", },
]
export const blogdata = [
    { image: IMAGES.blogone1, date: "12", title: 'How to Maintain A Balanced Diet And Exercise.', },
    { image: IMAGES.blogone2, date: "14", title: 'Coping strategies for stress, anxiety, and depression.', },
    { image: IMAGES.blogone3, date: "16", title: 'Latest medical technologies and treatments available.', },
    { image: IMAGES.blogone1, date: "12", title: 'tips for maintaining a healthy lifestyle, from nutrition.', },
    { image: IMAGES.blogone2, date: "14", title: 'Read inspiring stories from patients who have.', },
    { image: IMAGES.blogone3, date: "16", title: 'Learn how to prevent common illnesses and manage.', },
    { image: IMAGES.blogone1, date: "12", title: 'Gain insights from our medical professionals on a.', },
    { image: IMAGES.blogone2, date: "14", title: 'Debunk common health myths and misconceptions.', },
    { image: IMAGES.blogone3, date: "16", title: 'Stay healthy year-round with advice tailored to.', },
]
export const marqueedata = [
    { image: IMAGES.health3, title: "Medical group", },
    { image: IMAGES.health2, title: "Core Services", },
    { image: IMAGES.health1, title: "Technology", },
    { image: IMAGES.health2, title: "Health blogs", },
]
export const pricingdata = [
    {
        image: IMAGES.pricingshap, title: "Basic Plan", price: 150, id: 0,
        submenu: [
            { title: "Seasonal health check-up packages.", },
            { title: "Packages for routine check-ups", },
            { title: "Acceptance of major insurance plans", },
            { title: "Interest-free installment options", },
            { title: "Tailored health plans to suit individual", },
        ]
    },
    {
        image: IMAGES.pricingshap1, title: "Standard", price: 380, id: 1,
        submenu: [
            { title: "Seasonal health check-up packages.", },
            { title: "Packages for routine check-ups", },
            { title: "Acceptance of major insurance plans", },
            { title: "Interest-free installment options", },
            { title: "Tailored health plans to suit individual", },
        ]
    },
    {
        image: IMAGES.pricingshap, title: "Premium", price: 550, id: 2,
        submenu: [
            { title: "Seasonal health check-up packages.", },
            { title: "Packages for routine check-ups", },
            { title: "Acceptance of major insurance plans", },
            { title: "Interest-free installment options", },
            { title: "Tailored health plans to suit individual", },
        ]
    },
]
export const siderbarservice = [
    { title: "Preventive Care", },
    { title: "Restorative Dentistry", },
    { title: "Cosmetic Dentistry", },
    { title: "Orthodontic Treatments", },
    { title: "Emergency Dental Care", },
]
export const thumbdata = [
    { image: IMAGES.review1, },
    { image: IMAGES.review2, },
    { image: IMAGES.review3, },
]
export const thumbdata2 = [
    { title: "Dr. Sarah", },
    { title: "Dr. James Carter", },
    { title: "Dr. Ayesha", },
]
export const chooseusdata = [
    { svg: SVGICONS.expert, title: "Expert Professionals", },
    { svg: SVGICONS.beyond, title: "Beyond treatments", },
]
