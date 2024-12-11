import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { message } from "antd";

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = () => {
    let api = "http://localhost:3000/movies";
    axios.post(api, input).then((res) => {
      message.success("Insert Successfully");
    });
  };

  return (
    <>
      <hr size="4" color="black" />
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          border: "2px solid black",
          fontFamily: "bold",
          marginLeft: "30%",
          marginRight: "30%",
          borderRadius: "10px",
        }}
      >
        {" "}
        Insert Movie Info
      </h1>
      <hr size="4" color="black" />
      <Form
        style={{
          width: "100%",
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Movie name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={input.name}
            onChange={handleInput}
            style={{ width: "700px" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Ticket price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={input.price}
            onChange={handleInput}
            style={{ width: "700px" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Theater name</Form.Label>
          <Form.Control
            type="text"
            name="theater"
            value={input.theater}
            onChange={handleInput}
            style={{ width: "700px" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Date</Form.Label>
          <Form.Control
            type="text"
            name="date"
            value={input.date}
            onChange={handleInput}
            style={{ width: "700px" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Show Time</Form.Label>
          <Form.Control
            type="text"
            name="time"
            value={input.time}
            onChange={handleInput}
            style={{ width: "700px" }}
          />
        </Form.Group>
        <Button variant="dark" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Insert;
