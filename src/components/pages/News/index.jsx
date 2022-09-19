import React from 'react';
import Content from './Content';
import Header from './Header';

function News() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <Content/>
            </main>
        </div>
    );
}

export default News;