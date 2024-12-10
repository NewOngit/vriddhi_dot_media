import image from './Logo_image.png'
import {Link} from 'react-router-dom'

const Header =()=>{

    return (
        <div style={{display:"flex",width:"100%",alignItems:'center'}}>
            
            <img src={image} alt="company_logo" style={{flex:'1'}} /> 
            
           
            <ul style={{display:'flex',justifyContent:"space-between",flex:'2',marginLeft:'10rem',marginRight:'5rem',alignItems:'center'}}>
                <Link to={'/newsletter'} style={{margin:'0',color:'blue'}}>NewsLetter</Link>
                <a href="/" style={{margin:'0',color:'blue'}}>Service</a>
                <a href="/" style={{margin:'0',color:'blue'}}>Contact</a>
                <Link to={'/https://calendly.com/rishabhnanda/30min'}><button style={{border:"1px solid blue",height:'3rem',width:'10rem'}}>Book a Session</button></Link>
            
            </ul>
           
        </div>
    )
}
export default Header;