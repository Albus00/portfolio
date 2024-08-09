import { libraries as lib } from "./libraries";
import { texts } from "./projectTexts";

const tags = { 'school': 'school', 'personal': 'personal', 'work': 'work', 'studentLife': 'student-life' }

export const projects = [
  {
    id: 'skurkeriet',
    name: 'Skurkeriet',
    client: 'Linköpings University',
    tags: [tags.studentLife],
    url: 'https://skurkeriet2324.vercel.app/',
    github: 'https://github.com/albus00/skurkeriet',
    stack: [lib.next, lib.tailwind],
    description: texts['skurkeriet']
  },
  {
    id: 'todo-tulip',
    name: 'Todo Tulip',
    client: 'School project',
    tags: [tags.school],
    url: 'https://todo-tulip.vercel.app/',
    github: 'https://github.com/sebastianlindgren00/todo-tulip',
    stack: [lib.svelte, lib.tailwind, lib.pocketbase],
    bgColor: '#492661',
    description: texts['todo-tulip']
  },
  {
    id: 'basaret',
    name: 'Basåret',
    client: 'Linköpings University',
    tags: [tags.studentLife],
    url: 'https://basaret2324.vercel.app/',
    github: 'https://github.com/albus00/basaret',
    stack: [lib.next, lib.tailwind],
    description: texts['basaret']
  },
  {
    id: 'login-page',
    name: 'Login Page',
    client: 'School project',
    tags: [tags.school],
    url: 'https://ak-login-page.vercel.app/',
    github: 'https://github.com/albus00/login-page',
    stack: [lib.next, lib.tailwind, lib.pocketbase],
    description: texts['login-page']
  },
  {
    id: 'training-in-vr',
    name: 'Training in VR',
    client: "Bachelor's thesis",
    tags: [tags.school],
    url: '[gallery]',
    github: 'https://github.com/Albus00/Traning-i-VR',
    stack: [lib.unity, lib.openxr],
    description: texts['training-in-vr']
  },
  {
    id: 'get-the-beat',
    name: 'Get The Beat',
    client: 'School project',
    tags: [tags.school],
    url: '[gallery]',
    github: 'https://github.com/sebastianlindgren00/GetTheBeatGame',
    stack: [lib.godot],
    description: texts['get-the-beat']
  }
];
