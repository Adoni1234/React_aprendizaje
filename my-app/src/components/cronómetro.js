import React, { useState, useEffect } from "react";
import { ContainerLayaout } from "./utilis/layout";

export function CronómetroPage() {
    const [isRunning, setIsRunning] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, startTime]);

    const startStopwatch = () => {
        if (!isRunning) {
            setStartTime(Date.now() - elapsedTime);
        }
        setIsRunning(!isRunning);
    };

    const resetStopwatch = () => {
        setStartTime(0);
        setElapsedTime(0);
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div>
            <ContainerLayaout />
            <div className="bg-red-600 justify-items-center items-center">
                <h1 className="text-center text-black text-9xl mt-[10rem]">{formatTime(elapsedTime)}</h1>
                <div className="justify-items-center items-center text-center">
                  <button className="bg-orange-800 m-5 rounded-2xl text-[2rem]" onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
                  <button className="bg-blue-500 rounded-2xl text-[2rem] " onClick={resetStopwatch}>Reset</button>
                </div>
            </div>
        </div>
    );
}
