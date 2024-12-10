import { Link } from 'react-router-dom';
import image from './Second_image.png'
const Home=()=>{
return(
    <div>
        <section style={{display:"flex",jusifyContent:"center",alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',flex:'1'}}>
            <p style={{color:"blue",fontSize:'4rem',margin:'0'}}>Do What's Best For Your Brand.</p>
           <Link to="/https://calendly.com/rishabhnanda/30min" > <button className="btn" >
                BOOK A MEETING</button> </Link>
            </div>
            <img src={image} alt="second_image" style={{flex:'1.4'}}/>
        </section>

    <section style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        
            <div><h1 style={{color:"blue",textAlign:"center"}}>What we do</h1></div>
            <div style={{borderTop:"3px solid blue",display:'flex',justifyContent:'center',alignItems:'center',gap:'20rem',maxWidth:'80%'}}> 
            <div style={{display:'flex',alignItems:'center'}}><img  alt="image"/>
            <p style={{color:"blue",fontSize:'2rem'}}>Shifting The Narratives</p>
            </div>
            <div><p>We help you in shifting all your negative PR into positive ones using our strategic UGC push.</p></div>
            </div>


            <div style={{borderTop:"3px solid blue",display:'flex',justifyContent:'center',alignItems:'center',gap:'20rem',maxWidth:'80%'}}> 
            <div style={{display:'flex',alignItems:'center'}}><img  alt="image"/>
            <p style={{color:"blue",fontSize:'2rem'}}>Building An Online Presence</p>
            </div>
            <div><p>We give your brand a much-needed push in all the relevant communities and forums to make sure that you don't go unnoticed.</p></div>
            </div>



            <div style={{borderTop:"3px solid blue",display:'flex',justifyContent:'center',alignItems:'center',gap:'20rem',maxWidth:'80%'}}> 
            <div style={{display:'flex',alignItems:'center'}}><img  alt="image"/>
            <p style={{color:"blue",fontSize:'2rem'}}>Building A Personal Brand</p>
            </div>
            <div><p>People relate with founders much better than they relate with Brands. We help you become more relatable and connect with your audience on a deeper lever.</p></div>
            </div>


            <div style={{borderTop:"3px solid blue",display:'flex',justifyContent:'center',alignItems:'center',gap:'20rem',maxWidth:'80%'}}> 
            <div style={{display:'flex',alignItems:'center'}}><img  alt="image"/>
            <p style={{color:"blue",fontSize:'2rem'}}>Building Your Content Funnel</p>
            </div>
            <div><p>Boost website traffic by 20% and brand awareness by 35%! Our all-in-one solution, encompassing research, writing, SEO-optimized blogs, and captivating videos, helps you build an impeccable content machine that gets results.</p></div>
            </div>


           

            
            <div style={{textAlign:"center"}}>  <Link to="/https://calendly.com/rishabhnanda/30min" ><button style={{onhover:"",paddingLeft:'2rem',paddingRight:'2rem',paddingTop:'1rem',paddingBottom:'1rem'}}>BOOK NOW</button> </Link></div>
           
        </section>

        <section style={{marginTop:'6rem'}}>
            <div style={{textAlign:"center"}}><p style={{color:"blue", fontSize:'2rem',fontWeight:'bold'}}>The Difference We've Made So Far</p></div>
            <div style={{display:'flex',justifyContent:'center' }}>
                <div style={{display:'flex',width:'80%',justifyContent:'center'}}>
                <div style={{display:"flex"}}><h1 style={{color:'blue'}}></h1><p style={{color:'blue'}}></p></div>

            <div><h1 style={{color:'blue'}}>50K+</h1><p style={{color:'blue'}}>average Impressions/per week/per brand</p></div>
            <div><h1 style={{color:'blue'}}>15%</h1><p style={{color:'blue'}}>Avg. Increase in sales within 3 months of our content service.</p></div>
            <div><h1 style={{color:'blue'}}>30%</h1><p style={{color:'blue'}}>Better engagement on personal accounts within 2 months</p></div>
            <div><h1 style={{color:'blue'}}>20+</h1><p style={{color:'blue'}}>Business Impacted so far</p></div>
            </div>
                </div>

                
        </section>
    </div>
)
}
export default Home;