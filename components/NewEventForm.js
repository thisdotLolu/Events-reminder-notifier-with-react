import { useState } from 'react';
import './NewEventForm.css';


export default function NewEventForm({addEvent}) {
  const [title, setTitle]=useState('')
  const [date, setDate]=useState('')
  const[location,setLocation]=useState('Manchester')

  //   const handleChange=(e)=>{
  //   setTitle(e.target.value)
  // }
  const resetForm=()=>{
    setTitle('')
    setDate('')
    setLocation('Manchester')
  }
  const handleSubmit=(e)=>{
    e.preventDefault()

//create an object for the adding of items, to store them
    const event ={
      title: title,
      date: date,
      location:location,
      id:Math.floor(Math.random()*100000)
    }
    addEvent(event)
    // console.log(event);
   
    resetForm();
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
        <label>
            <span>Event Title:</span>
        <input type="text" 
        value={title} 
        onChange={(e)=>{setTitle(e.target.value)}}/>    
        </label>
        <label>
            <span>Event Date:</span>
        <input value={date} type="date" onChange={(e)=>(setDate(e.target.value))}/>
        </label>
        <label>
          <span>Event location:</span>
          <select onChange={(e)=>setLocation(e.target.value)}>
            <option value="manchester">Manchester</option>
            <option value="london">London</option>
            <option value="crawford">Crawford</option>
            </select>
        </label>
        <button>Submit</button>
    </form>
  )
}

