import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function EditTeam({team}) {
  return (
    <>
      {/* React Form Here */}
      {/* name, coachName, notes, motto */}
      <Form>
        <Form.Group controlId='formTeamName'>
          {/* name */}
          <Form.Label>Team Name</Form.Label>
          <Form.Control type='text' placeholder='Team name' />
        </Form.Group>
        <Form.Group controlId='formTeamCoach'>
          {/* coach */}
          <Form.Label>Coach Name</Form.Label>
          <Form.Control type='text' placeholder='Team coach' />
        </Form.Group>
        <Form.Group controlId='formTeamNotes'>
          {/* notes */}
          <Form.Label>Team Notes</Form.Label>
          <Form.Control type='text' placeholder='Team name' />
        </Form.Group>
        <Form.Group controlId='formTeamMotto'>
          {/* motto */}
          <Form.Label>Team Motto</Form.Label>
          <Form.Control type='text' placeholder='Team name' />
        </Form.Group>
        <Button variant='primary'  type='submit'>
          Save Edits
        </Button>
      </Form>
    </>
  )
}