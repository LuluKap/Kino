import React, { useState, useEffect } from "react";

function Searchbar() {

  const [endPoint, setEndPoints] = useState('')

  const [container, setContainer] = useState([])

  const [finalPoint, setFinalPoint] = useState('');
    
useEffect(() =>{
  fetchMe()
},[finalPoint])

  const fetchMe = () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fb165f2f83msh3819e46f1f866c9p199f40jsne52d7734edf2',
      'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
    }
  };

  fetch(`https://unogs-unogs-v1.p.rapidapi.com/search/titles?order_by=title_asc&title=+${endPoint}`, options)
    .then(response => {
      return response.json();
    })
    .then(data => {
      setContainer(data.results)
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

const onChangeHandler = (e) => {
  setEndPoints(e.target.value)
}
const submitHandler = e => {
  e.preventDefault()
  setFinalPoint(endPoint)
}

  return (
    <div>
      <div className="control"> 
      <form onSubmit={submitHandler}>
        <input
          className="input"
          type="text" value={endPoint} onChange={onChangeHandler} placeholder="Search your movies"/>
          <button type='submit'>submit</button>
          </form>
{/* <div className="element">
          {container.map((item,index) => {
            return(
              <div key={index} className='element-div'> 
              <img src={item.img} alt="" />
              <p>{item.title}</p>
              </div>
            )
          })}
          </div> */}
      </div>
    </div>
  );
}

export default Searchbar;