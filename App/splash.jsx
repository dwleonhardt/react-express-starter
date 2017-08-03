import React from 'react';
import { Redirect } from 'react-router-dom';


const Splash = ({ history }) => {
    return (
      <main>
        <h1>Sizzler</h1>
        
        <img src="https://i5.walmartimages.com/asr/666eac9a-b0e6-43c5-984b-9de779c597d9_1.88cf71e36206e916ada3b3820595ac5d.jpeg"/>

        <button onClick={() => history.push('/home')}>
          Home
        </button>

      </main>
    )
}

export default Splash;
