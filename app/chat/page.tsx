"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  User,
  Bot,
  ArrowUp,
  Loader2,
  BookOpen,
  Image as ImageIcon,
  X,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import kgSample from "@/public/kg-sample.svg";

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EvidenceModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Simulate API delay
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1200);
      return () => {
        clearTimeout(timer);
        setIsLoading(true); // 모달이 닫힐 때 로딩 상태 리셋
      };
    }
  }, [isOpen]);

  if (!isOpen) return null; // 모달이 닫혀있을 때는 렌더링하지 않음

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="fixed inset-0 flex items-center justify-center p-2 sm:p-4 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="bg-white rounded-lg w-full mx-2 sm:mx-4 md:max-w-4xl lg:max-w-6xl relative 
                     transform transition-all duration-300"
        >
          <button
            onClick={onClose}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-500 hover:text-gray-700 
                     transition-colors duration-200 z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="p-3 sm:p-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Supporting Evidence
            </h3>
            <div
              className="relative w-full bg-gray-50 rounded-lg overflow-hidden"
              style={{ height: "calc(100vh - 200px)" }}
            >
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center
                              transition-opacity duration-300
                              ${
                                isLoading ? "opacity-100 z-10" : "opacity-0 z-0"
                              }`}
              >
                <div className="w-full max-w-md mx-auto p-4">
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="flex justify-center mt-8">
                      <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                    </div>
                    <div className="text-center text-sm text-gray-500 mt-2">
                      Loading knowledge graph...
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`transition-opacity duration-1000 ease-in-out h-full w-full relative
                              ${isLoading ? "opacity-0" : "opacity-100"}`}
              >
                {!isLoading && (
                  <Image
                    src={kgSample}
                    alt="Knowledge Graph Evidence"
                    fill
                    className="object-contain p-2 sm:p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}

interface Source {
  title: string;
  author: string;
  year: string;
  type: "research" | "publication" | "article";
  url?: string;
}

export default function ChatView() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [input, setInput] = useState(
    "What's the history and health benefits of pumpkin pie for this fall season?",
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const presetAnswer: Message = {
    id: "2",
    role: "assistant",
    content: `Pumpkin pie, a beloved autumn tradition, has a rich history dating back to early American colonists. Here's what makes it special:
  
  Historical Background:
  - Native Americans first introduced pumpkins to European settlers as a vital food source [1]
  - The first recorded pumpkin pie recipe appeared in an English cookbook in 1675, called 'Gentlewoman's Companion' [1]
  - It became a Thanksgiving staple in the late 1700s after being popularized by American colonists [1,3]
  
  Health Benefits of Pumpkin Pie:
  1. Nutritional Value
  - Rich in beta-carotene and vitamin A, providing over 100% of daily recommended intake [2]
  - Good source of fiber (3g per slice) and potassium (250mg per serving) [2]
  - Contains antioxidants like lutein and zeaxanthin that support eye health [2,4]
  
  2. Wellness Benefits
  - Pumpkin's high fiber content aids digestion and promotes gut health [2,4]
  - Contains compounds that may boost immune function, including vitamin C and zinc [4]
  - Natural spices like cinnamon help regulate blood sugar and provide anti-inflammatory benefits [5]
  
  Modern Significance:
  - Symbol of harvest celebrations and fall festivities across North America [3]
  - Popular seasonal offering in cafes and bakeries, with over $130 million in annual sales [6]
  - Represents family traditions and cultural heritage in American cuisine [3]
  
  While enjoying this seasonal treat, remember that traditional recipes can be adapted for various dietary preferences while maintaining its cherished autumn flavor profile [7].`,
    sources: [
      {
        title: "The History of Pumpkin Pie in North America",
        author: "Culinary History Institute",
        year: "2022",
        type: "research",
        url: "Culinary History Database",
      },
      {
        title: "Nutritional Benefits of Pumpkin: A Comprehensive Review",
        author: "Journal of Nutritional Science",
        year: "2023",
        type: "research",
        url: "Scientific Database",
      },
      {
        title: "Traditional Foods in American Culture",
        author: "Food Anthropology Quarterly",
        year: "2023",
        type: "publication",
        url: "Cultural Studies Archive",
      },
      {
        title: "Health Benefits of Pumpkin and Its Bioactive Compounds",
        author: "Nutrition Research Review",
        year: "2023",
        type: "research",
        url: "Medical Research Database",
      },
      {
        title: "Therapeutic Properties of Culinary Spices",
        author: "International Journal of Nutrition",
        year: "2023",
        type: "research",
        url: "Nutrition Science Portal",
      },
      {
        title: "Market Analysis: Seasonal Dessert Trends",
        author: "Food Industry Research Group",
        year: "2023",
        type: "research",
        url: "Industry Reports Database",
      },
      {
        title: "Modern Adaptations of Traditional Recipes",
        author: "Culinary Arts Journal",
        year: "2023",
        type: "article",
        url: "Culinary Database",
      },
    ],
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
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setMessages((prev) => [...prev, presetAnswer]);
      setIsLoading(false);
      setHasSubmitted(true);
    }, 2000);
  };

  const renderSources = (sources: Source[]) => (
    <div className="mt-4 space-y-2 border-t border-gray-200 pt-4">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <BookOpen className="w-4 h-4 mr-2" />
        Sources:
      </div>
      {sources.map((source, index) => (
        <div
          key={index}
          className="text-xs sm:text-sm text-gray-600 pl-4 sm:pl-6 hover:bg-gray-50 rounded p-2 transition-colors"
        >
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
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={router.back}
            className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-semibold">AI Trust Guide Chat</h1>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 overflow-auto px-2 sm:px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 sm:gap-4 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-3 sm:p-4 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="prose prose-sm">
                  {message.content.split("\n").map((line, i) => (
                    <p key={i} className="mb-2 last:mb-0 text-sm sm:text-base">
                      {line}
                    </p>
                  ))}
                </div>
                {message.role === "assistant" && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 mt-4 
                           bg-blue-600 hover:bg-blue-700 
                           text-white text-sm sm:text-base font-medium rounded-lg
                           shadow-sm hover:shadow-md
                           transform hover:scale-[1.02]
                           transition-all duration-200 ease-in-out w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>View Evidence</span>
                  </button>
                )}
                {message.sources && renderSources(message.sources)}
              </div>
              {message.role === "user" && (
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
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto items-center">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <textarea
                value={input}
                readOnly
                onChange={(e) => {
                  setInput(e.target.value);
                  // 텍스트 영역 높이 자동 조절
                  e.target.style.height = "inherit";
                  e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                placeholder="Type your message..."
                rows={1}
                className="w-full rounded-lg border border-gray-300 p-3 resize-none 
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     min-h-[44px] max-h-[200px] overflow-y-auto
                     text-base leading-6"
                style={{
                  // 스크롤바 스타일링
                  scrollbarWidth: "thin",
                  scrollbarColor: "#CBD5E1 transparent",
                }}
              />
            </div>
            <button
              type="submit"
              disabled={!input.trim() || isLoading || hasSubmitted}
              className="bg-blue-600 text-white px-4 min-h-[44px] rounded-lg hover:bg-blue-700 
                disabled:opacity-50 disabled:cursor-not-allowed 
                flex items-center gap-2 flex-shrink-0"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <ArrowUp className="w-5 h-5" />
              )}
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
        </form>
      </div>
      <EvidenceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
