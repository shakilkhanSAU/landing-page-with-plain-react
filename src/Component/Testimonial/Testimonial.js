import React from 'react';

import user1 from '../../images/user/user1.svg'
import user2 from '../../images/user/user2.svg'
import './Testimonial.css'


const Testimonial = () => {
    return (
        <div className='feature-body'>
            <div className="container">
                <input type="radio" name="dot" id="testimonial-one" />
                <input type="radio" name="dot" id="testimonial-two" />
                <h2 style={{
                    fontSize: '40px',
                    color: 'cyan',
                    fontWeight: 'bold',
                    marginBottom: '50px',
                    paddingLeft: '20px'
                }}>Testimonial</h2>
                <div className="main-card">
                    <div className="cards">
                        <div className="card">
                            <div className="testimonial">
                                <div className="img">
                                    <img src={user1} alt="" />
                                </div>
                                <div className='info'>
                                    <div className="info-title">
                                        <h4>John Fang </h4>
                                    </div>
                                    <div className="user-testimonial">
                                        <p>Suspendisse ultrices at diam lectus nullam.
                                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                                        <button><p><i className="fa-solid fa-arrow-right-long"></i></p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="testimonial">
                                <div className="img">
                                    <img src={user2} alt="" />
                                </div>
                                <div className='info'>
                                    <div className="info-title">
                                        <h4>John Fang </h4>
                                    </div>
                                    <div className="user-testimonial">
                                        <p>Suspendisse ultrices at diam lectus nullam.
                                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                                        <button><p><i className="fa-solid fa-arrow-right-long"></i></p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="testimonial">
                                <div className="img">
                                    <img src={user1} alt="" />
                                </div>
                                <div className='info'>
                                    <div className="info-title">
                                        <h4>John Fang </h4>
                                    </div>
                                    <div className="user-testimonial">
                                        <p>Suspendisse ultrices at diam lectus nullam.
                                            Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                                        <button><p><i className="fa-solid fa-arrow-right-long"></i></p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                    </div>
                </div>
                <div className="testimonial-button">
                    <label for="testimonial-one" className="active testimonial-one"></label>
                    <label for="testimonial-two" className="testimonial-two"></label>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;