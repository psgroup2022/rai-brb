import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Force manual restoration so route changes don't keep previous page offset.
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

        // Run once more in the next frame to avoid late layout shifts from heavy sections.
        const frame = window.requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        });

        return () => {
            window.cancelAnimationFrame(frame);
        };
    }, [pathname]);

    return null;
};
export default Scroll;