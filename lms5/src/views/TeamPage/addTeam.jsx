import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react'
import { getApi } from '../../services/Model/rest_storage_service.js'


export default function AddTeam() {
  const [validated, setValidated] = useState(false)
  const [teamName, setTeamName] = useState('')
  const [coachName, setCoachName] = useState('')
  const [motto, setMotto] = useState('')
  const [notes, setNotes] = useState('')
  const [model, setModel] = useState({})
  
  useEffect(() => {
    setModel(getApi())
  }, [])

  async function addTeam() {
    // FIXME: need to manually change the id's. fix this. But it does add to the database.
    let newTeam = {
      id: 200,
      name: teamName,
      coach_id: 2,
      league_id: 1,
      notes: notes,
      motto: motto
    }
    await model.create(newTeam)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      // bad validity
    }
    // create team in the database
    console.log(teamName)
    console.log(coachName)
    console.log(notes)
    console.log(motto)

    setValidated(true)

    // add to database
    addTeam()
    //redirect back to teams page.

  }

  return (
    <>
      {/* React Form Here */}
      {/* name, coachName, notes, motto */}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId='formTeamName'>
          {/* name */}
          <Form.Label>Team Name</Form.Label>
          <Form.Control type='text' placeholder='Team name' onChange={(e) => setTeamName(e.target.value)} required/>
          <Form.Control.Feedback type='invalid'>Team Name Required</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='formTeamCoach'>
          {/* coach */}
          <Form.Label>Coach Name</Form.Label>
          <Form.Control type='text' placeholder='Coach Name' onChange={(e) => setCoachName(e.target.value)} required />
          <Form.Control.Feedback type='invalid'>Coach Name Required</Form.Control.Feedback>
          {/* <Form.Select required>
            <option>Select Coach</option>
            <option value={1}>opt</option>
            <option value={1}>opt</option>
            <option value={1}>opt</option>
            <option value={1}>opt</option>
          </Form.Select> */}
        </Form.Group>
        <Form.Group controlId='formTeamNotes'>
          {/* notes */}
          <Form.Label>Team Notes</Form.Label>
          <Form.Control type='text' placeholder='Team notes' onChange={(e) => setNotes(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId='formTeamMotto'>
          {/* motto */}
          <Form.Label>Team Motto</Form.Label>
          <Form.Control type='text' placeholder='Team motto' onChange={(e) => setMotto(e.target.value)}/>
        </Form.Group>
        <Button variant='primary'  type='submit' >
          Add Team
        </Button>
      </Form>
    </>
  )
}