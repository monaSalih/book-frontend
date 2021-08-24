import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Card ,Row} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showBook:[]
    }
  }
    
componentDidMount=async()=>{
  
  let url=`${process.env.REACT_APP_BACKEND_URL}books?email=${this.props.auth0.user.email}`
  console.log(url,'link url data')
  let axiosData=await axios.get(url)
  // console.log(axiosData)
  console.log(axiosData.data[0],'axiosData.data[0]');
  this.setState({
    showBook:axiosData.data
  })
  }
  


  render() {
    const { user, isAuthenticated  } = this.props.auth0;
    return(
      <Jumbotron>
        <Row  >
        {this.state.showBook.map(item=>{
      return (     <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
          Book Discription:{item.description}
           Book email:{item.email}
          </Card.Text>
         </Card.Body>
      </Card>
     
            
        )})}
      
            </Row>
         
      </Jumbotron>
    )
    
  }
}

export default  withAuth0(MyFavoriteBooks) ;
