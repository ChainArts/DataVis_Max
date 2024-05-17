import { useState, useEffect } from "react";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import useMousePos from "./useMousePos";

const CustomCursor = () => {
    const { x, y } = useMousePos();
    const [isHovered, setIsHovered] = useState(false);
    const [cursorText, setCursorText] = useState(<div>Hover!</div>);

    useEffect(() => {
    const handleHoverStart = (e: MouseEvent) => {
        const cursorString = (e.currentTarget as HTMLElement).getAttribute(
            'data-hover'
        );

        setCursorText(<div>{cursorString}</div>);
        setIsHovered(true);
    };

    const handleHoverEnd = () => {
        
        setIsHovered(false);
        setCursorText(<div>Hover!</div>);
    };

    
        const animBuffer = setTimeout(() => {
            const anchors = document.querySelectorAll(".cursor-anchor");
            anchors.forEach((anchor) => {
                anchor.addEventListener(
                    "mouseenter",
                    handleHoverStart as EventListener
                );
                anchor.addEventListener(
                    "mouseleave",
                    handleHoverEnd as EventListener
                );
            });

            return () => {
                const anchors = document.querySelectorAll(".cursor-anchor");
                anchors.forEach((anchor) => {
                    anchor.removeEventListener(
                        "mouseenter",
                        handleHoverStart as EventListener
                    );
                    anchor.removeEventListener(
                        "mouseleave",
                        handleHoverEnd as EventListener
                    );
                });
            };
        });

        return () => clearTimeout(animBuffer);
    }, [isHovered, cursorText]);

    return (
        <motion.div
            className={`custom-cursor ${isHovered ? "hovered" : ""}`}
            animate={{
                translateX: `${x}px`,
                translateY: `${y}px`,
            }}
            transition={{
                type: "tween",
                ease: cubicBezier(0.14, 0.8, 0.4, 1),
                duration: 0.4,
            }}
        >
            <motion.div
                className="cursor-bubble"
            >
                <AnimatePresence mode="wait">
                    {cursorText ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                type: "tween",
                                ease: cubicBezier(0.14, 0.8, 0.4, 1),
                                duration: 0.2,
                            }}
                            className="cursor-text"
                            id="cursor-text"
                        >
                            {cursorText}
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default CustomCursor;
