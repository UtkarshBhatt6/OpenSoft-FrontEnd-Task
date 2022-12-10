import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MakeReservation() {
  return (
    <Form>
      <h1>Table Reservation</h1>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput"> Name</Form.Label>
          <Form.Control id="TextInput" placeholder="ex:Utkarsh" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Email Adress</Form.Label>
          <Form.Control id="TextInput" placeholder="ex:Utkarsh@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Phone Number</Form.Label>
          <Form.Control id="TextInput" placeholder="Without +91" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Number Of Guests</Form.Label>
          <Form.Control id="TextInput" placeholder="less than five per booking" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Date Of Birth</Form.Label>
          <Form.Control id="TextInput" placeholder="DD/MM/YYYY" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="TextInput">Time</Form.Label>
          <Form.Control id="TextInput" placeholder="HH/MM/SS" />
        </Form.Group>
       
        <Button type="submit" width="100%">Confirm Reservation</Button>
      </fieldset>
    </Form>
  );
}

export default MakeReservation;