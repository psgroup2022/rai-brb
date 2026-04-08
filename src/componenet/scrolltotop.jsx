import React, { useEffect, useState } from 'react';

const ScrollTopButton = () => {
    const [scrollValue, setScrollValue] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const handleScroll = () => {
        const scrollTopPos = document.documentElement.scrollTop;
        const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const newScrollValue = Math.round((scrollTopPos / calcHeight) * 100);
        setScrollValue(newScrollValue);
        setIsActive(scrollTopPos > 100);
    };

    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleScroll);
        };
    }, []);

    return (
        <div id="scroll-percentage" className={isActive ? 'active' : ''} onClick={scrollToTop}
            style={{ background: `conic-gradient( #5454FF ${scrollValue}%, #fff ${scrollValue}%)`, }}  >
            <span id="scroll-percentage-value">
                {scrollValue < 99 ? `${scrollValue}%` : <i className="fa-solid fa-arrow-up-long" />}
            </span>
        </div>
    );
};

export default ScrollTopButton;