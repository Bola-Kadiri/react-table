import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
const AddUsers=()=>{
    let history = useNavigate()
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })
    
    const {name, username, email} =user
    console.log(user);
    const  onInputChange = e=>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post('http://localhost:3004/users',user)
        history.push('/')
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
         <button className='btn btn-warning btn-block'>Add User</button>
           </form>
         </div>
       </div>
    )
}

export default AddUsers