import React, { useState, useEffect, useRef } from "react";
import CountdownTracker from "./CountdownTracker";
import "./FlipClock.css";

// Helper function to calculate time remaining
const getTimeRemaining = (endtime) => {
  const t = Date.parse(endtime) - Date.parse(new Date());
  return {
    Total: t,
    Days: Math.floor(t / (1000 * 60 * 60 * 24)),
    Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
    Minutes: Math.floor((t / 1000 / 60) % 60),
    Seconds: Math.floor((t / 1000) % 60),
  };
};

// Helper function to get current time (for non-countdown scenarios)
const getTime = () => {
  const t = new Date();
  return {
    Total: t,
    Hours: t.getHours() % 12,
    Minutes: t.getMinutes(),
    Seconds: t.getSeconds(),
  };
};

const Clock = ({ countdown, callback }) => {
  const [time, setTime] = useState(
    countdown ? getTimeRemaining(countdown) : getTime()
  );
  const timeinterval = useRef(null);
  const i = useRef(0);

  useEffect(() => {
    const updateClock = () => {
      timeinterval.current = requestAnimationFrame(updateClock);

      // Update the clock only every 10 frames (to limit re-rendering)
      if (i.current++ % 10) {
        return;
      }

      const t = countdown ? getTimeRemaining(countdown) : getTime();
      if (t.Total <= 0) {
        cancelAnimationFrame(timeinterval.current);
        callback();  // Call callback when countdown finishes
        return;
      }

      setTime(t);
    };

    timeinterval.current = requestAnimationFrame(updateClock);
    return () => cancelAnimationFrame(timeinterval.current);
  }, [countdown, callback]);

  return (
    <div className="flip-clock">
      {/* Render days, hours, minutes, and seconds */}
      {time.Days > 0 && <CountdownTracker label="Days" value={time.Days} />}
      <CountdownTracker label="Hours" value={time.Hours} />
      <CountdownTracker label="Minutes" value={time.Minutes} />
      <CountdownTracker label="Seconds" value={time.Seconds} />
    </div>
  );
};

export default Clock;
