import { useEffect, useState } from "react";

const useClickOutside = (ref, isActive) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(false);

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && isActive) {
        setIsClicked(true);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isActive]);

  return isClicked;
};

export default useClickOutside;
