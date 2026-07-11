import React, { useState } from 'react';
import styles from './contact.module.css'
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const [result, setResult] = useState("");
    const { t, i18n } = useTranslation();

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
                <h2>{t('navbar.contact')}</h2>
            </div>

            <form  onSubmit={onSubmit}>
                <div className={styles['contact-form']}>
                    <input className={styles['input-box']} type="text" name="name" placeholder={t('contact.name')} required/>
                    <input className={styles['input-box']}type="email" name="email" placeholder={t('contact.email')} required/>
                    <textarea className={`${styles['input-box']} ${styles['area']}`}  name="message" placeholder={t('contact.message')} required></textarea>
                    <button className={styles['contact-submit']} type="submit">{t('contact.submit')}</button>
                    <p>{result}</p>
                </div>
            </form>
        </section>
    );
}