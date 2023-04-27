import React, { useState, useEffect} from 'react';

function SaleForm() {
  const [autos, setAutomobiles] = useState([]);
  const [salespeople, setSalespeople] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [automobile, setAutomobile] = useState('');
  const [salesperson, setSalesperson] = useState('');
  const [customer, setCustomer] = useState('');
  const [price, setPrice] = useState('');

  const handleAutomobileChange = (event) => {
    const value = event.target.value;
    setAutomobile(value);
  }

  const handleSalespersonChange = (event) => {
    const value = event.target.value;
    setSalesperson(value);
  }

  const handleCustomerChange = (event) => {
    const value = event.target.value;
    setCustomer(value);
  }

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  }

  const handleSubmit = async (event) => {
    console.log(handleSubmit);
    event.preventDefault();

    const data = {};
    data.automobile = automobile;
    data.salesperson = salesperson;
    data.customer = customer;
    data.price = price;

    const salesUrl = 'http://localhost:8090/api/sales/';
    const fetchConfig = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(salesUrl, fetchConfig);
    if (response.ok) {

      setAutomobile('');
      setSalesperson('');
      setCustomer('');
      setPrice('');
    }
  }

  const getAutomobileData = async () => {
    const automobileUrl = 'http://localhost:8100/api/automobiles/';
    const response = await fetch(automobileUrl);

    if (response.ok) {
      const data = await response.json();
      /*console.log('automobile data:', data);*/
      setAutomobiles(data.autos);
    }
  }

  const getPersonData = async () => {
    const salespersonUrl = 'http://localhost:8090/api/salespeople/';
    const response = await fetch(salespersonUrl);
    if (response.ok) {
      const data = await response.json();
      /*console.log('salespeople data:', data);*/
      setSalespeople(data.salespeople);
    }
  }

  const getCustomerData = async () => {
    const customerUrl = 'http://localhost:8090/api/customers/';
    const response = await fetch(customerUrl);
    if (response.ok) {
      const data = await response.json();
      /*console.log('customer data:', data);*/
      setCustomers(data.customers);
    }
  }

  useEffect(() => {
    getAutomobileData();
    getPersonData();
    getCustomerData();

  }, []);

    return (
      <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Add a Sale</h1>
          <form onSubmit={handleSubmit} id="create-sale-form">
              <div className="mb-3">
                <select value={automobile} onChange={handleAutomobileChange} required name="automobile" id="automobile" className="form-select">
                  <option value="">Choose an Automobile VIN</option>
                  {autos.map(automobile => {
                    return (
                        <option key={automobile.vin} value={automobile.vin}>
                            {automobile.vin}
                        </option>
                    );
                })}
                </select>
              </div>
              <div className="mb-3">
                <select value={salesperson} onChange={handleSalespersonChange} required name="salesperson" id="salesperson" className="form-select">
                  <option value="">Choose a Salesperson</option>
                  {salespeople.map(salesperson => {
                    return (
                        <option key={salesperson.id} value={salesperson.id}>
                            {salesperson.first_name + ' ' + salesperson.last_name}
                        </option>
                    );
                })}
                </select>
              </div>
              <div className="mb-3">
                <select value={customer} onChange={handleCustomerChange} required name="customer" id="customer" className="form-select">
                  <option value="">Choose a Customer</option>
                  {customers.map(customer => {
                    return (
                        <option key={customer.id} value={customer.id}>
                            {customer.first_name + ' ' + customer.last_name}
                        </option>
                    );
                })}
                </select>
              </div>
              <div className="form-floating mb-3">
                  <input value={price} onChange={handlePriceChange} placeholder="Price" required type="text" name="price" id="price" className="form-control"></input>
                  <label htmlFor="price">Price</label>
              </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
      </div>

    );
  }

export default SaleForm;
