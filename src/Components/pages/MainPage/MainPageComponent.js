import React, { useState, useEffect, useRef } from "react";
import { SignIN, GetUser } from "../../../utils/LoginAuth";
import { BackgroundComponent } from "../../ReusableComponents/Navbar/backgroundComponent";
import "../../../css/styles.css";

export const MainPageComponent = ({ userData, setData }) => {
  const userInfo = GetUser();

  const intervalRef = useRef(null);
  const startCounterMinus = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setData((currentData) => ({
        comsumtionInMl: currentData.comsumtionInMl--,
        ...currentData,
      }));
    }, 100);
  };
  const startCounterPlus = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setData((currentData) => ({
        comsumtionInMl: currentData.comsumtionInMl++,
        ...currentData,
      }));
    }, 100);
  };
  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Dia {userData.streak.currentStreak}</h1>
      </header>
      <div>
        {/* bubble and stuff */}
        <div>{/* bubble */}</div>
        <h1>{userData.comsumtionInMl}</h1>
      </div>
      <div>
        {/* button to control the volume */}
        <button
          className="btn btn-success"
          onMouseDown={startCounterPlus}
          onMouseUp={stopCounter}
          onMouseLeave={stopCounter}
        >
          +
        </button>
        <button
          className="btn btn-primary"
          onMouseDown={startCounterMinus}
          onMouseUp={stopCounter}
          onMouseLeave={stopCounter}
        >
          -
        </button>
      </div>
      {/* navbar */}
    </div>
  );
};
