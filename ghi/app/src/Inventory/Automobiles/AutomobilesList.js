import { useState, useEffect} from 'react';

function AutomobilesList() {
  // const [automobiles, setAutomobiles] = useState([]);

  // const getData = async () => {
  //   const resp = await fetch('http://localhost:8100/api/automobiles/');
  //   if (resp.ok) {
  //     const data = await resp.json();
  //     setAutomobiles(data.models);
  //     console.log(data)
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

    return (
      <>
      <br></br>
      <h1>Automobiles</h1>
      {/* <table className="table table-striped">
        <thead>
          <tr>
            <th>Vin</th>
          </tr>
        </thead>
        <tbody>
          {automobiles.map(automobile => {
            return (
              <tr key={automobile.id}>
                <td>{ automobile.vin }</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      </>
    );
  }

  export default AutomobilesList;
