import React from 'react';
import { Redirect } from 'react-router-dom';


class Splash extends React.Component{
  constructor(){
    super()
    this.state = {shouldRedirect : false};
    this.handleRedirect = this.handleRedirect.bind(this)
    this.renderRedirect = this.renderRedirect.bind(this)
  }
  renderRedirect(){
    if(this.state.shouldRedirect === true){
      return <Redirect to='/home'></Redirect>
    }
  }

  handleRedirect(event){
    console.log(this.state);
    this.setState({shouldRedirect:true})
    renderRedirect();
  }

  render(){
    const {shouldRedirect} = this.state;
    return (

      <main>
        {this.renderRedirect()}
        <h1>Sizzler</h1>
        <img src="https://i5.walmartimages.com/asr/666eac9a-b0e6-43c5-984b-9de779c597d9_1.88cf71e36206e916ada3b3820595ac5d.jpeg"/>
        <button onClick={this.handleRedirect}>
          Home
        </button>
      </main>
    )
  }
}



export default Splash;
