import React from 'react';

type TBreakPoints = {
    xxl: boolean;
    xl: boolean;
    lg: boolean;
    md: boolean;
    sm: boolean;
    xs: boolean;
}

const initialBreakPoints: TBreakPoints = {
    xxl: false,
    xl: false,
    lg: false,
    md: false,
    sm: false,
    xs: false,
};

const queries = {
    xxl: '(max-width: 1400px)',
    xl: '(max-width: 1200px)',
    lg: '(max-width: 960px)',
    md: '(max-width: 768px)',
    sm: '(max-width: 576px)',
    xs: '(max-width: 360px)',
};

function useBreakPoint() {
    const [breakPoints, setBreakPoints] =
        React.useState<TBreakPoints>(initialBreakPoints);
    const matchMediaQueries = {
        xxl: window.matchMedia(queries.xxl),
        xl: window.matchMedia(queries.xl),
        lg: window.matchMedia(queries.lg),
        md: window.matchMedia(queries.md),
        sm: window.matchMedia(queries.sm),
        xs: window.matchMedia(queries.xs),
    };
    React.useEffect(() => {
        function updateBreakPoints() {
            const updatedBreakPoints: TBreakPoints = {
                xxl: !matchMediaQueries.xxl.matches,
                xl: !matchMediaQueries.xl.matches,
                lg: !matchMediaQueries.lg.matches,
                md: !matchMediaQueries.md.matches,
                sm: !matchMediaQueries.sm.matches,
                xs: !matchMediaQueries.xs.matches,
            };
            setBreakPoints(updatedBreakPoints);
        }
        updateBreakPoints();
        Object.values(matchMediaQueries).forEach((mq) => {
            mq.addEventListener('change', updateBreakPoints);
        });

        return () => {
            Object.values(matchMediaQueries).forEach((mq) => {
                mq.removeEventListener('change', updateBreakPoints);
            });
        };
    }, []);
    return breakPoints;
}

export default useBreakPoint;
