import { FaCalculator, FaFlask, FaCode, FaGlobe } from 'react-icons/fa';
export const gridItems = [
    {
        title: "Chemistry",
        description: "I provide tutoring in both basic and advanced chemistry topics, covering fundamental principles as well as specialized areas. Some of the topics I teach include:",
        icon: FaFlask,
        topics: [
            { title: "General Chemistry", details: [
                "Atomic Structure and the Periodic Table",
                "Chemical Bonding (Ionic, Covalent, Metallic)",
                "Stoichiometry and Mole Concept",
                "Balancing Chemical Equations",
                "States of Matter: Solids, Liquids, Gases",
                "Acids and Bases: Properties, pH, Titration",
                "Thermochemistry: Heat and Enthalpy",
                "Chemical Kinetics and Reaction Rates",
                "Chemical Equilibrium",
                "Redox Reactions and Electrochemistry",
            ]},
            { title: "Organic Chemistry", details: [
                "Structure and Bonding in Organic Molecules",
                "Functional Groups (Alkanes, Alkenes, Alkynes, Alcohols, etc.)",
                "Isomerism (Structural, Geometrical, Optical)",
                "Nucleophilic Substitution and Elimination Reactions",
                "Hydrocarbons and Their Derivatives",
                "Aromatic Compounds and Benzene Reactions",
                "Organic Reactions and Mechanisms",
                "Synthesis and Analysis of Organic Compounds",
            ]},
            { title: "Inorganic Chemistry", details: [
                "Transition Metals and Coordination Chemistry",
                "Properties of Metals and Nonmetals",
                "Oxidation States and Complexes",
                "Periodicity and the Periodic Trends",
                "Crystal Field Theory",
            ]},
            { title: "Biochemistry", details: [
                "Structure and Function of Biomolecules (Proteins, Carbohydrates, Lipids, Nucleic Acids)",
                "Enzyme Kinetics",
                "Metabolic Pathways (Glycolysis, Krebs Cycle, etc.)",
                "Protein Synthesis and Genetic Code",
            ]},
        ],
        levels: ["High School", "College"],
        img: "/chemistry.svg",
    },
    {
        title: "Mathematics",
        description: "Mathematics is essential for solving real-world problems. I cover a wide range of topics, from basic algebra to advanced calculus and statistics, including:",
        icon: FaCalculator,
        topics: [
            { title: "Algebra", details: [
                "Simplifying Expressions and Polynomials",
                "Solving Linear and Quadratic Equations",
                "Exponents and Radicals",
                "Factorization and Fractions",
                "Systems of Equations (Linear, Non-Linear)",
                "Inequalities and Absolute Value",
            ]},
            { title: "Geometry", details: [
                "Basic Geometric Shapes and Properties",
                "Perimeter, Area, and Volume of 2D and 3D Shapes",
                "Congruence and Similarity",
                "Theorems on Triangles, Circles, and Angles",
                "Coordinate Geometry and the Distance Formula",
                "Trigonometry: Sine, Cosine, Tangent, and their Applications",
            ]},
            { title: "Trigonometry", details: [
                "Trigonometric Ratios and Functions",
                "Unit Circle and Angle Measurement",
                "Solving Trigonometric Equations",
                "Graphing Trigonometric Functions",
                "Trigonometric Identities and Proofs",
            ]},
            { title: "Calculus", details: [
                "Limits and Continuity",
                "Differentiation: Rules, Applications (Slope, Tangents)",
                "Integration: Basic Techniques, Area under Curves",
                "Derivatives of Polynomials, Exponentials, and Trigonometric Functions",
                "Applications of Derivatives (Maxima, Minima, Optimization)",
                "Sequences and Series",
                "Multivariable Calculus (Partial Derivatives, Multiple Integrals)",
                "Differential Equations",
            ]},
            { title: "Statistics & Probability", details: [
                "Descriptive Statistics (Mean, Median, Mode, Standard Deviation)",
                "Probability Distributions (Binomial, Normal, etc.)",
                "Hypothesis Testing",
                "Combinatorics (Permutations and Combinations)",
                "Correlation and Regression Analysis",
            ]},
        ],
        levels: ["High School", "College"],
        img: "/maths.svg",
    },
    {
        title: "Business",
        description: "In Business studies, I offer tutoring in fundamental and advanced concepts that are essential for understanding business operations, strategy, and financial management:",
        icon: FaGlobe,
        topics: [
            { title: "Business Fundamentals", details: [
                "Introduction to Business and Entrepreneurship",
                "Business Structures (Sole Proprietorship, Partnership, Corporation)",
                "Marketing Principles and Strategies",
                "Business Communication and Negotiation",
                "Organizational Behavior",
                "Human Resource Management",
                "Leadership and Management Styles",
            ]},
            { title: "Management", details: [
                "Principles of Management",
                "Strategic Planning and Decision Making",
                "Business Operations and Efficiency",
                "Risk Management and Crisis Management",
                "Project Management: Planning, Execution, and Control",
                "Leadership and Motivation Theories",
                "Corporate Social Responsibility",
            ]},
            { title: "Marketing", details: [
                "Marketing Research and Consumer Behavior",
                "Marketing Mix (Product, Price, Place, Promotion)",
                "Brand Management and Digital Marketing",
                "Social Media Marketing and Advertising",
                "Market Segmentation and Targeting",
                "Public Relations and Corporate Communication",
            ]},
            { title: "Economics", details: [
                "Microeconomics (Supply and Demand, Elasticity, Market Structures)",
                "Macroeconomics (GDP, Inflation, Unemployment)",
                "International Trade and Global Economics",
                "Monetary and Fiscal Policy",
                "Economic Indicators and their Impact on Business",
            ]},
            { title: "Finance", details: [
                "Corporate Finance and Financial Analysis",
                "Time Value of Money and Investment Valuation",
                "Budgeting and Forecasting",
                "Financial Ratios and Performance Metrics",
                "Capital Structure and Financial Markets",
                "Risk and Return Analysis",
            ]},
            { title: "Business Law", details: [
                "Contract Law and Legal Aspects of Business",
                "Intellectual Property and Copyright Laws",
                "Business Ethics and Legal Issues in Management",
                "Consumer Protection and Employment Law",
            ]},
        ],
        levels: ["High School", "College"],
        img: "/business.svg",
    },
    {
        title: "Accounting",
        description: "I offer tutoring in both financial and managerial accounting, helping students understand the principles and practices used in business accounting and finance.",
        icon: FaCode,
        topics: [
            { title: "Financial Accounting", details: [
                "Introduction to Financial Statements (Balance Sheet, Income Statement, Cash Flow Statement)",
                "The Accounting Equation: Assets = Liabilities + Equity",
                "Journal Entries and Ledger Posting",
                "Accrual vs. Cash Accounting",
                "Depreciation and Amortization",
                "Bank Reconciliation and Trial Balance",
                "Inventory Valuation (FIFO, LIFO, Weighted Average)",
                "Accounting for Receivables and Payables",
                "Closing Entries and Adjusting Entries",
            ]},
            { title: "Managerial Accounting", details: [
                "Cost Behavior and Cost-Volume-Profit Analysis",
                "Budgeting and Variance Analysis",
                "Break-even Analysis",
                "Standard Costing and Activity-Based Costing (ABC)",
                "Job Order and Process Costing",
                "Financial Decision Making and Capital Budgeting (NPV, IRR)",
                "Budget Preparation and Forecasting",
            ]},
            { title: "Corporate Accounting", details: [
                "Consolidated Financial Statements",
                "Stockholders’ Equity and Dividends",
                "Earnings Per Share (EPS) Calculation",
                "Accounting for Leases and Pensions",
                "Taxation and Deferred Taxes",
                "Accounting for Mergers and Acquisitions",
            ]},
            { title: "Auditing and Ethics", details: [
                "Principles of Auditing",
                "Internal Controls and Risk Management",
                "Ethical Standards in Accounting",
                "Auditor's Reports and Assurance Services",
                "Fraud Detection and Prevention",
            ]},
        ],
        levels: ["High School", "College"],
        img: "/accounting.svg",
    },
];


    export const pricingPlans = [
        {
          name: 'Basic',
          price: '10/hr',
          features: ['1-hour one-on-one session', 'Weekly homework review', 'Email support'],
        },
        {
          name: 'Standard',
          price: '40/week',
          features: ['one-on-one session', 'Weekly homework review', 'Study materials', '24/7 email support'],
        },
        {
          name: 'Premium',
          price: '80/month',
          features: ['Weekly progress report', 'Customized study plan', 'Practice exams', '24/7 phone and email support'],
        },
      ]

export const person = {
    firstName: 'Chiva',
    lastName:  'TutorHub',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Professional Tutor',
    avatar:    '/pfp.jpg',
    location:  'Global',        
    languages: ['English', 'Swahili']  
}

export const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/chiva_tutorhub/profilecard/?igsh=eGRsaHhkN2Y4eDls',
    },
    {
        name: 'Mobile',
        icon: 'mobile',
        link: 'tel:+254719575186',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:ochiengcharles1997@gmail.com',
    },
]

export const about = {
    label: 'About',
    title: 'About Me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: "As the founder and lead tutor at CHIVA Tutorhub, I bring 10 years of professional tutoring experience and a solid academic foundation in the subjects I teach. I am passionate about helping students understand the content and develop the critical thinking skills and confidence they need to succeed academically and in real-world applications.\n\nMy approach is centered around clear communication, active engagement, and problem-solving, creating a supportive learning environment that fosters growth and mastery."
    },
    work: {
        display: true,
        title: 'Tutoring Experience',
        experiences: [
            {
                company: 'Chiva TutorHub',
                timeframe: '2009 - Present',
                role: 'Professional Tutor',
                achievements: [
                    "Over 10 years of tutoring experience in Chemistry, Mathematics, Business, and Accounting",
                    "Helped students improve grades by 80% or more, with many students achieving A/B grades in final exams",
                    "Extensive experience with both high school and college-level students",
                    "Proven success in exam preparation, homework support, and concept mastery across a variety of curricula"
                ],
            },
        ]
    },
    studies: {
        display: true,
        title: 'Educational Background',
        institutions: [
            {
                name: 'University of Education',
                description: "•	Master’s degree in Organic chemistry and basic mathematics",
            },
            {
                name: 'State University',
                description: "•	Bachelor’s degree in education science",
            },
            {
                name: 'Professional Certifications',
                description: "•	Certified Accounting Professional •	Certified Professional Tutor in Business",
            }
        ]
    },
    technical: {
        display: true,
        title: 'Specializations',
        skills: [
            {
                title: 'Mathematics',
                description: "Expert in Algebra, Calculus, Geometry, and Advanced Mathematics with proven success in helping students master complex concepts.",
            },
            {
                title: 'Chemistry',
                description: "Specialized in Chemistry tutoring with hands-on experimental approach to learning.",
            },
            {
                title: 'Business',
                description: "Business strategy, marketing, management, and economics.",
            },
            {
                title: 'Accounting',
                description: "Financial accounting, managerial accounting, and corporate finance.",
            }
        ]
    },
    tutoringPhilosophy: {
        display: true,
        title: 'Tutoring Philosophy',
        description: [
            "I believe in personalized learning that adapts to each student's individual needs.",
            "My goal is to break down complex concepts into understandable, manageable parts, ensuring that each student feels confident and empowered.",
            "I use a variety of teaching techniques, including:",
            "• Interactive problem-solving to reinforce theoretical knowledge",
            "• Real-world applications to connect academic content with practical skills",
            "• Focused one-on-one attention to address specific learning gaps",
            "• Ongoing progress assessments to track improvements and adjust the learning plan",
            "I aim to make every session engaging, motivating, and focused on your academic goals.",
            "Whether you're preparing for exams, tackling difficult assignments, or simply looking to improve your understanding of key concepts, I’m here to support you every step of the way."
        ]
    },
    whyChoose: {
        display: true,
        title: 'Why Choose CHIVA Tutorhub?',
        description: [
            "• Expert Tutoring: I have an in-depth understanding of the subjects I teach, backed by years of academic study and hands-on tutoring experience.",
            "• Tailored Approach: Every student has unique learning needs. I provide customized tutoring plans to fit your learning style and goals.",
            "• Proven Success: My students consistently achieve higher grades and improve their understanding of complex concepts.",
            "• Flexible Sessions: Online and in-person tutoring options that fit your schedule and needs."
        ]
    },
    goals: {
        display: true,
        title: 'Let’s Achieve Your Academic Goals Together',
        description: `At CHIVA Tutorhub, I am committed to helping students unlock their full potential. Whether you are struggling with difficult concepts or aiming for top grades, I’m here to help you succeed. Let’s work together to make learning enjoyable and effective!`
    },
};