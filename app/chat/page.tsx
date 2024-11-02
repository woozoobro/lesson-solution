"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, User, Bot, ArrowUp, Loader2, BookOpen, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
}

interface Source {
  title: string;
  author: string;
  year: string;
  type: 'research' | 'publication' | 'article';
  url?: string;
}

export default function ChatView() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("What's the history and health benefits of pumpkin pie for this fall season?");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const presetAnswer: Message = {
    id: '2',
    role: 'assistant',
    content: `Pumpkin pie, a beloved autumn tradition, has a rich history dating back to early American colonists. Here's what makes it special:

Historical Background:
- Native Americans first introduced pumpkins to European settlers
- The first recorded pumpkin pie recipe appeared in an English cookbook in 1675
- It became a Thanksgiving staple in the late 1700s

Health Benefits of Pumpkin Pie:
1. Nutritional Value
- Rich in beta-carotene and vitamin A
- Good source of fiber and potassium
- Contains antioxidants that support eye health

2. Wellness Benefits
- Pumpkin's high fiber content aids digestion
- Contains compounds that may boost immune function
- Natural spices like cinnamon help regulate blood sugar

Modern Significance:
- Symbol of harvest celebrations and fall festivities
- Popular seasonal offering in cafes and bakeries
- Represents family traditions and cultural heritage

While enjoying this seasonal treat, remember that traditional recipes can be adapted for various dietary preferences while maintaining its cherished autumn flavor profile.`,
    sources: [
      {
        title: "The History of Pumpkin Pie in North America",
        author: "Culinary History Institute",
        year: "2022",
        type: "research",
        url: "Culinary History Database"
      },
      {
        title: "Nutritional Benefits of Pumpkin: A Comprehensive Review",
        author: "Journal of Nutritional Science",
        year: "2023",
        type: "research",
        url: "Scientific Database"
      },
      {
        title: "Traditional Foods in American Culture",
        author: "Food Anthropology Quarterly",
        year: "2023",
        type: "publication",
        url: "Cultural Studies Archive"
      }
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setMessages(prev => [...prev, presetAnswer]);
      setIsLoading(false);
    }, 1000);
  };

  const renderSources = (sources: Source[]) => (
    <div className="mt-4 space-y-2 border-t border-gray-200 pt-4">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <BookOpen className="w-4 h-4 mr-2" />
        Sources:
      </div>
      {sources.map((source, index) => (
        <div key={index} className="text-sm text-gray-600 pl-6 hover:bg-gray-50 rounded p-2 transition-colors">
          <div className="font-medium">{source.title}</div>
          <div className="text-gray-500">
            {source.author} • {source.year} • {source.type}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 relative">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-blue-600" />
          <h1 className="text-xl font-semibold">AI Trust Guide Chat</h1>
        </div>
        <button onClick={router.back} className='absolute left-4 top-4'>
          <ArrowLeft />
        </button>
      </div>

      {/* Chat Container */}
      <div className="flex-1 overflow-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-200'
                  }`}
              >
                <div className="prose prose-sm">
                  {message.content.split('\n').map((line, i) => (
                    <p key={i} className="mb-2 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
                {message.sources && renderSources(message.sources)}
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-4">
                <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowUp className="w-5 h-5" />
              )}
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}