import { useRef, useEffect } from 'react';

// check if first render has happened
export function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}