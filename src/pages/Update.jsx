import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    let api = "http://localhost:3000/movies";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  const myDel = (id) => {
    let api = `http://localhost:3000/movies/${id}`;
    axios.delete(api).then((res) => {
      message.error("Record Sjuccesfully deleted!");
      loadData();
    });
  };

  const myEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td> {key.name}</td>
          <td> {key.price}</td>
          <td> {key.theater}</td>
          <td> {key.date}</td>
          <td> {key.time}</td>
          <td>
            <a
              href="#"
              onClick={() => {
                myEdit(key.id);
              }}
            >
              <FaEdit />
            </a>
          </td>
          <td>
            <a
              href="#"
              onClick={() => {
                myDel(key.id);
              }}
            >
              <MdDelete style={{ color: "red" }} />
            </a>
          </td>
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
        Update Info
      </h1>
      <hr size="4" color="black" />
      <Table striped bordered hover responsive="sm">
        <thead class="table-dark">
          <tr>
            <th>Movie Name</th>
            <th>Price</th>
            <th>Theater Name</th>
            <th>Date</th>
            <th>Show Time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};
export default Update;
