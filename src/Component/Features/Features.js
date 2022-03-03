import React from 'react';
import './Features.css'
import security from '../../images/feature/security.svg'
import note from '../../images/feature/note.svg'
import print from '../../images/feature/print.svg'

const Features = () => {
    return (
        <div className='feature-body'>
            <div>
                <div className="container">
                    <input type="radio" name="dot" id="one" />
                    <input type="radio" name="dot" id="two" />
                    <div className="main-card">
                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="img">
                                        <img src={note} alt="" />
                                    </div>
                                    <div className='info'>
                                        <div className="info-title">
                                            <h4>Search data</h4>
                                        </div>
                                        <div className="info-section">
                                            <p> <i className="fa-solid fa-arrow-right-long"></i>Don't worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                            <a className='learn' href="/">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="img">
                                        <img src={print} alt="" />
                                    </div>
                                    <div className='info'>
                                        <div className="info-title">
                                            <h4>Print Out</h4>
                                        </div>
                                        <div className="info-section">
                                            <p>Don't worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                            <a className='learn' href="/">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="img">
                                        <img src={security} alt="" />
                                    </div>
                                    <div className='info'>
                                        <div className="info-title">
                                            <h4>Security Code</h4>
                                        </div>
                                        <div className="info-section">
                                            <p> <i className="fa-solid fa-arrow-right-long"></i>Don't worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                            <a className='learn' href="/">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="img">
                                        <img src={print} alt="" />
                                    </div>
                                    <div className='info'>
                                        <div className="info-title">
                                            <h4>User Authentication</h4>
                                        </div>
                                        <div className="info-section">
                                            <p> <i className="fa-solid fa-arrow-right-long"></i>Don't worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                            <a className='learn' href="/">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="img">
                                        <img src={security} alt="" />
                                    </div>
                                    <div className='info'>
                                        <div className="info-title">
                                            <h4>Security Build Up</h4>
                                        </div>
                                        <div className="info-section">
                                            <p> <i className="fa-solid fa-arrow-right-long"></i>Don't worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                            <a className='learn' href="/">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="img">
                                        <img src={note} alt="" />
                                    </div>
                                    <div className='info'>
                                        <div className="info-title">
                                            <h4>General Issues</h4>
                                        </div>
                                        <div className="info-section">
                                            <p> <i className="fa-solid fa-arrow-right-long"></i>Don't worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                            <a className='learn' href="/">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <label for="one" className=" active one"></label>
                        <label for="two" className="two"></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;