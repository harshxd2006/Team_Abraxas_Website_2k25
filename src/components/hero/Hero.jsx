import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useScroll, useMotionValueEvent } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import Menu from '../hero/Menu';
import Atom from '../hero/Atom';

const fadeInUp = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2.5,
            ease: [0.6, 0.05, 0.01, 0.9]
        }
    }
};

const staggerChildren = {
    animate: {
        transition: {
            delayChildren: 0.8,
            staggerChildren: 1.2
        }
    }
};

// Slower animation for Atom
const atomAnimation = {
    initial: {
        y: 100,
        scale: 0.8,
        opacity: 0
    },
    animate: {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            duration: 2.8,
            ease: [0.6, 0.05, 0.01, 0.9]
        }
    }
};

// Slower animation for team name
const teamNameAnimation = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2.8,
            ease: [0.6, 0.05, 0.01, 0.9],
            delay: 1.6
        }
    }
};

// Slower animation for content
const contentAnimation = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 2.8,
            ease: [0.6, 0.05, 0.01, 0.9],
            delay: 2.8
        }
    }
};

// Rest of the component remains the same
const AnimatedWord = ({ children, isLit }) => {
    return (
        <motion.span
            animate={{
                opacity: isLit ? 1 : 0.15,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ color: "rgba(255, 255, 255, 1)" }}
            className="mr-[0.3em] inline-block"
        >
            {children}
        </motion.span>
    );
};

const quoteText = "the story of abraxas begins with curiosity. we believe individuals who dare to question the universe deserve better: better ideas, better experiments, better futures. this is the standard we hold ourselves to.";
const words = quoteText.split(" ");

const Hero = () => {
    const controls = useAnimation();
    const quoteContainerRef = useRef(null);
    const [litWords, setLitWords] = useState([]);

    const { scrollYProgress } = useScroll({
        target: quoteContainerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const newlyLit = [];
        words.forEach((_, i) => {
            const threshold = i / words.length;
            if (latest >= threshold && !litWords.includes(i)) {
                newlyLit.push(i);
            }
        });

        if (newlyLit.length > 0) {
            // Functional state update ensuring we only ever append, never remove
            setLitWords((prev) => [...new Set([...prev, ...newlyLit])]);
        }
    });

    useEffect(() => {
        controls.start('animate');
    }, [controls]);

    return (
        <React.Fragment>
            <div id="Home" className="relative z-[1] min-h-[100vh] bg-black text-white overflow-hidden pb-16 flex flex-col justify-center items-center w-full">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="stars"></div>
                </div>

                {/* 100vh Atom and Heading section */}
                <div className="flex flex-col items-center justify-center w-full z-10">
                    <motion.div
                        variants={atomAnimation}
                        initial="initial"
                        animate="animate"
                        className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mb-8"
                    >
                        <Atom />
                    </motion.div>

                    <motion.div
                        variants={teamNameAnimation}
                        initial="initial"
                        animate="animate"
                        className="text-center w-full"
                    >
                        <div className="inline-block">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-800 transition-all duration-300">
                                TEAM ABRAXAS
                            </h2>
                            <div className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mt-2"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Social Icons before the section ends */}
                <div className="relative z-20 flex justify-center space-x-6 sm:space-x-8 md:space-x-10 mt-12 pb-[5vh]">
                    <motion.a
                        href="https://www.instagram.com/team_abraxas"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-pink-500 hover:text-pink-400 transition-colors duration-300"
                    >
                        <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/company/abraxas-nith/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                    >
                        <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </motion.a>
                </div>
            </div>

            {/* 300vh wrapper for scroll text */}
            <div ref={quoteContainerRef} className="relative z-[5] bg-black h-[300vh] w-full">
                <div className="sticky top-0 h-[100vh] w-full flex items-center justify-start px-[5vw]">
                    <div className="flex flex-col items-start w-full">
                        <div className="text-white uppercase font-sans font-semibold mb-6" style={{ fontSize: "0.75rem", letterSpacing: "0.3em" }}>
                            NOT EVERYONE QUESTIONS WHY.
                        </div>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.4, maxWidth: "80vw" }} className="text-left lowercase text-white">
                            {words.map((word, i) => (
                                <AnimatedWord key={i} isLit={litWords.includes(i)}>
                                    {word}
                                </AnimatedWord>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            <style jsx>{`
                @keyframes animStar {
                    from { transform: translateY(0); }
                    to { transform: translateY(-2000px); }
                }

                .stars {
                    width: 1px;
                    height: 1px;
                    background: transparent;
                    box-shadow: ${generateStars(700)};
                    animation: animStar 50s linear infinite;
                }

                @media (max-width: 768px) {
                    .stars {
                        box-shadow: ${generateStars(500)};
                    }
                }

                @media (max-width: 640px) {
                    .stars {
                        box-shadow: ${generateStars(300)};
                    }
                }
            `}</style>
        </React.Fragment>
    );
};

function generateStars(count) {
    let stars = '';
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        stars += `${x}px ${y}px #FFF${i === count - 1 ? '' : ','} `;
    }
    return stars;
}

export default Hero;