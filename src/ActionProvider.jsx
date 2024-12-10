// in ActionProvider.jsx
import React from 'react';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
 
  

 const handleFirst=()=>{
  const botMessage1 = createChatBotMessage('We help you in shifting all your negative PR into positive ones using our strategic UGC push.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));
 };

 const handleSecond=()=>{
  const botMessage1 = createChatBotMessage(`We give your brand a much-needed push in all the relevant communities and forums to make sure that you don't go unnoticed. `);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));
 };

 const handleThird=()=>{
  const botMessage1 = createChatBotMessage('People relate with founders much better than they relate with Brands. We help you become more relatable and connect with your audience on a deeper lever.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));
 };

 const handleFourth=()=>{
  const botMessage1 = createChatBotMessage('Boost website traffic by 20% and brand awareness by 35%! Our all-in-one solution, encompassing research, writing, SEO-optimized blogs, and captivating videos, helps you build an impeccable content machine that gets results. ');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
    }));
 };


  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            
            handleFirst,
            handleSecond,
            handleThird,
            handleFourth,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;