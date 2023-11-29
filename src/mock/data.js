import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Burak Akkaya',
  lang: '',
  description: 'Welcome to my inn',
};

// HERO DATA
export const heroData = {
  title: 'Hello! My name is',
  name: 'Burak',
  subtitle: 'I am a Software Engineer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'byfood.png',
    title: 'byFood',
    info: 'byFood is the best Gastronomy Tourism Start-up in the world!',
    info2: `Contributed to 15+ feature implementations using Golang, MySQL, React, and TypeScript, resulting in a 35% increase in yearly revenue.
            Analyzed 10+ user requirements to derive technical software design and performance requirements.  
      `,
    url: 'https://byfood.com/',
    repo: '', // if no repo, the button will not show up
    dates: 'January 2023 - Present',
  },
  {
    id: nanoid(),
    img: 'pingpong.jpeg',
    title: 'PingPong',
    info: 'Newest technologies. Amazing team with experienced engineers. I got to use Macbook here :P.',
    info2: `Developed a mobile app for college students with a team of 60+, serving thousands of users.
            Implemented ASP.NET Core and PostgreSQL for backend development, and worked with ElasticSearch and Redis.
            Utilized Dapper for SQL queries and improved unit testing with xUnit. Enhanced team's Scrum processes using Azure DevOps and Jira.
      `,
    url: 'https://pingpong.university/',
    repo: '', // if no repo, the button will not show up
    dates: 'May 2022 - December 2022',
  },
  {
    id: nanoid(),
    img: 'udentify.jpg',
    title: 'Udentify',
    info: 'I always wanted to work in a startup. Great team, unique business. I miss them!',
    info2: `Managed data processing and storage for a high-volume application.
       Utilized ASP.NET and ASP.NET Core, storing data in SQL Server and MongoDB.
       Developed the front-end (HTML, CSS, JavaScript, jQuery) for an MVC admin panel.
       Integrated Python scripts for automation and recently implemented Redis and RabbitMQ.`,
    url: 'http://udentify.co/',
    repo: '', // if no repo, the button will not show up
    dates: 'Dec 2020 - April 2022',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'burkakkaya8@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/burkakkayaa',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/burak--akkaya/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/akkayaburak',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
