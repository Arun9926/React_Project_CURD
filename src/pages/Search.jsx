import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { message } from "antd";

const Search = () => {
  const [date, setDate] = useState("");
  const [mydata, setMydata] = useState([]);
  const [errMsg, setErrMsg] = useState([]);
  const handleSubmit = () => {
    let api = `http://localhost:3000/movies/?date=${date}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
      if (res.data.length <= 0) {
        errMsg = message.error("No movie for this date");
      } else {
        errMsg = "";
      }
    });
  };
  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.name}</td>
          <td>{key.price}</td>
          <td>{key.theater}</td>
          <td>{key.date}</td>
          <td>{key.time}</td>
        </tr>
      </>
    );
  });
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
          marginLeft: "35%",
          marginRight: "35%",
          borderRadius: "10px",
        }}
      >
        Search Info
      </h1>
      <hr size="4" color="black" />
      <center>
        Enter Date :{" "}
        <input
          type="text"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <Button onClick={handleSubmit} variant="dark" className="m-4">
          Search
        </Button>
      </center>
      <hr />
      <Table striped bordered hover responsive="sm">
        <thead class="table-dark">
          <tr>
            <th> Movie name</th>
            <th>Price</th>
            <th>Theater Name</th>
            <th>Date</th>
            <th>Show Time</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};
export default Search;
