import useEventListener, { EVENT_TYPES } from "@hooks/use-event-listener";
import { useState } from "react";

const useNavbarTransition = () => {
  const [showBgColor, setShowBgColor] = useState(false);

  const transitionNavbarHandler = () => {
    if (window.scrollY > 100) setShowBgColor(true);
    else setShowBgColor(false);
  };
  useEventListener({
    name: EVENT_TYPES.SCROLL,
    callback: transitionNavbarHandler,
  });
  return { showTransition: showBgColor };
};

export default useNavbarTransition;
