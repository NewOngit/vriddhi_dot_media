
import Header from './Header';
import Footer from './Footer';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import Newsletter from './Newsletter';
import Home from './Home';
import SlidingImage  from './SlidingImage';
import BookAMeeting from './BookAMeeting';
import MyComponent from './MyComponent'
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Botdir from './Botdir';
function App() {

  const[isVisible,setIsvisisble]=useState(true);
const[index,setIndex]=useState(0);
const seVisible=()=>{
setIsvisisble(!isVisible)
}

  const [image,setImage]=useState({title:"What People Are Saying",
  description:`I've been loving the constant communication and updates from the team, their work ethic is impeccable. 10/10 recommend their UGC service.`,
  author:'Lindsey Wallace'
});
const imagList=[{title:"What People Are Saying",
description:`I've been loving the constant communication and updates from the team, their work ethic is impeccable. 10/10 recommend their UGC service.`,
author:'Lindsey Wallace'
},
{title:"What People Are Saying",
description:`Was a bit sceptical after having bad experiences with other agencies. Gave them a chance anyways and 3 months down the line before we even know it we are ranking like crazy and our sales were 30% up.`,
author:'Rahul jain'
}]
  let i=0;

  useEffect(()=>{
   
      setImage(imagList[index])
  }
    ,[index]);
 
    

   function prev(){
    let i=index;
   if(index<=0)
    i=imagList.length-1;
else i--;

    console.log(i);
    setIndex(i);
   }
   function next(){
    let i=index;
    i++;
    if(i>=imagList.length){
      i=i%imagList.length
    }
    
    console.log(i);
      setIndex(i);
   }

  return (
    <div >
      <Header/>
     <Routes>
 <Route exact path='/' element={<Home prev={prev} next={next} image={image} />}/>

 <Route path='/https://calendly.com/rishabhnanda/30min' element={<BookAMeeting/>}/>
<Route path='/newsletter' element={<Newsletter />}/>
     </Routes>
     {!isVisible && <MyComponent seVisible={seVisible}/>}
     {isVisible && <Botdir seVisible={seVisible}/> }
      <Footer/>

    </div>
  );
}

export default App;
