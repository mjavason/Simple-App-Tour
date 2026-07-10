import {
  gHandOnWaist,
  gPointLeft,
  gPointRight,
  gPointUp,
  pointerLeftDown,
  pointerRight,
  pointerRightUp,
} from '@/assets';
import type { TutorialStep } from './types';

export const WelcomeSteps: TutorialStep[] = [
  {
    title: 'Welcome to the GrandmaWura Hub',
    content:
      'Ah Ha! Hello there, My name is Grandma Wura and welcome to my Hub! We are going have fun learning about our African Heritage, interesting skills and taking care of our environment',
    textPlacement: 'top-right',
    characterPosition: {
      icon: gHandOnWaist,
      placement: 'left',
    },
  },

  {
    title: 'Eco House',
    content:
      'Over here we will learn about our environment and how our actions can make the world a cleaner and safer place',
    textPlacement: 'top-left',
    characterPosition: {
      icon: gPointLeft,
      placement: 'right',
    },
    pointerPosition: {
      icon: pointerLeftDown,
      placement: 'top-right',
    },
    highlight: {
      elementId: 'eco-house-svg',
      action: 'none',
    },
  },

  {
    title: 'HQ',
    content:
      'Through stories, proverbs, fun activities, and everyday lessons, the HQ will help discover values that will guide you wherever you go.',
    textPlacement: 'top-right',
    characterPosition: {
      icon: gPointUp,
      placement: 'left',
    },
    pointerPosition: {
      icon: pointerLeftDown,
      placement: 'top-right',
    },
    highlight: {
      elementId: 'hq-svg',
      action: 'none',
    },
  },

  {
    title: 'Spotlight',
    content:
      'The Spotlight is the hub for creativity and expression. It is where we learn to Act, Sing, Dance and show all of our creativity that would throw us into the SPOTLIGHT!!',
    textPlacement: 'top-right',
    characterPosition: {
      icon: gPointRight,
      placement: 'left',
    },
    pointerPosition: {
      icon: pointerRightUp,
      placement: 'bottom-left',
    },
    highlight: {
      elementId: 'spotlight-svg',
      action: 'none',
    },
  },

  {
    title: 'Hub TV',
    content:
      'A good story stays in the heart forever. At the Hub TV get to Watch, Sing along and let every video teach you something new.',
    textPlacement: 'top-right',
    characterPosition: {
      icon: gPointRight,
      placement: 'left',
    },
    pointerPosition: {
      icon: pointerRight,
      placement: 'left',
    },
    highlight: {
      elementId: 'hub-tv-svg',
      action: 'none',
    },
  },

  {
    content:
      'Now that we know what each faculty is about, lets take a look at one of them. Click on the HQ to explore all the fun it has to offer!',
    textPlacement: 'top-right',
    characterPosition: {
      icon: gHandOnWaist,
      placement: 'left',
    },
    pointerPosition: {
      icon: pointerLeftDown,
      placement: 'top-right',
    },
    highlight: {
      elementId: 'hq-svg',
      action: 'click',
    },
  },
];
