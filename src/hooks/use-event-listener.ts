import { useEffect } from "react";

type UseEventListenerType = {
  name: string;
  callback: () => void;
};

export const EVENT_TYPES = {
  SCROLL: "scroll",
};

const useEventListener = ({ name, callback }: UseEventListenerType) => {
  useEffect(() => {
    window.addEventListener(name, callback);
    return () => window.removeEventListener(name, callback);
  }, []);
};

export default useEventListener;
