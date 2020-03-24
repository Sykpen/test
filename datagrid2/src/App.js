import React, {Component} from 'react';
import Table from './Table/Table'

class App extends Component {

  state =  {
    data : []
  }

async componentDidMount(){
  const response = await fetch(`http://www.filltext.com/?rows=500&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
  const data = await response.json()

  this.setState({
    data
  })
  console.log(data)
}

  render() {
  return (
    <div className="container">
      <Table data = {this.state.data}/>  
    </div>
  );}
}

export default App;
