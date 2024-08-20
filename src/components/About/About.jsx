import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>ABOUT ME</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutMeImage.png")}
                    alt="This is the about image"
                    className={styles.aboutImg}  
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/aiIcon.png")}
                            alt="This is the a server icon"
                            className={styles.cursorImg}
                        />
                        <div className={styles.aboutItemText}>
                            <h3 className={styles.subheading}>
                                AI/ML
                            </h3>
                            <p>
                            Experienced in applying ML techniques, training models, and developing production-level applications with LLMs using frameworks like Langchain and Langgraph.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img
                            src={getImageUrl("about/uiIcon.png")}
                            alt="This is the cursor icon"
                            className={styles.cursorImg}
                        />
                        <div className={styles.aboutItemText}>
                        <h3 className={styles.subheading}>
                                Backend Development
                            </h3>
                            <p>
                            Experienced backend developer with expertise in building backends using Java, C++, and Python. Proficient in API integration, and working with databases.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                    <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="This is a cursor icon"
                            className={styles.cursorImg}
                        />
                        <div className={styles.aboutItemText}>
                        <h3 className={styles.subheading}>
                                Frontend Development
                            </h3>
                            <p>
                            I’m a budding frontend developer with a solid understanding of web development concepts, experience with React, and familiarity with Node.js.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};
