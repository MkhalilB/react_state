
import './App.css';
import React from 'react'
import Profil from './components/Profil';

class App extends React.Component {
  
  constructor(){
    super()
    this.state={
      show : false
    }
  }

  render (){
    return (
  <div className="App">
      <button onClick={()=> this.setState({show : !this.state.show})}>{this.state.show === true ? "Hide" : "Show"}</button>
      {
          this.state.show === true && <Profil/>
        }
    </div>
    )
  };
}

export default App;
