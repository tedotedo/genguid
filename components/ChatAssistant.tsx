
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, RefreshCw, AlertCircle } from 'lucide-react';
import { generateResponse } from '../services/gemini';
import { Message } from '../types';

export const ChatAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: "Hello. I'm Genie, your genetic information assistant. I can explain complex terms, discuss the NHS testing process, or help you understand what results might mean. I cannot give medical advice, but I'm here to help you understand the information. What's on your mind?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API (excluding the very first greeting if needed, or include it)
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    
    const responseText = await generateResponse(userMsg.text, history);

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[650px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-slate-200">
      {/* Header */}
      <div className="bg-slate-900 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-teal-500 rounded-lg">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-white font-semibold">Genie Assistant</h2>
            <p className="text-teal-200 text-xs">Powered by Gemini • NHS Guidelines Aligned</p>
          </div>
        </div>
        <button 
            onClick={() => setMessages([messages[0]])}
            className="text-slate-400 hover:text-white transition-colors"
            title="Reset Chat"
        >
            <RefreshCw className="h-5 w-5" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                msg.role === 'user'
                  ? 'bg-teal-600 text-white rounded-tr-none'
                  : 'bg-white text-slate-800 shadow-sm border border-slate-200 rounded-tl-none'
              }`}
            >
              {msg.role === 'model' && (
                <div className="flex items-center mb-2 space-x-2 border-b border-slate-100 pb-2">
                   <Bot className="h-4 w-4 text-teal-600" /> 
                   <span className="text-xs font-semibold text-slate-500">NeuroGen Assistant</span>
                </div>
              )}
              <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 rounded-tl-none flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Disclaimer - Rectangular Box */}
      <div className="px-4 pb-2 bg-slate-50">
        <div className="bg-red-50 p-4 border-2 border-red-500 rounded-xl flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-red-900 font-medium space-y-1 leading-relaxed">
                <p>
                    <span className="font-bold uppercase tracking-wide">AI Warning:</span> Genie is an automated assistant. It can make mistakes or "hallucinate" incorrect information.
                </p>
                <p>
                    This tool is for <strong>educational purposes only</strong>. It must <strong>not</strong> be used for medical decisions. Always verify information with your child's Doctor or Paediatrician.
                </p>
            </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about microarray, WGS, or the testing process..."
            className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`p-3 rounded-xl transition-all ${
              !input.trim() || isLoading
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-teal-600 text-white hover:bg-teal-700 shadow-md'
            }`}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
