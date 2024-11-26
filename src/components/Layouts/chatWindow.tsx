import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import axios from 'axios';
import IconMinus from '../Icon/IconMinus';
import Tippy from '@tippyjs/react';
import IconLogin from '../Icon/IconLogin';
import IconUrl from '../Icon/IconUrl';
import IconMore from '../Icon/IconMore';

interface Message {
  user: string;
  text: string;
}

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Store messages
  const [input, setInput] = useState<string>(''); // Store user input
  const [isTyping, setIsTyping] = useState<boolean>(false); // Typing indicator
  const [isOpen, setIsOpen] = useState<boolean>(false); // Toggle chat window visibility

  // Handle sending messages
  const sendMessage = async () => {
    if (input.trim()) {
      // Add user message to the state
      const newMessage: Message = { user: 'user', text: input };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput(''); // Clear input
      setIsTyping(true); // Show typing indicator

      const aiResponse = await getAIResponse(input);

      // Simulate delay before AI response
      setTimeout(() => {
        const botMessage: Message = { user: 'bot', text: aiResponse };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setIsTyping(false); // Hide typing indicator
      }, 1000);
    }
  };

  // Fetch AI response from an API
  const getAIResponse = async (userMessage: string): Promise<string> => {
    try {
      // Replace with your actual API call (e.g., OpenAI API or Apollo API)
      const response = await axios.post(
        'https://api.openai.com/v1/completions', // Replace with your API endpoint
        {
          model: 'text-davinci-003',
          prompt: userMessage,
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your actual API key
          },
        }
      );
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error fetching AI response:', error);
      return 'Sorry, I couldn’t get a response from the AI.';
    }
  };

  // Toggle chat window
  const toggleChatWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Chat Icon */}
      <button
        onClick={toggleChatWindow}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 flex items-center justify-center hover:bg-blue-700 transition duration-300"
      >
        {isOpen ? (
          <BsFillChatLeftTextFill className="text-2xl" />
        ) : (
          <AiOutlineSend className="text-2xl" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-[30rem] overflow-y-auto bg-white shadow-lg rounded-lg flex flex-col">
          {/* Chat Messages */}
          <div className={`py-3 text-white border-b text-current	rounded-t-lg flex justify-between items-center bg-[#44BBAA]`}>
              <p className="text-[16px] font-bold w-full text-center">Live Representative Here</p>
              <button id="close-chat" className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                onClick={(e) => setIsOpen(false)}
              >
                <IconMinus className='!text-white mr-6' />
              </button>
            </div>
          <div className="flex-1 overflow-y-auto space-y-2 mb-4 p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  msg.user === 'user' ? 'bg-blue-200 text-right' : 'bg-gray-200 text-left'
                }`}
              >
                <span className="font-semibold">{msg.user === 'user' ? 'You' : 'AI'}:</span>
                <p>{msg.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="p-2 text-gray-500">AI is typing...</div>
            )}
          </div>

          {/* Input Section */}
          <div className="flex items-center space-x-2 p-4">
            {/* <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            /> */}
            <textarea id="user-input" 
                placeholder="Type a message here..." 
                className="w-full px-3 py-2 h-20 border rounded-md focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-gray-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            >
            </textarea>
            {/* <button
              onClick={sendMessage}
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <AiOutlineSend />
            </button> */}
          </div>
          <div className='flex justify-between mb-2'>
              <h3 className='ml-4 text-gray-500'><a target='_blank' href="https://www.zendesk.com/service/messaging/live-chat-software/?iref=null&lang=en-us&utm_campaign=poweredbyzendesk&utm_content=undefined&utm_medium=poweredbyzendeskchat&utm_source=webwidgetchat&utm_term=null">Zendesk</a></h3>
              <div className='flex gap-2 mr-4'>
                <Tippy content='End chat' className='bg-[#03363D] text-white text-sm rounded px-2 pt-0.5 text-auto mr-16 mt-10 h-6 font-semibold'>
                  <button className='hover:bg-gray-300 text-black duration-150 p-1 rounded'>
                    <IconLogin />
                  </button>
                </Tippy>
                <button className='hover:bg-gray-300 text-black duration-150 p-1 rounded'>
                  <IconUrl />
                </button>
                <Tippy content='Options' className='bg-[#03363D] text-sm text-white rounded px-2 pt-0.5 text-auto mt-10 h-6 font-semibold'>
                  <button className='hover:bg-gray-300 text-black duration-150 p-1 rounded'>
                    <IconMore />
                  </button>
                </Tippy>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
