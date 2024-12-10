
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
}]
  let i=0;

 
    function show(){
      if(i>=imagList.length){
return imagList[i%imagList.length];
      }
      else if(i<0){
return imagList[imagList.length];
      }
      
   }

   function prev(){
    i--;
   }
   function next(){
    i++;
   }

  return (
    <div >
      <Header/>
     <Routes>
 <Route exact path='/' element={<Home/>}/>

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
