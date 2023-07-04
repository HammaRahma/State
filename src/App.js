import { Button } from 'react-bootstrap';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
  state ={
    Person:{ 
    fullName:"Will Smith",
    bio:"I love action movies", 
    imgSrc:"https://th.bing.com/th/id/OIP.kQTNYGMAA2z0_WcX6l3MlgHaLF?w=182&h=272&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    profession:"actor"
  },
  show:true,
  textButton:"Show Profile"
};
  showPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
      textButton:"Hide Profile"
    });
  };

  render(){
    //const [show, setShow]=useState(true)
  return (
    
    <div className="App">
    {
      this.state.show && (
        
      <div className='profileShow'>
        <img src={this.state.Person.imgSrc} alt='WS' /> <br />
        <h1>{this.state.Person.fullName}</h1> <br />
        {this.state.Person.bio} <br />
        profession: {this.state.Person.profession}        
      </div>
      
    )}
    <Button variant="outline-info" onClick={this.showPerson}>{this.state.textButton}</Button><br />

    </div>
  );
  }
}

export default App;
 




/**  <Card style={{ width: '18rem' }}>
          <Card.Img style={{ height:'250px' }} variant="top" src= {this.state.Person.imgSrc}/>
          <Card.Body>
          <Card.Title>{this.state.Person.fullName}</Card.Title>
          <Card.Text>
              bio : {this.state.Person.bio}<br />
              profession : {this.state.Person.profession}
          </Card.Text>
          </Card.Body>
          </Card>
          <br /> */