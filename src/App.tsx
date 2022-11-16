import React from 'react';
import Footer from './components/Components';
import Body from './components/body/Body';

function App() {
    return (
        <div className="App min-h-screen flex flex-col justify-between">
            <Body />
            <Footer />
        </div>
    );
}

export default App;
