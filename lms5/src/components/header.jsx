import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header ({ title, logo }) {
  return (
    <>
      <Navbar className='m-0'>
        <Container>
          <Navbar.Brand href='/'>
            <img 
              className='logo'
              src={logo}
              alt=''
            />{' '}
            {title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' className='d-flex justify-content-end'>

            <Nav variant='pills' defaultActiveKey='/'>
              <Nav.Item>
                <LinkContainer to='/'>
                  <Nav.Link >Home</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to='/teams'>
                <Nav.Link>Teams</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}