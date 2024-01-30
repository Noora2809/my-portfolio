import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";

function Header() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s", // Add a smooth transition for color change
  };

  const mediaQueryStyle = {
    "@media (max-width: 768px)": {
      textAlign: "center",
    },
  };

  return (
    <div>
      <MDBNavbar
        expand="lg"
        className={`navbar-expand-lg         `}
      >
        <MDBContainer fluid className="container-fluid">
          <img
            src="https://cdn.dribbble.com/users/5720644/screenshots/13912339/gif.gif"
            className="img-fluid"
            height={"120px"}
            width={"250px"}
            alt=""
          />
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavSecond(!openNavSecond)}
            className="order-0"
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavSecond}>
            <MDBNavbarNav className="navbar-nav me-auto mb-2 mb-lg-0">
              <MDBNavbarLink
                active
                aria-current="page"
                href="./Home"
                style={{ ...linkStyle, ...mediaQueryStyle }}
                className="text-center"
                onMouseOver={(e) => (e.target.style.color = "blue")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                Home
              </MDBNavbarLink>
              <MDBNavbarLink
                href="./About"
                style={{ ...linkStyle, ...mediaQueryStyle }}
                onMouseOver={(e) => (e.target.style.color = "blue")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                About
              </MDBNavbarLink>
              <MDBNavbarLink
                href="#"
                style={{ ...linkStyle, ...mediaQueryStyle }}
                onMouseOver={(e) => (e.target.style.color = "blue")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                Skills
              </MDBNavbarLink>
              <MDBNavbarLink
                href="#"
                style={{ ...linkStyle, ...mediaQueryStyle }}
                onMouseOver={(e) => (e.target.style.color = "blue")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                Work
              </MDBNavbarLink>
              <MDBNavbarLink
                href="#"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = "blue")}
                onMouseOut={(e) => (e.target.style.color = "white")}
              >
                Contact
              </MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
