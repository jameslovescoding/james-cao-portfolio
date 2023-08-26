import React from "react";

const logotext = "J.C.";
const meta = {
    title: "James Cao",
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
        <p>Re-shape the World with Technologies and Innovations.</p>
        <p>Open to new offers now!</p>
    </>),
    your_img_url: "https://avatars.githubusercontent.com/u/89162119?v=4",
};

const dataabout = {
    title: "Who am I?",
    aboutme: (<>
        <p>My Chinese name is “曹宇”. My last name is Cao, and it prounces as "Tsao". You could call me James.</p>
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
        where: "Career Break",
        date: "2021-2022",
    },
    {
        jobtitle: "Co-founder and CTO",
        where: "Skelmet Inc.",
        date: "2016-2021",
    },
];

const educationtimeline = [
    {
        school: "Columbia University",
        major: "Electrical Engineering",
        date: "2014-2015",
    },
    {
        school: "Tsinghua University",
        major: "Electrical Engineering",
        date: "2010-2014",
    }
]

const entrepeurership = [
    {
        name: "Forbes 30 under 30",
        where: "USA",
        date: "2018",
    },
    {
        name: "MassChallenge Silver Award, Final List",
        where: "Boston",
        date: "2018",
    },
    {
        name: "HAX Growth Accelerator",
        where: "San Francisco",
        date: "2017"
    }
]

const activities = [
    {
        name: "Full Stack Web Developer Program",
        where: "App Academy",
        date: "2023",
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
    linkedin: "https://www.linkedin.com/in/james-cao-15a0b477/",
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
    entrepeurership,
    activities,
};