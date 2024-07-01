import arrow from '$lib/assets/icons/swirly-arrow.png';
import github from '$lib/assets/logos/github.svg';
import linkedin from '$lib/assets/logos/linkedin.svg';
import pocketbase from '$lib/assets/logos/pocketbase.svg';
import svelte from '$lib/assets/logos/svelte.svg';
import tailwind from '$lib/assets/logos/tailwind.svg';
import next from '$lib/assets/logos/next.svg';
import react from '$lib/assets/logos/react.svg';
import unity from '$lib/assets/logos/unity.svg';

function getIcon(name: string) {
  switch (name) {
    case 'arrow':
      return arrow;
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
    default:
      return null;
  }
}

export default getIcon;