import React from 'react';

type MouseState = {
  x: number;
  y: number;
  elementX: number;
  elementY: number;
  elementPositionX: number;
  elementPositionY: number;
}

const initState = {
  x: 0,
  y: 0,
  elementX: 0,
  elementY: 0,
  elementPositionX: 0,
  elementPositionY: 0,
}

export default function useMouse() {
  const [state, setState] = React.useState<State>(initState);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      let newState: MouseState = {
        ...initState,
        x: event.pageX,
        y: event.pageY,
      };

      if (ref.current?.nodeType === Node.ELEMENT_NODE) {
        const { left, top, right, bottom } = ref.current.getBoundingClientRect();
        const xCenter = (left + right) / 2;
        
        const yCenter = (top + bottom) / 2;
        const elementPositionX = xCenter;
        const elementPositionY = yCenter + window.scrollY;
        const elementX = event.pageX - elementPositionX;
        const elementY = event.pageY - elementPositionY;

        newState.elementX = elementX;
        newState.elementY = elementY;
        newState.elementPositionX = elementPositionX;
        newState.elementPositionY = elementPositionY;
      }

      setState((s) => {
        return {
          ...s,
          ...newState,
        };
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return {state, ref};
}
