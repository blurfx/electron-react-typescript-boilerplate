import React, { useState, useEffect } from 'react';


const BarView = () => {
    const [timeText, setTimeText] = useState('');

    useEffect(() => {
        const tick = setInterval(() => {
            setTimeText(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(tick);
        }
    }, []);

    return (
        <div>
            <h3>Clock</h3>
            <p>What time is it?</p>
            <p>{timeText}</p>
        </div>
    )
};

export default BarView;
