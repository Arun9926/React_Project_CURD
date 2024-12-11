import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
const Display = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = () => {
    let api = "http://localhost:3000/movies";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td> {key.name} </td>
          <td> {key.price} </td>
          <td> {key.theater} </td>
          <td> {key.date} </td>
          <td> {key.time} </td>
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
        {" "}
        Display Info
      </h1>
      <hr size="4" color="black" />
      <Table striped bordered hover variant="light" responsive="sm">
        <thead class="table-dark">
          <tr>
            <th>Movie name</th>
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

export default Display;
