import { useState, useEffect } from "react";
import "./App.scss";
import Loading from "../../atoms/Loading/Loading";
import Header from "../../molecules/Header/Header";
import TallyTable from "../../molecules/TallyTable/TallyTable";

function App() {

  const [data, setData] = useState([]);

  const [isReady, setIsReady] = useState(false);

  /*
  Change data using fetch, so then it can be incorporated with a preloader
  */

  const getData = () => {
    fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (myJson) {
      // console.log(myJson);
      setData(myJson);
      if(myJson.results && myJson.results.length > 0) setIsReady(true);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="MyApp">
      <Loading isReady={isReady}/>
      <Header />
      <TallyTable data={data} />
    </div>
  );
}

export default App;
