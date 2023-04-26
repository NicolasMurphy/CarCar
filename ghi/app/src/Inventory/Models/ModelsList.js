import { useState, useEffect} from 'react';

function ModelsList() {
  const [models, setModels] = useState([]);

  const getData = async () => {
    const resp = await fetch('http://localhost:8100/api/models/');
    if (resp.ok) {
      const data = await resp.json();
      setModels(data.models);
    }
  }

  useEffect(() => {
    getData();
  }, [])

    return (
      <>
      <br></br>
      <h1>Models</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Picture name</th>
          </tr>
        </thead>
        <tbody>
          {models.map(model => {
            return (
              <tr key={model.href}>
                <td>{ model.name }</td>
                <td>{ model.manufacturer.name }</td>
                <td><img src={ model.picture_url } width="170" height="110" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
    );
  }

  export default ModelsList;
