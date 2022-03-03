import React from 'react';
import './TryOut.css'

const TryOut = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="subscription container" >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div>
                            <h2>Try For Free !</h2>
                            <p>Join our newsletter to never miss any latest news.</p>
                        </div>
                    </div>
                    <div id="subscribebox">
                        <div className='paired-btn'>

                            <button className='hero-button' href="/">Learn More</button>
                            <button className='hero-button demo' href="/">Request Demo</button>

                        </div>
                    </div>
                </div >
            </div >
        </div>
    );
};

export default TryOut;