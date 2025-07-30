import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import figmaLogo from './assets/tech_logo/figma.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';


import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';

import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

import githubdetLogo from './assets/work_logo/github_det.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },  
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },

    ],
},
{
    title: 'Backend',
    skills: [
     
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
    ],
  },
   {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
   {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Frontend Developer intern",
      company: "Student Research Forum SMU",
      date: "June 2025-july2025",
      desc: "Acquired hands-on experience in building projects using React, Tailwind CSS, and TypeScript during my internship.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Tailwind CSS",
        
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "CSE Department Representative",
      company: "Alumni Association SMIT",
      date: "2025-present",
      desc: "As a member of the Alumni Engagement Cell, my responsibility is to build strong connections with alumni and invite them to our college to deliver tech talks and share valuable insights and ideas.",
      skills: [
        "Team collaboration",
        "Event planning",
        "Follow-up management",
        "networking",
        "communication",
      ],
    },];
     export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Sikkim Manipal Institute of Technology",
      date: "2023-2027",
      grade: "",
      desc: "Pursuing bachelor's degree",
      degree: "B.Tech(Computer Science and Engineering",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Ryan International School Navi Mumbai",
      date: "2021-2023",
      grade: "",
      desc: "I completed my class 12 from Ryan international school, Navi Mumbai , under the CBSE board.",
      degree: "CBSE(XII)- PCM with computer science",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Ryan International School, Navi Mumbai",
      date: "2021",
      grade: "",
      desc: "I completed my class 10 education from Ryan International School, Navi Mumbai, under the CBSE board.",
      degree: "CBSE(X)",
    },];
    export const projects = [
    {
      id: 0,
      title: "Todo App",
      description:
        "A simple and responsive ToDo app built with React, Tailwind CSS, and Supabase for real-time task management.",
      image: githubdetLogo,
      tags: ["HTML",  "JavaScript","typescript", "React JS", "Tailwindcss"],
      github: "https://github.com/Prarthanakumar/todo-app-react-supabase",
      webapp: "https://todo-app-react-supabase-5rlo.vercel.app/",
    },];