import logo from './logo.svg';
import './App.css';
import {useState,} from 'react';
import Title from './components/Title'
import Modal from './components/Modal'
import Eventlist from './components/Eventlist';
import NewEventForm from './components/NewEventForm'


function App() {
const[showmodal, setShowmodal]=useState(false);
//useState for conditional templating
const[showEvents,setShowEvents]=useState(true);
//events usestate
const[events,setEvents]=useState([])



const addEvent=(event)=>{
  setEvents((prevEvent)=>{
    return[...prevEvent, event]
  })
  setShowmodal(false)
}
// function for deleting event list item

const handleClick=(id)=>{
  //setting the events that should be left in the array after the button is clicked
  setEvents((prevevent)=>{
    //accessing the previous state before deleting/updating
    return prevevent.filter(event=>{
    return event.id !== id
  })})
}

// console.log(showmodal);


//propped function to modal externalcomponent to handle toggling when its open

const handleClose=()=>{
  return setShowmodal(false)
}
//not proped to external,...handles opening when modal is closed
const open=()=>{
  return setShowmodal(true)
}

  
  return (
    <div className="App">
      {/* import from Title,an external component */}
      <Title title='Events in your area' ></Title>
      <div>
        
      {/* updates setshowevents state to false */}
       {showEvents && <button onClick={()=>{setShowEvents(false)}}>hide events</button>}
        <div>
        {!showEvents && <button onClick={()=>{setShowEvents(true)}}>showEvents</button>}
        </div>
      </div>
      {/* //looping through the events initial state */}
      {/* showevents controls the display of the items depending if it's true or false */}
      {showEvents && <Eventlist events={events} handleClick={handleClick}/>}   
      {/* main handler for showing andhiding modal */}
        {showmodal && <Modal handleClose={handleClose} isSalesModal={true}>
         <NewEventForm addEvent={addEvent}/>
          </Modal>}
          <button onClick={open}>Add New Event</button>
    </div>
  );
}

export default App;
