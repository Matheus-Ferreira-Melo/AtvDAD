import React from "react";
import styles from "./SectionBar.module.css";
import ponto2 from "../../assets/Semiclone.png" 
const SectionBar = ({title, days, hours, minutes, seconds}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div >
                <p>Days</p>
                <p className={styles.time}>{days}</p>

            </div>
        
            
            <div>
                <img className={styles.ponto2} src={ponto2} alt="" />
            </div>
            <div >
                <p>Hours</p>
                <p className={styles.time}>{hours}</p>

            </div>
            <div>
                <img className={styles.ponto2} src={ponto2} alt="" />
            </div>
            <div >
                <p>Minutes</p>
                <p className={styles.time}>{minutes}</p>

            </div>
            <div>
                <img className={styles.ponto2} src={ponto2} alt="" />
            </div>
            <div >
                <p>Seconds</p>
                <p className={styles.time}>{seconds}</p>

            </div>
        </div>
    );
};

export default SectionBar;