import Button from 'react-bootstrap/Button'

export default function Nav() {
  return (<nav className="navbar navbar-expand-md">
    <div className="container-fluid">
      <a className="navbar-brand p-0 m-0" href="#">
        <img src="./img/binhoL1.png" className="logo" />
      </a>
    </div>
    <ul className="navbar-nav navbar-center">
      <li className="nav-link navHomeBtn">
        <Button variant='dark' className="homeBtn btn p-2 m-3">Home</Button>
      </li>
      <li className="nav-link navTeamsBtn">
        <Button variant='dark' className="teamsBtn btn p-2 m-3">Teams</Button>
      </li>
    </ul>
  </nav>);
}