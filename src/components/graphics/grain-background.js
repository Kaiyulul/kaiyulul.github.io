"use client";
import { useEffect, useRef } from "react";

function GrainBackground({children}) {
    const appRef = useRef();
    const toRef = useRef();
    
    useEffect( () => {
        const moveGradient = (event) => {
            const winWidth = window.innerWidth;
            const winHeight = window.innerHeight;

            const mouseX = Math.round((event.pageX / winWidth) * 100)
            const mouseY = Math.round((event.pageY / winHeight) * 100)

            if (appRef) {
                appRef.current.style.setProperty(
                    '--mouse-x',
                    mouseX.toString() + "%"
                )
                appRef.current.style.setProperty(
                    '--mouse-y',
                    mouseY.toString() + "%"
                )
            }
        }
    
        document.addEventListener("mousemove", moveGradient);
        document.addEventListener("scroll", moveGradient);
        return function cleanup() {
            document.removeEventListener("mousemove", moveGradient);
            document.removeEventListener("scroll", moveGradient);
        }
    }, [appRef]);

    return (
        <body id="grainy-background" ref={appRef} data-scroll-container>
            {children}
        </body>
    )
}

export default GrainBackground;
