import { Link, Outlet } from "react-router-dom";
import { Container, Nav, Button } from "react-bootstrap";
import { useState } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineInsertChart } from "react-icons/md";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { MdBrowserUpdated } from "react-icons/md";

import "./styleing/footer.css";
import "./styleing/layout.css";

const Layout = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <Container fluid>
        <div className="d-flex" style={{ minHeight: "100vh" }}>
          <div
            className={`sidebar text-white p-3 ${sidebarVisible ? "show" : ""}`}
            style={{ width: "250px" }}
          >
            <h3>MOVIE TICKETS</h3>
            <Nav className="flex-column" style={{ gap: "15px" }}>
              <Nav.Link as={Link} to="home">
                <FaHome className="icon" />
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="insert">
                <MdOutlineInsertChart className="icon" />
                Insert
              </Nav.Link>
              <Nav.Link as={Link} to="display">
                <MdOutlineSmartDisplay className="icon" />
                Display
              </Nav.Link>
              <Nav.Link as={Link} to="search">
                <FaSearch className="icon" />
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="update">
                <MdBrowserUpdated className="icon" />
                Update
              </Nav.Link>
            </Nav>
          </div>

          <div className="content ml-4" style={{ flex: 1 }}>
            <Button
              variant="primary"
              className="d-lg-none"
              onClick={toggleSidebar}
              style={{ marginBottom: "20px" }}
            >
              {sidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
            </Button>
            <Outlet />
          </div>
        </div>
      </Container>
    </>
  );
};
export default Layout;
