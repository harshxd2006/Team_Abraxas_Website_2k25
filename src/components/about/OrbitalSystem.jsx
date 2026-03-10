import React, { useState } from 'react';
import nimbusLogo from '../../assets/images/nimbus-logo.png';
import abraxasLogo from '../../assets/images/abraxas-circle.png';

const OrbitalSystem = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [isMoonPaused, setIsMoonPaused] = useState(false);

    return (
        <div className="orbital-system-container relative flex justify-center items-center w-[450px] h-[450px] bg-black">

            {/* Center Logo with White Glow */}
            <div className="absolute flex justify-center items-center z-10 rounded-full" style={{
                width: '120px',
                height: '120px',
                boxShadow: '0 0 15px rgba(255,255,255,0.6)',
                overflow: 'hidden'
            }}>
                <img
                    src={nimbusLogo}
                    alt="Center Logo"
                    onError={(e) => e.target.style.display = 'none'}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Single Orbit Ring */}
            <div className="absolute rounded-full z-20 pointer-events-none"
                style={{
                    width: '360px',
                    height: '360px',
                    border: '2px solid rgba(255,255,255,0.9)',
                    boxShadow: '0 0 8px rgba(255,255,255,0.4)',
                    animation: 'orbit 10s linear infinite',
                    animationPlayState: isPaused ? 'paused' : 'running'
                }}>

                {/* Orbiting Badge */}
                <div
                    className="absolute group flex justify-center items-center cursor-pointer pointer-events-auto"
                    style={{
                        top: '0%',
                        left: '50%',
                        marginTop: '-35px',
                        marginLeft: '-35px',
                        width: '70px',
                        height: '70px'
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="w-full h-full relative" style={{
                        animation: 'orbit 10s linear infinite reverse',
                        animationPlayState: isPaused ? 'paused' : 'running'
                    }}>
                        <img
                            src={abraxasLogo}
                            alt="Abraxas Orbital Badge"
                            onError={(e) => e.target.style.display = 'none'}
                            className="w-full h-full rounded-full object-cover"
                            style={{
                                filter: 'invert(1) brightness(2)'
                            }}
                        />
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 pointer-events-none"
                            style={{ fontSize: '11px', border: '1px solid rgba(255,255,255,0.2)' }}>
                            Abraxas
                        </div>
                    </div>
                </div>
            </div>

            {/* Outer Moon Ring */}
            <div className="absolute rounded-full z-[8] pointer-events-none"
                style={{
                    width: '520px',
                    height: '520px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    animation: 'orbit 12s linear infinite reverse',
                    animationPlayState: isMoonPaused ? 'paused' : 'running'
                }}>

                {/* Full Moon 1 */}
                <div
                    className="absolute flex justify-center items-center cursor-pointer pointer-events-auto"
                    style={{
                        top: '50%',
                        left: '0%',
                        marginTop: '-15px',
                        marginLeft: '-15px',
                        width: '30px',
                        height: '30px'
                    }}
                    onMouseEnter={() => setIsMoonPaused(true)}
                    onMouseLeave={() => setIsMoonPaused(false)}
                >
                    <div className="w-full h-full relative" style={{
                        animation: 'orbit 12s linear infinite',
                        animationPlayState: isMoonPaused ? 'paused' : 'running'
                    }}>
                        <div style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 35% 35%, #ffffff, #cccccc)',
                            boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)'
                        }} />
                    </div>
                </div>

                {/* Full Moon 2 */}
                <div
                    className="absolute flex justify-center items-center cursor-pointer pointer-events-auto"
                    style={{
                        top: '50%',
                        left: '100%',
                        marginTop: '-15px',
                        marginLeft: '-15px',
                        width: '30px',
                        height: '30px'
                    }}
                    onMouseEnter={() => setIsMoonPaused(true)}
                    onMouseLeave={() => setIsMoonPaused(false)}
                >
                    <div className="w-full h-full relative" style={{
                        animation: 'orbit 12s linear infinite',
                        animationPlayState: isMoonPaused ? 'paused' : 'running'
                    }}>
                        <div style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 35% 35%, #ffffff, #cccccc)',
                            boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)'
                        }} />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @media (max-width: 768px) {
                    .orbital-system-container {
                        transform: scale(0.65);
                    }
                }
            `}</style>
        </div>
    );
};

export default OrbitalSystem;
