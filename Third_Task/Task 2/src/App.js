import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./styles.css";
import Form from "./views/form";
import Table from "./views/table";
export default function App() {
  const [table, setTable] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("object")) {
      setData(JSON.parse(localStorage.getItem("object")));
      console.log(data);
    } else {
      setData([
        {
          "Full Name": "John Doe",
          Email: "johndoe@gmail.ocm",
          Address: "address",
          Phone: "1234354353",
          Salary: "99999",
          "Date Of Joining": "2022-02-02",
          Working: "working",
          Designation: "Senior",
          Remark: "Good"
        }
      ]);
    }
  }, [data]);
  return (
    <div className="App">
      <Navbar />
      <div class="btn-group mt-2 mb-2" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => {
            setTable(false);
          }}
        >
          Form
        </button>

        <button
          type="button"
          class="btn btn-secondary"
          onClick={() => {
            setTable(true);
          }}
        >
          Table
        </button>
      </div>
      {table ? <Table dd={data} /> : <Form />}
    </div>
  );
}
