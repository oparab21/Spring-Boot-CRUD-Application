import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Button } from 'bootstrap';
import { Link, useParams } from 'react-router-dom';

function Home() {

    const { id } = useParams();


    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
            const results = await axios.get("http://localhost:8080/userList");
            setUsers(results.data);
            console.log(users)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
      };

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
    </tr>
  </thead>
  <tbody>
    {users.map((value,key) => (
        <tr key={key}>
        <th scope="row" >{key+1}</th>
        <td>{value.name}</td>
        <td>{value.email}</td>
        <td>{value.username}</td>
        <td>
        <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${value.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${value.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(value.id)}
                  >
                    Delete
                  </button>
                </td>
      </tr>
    )

    )}
    
   
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home