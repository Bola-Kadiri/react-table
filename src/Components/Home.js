import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

 function Home(){
  const [users, setUsers]=useState([])
  useEffect(()=>{
    getUsers();
  }, [])
  const getUsers=async()=>{
    const result = await axios.get('http://localhost:3004/users');
    setUsers(result.data)
  }
    const handleDelete=async id=>{
      await axios.delete(`http://localhost:3004/users/${id}`);
      getUsers()
    }
  
  return (
    <div className='sub-all'>
    <div className='content'>
     <div className='py-4'>
    <div className="home">
      Home
      <table class="table">
  <thead>
    <tr className='bg-dark text-white align-center'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
     {users.map((user, index)=>{
        
         return(
          <tr> 
          <th scope='row'>{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td className='icons-box'>
            
            <Link to='' onClick={()=>handleDelete(user.id)}><AiFillDelete className='icons'/></Link>
            <Link to={`/user/edit/${user.id}`}><FaEdit className='icons'/></Link>
          </td>
          </tr>
         )
        
     })}
  </tbody>
</table>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Home;