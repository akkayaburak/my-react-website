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
    info2: `We have a small, warm, international team. I am working as a Full Stack Engineer.
            With MySQL as database, Golang is great with Gorm!
            Also, we really like React with Typescript.  
      `,
    url: 'https://byfood.com/',
    repo: '', // if no repo, the button will not show up
    dates: 'January 2023 - Present',
  },
  {
    id: nanoid(),
    img: 'pingpong.jpeg',
    title: 'PingPong',
    info: 'Newest technologies. Amazing team with experienced engineers. I got to use Macbook here :P. Also we have PS5 in our office!',
    info2: `We had a mobile app. That\'s it. 60+ people were working on it, thousands using it! We were writing ASP.NET Core for our backend. PostgreSQL was our main database. 
      ElasticSearch, Redis and HealtCheck were also on the table. My first time with Dapper, it was great with writing SQL's. 
      Also, unit tests were very important to us using xUnit.
      We were using Scrum as software methodology with Azure DevOps. Also, we were using Jira.
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
    info2:
      'Our app was about data. We mostly used ASP.NET, ASP.NET Core for development. We stored those data in SQL Server and MongoDB. Also I developed the front-end(HTML, CSS, JavaScript, jQuery) for our MVC admin panel. I was also writing Python scripts for automation or integration.',
    url: 'http://udentify.co/',
    repo: '', // if no repo, the button will not show up
    dates: 'June 2021 - April 2022',
  },
  {
    id: nanoid(),
    img: 'tcm.png',
    title: 'TCM',
    info: 'Worked on product level SharePoint applications with the team.',
    info2:
      'Yes, first job. It was very exciting. There were about 15 people on my team. Projects were mostly turnkey. At the same time, I had the opportunity to work on a mobile application that was in development. The architecture of the project was developed with microservices and .NET Core. ',
    url: 'https://www.tcm.com.tr/',
    repo: '', // if no repo, the button will not show up
    dates: 'December 2020 - May 2021',
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
