import React from 'react';
import background from './../../../assets/images/background.jpg';

const HeroSection = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-screen">
                    <h1 className="mb-5 text-2xl lg:text-4xl font-bold">LEARN YOUR FAVORITE</h1>
                    <h1 className="mb-5 text-4xl lg:text-6xl font-bold"><span className="text-warning">PROGRAMMING</span> LANGUAGE</h1>
                    <button className="btn btn-warning rounded">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;