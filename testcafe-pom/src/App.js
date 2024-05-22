import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [user, setUser] = useState({});
  const saveUser = () => {
    setData([...data, user])
    setUser({ firstName: '', lastName: '', age: '', dob: '', country: '' });
  }

  const updateUser = (e) => {
    let updatedUser = { ...user, [e.target.name]: e.target.value };
    setUser(updatedUser)
  }
  return (
    <div className="App">
      <form>
        <div>
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={updateUser} required />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={updateUser} required />
        </div>
        <div>
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" value={user.age} onChange={updateUser} required />
        </div>
        <div>
          <label for="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={user.dob} onChange={updateUser} required />
        </div>
        <div>
          <label for="country">Country:</label>
          <select id="country" name="country" value={user.country} onChange={updateUser} required>
            <option value="">Select your country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <button id="btnSaveUser" type="button" onClick={saveUser}>Submit</button>
      </form>

      <table data-testid="registered-user-list">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Date of Birth</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => {
            return <tr>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.age}</td>
              <td>{row.dob}</td>
              <td>{row.country}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
