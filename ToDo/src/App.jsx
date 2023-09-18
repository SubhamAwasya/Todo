import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const [allData, setAllData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((res) => {
        setAllData(res.users);
      })
      .catch((e) => {
        console.log("error" + e);
      });
  }, [allData]);

  function submitHandle(e) {
    e.preventDefault();
    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const data = e.target.Data.value;
    if (name === "" || email === "" || data === "") {
      alert("Enter Some value");
      return;
    }
    setName("");
    setEmail("");
    setData("");

    fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email, data: data }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <h1>TODO APP</h1>
      <div className="todo-container">
        <form onSubmit={submitHandle}>
          <div>
            <input
              className="todo-name todo-input"
              name="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
            <input
              className="todo-email todo-input"
              name="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
          </div>
          <textarea
            className="todo-data todo-textarea"
            name="Data"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
            placeholder="Data"
          />
          <button className="todo-create-btn" type="submit">
            Create
          </button>
        </form>
      </div>
      <div className="card-holder">
        {allData.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              data={e.data}
              email={e.email}
            ></Card>
          );
        })}
      </div>
    </>
  );
}
export default App;
