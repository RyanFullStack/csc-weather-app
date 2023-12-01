import { NavLink } from 'react-router-dom'
import safetyFront from '../../images/safetycardfront.png'
import safetyBack from '../../images/safetycardback.png'
import './safety.css'

function Safety () {
    return (
        <div className='safety-card'>
            <h5>Click images to open in new tab</h5>
        <a href={safetyFront} target='_blank' rel="noreferrer"><img src={safetyFront} alt='Click to open in new tab'/></a>
        <a href={safetyBack} target='_blank' rel="noreferrer"><img src={safetyBack} alt='Click to open in new tab'/></a>
        <NavLink exact to='/detailed'>BACK</NavLink>
        </div>
    )
}

export default Safety
