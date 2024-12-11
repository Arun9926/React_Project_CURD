import vdo from "../images/reel.mp4";

const Home = () => {
  return (
    <>
      <div style={{ position: "relative", textAlign: "center" }}>
        {/* <img
          src={img1}
          alt="Movie Ticket"
          style={{ width: "100%", height: "100vh" }}
        /> */}
        <video
          src={vdo}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100vh" }}
        ></video>
        <h1
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            fontSize: "1.8rem",
          }}
        >
          Welcome to My Movie Ticket Booking App
        </h1>
      </div>
    </>
  );
};

export default Home;
