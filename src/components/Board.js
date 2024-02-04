import React, { useState } from 'react'
import Profiles from './Profile';
import Profilestoday from './Profiletoday';
import { Leaderboard } from './Data';
import "./Profile.css"


export default function Board() {
    const [period, setPeriod] = useState(0);
    const [today, setToday] = useState(false);
    const handleClick = (e) => {
    setPeriod(e.target.dataset.id)
  }

    const todaySetter= () => {
        setToday(true);
    }

    const allTime= () => {
        setToday(false);
    }

  return (
    <div className="board">
        <h1 className='leaderboard'>Leaderboard</h1>

        <div className="duration">
            <button onClick={todaySetter} data-id='1'>Today</button>
            <button onClick={allTime} data-id='0'>All Time</button>
        </div>
        {today ? <Profilestoday Leaderboard={between(Leaderboard, today)}></Profilestoday> : <Profiles Leaderboard={between(Leaderboard, today)}></Profiles>
}
    </div>
  )
}

function between(data, today){
    if (today){
        return data.sort((a, b) => {
            if ( a.today === b.today){
                return b.today - a.today;
            } else{
                return b.today - a.today;
            }
        })
    }
    else{
        return data.sort((a, b) => {
            if ( a.score === b.score){
                return b.score - a.score;
            } else{
                return b.score - a.score;
            }
        })
    }

}