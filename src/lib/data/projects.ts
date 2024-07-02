import { libraries as lib } from "./libraries";
import { texts } from "./projectTexts";

const tags = { 'school': 'school', 'personal': 'personal', 'work': 'work', 'studentLife': 'student-life' }

export const projects = {
  'webApps': [
    {
      id: 'todo-tulip',
      name: 'Todo Tulip',
      created: 'June 2024',
      tags: [tags.school],
      url: 'https://todo-tulip.vercel.app/',
      github: 'https://github.com/sebastianlindgren00/todo-tulip',
      stack: [lib.svelte, lib.tailwind, lib.pocketbase],
      bgColor: '#492661',
      description: texts['todo-tulip']
    },
    {
      id: 'skurkeriet',
      name: 'Skurkeriet',
      created: 'August 2023',
      tags: [tags.studentLife],
      url: 'https://skurkeriet2324.vercel.app/',
      github: 'https://github.com/albus00/skurkeriet',
      stack: [lib.next, lib.tailwind],
      description: texts['skurkeriet']
    },
    {
      id: 'basaret',
      name: 'Basåret',
      created: 'June 2023',
      tags: [tags.studentLife],
      url: 'https://basaret2324.vercel.app/',
      github: 'https://github.com/albus00/basaret',
      stack: [lib.next, lib.tailwind],
      description: texts['basaret']
    },
    {
      id: 'login-page',
      name: 'Login Page',
      created: 'October 2023',
      tags: [tags.school],
      url: 'https://ak-login-page.vercel.app/',
      github: 'https://github.com/albus00/login-page',
      stack: [lib.next, lib.tailwind, lib.pocketbase],
      description: texts['login-page']
    }
  ],
  'games': [
    {
      id: 'training-in-vr',
      name: 'Training in VR',
      created: 'June 2023',
      tags: [tags.school],
      url: '[gallery]',
      github: 'https://github.com/Albus00/Traning-i-VR',
      stack: [lib.unity, lib.openxr],
      description: texts['training-in-vr']
    },
    {
      id: 'get-the-beat',
      name: 'Get The Beat',
      created: 'Mars 2024',
      tags: [tags.school],
      url: '[gallery]',
      github: 'https://github.com/sebastianlindgren00/GetTheBeatGame',
      stack: [lib.godot],
      description: texts['get-the-beat']
    }
  ],
  'otherProjects': [
    {
      id: 'couch-hand-controller',
      name: 'Couch Hand Controller',
      created: '[ongoing]',
      tags: [tags.school],
      url: '[gallery]',
      github: 'https://github.com/albus00/portfolio',
      stack: [lib.mediapipe],
      description: texts['couch-hand-controller'],
    },
    {
      id: 'custom-numpad',
      name: 'Custom Numpad',
      created: '[ongoing]',
      tags: [tags.personal],
      url: '[gallery]',
      github: 'https://github.com/Albus00/AutoHotkey',
      stack: [lib.autohotkey],
      description: texts['custom-numpad'],
    }
  ]
};
