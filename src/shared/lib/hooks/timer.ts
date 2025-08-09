import { useEffect, useRef, useState } from 'react';
import { TEST_TIMER_MS_IN_SEC } from '~shared/constants/common';

export const useTimer = (time?: number) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [second, setSecond] = useState(time || 0);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setSecond(prev => {
        if (prev <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }

          return 0;
        } else {
          return prev - 1;
        }
      });
    }, TEST_TIMER_MS_IN_SEC);
  };

  const restartIntervalTimer = () => {
    clearInterval(timerRef.current!);
    setSecond(time || 0);
    startTimer();
  };

  useEffect(() => {
    startTimer();
  }, []);

  return { second, restartIntervalTimer };
};
