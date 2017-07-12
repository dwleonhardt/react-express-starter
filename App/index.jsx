import React from 'react';
import ReactDOM from 'react-dom'; // attaches react app to html5
import './index.css'; // styling for body
import Splash from './splash'
import Footer from './Footer.jsx';
import Header from './Header.jsx';


function App () {
  return (
    <div>
    <Header />
    <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.app'));
