"use client";
import { useState } from "react";
import { X } from "lucide-react";
export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi! I'm your ASCII art assistant. I can help you:...",
      isUser: false,
    },
    { text: "What would you like to create today?", isUser: false },
  ]);
  const robotAscii = `◉ ◉
 _ ∩ _ 
 ───`;
  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue("");
      // Here you would add the logic for the AI to respond.
      // For this example, let's add a canned response.
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm processing your request...", isUser: false },
        ]);
      }, 1000);
    }
  };
  const handleQuickAction = (text: any) => {
    setMessages([...messages, { text, isUser: true }]);
    // AI response logic here
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `Generating ${text}...`, isUser: false },
      ]);
    }, 1000);
  };
  return (
    <>
      {/* Chat Bubble */}
      <div className='fixed bottom-6 right-6 z-50'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='bg-gray-900 border-2 border-magenta rounded-full p-3 shadow-2xl hover:shadow-magenta-glow transition-all duration-300 animate-pulse hover:animate-none group relative'
        >
          {isOpen ? (
            <X className='w-6 h-6 text-magenta' />
          ) : (
            <div className='flex items-center justify-center'>
              <div className='text-magenta text-xs leading-tight font-mono'>
                <pre className='leading-5'>{robotAscii}</pre>
              </div>
            </div>
          )}
          {/* Notification dot */}
          {!isOpen && (
            <div className='absolute -top-1 -right-1 w-3 h-3 bg-terminal-green rounded-full animate-pulse'></div>
          )}
        </button>

        {/* Chat Window */}
        {isOpen && (
          <div className='absolute bottom-16 right-0 w-80 bg-gray-900 border border-magenta rounded-lg shadow-2xl overflow-hidden animate-in slide-in-from-bottom-2 duration-300'>
            {/* Header */}
            <div className='bg-gray-800 px-4 py-3 border-b border-gray-700'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-magenta/20 rounded-full flex items-center justify-center border border-magenta/30'>
                  <div className='text-magenta text-xs leading-tight font-mono'>
                    <pre>A</pre>
                  </div>
                </div>
                <div>
                  <div className='text-terminal-green font-bold text-sm'>
                    ASCII Assistant
                  </div>
                  <div className='text-gray-400 text-xs flex items-center gap-1'>
                    <div className='w-2 h-2 bg-terminal-green rounded-full animate-pulse'></div>
                    Online • Ready to help
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <div className='p-4 h-64 overflow-y-auto'>
              <div className='space-y-4'>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`rounded-lg p-3 max-w-xs ${
                        msg.isUser
                          ? "bg-magenta text-black"
                          : "bg-gray-800 text-gray-300"
                      }`}
                    >
                      <p className='text-sm'>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className='border-t border-gray-700 p-3'>
              <div className='flex gap-2'>
                <input
                  type='text'
                  placeholder='Type your message...'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  className='flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none'
                />
                <button
                  onClick={handleSend}
                  className='bg-magenta text-black px-3 py-2 rounded text-sm font-semibold hover:bg-magenta/90 transition-colors'
                >
                  Send
                </button>
              </div>
              {/* Quick Action Buttons */}
              <div className='flex flex-wrap gap-2 mt-2'>
                <button
                  onClick={() => handleQuickAction("Art")}
                  className='bg-gray-700 hover:bg-terminal-green hover:text-black text-gray-300 text-xs px-3 py-1 rounded-full transition-colors'
                >
                  Generate Art
                </button>
                <button
                  onClick={() => handleQuickAction("Image")}
                  className='bg-gray-700 hover:bg-magenta hover:text-black text-gray-300 text-xs px-3 py-1 rounded-full transition-colors'
                >
                  Generate Image
                </button>
                <button
                  onClick={() => handleQuickAction("Gallery")}
                  className='bg-gray-700 hover:bg-blue-500 hover:text-black text-gray-300 text-xs px-3 py-1 rounded-full transition-colors'
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
