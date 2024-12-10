// in config.js
import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';

const botName = 'VriddhiMediaBot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}  How may i help you? Please choose the options `,{
    widget:"options"
  } )],
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: '#376B7E',
  //   },
  //   chatButton: {
  //     backgroundColor: '#5ccc9d',
  //   },
  // },

  widgets:[
    {
      widgetName:"options",
      widgetFunc:(props) => (<Options {...props} />)
    
    }
    ]
};

export default config;