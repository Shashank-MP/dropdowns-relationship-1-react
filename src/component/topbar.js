import { NavDropdown,Nav,Container,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function TopBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              alt=""
              src="favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Project LOGO
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
          <Nav
            className="justify-content-end"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             
            <NavDropdown title="Shreyas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">switch user</NavDropdown.Item>
              <NavDropdown.Item href="#action4">logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">view profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <img
              style={{borderRadius:50}}
              alt=""
              src="octocatpic.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;