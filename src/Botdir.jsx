import {Link} from 'react-router-dom'
import image from './image.png'
const Botdir =({seVisible})=>{
    return(
        <div className="botAlign" >
           
 <img src={image} alt='bot image' onClick={seVisible}/>
        </div>
    )
}
export default Botdir;