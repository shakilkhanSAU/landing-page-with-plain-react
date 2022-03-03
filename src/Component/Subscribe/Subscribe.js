import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="wrapper">
            <div className="subscription container" >
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2>Subscribe !</h2>
                        <p>Join our newsletter to never miss any latest news.</p>
                    </div>
                </div>
                <div id="subscribebox">
                    <form>
                        <input type="text" placeholder="Enter email" id="email-input" />
                        <input type="submit" value="Join" id="subscribe-button" />
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Subscribe;