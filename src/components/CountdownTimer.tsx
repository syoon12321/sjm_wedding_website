import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

export const CountdownTimer = () => {
    const { language, setLanguage } = useLanguage();
    const t = translations[language as keyof typeof translations];
    const [timeLeft, setTimeLeft] = useState({
        days: '00'
    });

    useEffect(() => {
        function updateCountdown() {
            const weddingDate = new Date('September 21, 2025').getTime();
            const now = new Date().getTime();
            const timeDiff = weddingDate - now;

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

            setTimeLeft({
                days: days.toString().padStart(2, '0')
            });
        }

        const timer = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return (
        <div id="countdown" className="countdown">
            <div className="countdown-item">
                <span id="days">{timeLeft.days}</span>
                <span className="label"> {t.countdown}</span>
            </div>
        </div>
    );
};