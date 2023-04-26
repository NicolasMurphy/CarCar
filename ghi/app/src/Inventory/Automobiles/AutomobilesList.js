import { useState, useEffect} from 'react';

function AutomobilesList() {
  const [autos, setAutomobiles] = useState([]);
  const [sales, setSales] = useState([]);

  const getAutos = async () => {
    const resp = await fetch('http://localhost:8100/api/automobiles/');
    if (resp.ok) {
      const data = await resp.json();
      setAutomobiles(data.autos);
    }
  }

  const getSales = async () => {
    const resp = await fetch('http://localhost:8090/api/sales/');
    if (resp.ok) {
      const data = await resp.json();
      setSales(data.sales);
    }
  }

  useEffect(() => {
    getAutos();
    getSales();
  }, [])

    return (
      <>
      <br></br>
      <h1>Automobiles</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Vin</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          {autos.map(auto => {
            let str = JSON.stringify(sales)
            return (
              <tr key={auto.vin}>
                <td>{ auto.vin }</td>
                <td>{ auto.color }</td>
                <td>{ auto.year }</td>
                <td>{ auto.model.name }</td>
                <td>{ auto.model.manufacturer.name }</td>
                <td>{ (str.includes(auto.vin)) ? "yes" : "no" }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    );
  }

  export default AutomobilesList;
