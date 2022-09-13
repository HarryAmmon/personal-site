import { useEffect, useRef } from "react";

export const useClickOutsideToClose = (handler: Function) => {
  const clickRef = useRef();
  const maybeEvent = (event: Event) => {
    if (event.composedPath()[0] !== clickRef.current) {
      handler();
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", maybeEvent);
    return document.body.removeEventListener("click", maybeEvent);
  }, []);
  return clickRef;
};
