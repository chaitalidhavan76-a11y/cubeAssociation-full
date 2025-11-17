import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <>
      <header className="hero-section">
        <Navbar expand="lg" className="custom-navbar">
          <Container className="navbar-container">
            <Link to="/home"><img src={logo} alt className="navbar-logo" /></Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav className="nav-links">

                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  About Us
                </NavLink>

                <NavDropdown
                  title="Services"
                  id="services-dropdown"
                  renderMenuOnMount={true}
                  menuVariant="light"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ApplyLoan"
                    end
                    className={({ isActive }) =>
                      isActive ? "dropdownline dropdown-inactive" : "dropdownline"
                    }
                  >
                    Home Loans
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/ApplyLoan"
                    end
                    className={({ isActive }) =>
                      isActive ? "dropdownline dropdown-inactive" : "dropdownline"
                    }
                  >
                    Business Loans
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/ApplyLoan"
                    end
                    className={({ isActive }) =>
                      isActive ? "dropdownline dropdown-inactive" : "dropdownline"
                    }
                  >
                    Personal Loans
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/ApplyLoan"
                    end
                    className={({ isActive }) =>
                      isActive ? "dropdownline dropdown-inactive" : "dropdownline"
                    }
                  >
                    Bike Loans(old two-wheeler)
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/ApplyLoan"
                    end
                    className={({ isActive }) =>
                      isActive ? "dropdownline dropdown-inactive" : "dropdownline"
                    }
                  >
                    Car Loans (Used Vehicles)
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/ApplyLoan"
                    end
                    className={({ isActive }) =>
                      isActive ? "dropdownline dropdown-inactive" : "dropdownline"
                    }
                  >
                    Credit Card
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/ApplyLoan"
                    end
                    className={({ isActive }) =>
                      isActive ? "dropdownline dropdown-inactive" : "dropdownline"
                    }
                  >
                    Gold Loans(sell the gold anywhere)
                  </NavDropdown.Item>
                </NavDropdown>

                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  Contact Us
                </NavLink>

              </Nav>
            </Navbar.Collapse>

            <div className="nav-btn-container">
              <Link to="/ApplyLoan">
                <button className="apply-btn1">Apply Now</button>
              </Link>
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
