import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'สวัสดีครับ! ยินดีต้อนรับสู่โลกแห่งข้าวไทย 🌾\nมีอะไรที่ผมช่วยเหลือคุณได้บ้างครับ?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickResponses = [
    'สอบถามพันธุ์ข้าว',
    'ราคาข้าวหอมมะลิ',
    'วิธีการปลูกข้าว',
    'คุณค่าทางโภชนาการ'
  ];

  const handleSendMessage = (message?: string) => {
    const messageToSend = message || inputMessage.trim();
    if (!messageToSend) return;

    const newUserMessage = {
      id: messages.length + 1,
      type: 'user',
      message: messageToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      
      if (messageToSend.toLowerCase().includes('พันธุ์') || messageToSend.includes('สอบถามพันธุ์ข้าว')) {
        botResponse = 'เรามีข้าวหลากหลายพันธุ์ครับ:\n\n🌾 ข้าวหอมมะลิ 105\n🌾 ข้าวเหนียวขาว\n🌾 ข้าวกล้องแดง\n🌾 ข้าวไรซ์เบอรี่\n\nพันธุ์ไหนที่คุณสนใจเป็นพิเศษครับ?';
      } else if (messageToSend.toLowerCase().includes('ราคา') || messageToSend.includes('ราคาข้าวหอมมะลิ')) {
        botResponse = 'ราคาข้าวหอมมะลิ 105 คุณภาพพรีเมียม:\n\n💰 150 บาท/กิโลกรัม\n📦 สั่งซื้อขั้นต่ำ 10 กิโลกรัม\n🚚 ส่งฟรีเมื่อซื้อครบ 1,000 บาท\n\nต้องการสั่งซื้อหรือสอบถามเพิ่มเติมครับ?';
      } else if (messageToSend.toLowerCase().includes('ปลูก') || messageToSend.includes('วิธีการปลูกข้าว')) {
        botResponse = 'การปลูกข้าวมีขั้นตอนสำคัญดังนี้ครับ:\n\n1. 🌱 เตรียมเมล็ดพันธุ์และแปลงนา\n2. 💧 การหว่านและการให้น้ำ\n3. 🌿 การดูแลและจัดการศัตรูพืช\n4. 🌾 การเก็บเกี่ยวและการแปรรูป\n\nต้องการทราบรายละเอียดขั้นตอนไหนเป็นพิเศษครับ?';
      } else if (messageToSend.toLowerCase().includes('โภชนาการ') || messageToSend.includes('คุณค่าทางโภชนาการ')) {
        botResponse = 'คุณค่าทางโภชนาการของข้าวไทย:\n\n🥄 คาร์โบไฮเดรต 78%\n💪 โปรตีน 7-8%\n🧬 วิตามิน B1, B6\n⚡ เหล็ก แมกนีเซียม\n\nข้าวกล้องและไรซ์เบอรี่จะมีสารอาหารมากกว่าข้าวขาวครับ\n\nต้องการทราบเพิ่มเติมเกี่ยวกับพันธุ์ใดเป็นพิเศษครับ?';
      } else {
        botResponse = 'ขอบคุณสำหรับคำถามครับ! 😊\n\nผมสามารถช่วยคุณเรื่อง:\n• พันธุ์ข้าวและคุณสมบัติ\n• ราคาและการสั่งซื้อ\n• เทคนิคการปลูก\n• คุณค่าทางโภชนาการ\n\nหรือคุณสามารถใช้คำถามด่วนด้านล่างเพื่อความสะดวกครับ';
      }

      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        message: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('th-TH', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
            isOpen 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 animate-pulse'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </button>
        
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">1</span>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">ผู้ช่วยข้าวไทย</h3>
                <p className="text-xs opacity-90">พร้อมช่วยเหลือคุณ</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm border'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{msg.message}</p>
                  <p className={`text-xs mt-2 ${
                    msg.type === 'user' ? 'text-orange-100' : 'text-gray-500'
                  }`}>
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Responses */}
          <div className="p-3 border-t bg-white">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(response)}
                  className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full hover:bg-orange-200 transition-colors"
                >
                  {response}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="พิมพ์ข้อความ..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim()}
                className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl flex items-center justify-center hover:from-orange-600 hover:to-amber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;