# Simple App Tour

A lightweight, fully customizable app tour/onboarding component for React. Walk users through your UI step-by-step using a character mascot, speech bubbles, element highlighting, and animated pointer icons — all without any external tour library.

## Features

- **Character mascot + speech bubble** — Display a guide character alongside a speech bubble at any position on screen
- **Element highlighting** — Dim the entire page and spotlight a specific element with a gold border using only its DOM `id`
- **Pointer icons** — Place an arrow/pointer image relative to a highlighted element to draw the user's eye
- **Interactive step advancement** — Steps can advance via a "Continue" button, or automatically when the user **clicks** or **hovers** over the highlighted element
- **Fully responsive** — All sizes and positions adapt automatically across breakpoints (`xs` → `2xl`)
- **Zero dependencies** — Built with React, inline styles, and Tailwind CSS; no third-party tour library required

## Getting Started

```bash
npm install
npm run dev
```

Visit `/test-tutorial` to see a live demo of the tour in action.

## How To Use

### 1. Define your steps

Create an array of `TutorialStep` objects. Each step controls what is shown and where.

```ts
import type { TutorialStep } from '@/components/tutorial/types';

const mySteps: TutorialStep[] = [
  {
    title: 'Welcome!',
    content: 'This is the home page. Let me show you around.',
    textPlacement: 'top-right',
    characterPosition: {
      icon: myCharacterImage, // any image src string
      placement: 'left',
    },
  },
  {
    title: 'The Dashboard',
    content: 'Here you can see all your stats at a glance.',
    textPlacement: 'top-left',
    characterPosition: {
      icon: myCharacterPointingLeft,
      placement: 'right',
    },
    pointerPosition: {
      icon: myArrowIcon,
      placement: 'top-right', // position relative to highlighted element
    },
    highlight: {
      elementId: 'dashboard-widget', // matches id="dashboard-widget" in your DOM
      action: 'none', // 'none' | 'click' | 'hover' | 'next'
    },
  },
  {
    content: 'Click the button below to continue your journey!',
    characterPosition: {
      icon: myCharacterImage,
      placement: 'left',
    },
    highlight: {
      elementId: 'cta-button',
      action: 'click', // tour advances automatically when the user clicks this element
    },
  },
];
```

### 2. Render the `Tutorial` component

```tsx
import Tutorial from '@/components/tutorial/Tutorial';

function MyPage() {
  const [tourOpen, setTourOpen] = useState(true);

  return (
    <>
      <Tutorial
        isOpen={tourOpen}
        steps={mySteps}
        onFinish={() => setTourOpen(false)}
      />
      {/* your page content */}
    </>
  );
}
```

### `Tutorial` Props

| Prop       | Type             | Required | Description                                    |
| ---------- | ---------------- | -------- | ---------------------------------------------- |
| `isOpen`   | `boolean`        | ✅       | Controls whether the tour overlay is visible   |
| `steps`    | `TutorialStep[]` | ✅       | Array of steps to walk through                 |
| `onFinish` | `() => void`     | —        | Callback fired when the last step is completed |

### `TutorialStep` Shape

| Field               | Type                          | Description                                                        |
| ------------------- | ----------------------------- | ------------------------------------------------------------------ |
| `title`             | `string`                      | Optional bold heading inside the speech bubble                     |
| `content`           | `string`                      | Main text shown in the speech bubble                               |
| `textPlacement`     | `Placement`                   | Where the speech bubble sits relative to the character             |
| `characterPosition` | `{ icon, placement, width? }` | Mascot image and its screen position                               |
| `pointerPosition`   | `{ icon, placement, width? }` | Arrow/pointer image positioned relative to the highlighted element |
| `highlight`         | `{ elementId, action }`       | DOM element to spotlight and how the user advances                 |
| `actionButtonText`  | `string`                      | Custom label for the "Continue" button (defaults to `"Continue"`)  |

### Placement values

All `placement` fields accept one of:

```
'top-left' | 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left'
```

### Highlight actions

| Action    | Behaviour                                                                     |
| --------- | ----------------------------------------------------------------------------- |
| `'none'`  | Shows a "Continue" button — user clicks it to proceed                         |
| `'click'` | Tour advances automatically when the user clicks the highlighted element      |
| `'hover'` | Tour advances automatically when the user hovers over the highlighted element |
| `'next'`  | Advances programmatically (no user interaction required)                      |

## Project Structure

```
src/components/tutorial/
├── Tutorial.tsx        # Main overlay component
├── useTutorial.ts      # Step state and event binding hook
├── useBreakpoint.ts    # Responsive breakpoint hook
├── types.ts            # All TypeScript types
├── constants.ts        # Character and text position maps
├── functions.ts        # Size/position calculation helpers
├── steps.ts            # Example step definitions
└── PositionPicker.tsx  # Dev utility for dragging icons to find positions
```

## Building For Production

```bash
npm run build
```

## Testing

```bash
npm run test
```

## Linting & Formatting

```bash
npm run lint
npm run format
npm run check
```

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TanStack Router](https://tanstack.com/router) (file-based routing)
- [TanStack Query](https://tanstack.com/query)
- [Vitest](https://vitest.dev/)
