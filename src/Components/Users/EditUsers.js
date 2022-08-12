import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom';


const EditUsers=()=>{
    let history=useNavigate();
    const {id}=useParams();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    });
    useEffect(()=>{
      loadUser()
    }, [])

    const {name, username, email} =user
    const  onInputChange = e=>{
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.patch(`http://localhost:3004/users/${id}`, user)
        history.push('/')
    }
    const loadUser=async ()=>{
      const result = await axios.get(`http://localhost:3004/users/${id}`)
      setUser(result.data)
    }
    return(
        <div className='container'>
        <div className='w-75 mx-auto shaow p-5'>
          <div className='text-center mb-4'>Add Users</div>
          <form onSubmit={e =>onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Name'
                name='name'
                value={name}
                onChange={e =>  onInputChange(e)}
              />
              
              
            </div>
            <div className='form-group'>
            <input
              type='text'
              className='form-control form-control-lg'
              placeholder='Enter Your Username'
              name='username'
              value={username}
              onChange={e =>  onInputChange(e)}
            />
            
            
          </div>
          <div className='form-group'>
          <input
            type='email'
            className='form-control form-control-lg'
            placeholder='Enter Your Email'
            name='email'
            value={email}
            onChange={e =>  onInputChange(e)}
          />
          
          
        </div>
        <button className='btn btn-warning btn-block' type='submit'>Update</button>
          </form>
        </div>
      </div>
    )
}

export default EditUsers;