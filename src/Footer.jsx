const Footer =()=>{

    return (
        <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"blue"}}>
            <div style={{flex:'1'}}>
                <h1 style={{color:'white',flex:'1'}}>Let’s Work Together</h1>
            <p style={{color:"white"}}>
                <span>phone</span><br/>
                <span>+919266537839</span><br/>
                <span>info@vriddhi.media</span>
            </p>
            </div>
            <div style={{flex:'1'}}>
                <h1 style={{color:'white'}}>Get in the Know</h1>
                <label style={{color:'white'}}> Enter your Email</label><br/>
                <input type="text"
                style={{borderBottom:'1px solid white'}}/>
                <br/>
                <button style={{backgroundColor:'blue',color:'white',border:"1px solid rgba(560,0,0,1)"}}>SUBSCRIBE</button>
            </div>

<div style={{flex:'1'}}>
    <h1 style={{color:'white'}}>
    Stay in Touch
    </h1>
    <form onSubmit={(e)=>e.preventDefault()} style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        <div><label style={{color:'white'}}>First Name</label><br/>
        <input type="text"
                style={{borderBottom:'1px solid white'}}/>
        </div>
        <div>  <label style={{color:'white'}}> Last Name</label><br/>
               <input type="text"
                style={{borderBottom:'1px solid white'}}/>
</div>
<div>   <label style={{color:'white'}}>Email</label><br/>
        <input type="text"
                style={{borderBottom:'1px solid white'}}/>
     </div>             
     <div>          <label style={{color:'white'}}>Subject</label><br/>
               <input type="text"
                style={{borderBottom:'1px solid white'}}/>
     </div>
     <div>           <label style={{color:'white'}}> Leave us a message</label><br/>
                <textarea type="text" style={{width:'100%'}}/>
</div>
        </form>
        <div style={{textAlign:'center'}}><button style={{color:'white', border:"1px solid rgba(560,0,0,1)",backgroundColor:'blue'}}>SUBMIT</button>
 </div>
        
</div>

        </div>
    )
}
export default Footer;