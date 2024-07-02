import arrow from '$lib/assets/icons/swirly-arrow.png';
import cross from '$lib/assets/icons/cross.png';

import github from '$lib/assets/logos/github.svg';
import linkedin from '$lib/assets/logos/linkedin.svg';
import pocketbase from '$lib/assets/logos/pocketbase.svg';
import svelte from '$lib/assets/logos/svelte.svg';
import tailwind from '$lib/assets/logos/tailwind.svg';
import next from '$lib/assets/logos/next.svg';
import react from '$lib/assets/logos/react.svg';
import unity from '$lib/assets/logos/unity.svg';
import godot from '$lib/assets/logos/godot.svg';
import openxr from '$lib/assets/logos/openxr.svg';
import mediapipe from '$lib/assets/logos/mediapipe.svg';
import autohotkey from '$lib/assets/logos/autohotkey.svg';

function getIcon(name: string) {
  switch (name) {
    case 'arrow':
      return arrow;
    case 'cross':
      return cross;
    case 'github':
      return github;
    case 'linkedin':
      return linkedin;
    case 'pocketbase':
      return pocketbase;
    case 'svelte':
      return svelte;
    case 'tailwind':
      return tailwind;
    case 'next':
      return next;
    case 'react':
      return react;
    case 'unity':
      return unity;
    case 'godot':
      return godot;
    case 'openxr':
      return openxr;
    case 'mediapipe':
      return mediapipe;
    case 'autohotkey':
      return autohotkey;
    default:
      return null;
  }
}

export default getIcon;