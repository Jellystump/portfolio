import React, { useState } from 'react';
import styles from './contact.module.css'

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "cf043ed4-2777-4859-836c-6d1aa831b7a8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    return(
        <section id='contact' className={styles['contact-section']}>
            <div className={styles['contact-header']}>
                <h2>Contact me</h2>
            </div>

            <form  onSubmit={onSubmit}>
                <div className={styles['contact-form']}>
                    <input className={styles['input-box']} type="text" name="name" placeholder='Name' required/>
                    <input className={styles['input-box']}type="email" name="email" placeholder='Email' required/>
                    <textarea className={`${styles['input-box']} ${styles['area']}`}  name="message" placeholder='Message' required></textarea>
                    <button className={styles['contact-submit']} type="submit">Submit</button>
                    <p>{result}</p>
                </div>
            </form>
        </section>
    );
}