const Newsletter=()=>{
 const handleSubmit=(e)=>{
    e.preventDefault();

 }
    return(
        <div>
<div style={{backgroundColor:'#b4b5b8',textAlign:'center',minHeight:'20rem'}}>
    <div style={{width:"80%"}}>
<p style={{fontSize:"3rem",color:"blue"}}>Sign up for Newsletter</p>
<form onSubmit={(e)=>handleSubmit} style={{display:'flex',flexWrap:'wrap',justifyContent:"center"}}>
    <div>
        <label
         htmlFor="firstname">First Name</label><br/>
        <input
        
        id="firstname"
        type="text"
required />
    </div>

    <div className="inp" >
        <label htmlFor="lastname">Last Name</label><br/>
        <input
        id="lastname"
        type="text"
required/>
    </div>

    <div className="inp">
        <label htmlFor="email">Email</label><br/>
        <input

        id="email"
        type="text"
required/>
    </div>
<button  className="formInp">send</button>

</form>
    </div>
</div>
<div style={{width:"40%",marginLeft:'15%'}}>
<p style={{fontSize:"3rem",color:"blue"}}>Content That Converts Newsletter</p>
<p>Want to turn your audience into loyal customers? Discover how to leverage user-generated content (UGC) and other proven content marketing strategies to boost conversions, increase sales, and build a thriving community around your brand. Sign up for our free newsletter, create content that converts, and get expert tips delivered straight to your inbox.</p>
</div>

        </div>
    )
}
export default Newsletter