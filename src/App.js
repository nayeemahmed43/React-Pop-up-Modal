import React from 'react';
import AddModal from './components/AddModal';

import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  
  constructor(props) {
    super(props)
  
    this.state = {
       
       addModalShow: false
    }
  }
  
  render(){
    let addModalClose = () => this.setState({addModalShow:false})
    return (
      <div className="App">
        
          <button
          className='btn btn-primary'
          onClick={()=> this.setState({addModalShow: true})}>
            Add Details
          </button>

          <AddModal 
          show={this.state.addModalShow}
          onHide={addModalClose}
          />
          
      </div>
    );
  }
  
}

export default App;
