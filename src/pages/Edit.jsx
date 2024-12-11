import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import "../styleing/edit.css";
const Edit = () => {
  const [mydata, setMydata] = useState({});
  const { id } = useParams();
  const loadData = () => {
    let api = `http://localhost:3000/movies/${id}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMydata((values) => ({ ...values, [name]: value }));
    console.log(mydata);
  };

  const handleSubmit = () => {
    let api = `http://localhost:3000/movies/${id}`;
    axios.put(api, mydata).then((res) => {
      message.success("Data succesflly updated!!!");
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
          marginLeft: "25%",
          marginRight: "25%",
          borderRadius: "10px",
        }}
      >
        {" "}
        Update Record : {id}{" "}
      </h1>
      <hr size="4" color="black" />
      <div className="std">
        Edit Name :{" "}
        <input
          type="text"
          name="name"
          value={mydata.name}
          onChange={handleInput}
        />
        <br />
        Edit Price :{" "}
        <input
          type="text"
          name="price"
          value={mydata.price}
          onChange={handleInput}
        />
        <br />
        Edit Theater Name :{" "}
        <input
          type="text"
          name="theater"
          value={mydata.theater}
          onChange={handleInput}
        />
        <br />
        Edit Date :{" "}
        <input
          type="text"
          name="date"
          value={mydata.date}
          onChange={handleInput}
        />
        <br />
        Show Time :{" "}
        <input
          type="text"
          name="time"
          value={mydata.time}
          onChange={handleInput}
        />
        <br />
        <button className="btn-1" onClick={handleSubmit}>
          {" "}
          Update save!
        </button>
      </div>
    </>
  );
};

export default Edit;
