import React from 'react'
import styles from './Eventlist.module.css'

const Eventlist = ({handleClick,events}) => {



    return (
        events.map((event)=>{
            return(
              <div className={styles.card} key={event.id}>
                <h2>{event.title}</h2>
                <h2>{event.date}</h2>
                <h2>{event.location}</h2>
                {/* button for deleteing event state */}
                <button className={styles.button} onClick={()=>handleClick(event.id)}>delete event</button>
              </div>
            )
    })
  )
}

export default Eventlist