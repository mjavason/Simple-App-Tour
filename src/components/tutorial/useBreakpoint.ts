import { useEffect, useState } from 'react';
import type { Breakpoint } from './types';

function getBreakpoint(): Breakpoint {
  const width = window.innerWidth;

  if (width >= 1536) return '2xl';
  if (width >= 1280) return 'xl';
  if (width >= 1024) return 'lg';
  if (width >= 768) return 'md';
  if (width >= 640) return 'sm';

  return 'xs';
}

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint());

  useEffect(() => {
    const handler = () => setBreakpoint(getBreakpoint());
    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  return breakpoint;
}
