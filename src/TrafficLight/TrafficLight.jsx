import React, { useState, useEffect } from 'react';
import useStyles from './styles';


function TrafficLight(props) {
    const classes = useStyles();

    const RED = 'RED';
    const GREEN = 'GREEN';
    const YELLOW = 'YELLOW';

    const [status, setStatus] = useState(RED);

    useEffect(() => {
        const cc = setInterval(changeStatusByTime, 3000);
        return () => {
            clearInterval(cc);
        }
    }, [status]);

    const changeStatusByTime = () => {
        const wantedColor = colorStatus(status);
        console.log('here: ', wantedColor);
        setStatus(wantedColor);
        console.log('day la status', status);
    };

    const colorStatus = (color) => {
        switch (color) {
            case RED:
                return GREEN;
            case YELLOW:
                return RED;
            case GREEN:
                return YELLOW;
            default:
                return RED;
        }
    }

    return (
        <div style={{backgroundColor:'black', display:'inline-block',padding:'10px 10px'}}>
            <div className={`${classes.red} ${status == RED ? classes.active : ''}`}></div>
            <div className={`${classes.yellow} ${status == YELLOW ? classes.active : ''}`}></div>
            <div className={`${classes.green} ${status == GREEN ? classes.active : ''}`}></div>
        </div>
    );
}

export default TrafficLight;