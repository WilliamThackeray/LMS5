import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { getApi } from "../../services/Model/rest_storage_service.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditTeam() {
  const [validated, setValidated] = useState(false);
  const [coachName, setCoachName] = useState();
  const [coaches, setCoaches] = useState();
  const [teamData, setTeamData] = useState();

  let model = getApi();
  let pathname = window.location.href
  
  useEffect(() => {
    getCoaches();
    getTeamData()
  }, []);
  
  async function getCoaches() {
    let coachList = await model.getLookup("coacheslist");
    setCoaches(coachList);
  }
  
  async function getTeamData() {
    let teamID = parseInt(pathname.replace('http://localhost:3000/edit-team/', ''))
    let team = await model.read(teamID)
    team.id = teamID
    setTeamData(team)
  }

  async function saveTeam(teamData) {
    let newTeam = {
      id: teamData.id,
      name: teamData.name,
      coach_id: teamData.coach_id,
      league_id: 1,
      notes: teamData.notes,
      motto: teamData.motto,
    };
    console.log('newTeam: ', newTeam)
    await model.update(newTeam.id, newTeam);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (!form.checkValidity() === false) {
      // create team in the database
      console.log('teamData: ', teamData)

      setValidated(true);

      // add to database
      saveTeam(teamData);
      //redirect back to teams page.
    } else {
      // bad validity
      console.log("bad validity");
      setValidated(false)
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
              placeholder={teamData.name}
              onChange={(e) => teamData.name = e.target.value}
              defaultValue={teamData.name}
              required
            />
            <Form.Control.Feedback type="invalid">
              Team Name Required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formTeamCoach" className="m-2">
            {/* coach */}
            <Form.Label>Coach Name</Form.Label>
            <Form.Select
              required
              aria-label="Select Coach"
              defaultValue={teamData.coach_id}
              onChange={(e) => teamData.coach_id = e.target.selectedIndex+1}
            >
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
              placeholder={teamData.notes}
              defaultValue={teamData.notes}
              onChange={(e) => teamData.notes = e.target.value}
            />
          </Form.Group>
          <Form.Group controlId="formTeamMotto" className="m-2">
            {/* motto */}
            <Form.Label>Team Motto</Form.Label>
            <Form.Control
              type="text"
              placeholder={teamData.motto}
              defaultValue={teamData.motto}
              onChange={(e) => teamData.motto = e.target.value}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="m-2">
            Save Team
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
