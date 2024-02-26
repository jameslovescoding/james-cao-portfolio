import React from "react";

const logotext = "J.C.";
const meta = {
    title: "James Cao Portfolio",
    description: "I'm James Cao, a entrepeurer and full stack web developer.",
};

const introdata = {
    title: "Hi, I'm James Cao",
    animated: {
        first: "Full Stack Web Developer  ",
        second: "Entrepreneur  ",
        third: "Tech Enthusiast  ",
        fourth: "DIY-er  ",
        fifth: "Gym Guy  ",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: (<>
        <p>Highly skilled <b>software engineer</b> with over <b>5 years of experience</b> in implementing complex software solutions, utilizing design patterns and best practices. Seeking a challenging role as a <b>web developer</b> in a dynamic and innovative organization. <b>Green Card holder</b> with the legal right to work in the US without requiring visa sponsorship. Prefer the flexibility for <b>remote work</b> or a hybrid arrangement in the <b>Greater Boston area.</b></p>
    </>),
    your_img_url: "https://avatars.githubusercontent.com/u/89162119?v=4",
};

const dataabout = {
    title: "Who am I?",
    aboutme: (<>
        <p>My Chinese name is “曹宇”. My last name is Cao, and it pronounced as "Tsao". You could call me James.</p>
        <p>I'm a graduate of Tsinghua University,
            often ranked among the top educational institutions in China,
            where I specialized in Electrical Engineering.
            I continued my academic journey in the vibrant city of New York,
            earning a Master's degree in Electrical Engineering from Columbia University.
            My educational background has equipped me with the skills
            to quickly grasp complex concepts.
        </p>
        <p>After completing my studies, I co-founded Skelmet Inc.,
            a venture that harnessed the power of parametric design
            algorithms to revolutionize the world of sunglasses frames.
            Our innovative approach earned me the prestigious Forbes
            30 under 30 recognition in 2018. I am passionate about
            what I do, and it's been incredibly fulfilling to contribute
            to projects such as designing frames for patients at Mass
            Eye and Ear Hospital and participating in government
            research initiatives focusing on eye-related diseases.
        </p>
        <p>However, life took an unexpected turn during the challenging
            times of the COVID-19 pandemic. I took a career break
            to provide care and support to my wife and our two
            newborn babies, prioritizing family during those crucial moments.
        </p>
        <p>In 2023, I made the deliberate decision to return to the professional
            arena, this time venturing into the world of web development.
            I undertook intensive training at App Academy,
            gaining expertise in cutting-edge web technologies
            like React and Node. My wife, who is a part of Google's
            dynamic workforce, has been my invaluable career coach
            and unwavering supporter throughout this journey.
            I'm immensely grateful for her encouragement and guidance.
        </p>
        <p>Let's connect and explore how I can be a valuable asset to your company.</p>
    </>)
}

const worktimeline = [
    {
        jobtitle: "Stay Home Dad",
        employer: "Career Break",
        where: "Boston, MA",
        when: "2021/05 - 2023/03",
        projects: [
            {
                project: "Solved 300+ problems on LeetCode."
            },
            {
                project: "Learned iOS & Swift course by Dr. Angela Yu on Udemy.com."
            },
            {
                project: "Learned Machine Learning and Deep Learning course by Andrew Ng on Coursera.com."
            },
        ],
    },
    {
        jobtitle: "Co-founder and CTO",
        employer: "Skelmet Inc.",
        where: "Boston, MA",
        when: "2016/03 - 2021/05",
        projects: [
            {
                project: "Co-founded the company as CTO and spearheaded the development of the industry's first parametric design system for personalized custom-fit sunglass frames, securing $500,000 in angel investment. Recognized by Forbes 30 Under 30 in 2018 and featured in several other prominent magazines in 2018."
            },
            {
                project: "Served as the principal investigator for an NIH-funded research program in collaboration with Mass Eye and Ear Hospital, leading the design of medical devices for vision rehabilitation. These innovations positively impacted 20+ patients, significantly improving their eye functions from ptosis. Secured a total of $150,000 in funding for the Phase I program in 2019."
            },
            {
                project: "Led a dynamic software development team in the creation of multiple 3D scanning apps on the iOS platform, facilitating precise head measurements for customized eyewear frame design. Accumulated over 1000 valuable 3D head scanning samples, which played a pivotal role in product research and development in 2019."
            },
            {
                project: "Developed the company's e-commerce shopping website utilizing WordPress, HTML, CSS, and Javascript, effectively managing a high volume of orders and contributing to a revenue of $50,000 in 2020."
            },
            {
                project: "Innovated and designed a patented hinge system for sunglasses frames, initiating contact with the manufacturer and successfully delivering a premium-quality product to the market in 2019."
            },
            {
                project: "Designed and Implemented a PDF generation system showing custom-fit specs using Python and Latex, letting customers know better about the uniqueness of their sunglasses frames, which are used in hundreds of orders."
            },
        ],
    },
];

const educationtimeline = [
    {
        school: "App Academy",
        where: "Fulltime Online",
        when: "2023/03 - 2023/09",
        description: "A rigorous six-month, full-time online program for full-stack web development, 1000-hour immersive learning and training, with <3% acceptance rate and >50% elimination rate.",
        degree: "Teaches full-stack web development: Python, SQL, JavaScript, React, TDD, algorithms, design patterns, and programming best practices. Topics include TDD, scalability, algorithms, OOP, coding style, REST, security, single-page apps, and web development best practices.",
    },
    {
        school: "Columbia University",
        where: "New York City, NY",
        when: "2014/09 - 2015/12",
        description: "Ivy League, one of the top five universities in the US",
        degree: "Master of Science in Electrical Engineering",
    },
    {
        school: "Tsinghua University",
        where: "Beijing, China",
        when: "2010/09 - 2014/07",
        description: "The top engineering university in China",
        degree: "Bachelor of Science in Electrical Engineering",
    },
]

const award = [
    {
        name: "Forbes 30 under 30",
        where: "North America",
        when: "2018",
        description: "An annual list published by Forbes magazine that recognizes outstanding individuals under the age of 30 who have achieved notable success and made significant contributions in their respective fields."
    },
    {
        name: "MassChallenge Silver Award",
        where: "Boston, MA",
        when: "2018",
        description: "A global nonprofit accelerator program and competition that supports early-stage startups by providing resources, mentorship, and access to potential investors and partners."
    },
    {
        name: "HAX Growth Accelerator",
        where: "San Francisco, CA",
        when: "2017",
        description: "A program designed to foster the growth of hardware startups by providing funding, mentorship, and access to a network of experts and resources, with a focus on product development and scaling."
    }
]

const skills = [
    {
        name: (<>
            <span>React</span>
        </>)
    },
    {
        name: (<>
            <span>Redux</span>
        </>)
    },
    {
        name: (<>
            <span>Thunk</span>
        </>)
    },
    {
        name: (<>
            <span>Node.js</span>
        </>)
    },
    {
        name: (<>
            <span>Express</span>
        </>)
    },
    {
        name: (<>
            <span>HTML5</span>
        </>)
    },
    {
        name: (<>
            <span>CSS3</span>
        </>)
    },
    {
        name: (<>
            <span>Javascript</span>
        </>)
    },
    {
        name: (<>
            <span>Python</span>
        </>)
    },
    {
        name: (<>
            <span>Flask</span>
        </>)
    },
    {
        name: (<>
            <span>SQL</span>
        </>)
    },
    {
        name: (<>
            <span>SQLite</span>
        </>)
    },
    {
        name: (<>
            <span>Postgres</span>
        </>)
    },
    {
        name: (<>
            <span>Sequelize</span>
        </>)
    },
    {
        name: (<>
            <span>SQLAlchemy</span>
        </>)
    },
    {
        name: (<>
            <span>Alembic</span>
        </>)
    },
    {
        name: (<>
            <span>Git</span>
        </>)
    },
    {
        name: (<>
            <span>AWS</span>
        </>)
    },
    {
        name: (<>
            <span>Socket.IO</span>
        </>)
    },
    {
        name: (<>
            <span>Jinja</span>
        </>)
    },
];

const dataportfolio = [
    {
        title: "AirDoD",
        img: "https://github.com/jameslovescoding/AirDoD/blob/main/images/airdod_screenshot_1.png?raw=true",
        description: "An AirBnB clone using React, Node, Express, Sequelize and Postgres.",
        liveLink: "https://airdod.onrender.com/",
        githubRepo: "https://github.com/jameslovescoding/AirDoD",
    },
    {
        title: "Flow",
        img: "https://github.com/jameslovescoding/Flow/blob/main/database_schema/App%20Screenshot.png?raw=true",
        description: "A social and music sharing app using Python, Flask, React and AWS S3.",
        liveLink: "https://flow-85lr.onrender.com/",
        githubRepo: "https://github.com/jameslovescoding/Flow",
    },
];

const contactConfig = {
    YOUR_EMAIL: "caoyu19920414@gmail.com",
    YOUR_PHONE_NUMBER: "+1 646-334-5770",
    description: "Looking forward to hearing from you!",
    Your_LOCATION: "Boston, Massachusetts",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    YOUR_USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
};

const socialprofils = {
    github: "https://github.com/jameslovescoding",
    linkedin: "https://www.linkedin.com/in/yu-cao-15a0b477/",
    wellfound: "https://wellfound.com/u/yu-cao-12",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    educationtimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    award,
};