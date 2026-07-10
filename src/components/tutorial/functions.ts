import type { Breakpoint, Placement } from './types';

// stable
export function get2xlPointerPosition(rect: DOMRect, placement: Placement) {
  switch (placement) {
    case 'top':
      return {
        left: rect.left, // ✅
        top: rect.top - rect.height * 2,
      };
    case 'top-right':
      return {
        left: rect.left + rect.width / 2, // ✅
        top: rect.top - rect.height * 2,
      };
    case 'right':
      return {
        left: rect.right + 40,
        top: rect.top, // ✅
      };
    case 'bottom-right':
      return {
        left: rect.right - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };
    case 'bottom':
      return {
        left: rect.left, // ✅
        top: rect.bottom + 20,
      };

    case 'bottom-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };

    case 'left':
      return {
        left: rect.left - rect.width - 50,
        top: rect.top, // ✅
      };

    case 'top-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.top - rect.height * 2,
      };
  }
}

// stable
export function getXlPointerPosition(rect: DOMRect, placement: Placement) {
  switch (placement) {
    case 'top':
      return {
        left: rect.left, // ✅
        top: rect.top - rect.height * 2 + 20,
      };
    case 'top-right':
      return {
        left: rect.left + rect.width / 2, // ✅
        top: rect.top - rect.height * 2 + 20,
      };
    case 'right':
      return {
        left: rect.right + 20,
        top: rect.top, // ✅
      };
    case 'bottom-right':
      return {
        left: rect.right - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };
    case 'bottom':
      return {
        left: rect.left, // ✅
        top: rect.bottom + 20,
      };

    case 'bottom-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };

    case 'left':
      return {
        left: rect.left - rect.width - 20,
        top: rect.top, // ✅
      };

    case 'top-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.top - rect.height * 2 + 20,
      };
  }
}

// fairly stable
export function getLgPointerPosition(rect: DOMRect, placement: Placement) {
  switch (placement) {
    case 'top':
      return {
        left: rect.left, // ✅
        top: rect.top - rect.height * 2 + 20,
      };
    case 'top-right':
      return {
        left: rect.left + rect.width / 2, // ✅
        top: rect.top - rect.height * 2 + 20,
      };
    case 'right':
      return {
        left: rect.right + 20,
        top: rect.top, // ✅
      };
    case 'bottom-right':
      return {
        left: rect.right - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };
    case 'bottom':
      return {
        left: rect.left, // ✅
        top: rect.bottom + 20,
      };

    case 'bottom-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };

    case 'left':
      return {
        left: rect.left - rect.width - 20,
        top: rect.top, // ✅
      };

    case 'top-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.top - rect.height * 2 + 20,
      };
  }
}

// stable
export function getMdPointerPosition(rect: DOMRect, placement: Placement) {
  switch (placement) {
    case 'top':
      return {
        left: rect.left, // ✅
        top: rect.top - rect.height * 2 + 30,
      };
    case 'top-right':
      return {
        left: rect.left + rect.width / 2, // ✅
        top: rect.top - rect.height * 2 + 30,
      };
    case 'right':
      return {
        left: rect.right + 20,
        top: rect.top, // ✅
      };
    case 'bottom-right':
      return {
        left: rect.right - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };
    case 'bottom':
      return {
        left: rect.left, // ✅
        top: rect.bottom + 20,
      };

    case 'bottom-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };

    case 'left':
      return {
        left: rect.left - rect.width - 4,
        top: rect.top, // ✅
      };

    case 'top-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.top - rect.height * 2 + 30,
      };
  }
}

// stable
export function getSmPointerPosition(rect: DOMRect, placement: Placement) {
  switch (placement) {
    case 'top':
      return {
        left: rect.left, // ✅
        top: rect.top - rect.height * 2 + 48,
      };
    case 'top-right':
      return {
        left: rect.left + rect.width / 2, // ✅
        top: rect.top - rect.height * 2 + 48,
      };
    case 'right':
      return {
        left: rect.right + 20,
        top: rect.top, // ✅
      };
    case 'bottom-right':
      return {
        left: rect.right - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };
    case 'bottom':
      return {
        left: rect.left, // ✅
        top: rect.bottom + 20,
      };

    case 'bottom-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };

    case 'left':
      return {
        left: rect.left - rect.width + 20,
        top: rect.top, // ✅
      };

    case 'top-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.top - rect.height * 2 + 48,
      };
  }
}

// stable
export function getXsPointerPosition(rect: DOMRect, placement: Placement) {
  switch (placement) {
    case 'top':
      return {
        left: rect.left, // ✅
        top: rect.top - rect.height * 2 + 68,
      };
    case 'top-right':
      return {
        left: rect.left + rect.width / 2, // ✅
        top: rect.top - rect.height * 2 + 68,
      };
    case 'right':
      return {
        left: rect.right + 20,
        top: rect.top, // ✅
      };
    case 'bottom-right':
      return {
        left: rect.right - rect.width / 2, // ✅
        top: rect.bottom + 20,
      };
    case 'bottom':
      return {
        left: rect.left, // ✅
        top: rect.bottom + 20,
      };

    case 'bottom-left':
      return {
        left: rect.left - rect.width / 2 + 40, // ✅
        top: rect.bottom + 20,
      };

    case 'left':
      return {
        left: rect.left - rect.width + 40,
        top: rect.top, // ✅
      };

    case 'top-left':
      return {
        left: rect.left - rect.width / 2, // ✅
        top: rect.top - rect.height * 2 + 68,
      };
  }
}

// Fairly stabilized, but may need some tweaking for different screen sizes
export function getPointerPosition(
  rect: DOMRect,
  placement: Placement,
  breakpoint: Breakpoint,
) {
  switch (breakpoint) {
    case 'xs':
      return getXsPointerPosition(rect, placement);
    case 'sm':
      return getSmPointerPosition(rect, placement);
    case 'md':
      return getMdPointerPosition(rect, placement);
    case 'lg':
      return getLgPointerPosition(rect, placement);
    case 'xl':
      return getXlPointerPosition(rect, placement);
    case '2xl':
      return get2xlPointerPosition(rect, placement);
  }
}

export function getCharacterWidth(breakpoint: string) {
  switch (breakpoint) {
    case 'xs':
      return 160;
    case 'sm':
      return 180;
    case 'md':
      return 200;
    case 'lg':
      return 240;
    case 'xl':
      return 280;
    case '2xl':
      return 300;
  }
}

export function getPointerWidth(breakpoint: string) {
  switch (breakpoint) {
    case 'xs':
      return 40;
    case 'sm':
      return 60;
    case 'md':
      return 80;
    case 'lg':
      return 100;
    case 'xl':
      return 100;
    case '2xl':
      return 120;
  }
}

export function getSpeechBubbleWidth(breakpoint: string) {
  switch (breakpoint) {
    case 'xs':
      return 250;
    case 'sm':
      return 300;
    case 'md':
      return 350;
    case 'lg':
      return 350;
    case 'xl':
      return 350;
    case '2xl':
      return 350;
  }
}

export function getSpeechBubbleFontSize(breakpoint: string) {
  switch (breakpoint) {
    case 'xs':
      return 12;
    case 'sm':
      return 14;
    case 'md':
      return 16;
    case 'lg':
      return 16;
    case 'xl':
      return 16;
    case '2xl':
      return 16;
  }
}

export function getSpeechBubbleClass(placement: Placement) {
  switch (placement) {
    case 'left':
      return 'bubble-left';

    case 'right':
      return 'bubble-right';

    default:
      return 'bubble-right';
  }
}

export function getTailStyle(placement: Placement): React.CSSProperties {
  const base: React.CSSProperties = {
    position: 'absolute',
    width: 20,
    height: 20,
    background: 'white',
    transform: 'rotate(45deg)',
  };

  switch (placement) {
    case 'left':
      return {
        ...base,
        left: -10,
        top: 32,
      };

    case 'right':
      return {
        ...base,
        right: -10,
        top: 32,
      };

    default:
      return base;
  }
}
