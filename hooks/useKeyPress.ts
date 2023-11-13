import React, { useEffect, useState } from 'react';

const useKeyPress = function (targetKey: string) {
  const [keyPressed, setkeyPressed] = useState(false);
  

  useEffect(() => {
    function downHandler({ key }: KeyboardEvent) {
      if (key === targetKey) {
        setkeyPressed(true);
      }
    }
  
    function upHandler({ key }: KeyboardEvent) {
      if (key === targetKey) {
        setkeyPressed(false);
      }
    }

    document.addEventListener('keydown', downHandler);
    document.addEventListener('keyup', upHandler);

    return () => {
      document.removeEventListener("keydown", downHandler);
      document.removeEventListener("keyup", upHandler);
    }
  }, [targetKey])

  return keyPressed;

}

export default useKeyPress;
