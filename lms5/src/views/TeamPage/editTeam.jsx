import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { getApi } from "../../services/Model/rest_storage_service.js";
import { Link } from "react-router-dom";

export default function EditTeam() {
  const [validated, setValidated] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [coachName, setCoachName] = useState("");
  const [motto, setMotto] = useState("");
  const [notes, setNotes] = useState("");
  const [coaches, setCoaches] = useState();
  const [teamData, setTeamData] = useState();

  let model = getApi();

  useEffect(() => {
    getCoaches();
    getTeamData()
  }, []);

  async function getCoaches() {
    let coachList = await model.getLookup("coacheslist");
    setCoaches(coachList);
  }

  async function getTeamData() {
    let teamID = parseInt(pathname.replace('/edit-team/', ''))
    let team = await model.read(teamID)
    team.id = teamID
    setTeamData(team)

  }

  async function saveTeam() {
    let newTeam = {
      id: teamID,
      name: teamName,
      coach_id: 2,
      league_id: 1,
      notes: notes,
      motto: motto,
    };
    await model.update(newTeam);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (!form.checkValidity() === false) {
      // create team in the database
      console.log(teamName);
      console.log(coachName);
      console.log(notes);
      console.log(motto);

      setValidated(true);

      // add to database
      saveTeam();
      //redirect back to teams page.
    } else {
      // bad validity
      console.log("bad validity");
    }
  };

  return (
    coaches && teamData && (
      <>
        {/* React Form Here */}
        {/* name, coachName, notes, motto */}
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="bg-lightgray rounded"
          >
          <div className="d-flex justify-content-center pt-5">
          <Form.Group controlId="formTeamName" className="m-2">
            {/* name */}
            <Form.Label>Team Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Team name"
              onChange={(e) => setTeamName(e.target.value)}
              value={teamData.teamName}
              required
            />
            <Form.Control.Feedback type="invalid">
              Team Name Required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formTeamCoach" className="m-2">
            {/* coach */}
            <Form.Label>Coach Name</Form.Label>
            {/* <Form.Control type='text' placeholder='Coach Name' onChange={(e) => setCoachName(e.target.value)} required />
          <Form.Control.Feedback type='invalid'>Coach Name Required</Form.Control.Feedback> */}
            <Form.Select
              required
              aria-label="Select Coach"
              onChange={(e) => setCoachName(e.target.value)}
            >
              <option>Select Coach</option>
              {/* <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option> */}
              <option value={coaches[0].id}>{coaches[0].label}</option>
              <option value={coaches[1].id}>{coaches[1].label}</option>
              <option value={coaches[2].id}>{coaches[2].label}</option>
              <option value={coaches[3].id}>{coaches[3].label}</option>
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formTeamNotes" className="m-2">
            {/* notes */}
            <Form.Label>Team Notes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Team notes"
              onChange={(e) => setNotes(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formTeamMotto" className="m-2">
            {/* motto */}
            <Form.Label>Team Motto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Team motto"
              onChange={(e) => setMotto(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="m-2">
            Add Team
          </Button>
        </div>
        <div className="d-flex justify-content-center mt-5 pb-5">
          <Link to={`/teams`}>
            <Button variant="primary" type="button" className="m-2">
              Back
            </Button>
          </Link>
        </div>
        </Form>
      </>
    )
  );
}
