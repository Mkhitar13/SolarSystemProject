import { useState, useLayoutEffect } from "react";

const sizesOfedia = [
      '(max-width: 2560px) and (min-width: 1000px)',
      '(max-width: 1000px) and (min-width: 700px)',
      '(max-width: 700px) and (min-width: 320px)',
];

export const useCustomHook = () => {
      const mediaQUeryLists = sizesOfedia.map(query => matchMedia(query));
      const getValues = () => mediaQUeryLists.map(mediaQueryList => mediaQueryList.matches);

      const [values, setValues] = useState(getValues);

      useLayoutEffect(() => {
            const handler = () => setValues(getValues);

            mediaQUeryLists.forEach(mediaQueryList => mediaQueryList.addEventListener('change', handler));
            return () => mediaQUeryLists.forEach(mediaQueryList => mediaQueryList.removeEventListener('change', handler));
      }, []);

      return ['desctop', 'tablet', 'mobile'].reduce((acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
      }), {});
};