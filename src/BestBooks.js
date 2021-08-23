import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Card ,Row} from 'react-bootstrap';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showBook:[]
    }
  }
    
componentDidMount=async()=>{
  let url=`${process.env.REACT_APP_BACKEND_URL}books`
  
  let axiosData=await axios.get(url)
  console.log(axiosData.data);
  this.setState({
  apiBackendArr:axiosData.data
  })
  }
  


  render() {
    return(
      <Jumbotron>
        <Row  >
        {this.state.apiBackendArr.map(item=>{
      return (     <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
          Book Discription:{item.description}
           Book email:{item.email
}
          </Card.Text>
         </Card.Body>
      </Card>
     
            
        )})}
      
            </Row>
         
      </Jumbotron>
    )
    
  }
}

export default MyFavoriteBooks;
