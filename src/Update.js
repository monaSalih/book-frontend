import React from 'react'
import {Form,Button} from 'react-bootstrap'
class Update extends React.Component {
    render() {
        return (
            <div>
                 <Form onSubmit={this.props.updataInfo}>
        <Form.Group className="mb-3" controlId="formBasicPassword" defaultValue={this.props.bookUpDate.title}>
    <Form.Label>title</Form.Label>
    <Form.Control type="text" name="bTitle" placeholder="title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Label>description</Form.Label>
    <Form.Control type="text" name="bdescrip" placeholder="description" />
    </Form.Group>
   
  {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}
</Form>
 
            </div>
        )
    }
}

export default Update
