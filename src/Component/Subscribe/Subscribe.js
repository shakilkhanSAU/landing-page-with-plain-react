import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div class="wrapper">
            <div id="subscribebox">
                <i class="fa fa-envelope fa-4x"></i>
                <h3>Subsribe!</h3>
                <form>
                    <input type="text" placeholder="Enter email" id="email-input" />
                    <input type="submit" value="Join" id="subscribe-button" />
                </form>
            </div>
        </div>
    );
};

export default Subscribe;