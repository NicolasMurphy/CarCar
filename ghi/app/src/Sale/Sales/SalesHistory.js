import { useState, useEffect} from 'react';

function SaleHistory() {
  const [sales, setSales] = useState([]);
  const [salespeople, setSalespeople] = useState([]);

  const [salesperson, setSalesperson] = useState('');

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  }

  const getSalesData = async () => {
    const salesUrl = ('http://localhost:8090/api/sales/')
    const response = await fetch(salesUrl)
    if (response.ok) {
      const data = await response.json();
      setSales(data.sales)
    }
  }

  const getSalespeopleData = async () => {
    const salespersonUrl = 'http://localhost:8090/api/salespeople/';
    const response = await fetch(salespersonUrl);
    if (response.ok) {
      const data = await response.json();
      setSalespeople(data.salespeople);
    }
  }


  useEffect(() => {
    getSalesData();
    getSalespeopleData();
  }, [])


    return (
      <>
        <br></br>
        <h1>Sales History</h1>
        <div className="mb-3">
          <select value={salesperson} onChange={handleSalespersonChange} required name="salespeople" id="salespeople" className="form-select">
              <option value="">Choose a Salesperson</option>
                {salespeople.map(salesperson => {
                  return (
                    <option key={salesperson.employee_id} value={salesperson.employee_id}>
                      {salesperson.first_name + ' ' + salesperson.last_name}
                    </option>
                  );
                })}
          </select>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Salesperson</th>
              <th>Customer</th>
              <th>VIN</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td>{ `${sale.salesperson.first_name} ${sale.salesperson.last_name}` }</td>
                  <td>{ `${sale.customer.first_name} ${sale.customer.last_name}` }</td>
                  <td>{ sale.automobile.vin }</td>
                  <td>{ sale.price }</td>
                </tr>
              );
            })}
          </tbody>
      </table>
    </>
  );
}

export default SaleHistory;
