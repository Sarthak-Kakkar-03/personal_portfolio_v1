import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
    <footer id ="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contact
            </h2>
            <p>
                Feel free to reach out!
            </p>
        </div>
        <ul className={styles.link}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Image of mail logo" />
                <a href="mailto:kakkar.sa@northeastern.edu">Email</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Image of LinkedIn logo" />
                <a href="https://www.linkedin.com/in/sarthakkakkar03/">LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Image of Github Logo" />
                <a href="https://github.com/Sarthak-Kakkar-03">Github</a>
            </li>
        </ul>
    </footer>
    );
}