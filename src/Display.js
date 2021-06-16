import React from 'react';
import ShowcaseTop from './components/ShowcaseTop';
import MainSection from './components/MainSection';
import Characters from './components/Characters';
import Footer from './components/Footer';
import Player from './components/Player'

export default function Display() {
    return (
        <div>
            <ShowcaseTop />
            <MainSection />
            <Characters />
            <Player />
            <Footer />
        </div>
    )
}
