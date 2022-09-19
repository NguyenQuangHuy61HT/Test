import React from 'react';
import Content from './Content';
import Header from './Header';
import List from './List';
import img1 from '../../../images/img1.svg'
import img2 from '../../../images/img2.svg'
import img3 from '../../../images/img3.svg'
import './styles.scss'
import Footer from './footer';

const newsObj = [
  {
    title: "Lorem ipsum dolor sit amet",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit
              nulla, vel sodales est ullamcorper id. Aenean consequat
              condimentum velit ut tempor. Nam porta massa in metus bibendum
              congue. Pellentesque ultrices vestibulum mattis.`,
    img: img1,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit
              nulla, vel sodales est ullamcorper id. Aenean consequat
              condimentum velit ut tempor. Nam porta massa in metus bibendum
              congue. Pellentesque ultrices vestibulum mattis.`,
    img: img2,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
              suscipit accumsan. Aenean consequat condimentum velit ut tempor.
              Nam porta massa in metus bibendum congue. Pellentesque ultrices
              liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit
              nulla, vel sodales est ullamcorper id. Aenean consequat
              condimentum velit ut tempor. Nam porta massa in metus bibendum
              congue. Pellentesque ultrices vestibulum mattis.`,
    img: img3,
  },
];
function News() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Content />
        </main>
        <main className='group'>
          <List List={newsObj} />
        </main>
        <footer>
            <Footer/>
        </footer>
      </div>
    );
}

export default News;