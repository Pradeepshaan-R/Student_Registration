import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Form, Button, Container } from "react-bootstrap";

async function loginUser(credentials) {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">LOG IN</h2>
            <Form onSubmit={handleSubmit}>
              {/* USERNAME START */}
              <Form.Group className="mb-2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>
              {/* USERNAME END */}

              {/* PASSWORD START */}
              <Form.Group className="mb-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              {/* PASSWORD END */}

              <Button type="submit" className="w-100 mt-2">
                LOG IN
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an Account? Login
        </div>
      </div>
    </Container>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
