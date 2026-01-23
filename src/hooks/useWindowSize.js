import  {useEffect, useState} from 'react';

export const useWindowHeight = () => {

   const [dimensions,setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });

   const handleWindowResize = () => {
       setDimensions({
           height: window.innerHeight,
           width: window.innerWidth
       });
   };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    },[]);

    return dimensions;
}