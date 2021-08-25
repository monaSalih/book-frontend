import React from 'react'
import { Button, Form } from 'react-bootstrap';

class AddBook extends React.Component {
    // constructor (props){
    //     super(props);
    //     this.state={
    //         addNew:[]
    //       }
    // }




    render() {
        return (
            <div>
                <Form onSubmit={this.props.newBook}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>book title</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Enter Title" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" placeholder="book description" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add book
                    </Button>
                   
                </Form>
            </div>
        )
    }
}

export default AddBook
