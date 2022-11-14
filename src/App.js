// import logo from './logo.svg';
import{ useState } from 'react';
import './App.css';

function App() {
  
  const[userTable, setuserTable] = useState([])
  const tbdata = () => {
    fetch ("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
    .then((data) => {
      setuserTable(data)
    })
  } 

  tbdata();

  return (
      <>
        <div>
            <table id="userData">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                  {
                    userTable.map((nData, i) => <tr key={i}>
                      <td>{nData.id}</td>
                      <td>{nData.name}</td>
                      <td>{nData.username}</td>
                      <td>{nData.email}</td>
                      <td>{nData.phone}</td>
                    </tr>
                    )
                  }
              </tbody>
            </table>
        </div>
      </>
    )
}

export default App;
