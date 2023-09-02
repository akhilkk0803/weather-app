import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import Header from "./Header";
import Contents from "./Contents";
import { useEffect, useState } from "react";
function App() {
  const [data, setdata] = useState(null);
  function getdata(data) {
    console.log(data);
    setdata(data);
  }
  useEffect(()=>{
    setdata(false);
  },[])
  return (
    <div className="App">
      <Card>
        <Header getdata={getdata} />
        <Contents data={data} />
      </Card>
    </div>
  );
}

export default App;
