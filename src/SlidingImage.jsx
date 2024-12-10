const SlidingImage=({image,prev,next})=>{


    return (
       <div>
   <div className="slider">
   <div className="slides">
   <img  alt="sliding images"/>
   <h1 style={{color:'blue',textAlign:'center'
   }}>{image.title}</h1>
   <p style={{textAlign:'center'}}>{image.description}</p>
   <p style={{color:'blue',textAlign:'center'}}>{image.author}</p>
   </div>
   <div className="buttons"><button onClick={prev}> prev </button>
   <button onClick={next}>next</button>
   </div>
   </div>
       </div>
    )
   }
   export default SlidingImage;