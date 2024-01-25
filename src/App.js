import "./App.css";
import Form from "./component/form";

function App() {
  const getData = (data) => {
    console.log("coming From Appjs", data);
  };
  return (
    <div>
      <Form onSubmit={getData} />
    </div>
  );
}

export default App;
