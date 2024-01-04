import { NavLink } from 'react-router-dom'
import safetyFront from '../../images/safetycardfront.jpg'
import safetyBack from '../../images/safetycardback.jpg'
import './safety.css'

function Safety () {
    return (
        <div className='safety-card'>
            <span id='safety-title'>Click images to open in new tab</span>
        <a href={safetyFront} target='_blank' rel="noreferrer"><img src={safetyFront} alt='Click to open in new tab'/></a>
        <a href={safetyBack} target='_blank' rel="noreferrer"><img src={safetyBack} alt='Click to open in new tab'/></a>
        <NavLink exact to='/detailed'>Back</NavLink>
        </div>
    )
}

export default Safety
