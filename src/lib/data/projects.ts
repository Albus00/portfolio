import { libraries as lib } from "./libraries";

const tags = { 'school': 'school', 'personal': 'personal', 'work': 'work', 'studentLife': 'student-life' }

export const projects = {
  'webApps': [
    {
      id: 'todo-tulip',
      name: 'Todo Tulip',
      tags: [tags.school],
      url: 'https://todo-tulip.vercel.app/',
      github: 'https://github.com/sebastianlindgren00/todo-tulip',
      stack: [lib.svelte, lib.tailwind, lib.pocketbase],
      description: 'This is a description of Todo Tulip'
    },
    {
      id: 'skurkeriet',
      name: 'Skurkeriet',
      description: 'This is a description of Skurkeriet',
      tags: [tags.studentLife],
      url: 'https://skurkeriet2324.vercel.app/',
      github: 'https://github.com/albus00/skurkeriet',
      stack: [lib.next, lib.tailwind]
    },
    {
      id: 'basaret',
      name: 'Basåret',
      description: 'This is a description of Basåret',
      tags: [tags.studentLife],
      url: 'https://basaret2324.vercel.app/',
      github: 'https://github.com/albus00/basaret',
      stack: [lib.next, lib.tailwind]
    },
    {
      id: 'login-page',
      name: 'Login Page',
      description: 'This is a description of Login Page',
      tags: [tags.school],
      url: 'https://ak-login-page.vercel.app/',
      github: 'https://github.com/albus00/login-page',
      stack: [lib.next, lib.tailwind, lib.pocketbase]
    }
  ],
  'games': [
    {
      id: 'tic-tac-toe',
      name: 'Tic Tac Toe',
      description: 'This is a description of Tic Tac Toe',
      tags: [tags.school],
      url: 'https://tic-tac-toe-ak.vercel.app/',
      github: 'https://github.com/albus00/tic-tac-toe',
      stack: [lib.unity]
    }
  ],
  'otherProjects': [
    {
      id: 'portfolio',
      name: 'Portfolio',
      description: 'This is a description of Portfolio',
      tags: [tags.school],
      url: 'https://ak-portfolio.vercel.app/',
      github: 'https://github.com/albus00/portfolio',
      stack: [lib.svelte, lib.tailwind]
    },
    {
      id: 'calculator',
      name: 'Calculator',
      description: 'This is a description of Calculator',
      tags: [tags.school],
      url: 'https://calculator-ak.vercel.app/',
      github: 'https://github.com/albus00/calculator',
      stack: [lib.svelte, lib.tailwind]
    },
    {
      id: 'weather-app',
      name: 'Weather App',
      description: 'This is a description of Weather App',
      tags: [tags.school],
      url: 'https://weather-app-ak.vercel.app/',
      github: 'https://github.com/albus00/weather-app',
      stack: [lib.svelte, lib.tailwind]
    }
  ]
};
