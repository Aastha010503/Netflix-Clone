import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at:"",
    typeOf: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmRiMWZhMGVmMjVmNDBhN2FjMjVjZTdjZWRkNGZjYSIsIm5iZiI6MTcxOTE1NjU4MS4xMDMxNTgsInN1YiI6IjY2NzQ0MTdhYWNmMmQxYjkxMGZjNWUyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q9MFBx2I3_38SHFH3TH4Wy1-zqr6MvGbFDH7V0LeR4s'
    }
  };
  
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src='https://www.youtube.com/embed/YQQD67N5pi0&t=6423s&ab_channel=GreatStack' title='trailer' frameborder="0" allowFullScreen></iframe>
      <div className="player-info">
        <p>apiData.published_at</p>
        <p>apiData.name</p>
        <p>apiData.type</p>
      </div>
    </div>
  )
}

export default Player