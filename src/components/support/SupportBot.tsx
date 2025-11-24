import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, ChevronRight, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: { label: string; action: string }[];
};

export function SupportBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: "Hi! I'm the Automalix AI. I can help you find the right Automation Pack or explain our new Audit-Ready compliance tools.",
      options: [
        { label: "What is Audit-Ready?", action: "explain_audit" },
        { label: "Help me find a pack", action: "find_pack" },
        { label: "Pricing & Vault", action: "pricing" },
      ]
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleOptionClick = (action: string, label: string) => {
    // Add user message
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: label };
    setMessages(prev => [...prev, userMsg]);

    // Simulate bot thinking
    setTimeout(() => {
      let botResponse: Message;

      switch (action) {
        case 'explain_audit':
          botResponse = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: "Audit-Ready Automation targets high-value sectors (Finance, Legal, HR). Unlike standard workflows, these include immutable audit logs, version control, and data residency compliance (GDPR/SOX). It turns you from a tool seller into a Risk Management Partner.",
            options: [
              { label: "View GDPR Pack", action: "view_gdpr" },
              { label: "View SOX Pack", action: "view_sox" },
              { label: "Back to menu", action: "menu" }
            ]
          };
          break;
        case 'find_pack':
          botResponse = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: "Sure! What's your primary business goal right now?",
            options: [
              { label: "Start an Agency", action: "agency" },
              { label: "Automate Sales", action: "sales" },
              { label: "Compliance/Legal", action: "explain_audit" }
            ]
          };
          break;
        case 'agency':
          botResponse = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: "Excellent. Our 'Business-in-a-Box' systems are perfect. The Cold Email Agency Kit is our bestseller.",
            options: [
              { label: "Show me Agency Kits", action: "view_agency" },
              { label: "Back to menu", action: "menu" }
            ]
          };
          break;
        case 'pricing':
          botResponse = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: "We offer individual packs or the 'Automation Vault' subscription. The Vault gives you $5k+ of value for just $39/mo.",
            options: [
              { label: "View Vault Plans", action: "view_vault" },
              { label: "Back to menu", action: "menu" }
            ]
          };
          break;
        case 'menu':
          botResponse = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: "How else can I assist you?",
            options: [
              { label: "What is Audit-Ready?", action: "explain_audit" },
              { label: "Help me find a pack", action: "find_pack" },
              { label: "Pricing & Vault", action: "pricing" },
            ]
          };
          break;
        default:
          botResponse = {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            text: "I can guide you to the right page. Click below.",
            options: [{ label: "Go to Marketplace", action: "menu" }]
          };
      }
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-30 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-tech-primary to-tech-secondary shadow-lg shadow-tech-primary/30 flex items-center justify-center text-white transition-all",
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <MessageSquare size={24} className="fill-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50 w-[calc(100vw-2rem)] max-w-[380px] h-[550px] max-h-[75vh] flex flex-col bg-tech-darker border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-tech-primary to-tech-secondary flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Automalix Support AI</h3>
                  <p className="text-white/80 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Online Now
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-tech-surface/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex flex-col max-w-[90%]",
                    msg.type === 'user' ? "self-end items-end" : "self-start items-start"
                  )}
                >
                  <div
                    className={cn(
                      "p-3 rounded-2xl text-sm leading-relaxed",
                      msg.type === 'user'
                        ? "bg-tech-primary text-white rounded-tr-none"
                        : "bg-white/10 text-gray-200 rounded-tl-none border border-white/5"
                    )}
                  >
                    {msg.text}
                  </div>
                  
                  {/* Options */}
                  {msg.options && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt.action, opt.label)}
                          className="text-xs bg-white/5 hover:bg-tech-primary/20 border border-white/10 hover:border-tech-primary/50 text-tech-accent px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
                        >
                          {opt.label} <ChevronRight size={10} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Simplified) */}
            <div className="p-4 border-t border-white/10 bg-tech-darker shrink-0">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Select an option above..." 
                  disabled
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-500 cursor-not-allowed"
                />
                <Button size="sm" disabled variant="secondary">
                  <Send size={16} />
                </Button>
              </div>
              <p className="text-[10px] text-gray-500 mt-2 text-center">
                AI Guide Mode • Select options to navigate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
