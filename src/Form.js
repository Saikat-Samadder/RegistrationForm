import React, { useEffect, useState } from 'react'
import "./Form.css"
const Form = () => {

  const data ={Fname:"",Lname:"",Email:"",Password:""};


  const[inputdata, setinputdata]=useState(data)
  const [flag, setflag] = useState(false)


    useEffect(()=>{
       console.log("Registered");
    },[flag])

   function handledata(e){
      setinputdata({...inputdata,[e.target.name]:e.target.value})
      console.log(inputdata);
   }
  function handleSubmit(e){
       e.preventDefault(e);
       if(!inputdata.Fname || !inputdata.Lname || !inputdata.Email || !inputdata.Password){
          alert("All fields are Mandatory")
       }else{
          setflag(true)
       }
  }
  return (
    <div>
        <pre>{(flag)? <h2 className='head'>Hello {inputdata.Fname}, you have Registered Successfully</h2> : "" }</pre>
      <div className='main'> 
         <div className='child'> 
            <div className='heading'>
            <h1>Registration Form</h1>
            </div>
              <form className='form' onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name='Fname' value={inputdata.Fname} onChange={handledata} />
                <label>Last Name</label>
                <input type="text" name='Lname' value={inputdata.Lname} onChange={handledata} />
                <label>Email</label>
                <input type="email" name='Email' value={inputdata.Email} onChange={handledata} />
                <label>Password</label>
                <input type="password" name='Password' value={inputdata.Password} onChange={handledata} /> <br />
                <button className='btn'>Submit</button>
              </form>
         </div>
      </div>
    </div>
  )
}

export default Form
