import { useState, useEffect } from "react";
export const useTimeout = (delay) => {
  const [time, setTime] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(true);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  });
  return time;
};
