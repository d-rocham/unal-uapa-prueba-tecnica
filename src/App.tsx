import React from 'react';
import { Header, Body, Footer } from './components/Components';

function App() {
    return (
        <div className="App min-h-screen flex flex-col justify-between">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
