import React from 'react';
import banner from '../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div style={{ background: '#282828', paddingBottom: '40px' }}>
            <section className='hero container'>
                <div className='column'>
                    <div style={{ padding: '20px' }}>
                        <h2 style={{
                            fontSize: '40px',
                            color: 'cyan',
                            fontWeight: 'bold',
                            marginBottom: '10px'
                        }}>Save your data storage here.</h2>
                        <p style={{
                            fontSize: '14px',
                            color: 'white',
                            marginBottom: '20px',
                            fontWeight: '200'
                        }}>Insignia is a data storage area that has been
                            tested for security, so you can store your data here
                            safely but not be afraid of being stolen by others.</p>
                        <a className='hero-button' href="/">Learn More</a>
                    </div>
                </div>
                <div className='banner-img column'>
                    <img src={banner} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Banner;