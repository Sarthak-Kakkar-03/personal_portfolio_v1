import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hey, I am Sarthak.<br></br> Welcome to my website!</h1>
                <p className={styles.description}>
                I am a Computer Science major at Northeastern University with a strong passion for developing applications centered around LLMs and crafting solutions using machine learning algorithms. I also have experience in backend development across various languages and frameworks.
                    <br />
                    Recently, I decided to do an independent endeavor in some Frontend work, and here we are!
                    <br/><br/>
                    Please scroll down to explore further or click below to reach my email!
                    </p>
                <a href="mailto:kakkar.sa@northeastern.edu" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img 
                src={getImageUrl("hero/file.png")} 
                alt="Hero image of me" 
                className={styles.heroImg}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};


