import config from './config.jsx';
import {Link} from 'react-router-dom'
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import Chatbot from 'react-chatbot-kit'
import downArrow from './downArrow.png'
import 'react-chatbot-kit/build/main.css'
const MyComponent = ({seVisible}) => {
  return (
    <div className='botAlign' >
        <img className='im' src={downArrow} alt='hide the bot' onClick={seVisible}/>
           <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default MyComponent;