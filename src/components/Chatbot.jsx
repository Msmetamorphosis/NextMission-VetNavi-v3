'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, Mic, MicOff } from 'lucide-react';
import { sendChatMessage } from '@/lib/api-client';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content:
        "Hi—I'm here for transition questions (benefits, career, school, housing, health). What's on your mind?",
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [listening, setListening] = useState(false);
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);
  const recRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const stopRecognition = useCallback(() => {
    try {
      recRef.current?.stop();
    } catch {
      /* noop */
    }
    recRef.current = null;
    setListening(false);
  }, []);

  const startRecognition = useCallback(() => {
    if (typeof window === 'undefined') return;
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Ctor) {
      setInputValue((v) => v || 'Voice typing needs Chrome or Edge.');
      return;
    }
    const rec = new Ctor();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    rec.onresult = (ev) => {
      const text = ev.results[0]?.[0]?.transcript?.trim();
      if (text) setInputValue(text);
      stopRecognition();
    };
    rec.onerror = () => stopRecognition();
    rec.onend = () => stopRecognition();
    recRef.current = rec;
    setListening(true);
    rec.start();
  }, [stopRecognition]);

  const toggleVoice = () => {
    if (listening) stopRecognition();
    else startRecognition();
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;
    const userMessage = inputValue.trim();
    const updated = [...messages, { type: 'user', content: userMessage }];
    setMessages(updated);
    setInputValue('');
    setTyping(true);

    try {
      const history = updated.slice(1).map((m) => ({
        role: m.type === 'user' ? 'user' : 'assistant',
        content: m.content,
      }));
      const { message } = await sendChatMessage(history);
      setMessages((prev) => [...prev, { type: 'bot', content: message }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          content:
            'Something went wrong reaching the server. Try again, or open Resources for direct links.',
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center"
          style={{ backgroundColor: 'var(--olive-green)' }}
          aria-label="Open chat"
        >
          <MessageCircle className="h-8 w-8 text-white" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-8 right-8 z-50 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col">
          <div
            className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t-xl"
            style={{ backgroundColor: 'var(--navy)' }}
          >
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-white font-semibold">NextMission</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white hover:text-gray-300"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    m.type === 'user'
                      ? 'bg-[var(--olive-green)] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.12s' }}
                  />
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: '0.24s' }}
                  />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Message…"
                  className="w-full p-3 pr-12 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[var(--olive-green)] focus:border-transparent text-sm"
                  rows={2}
                  disabled={typing}
                />
                <button
                  type="button"
                  onClick={toggleVoice}
                  className={`absolute right-2 top-2 p-2 rounded ${
                    listening ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                  }`}
                  aria-label={listening ? 'Stop voice input' : 'Start voice input'}
                >
                  {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </button>
              </div>
              <button
                type="button"
                onClick={sendMessage}
                disabled={!inputValue.trim() || typing}
                className="p-3 rounded-lg text-white disabled:opacity-50"
                style={{ backgroundColor: 'var(--olive-green)' }}
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {listening && (
              <p className="text-xs text-red-600 mt-2 text-center">Listening…</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
