import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import DownloadApp from '../DownloadApp/DownloadApp';
import Features from '../Features/Features';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';
import TryOut from '../TryOut/TryOut';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Features></Features>
            <DownloadApp></DownloadApp>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
            <TryOut></TryOut>
            <Footer></Footer>
        </div>
    );
};

export default Home;