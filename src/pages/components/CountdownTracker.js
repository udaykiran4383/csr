import React, { useEffect, useRef } from "react";
import "./FlipClock.css";

const CountdownTracker = ({ label, value }) => {
  const el = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const backRef = useRef(null);
  const backBottomRef = useRef(null);
  const currentValue = useRef(value);

  useEffect(() => {
    const update = (val) => {
      val = ("0" + val).slice(-2);
      if (val !== currentValue.current) {
        if (currentValue.current >= 0) {
          backRef.current.setAttribute("data-value", currentValue.current);
          bottomRef.current.setAttribute("data-value", currentValue.current);
        }
        currentValue.current = val;
        topRef.current.innerText = currentValue.current;
        backBottomRef.current.setAttribute("data-value", currentValue.current);

        el.current.classList.remove("flip");
        void el.current.offsetWidth;
        el.current.classList.add("flip");
      }
    };

    update(value);
  }, [value]);

  return (
    <span className="flip-clock__piece text-black font-bold text-lg " ref={el}>
      <b className="flip-clock__card card">
        <b className="card__top" ref={topRef}></b>
        <b className="card__bottom" ref={bottomRef}></b>
        <b className="card__back" ref={backRef}>
          <b className="card__bottom" ref={backBottomRef}></b>
        </b>
      </b>
      <span className="flip-clock__slot">{label}</span>
    </span>
  );
};

export default CountdownTracker;
