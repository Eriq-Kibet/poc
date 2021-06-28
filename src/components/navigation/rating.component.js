import React, { useState } from "react";
import {FaStar} from 'react-icons/fa'

const colors = {
  orange: "#FFBA5A",
  grey: "a9a9a9",
};
const styles = {
  conatianer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea:{
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      margin: "20px 0",
      minHeight: 100,
      padding: 10  },
   button: {
    
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10  }
   
};
function RateProject() {
  const [currentValue, setcurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const rateClick = value =>{
      setcurrentValue(value)
  }
  const handleMouseHover = value =>{
      setHoverValue(value)
  }
  const handleMouseLeave =()=>{
      setHoverValue(undefined)
  }
  const stars = Array(5).fill(0);
  return (
    <div style={styles.container}>
      <h2>Rate this app</h2>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return <FaStar key={index} size ={24} style={{
              marginRight: 10,
              cursor: "pointer"

          }}
          color={(hoverValue || currentValue)> index? colors.orange: colors.grey}
          onClick={()=>rateClick(index + 1)}
          onMouseHover={()=>handleMouseHover(index + 1)}
          onMouseLeave={handleMouseLeave}
          />;
        })}
      </div>
      <textarea placeholder="Whats your feedback" style={styles.textarea}/>
    </div>
  );
}

export default RateProject;