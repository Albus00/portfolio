import { libraries as lib } from "./libraries";

const tags = { 'school': 'school', 'personal': 'personal', 'work': 'work', 'studentLife': 'student-life' }

export const projects = {
  'webApps': [
    {
      name: 'Todo Tulip',
      description: 'This is a description of Todo Tulip',
      tags: [tags.school],
      url: 'https://todo-tulip.vercel.app/',
      stack: [lib.svelte, lib.tailwind, lib.pocketbase]
    },
    {
      name: 'Skurkeriet',
      description: 'This is a description of Skurkeriet',
      tags: [tags.studentLife],
      url: 'https://skurkeriet2324.vercel.app/',
      stack: [lib.next, lib.tailwind]
    },
    {
      name: 'Basåret',
      description: 'This is a description of Basåret',
      tags: [tags.studentLife],
      url: 'https://basaret2324.vercel.app/',
      stack: [lib.next, lib.tailwind]
    },
    {
      name: 'Login Page',
      description: 'This is a description of Login Page',
      tags: [tags.school],
      url: 'https://ak-login-page.vercel.app/',
      stack: [lib.next, lib.tailwind, lib.pocketbase]
    }
  ],
  'games': [
    {
      name: 'Tic Tac Toe',
      description: 'This is a description of Tic Tac Toe',
      url: 'https://tic-tac-toe-ak.vercel.app/',
      stack: [lib.unity]
    }
  ],
  'otherProjects': [
    {
      name: 'Portfolio',
      description: 'This is a description of Portfolio',
      url: 'https://ak-portfolio.vercel.app/',
      stack: [lib.svelte, lib.tailwind]
    },
    {
      name: 'Calculator',
      description: 'This is a description of Calculator',
      url: 'https://calculator-ak.vercel.app/',
      stack: [lib.svelte, lib.tailwind]
    },
    {
      name: 'Weather App',
      description: 'This is a description of Weather App',
      url: 'https://weather-app-ak.vercel.app/',
      stack: [lib.svelte, lib.tailwind]
    }
  ]
};