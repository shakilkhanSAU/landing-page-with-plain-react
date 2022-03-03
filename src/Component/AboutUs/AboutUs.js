import React from 'react';
import aboutImg from '../../images/about.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div style={{ background: '#282828', paddingBottom: '30px' }}>
            <div className='container'>
                <div className='background-color'>
                    <section className='about-us'>
                        <div className='banner-img column'>
                            <img src={aboutImg} alt="" />
                        </div>
                        <div className='column'>
                            <div style={{ padding: '20px' }}>
                                <h2 style={{
                                    fontSize: '33px',
                                    color: 'cyan',
                                    fontWeight: 'bold'
                                }}>We are a high-level data storage bank</h2>
                                <p style={{
                                    fontSize: '14px',
                                    color: 'lightGray'
                                }}>The place to store various data that you can access at any time through the internet  and where you can carry it.
                                    This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;