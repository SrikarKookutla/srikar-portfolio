
import {
    Code,
    Cloud,
    Terminal,
    Database,
    FileText,
    Monitor,
    Server,
    Cpu,
    Globe,
    Layout
} from 'lucide-react';

export const profile = {
    name: "Srikar Kookutla",
    role: "QA Senior Software Engineer",
    email: "srikar.kookutla@gmail.com",
    linkedin: "https://www.linkedin.com/in/srikar-kookutla-304a22147/",
    github: "https://github.com/SrikarKookutla",
    location: "Hyderabad, India",
    profilePhoto: "profile.png",
    about: [
        "Result-driven professional targeting assignments in the domain of Software Testing, Automation Testing & Analyst in the IT industry.",
        "Experienced QA professional with over 4 years in the industry, currently working as a QA Senior Software Engineer at Trianz, specializing in test automation using Playwright and TypeScript.",
        "Proficient in Manual and Automation Testing; developed specific test cases and performed module, exploratory and integration software testing.",
        "Experience working with Migration of infrastructure to cloud (ONPREM to AWS, AWS to AWS, ONPREM TO AZURE).",
        "Expertise in Software Testing including creation of test scripts/cases, execution of Functional Tests and tracking of defects using various tools."
    ],
    skills: [
        { category: "Automation Testing", items: ["Playwright"], icon: Code },
        { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML/CSS"], icon: Terminal },
        { category: "Cloud & DevOps", items: ["AWS", "Azure", "Jenkins", "Git", "Azure DevOps"], icon: Cloud },
        { category: "Tools", items: ["Playwright", "Jira", "Postman", "Swagger", "VS Code", "Putty", "AntiGravity", "Zephyr", "Claude"], icon: Monitor },
        { category: "Operating Systems", items: ["Windows", "Linux", "Mac"], icon: Cpu },
    ],
    experience: [
        {
            id: 1,
            company: "Trianz Holdings Pvt. Ltd",
            role: "Senior Software Engineer",
            period: "Aug 2021 - Present",
            location: "Hyderabad",
            description: "Working as a QA across Scrum teams of products with Agile and waterfall model.",
            responsibilities: [
                "Automating stories as a part of DOD with the help of Playwright.",
                "Manual testing of complete product modules & Automating tests after module stabilization.",
                "Creating and maintaining the framework across the organization.",
                "Mentoring the QA team and providing reports to Managers and Product owners.",
                "Providing support to customers for hotfixes and production issues.",
                "Creating and executing test plans, defect reports, and periodic status reports.",
                "Interacting with development and testing teams to improve overall software quality."
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Concierto Cloud (Manage/Maximize/Migrate)",
            duration: "Around 4.5 Plus Years",
            role: "Senior Software Engineer",
            tech: ["Playwright", "TypeScript", "JavaScript", "Jira", "Git", "Jenkins"],
            description: "Concierto is a hybrid cloud platform that offers three core products: Manage, Migrate, and Maximize. It supports end-to-end infrastructure management and migration.",
            details: [
                "Design and Test Cases based on Automation Tasks assigned during Sprint Planning.",
                "Working as UI Automation Engineer with Playwright and JavaScript.",
                "Covered 150+ sprints tasks adapting and learning new technologies.",
                "Provided thorough verification of over 856 user stories/tasks covering UX, frontend, and backend.",
                "Created around 3208+ bugs from product through Automation and Manual.",
                "Validated developed Cloud Automations by manually logging into servers.",
                "Experience in Patching configured servers through WSUS Console.",
                "Validating Health Check of servers in line with CIS benchmarks."
            ]
        }
    ],
    education: [
        {
            degree: "B. Tech in Electronics and Communication Engineering",
            school: "Kakatiya University",
            score: "80%",
            year: "2021" // Inferred from start date of work if fresh grad, or just leave blank
        },
        {
            degree: "Intermediate in MPC",
            school: "State Board",
            score: "97%",
            year: ""
        }
    ]
};
