import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import AddBook from './AddBook.js'
import { Card, Row, Button } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import './BestBooks.css';
// import Update from './Update.js';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBook: [],
      authUser: {},
      // selectedBook:{},
      // showUpdateForm:false

    }
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0

    await this.setState({
      authUser: user.email
    })

    let url = `${process.env.REACT_APP_BACKEND_URL}books?email=${this.props.auth0.user.email}`
    console.log(url, 'link url data')
    let axiosData = await axios.get(url)
    // console.log(axiosData)
    console.log(axiosData.data[0], 'axiosData.data[0]');
    this.setState({
      showBook: axiosData.data
    })
    console.log('finish didamount');
  }
  ///////////////****add new book */

  newBook = async (event) => {
    event.preventDefault();
    console.log('done add');

    let bookObj = {
      title: event.target.title.value,
      description: event.target.description.value,
      email: this.state.authUser
    }
    
    console.log("bookObj", bookObj);
    // let addToLibrary=await axios.get(`${process.env.REACT_APP_BACKEND_URL}bookObj`,{params:bookObj})
    let addToLibrary = await axios.post(`${process.env.REACT_APP_BACKEND_URL}bookObj`, {params:bookObj})
///how write query
    this.setState({
      showBook: addToLibrary.data
    })
  }

  ////////////////////***delete spesific book */

  deletBook = async (idBook) => {
    console.log("hi");
    let deletUrl = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}deletObj/${idBook}?emailUser=${this.props.auth0.user.email}`)
    console.log(`${process.env.REACT_APP_BACKEND_URL}deletObj/${idBook}?emailUser=${this.state.authUser}`);
console.log(deletUrl);
    this.setState({
      showBook: deletUrl.data
    })
    // window.location.reload()
  }
  //////////////////////**update */


  /////////**udating */
  // updateData=async(bookId)=>{
  //   let chooseBook=this.state.showBook.find(book=>{
  //     return book._id===  bookId  })
  //     console.log(chooseBook);
  //     this.setState({
  //       selectedBook:chooseBook,
  //       showUpdateForm:true
  //     })
  // }
  // updataInfo=async(event)=>{
  //   event.preventDefaulr();
  //   let sendData={
  //     titleBook:event.target.bTitle.value,
  //  descripBook:event.target.bdescrip.value,
  //  emailBook:this.state.authUser
  // }
  // let bookID=this.state.selectedBook._id
  //  let bookData=await axios.put(`${process.env.REACT_APP_BACKEND_URL}updateBook/${bookID}`,sendData)
  //  this.setState({
  //       showBook: bookData.data
  //     })
  // }

  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <Jumbotron>
        <AddBook newBook={this.newBook} />

        <Row  >
          {this.state.showBook.map((item,idx) => {

            return (
            <div>
            {/* key={idx} */}
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                 <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Book Discription:{item.description}
                  Book email:{item.email}
                </Card.Text>
                <Button variant="danger" onClick={()=>{this.deletBook(item._id)}}>Delete</Button>
                <Button variant="danger" >update</Button>
              {/* <Update updateData={this.updateData}/> */}

              </Card.Body>
            </Card>
  
            </div>
            )
          })}

        </Row>
        {/* pop up form */}
        {/* {this.state.showUpdateForm && 
        <Update
        bookUpDate={this.state.selectedBook}
        />}
       */}
      </Jumbotron>
    )

  }
}

export default withAuth0(MyFavoriteBooks);
