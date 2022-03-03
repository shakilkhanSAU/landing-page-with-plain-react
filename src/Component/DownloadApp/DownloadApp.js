import React from 'react';
import phone from '../../images/phone.svg'
import './DownloadApp.css'

const DownloadApp = () => {
    return (
        <div style={{ background: '#282828', paddingBottom: '30px' }}>
            <div className='container'>
                <div className='background-color'>
                    <section className='download-app'>
                        <div className='column'>
                            <div style={{ padding: '20px' }}>
                                <h2 style={{
                                    fontSize: '30px',
                                    color: 'cyan',
                                    fontWeight: 'bold',
                                    marginBottom: '15px'
                                }}>Download Our App</h2>
                                <p style={{
                                    fontSize: '14px',
                                    color: 'white',
                                    marginBottom: '36px'
                                }}>The place to store various data that you can access at any time through the internet  and where you can carry it.
                                    This very flexible storage area has a high level of security. To enter into your own data.</p>
                                <a className='hero-button' href="/">Download Now</a>
                            </div>
                        </div>
                        <div className='download-img column'>
                            <img src={phone} alt="" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;