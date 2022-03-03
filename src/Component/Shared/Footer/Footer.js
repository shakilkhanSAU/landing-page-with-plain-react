import React from 'react';
import './Footer.css'
import logo from '../../../images/logo.jpg'

const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <div style={{ marginTop: '-10px' }}>
                                <img className='brand-logo' src={logo} alt="" />
                            </div>
                            <div>
                                <p>Insignia Society, 234 <br />
                                    Bahagia Ave Street
                                    PRBW 29281</p>
                                <p>info@insignia.com
                                    1-232-3434 (Main)</p>
                            </div>
                        </div>
                        <div class="footer-col">
                            <h4>About</h4>
                            <ul>
                                <li><a href="/">Profile</a></li>
                                <li><a href="/">Features</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">DW News</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Help</h4>
                            <ul>
                                <li><a href="/">Support</a></li>
                                <li><a href="/">SignUp</a></li>
                                <li><a href="/">Guide</a></li>
                                <li><a href="/">Report</a></li>
                                <li><a href="/">Q&A</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Social Media</h4>
                            <div class="social-links">
                                <a href="/"><i class="fab fa-facebook-f"></i></a>
                                <a href="/"><i class="fab fa-twitter"></i></a>
                                <a href="/"><i class="fab fa-instagram"></i></a>
                                <a href="/"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <p style={{ fontSize: '13px', fontWeight: '200', color: 'lightGray', paddingLeft: '14px', marginTop: '20px' }}>© Insignia™, 2020. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;