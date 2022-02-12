import "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../components/action";
const index = () => {
  const count = useSelector((state) => state.temp);
  const dispatch = useDispatch();
  return (
    <div style={{ background: "gray", minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "250px",
        }}
      >
        <h1 style={{ margin: "0px", fontFamily: "Droid Sans" }}>
          Increment / Decreament
        </h1>
        <h3 style={{ marginTop: "0px" }}>with Next.js and Redux</h3>
        <div style={{ display: "flex", height: "60px" }}>
          <button
            onClick={() => dispatch(decrement())}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              background: "#5DADE2",
              borderStyle: "none",
              borderTopLeftRadius: "15px",
              fontSize: "25px",
              fontWeight: "bold",
              color: "#4A235A",
            }}
            className="btn"
          >
            -
          </button>
          <input
            value={count}
            style={{
              width: "60px",
              border: "4px solid #5DADE2",
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "bold",
              color: "red",
            }}
          />
          <button
            className="btn"
            onClick={() => dispatch(increment())}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              background: "#5DADE2",
              borderStyle: "none",
              borderBottomRightRadius: "15px",
              fontSize: "25px",
              fontWeight: "bold",
              color: "#4A235A",
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
