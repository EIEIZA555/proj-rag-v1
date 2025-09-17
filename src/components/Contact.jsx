import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('ข้อความของคุณถูกส่งเรียบร้อยแล้ว!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            ติดต่อ<span className="text-orange-500">เรา</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            มีคำถามเกี่ยวกับข้าวไทย หรือต้องการความช่วยเหลือ? เรายินดีที่จะช่วยเหลือคุณ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">ข้อมูลติดต่อ</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">ที่อยู่</h4>
                    <p className="text-gray-600">123 ถนนข้าวหอมมะลิ แขวงเกษตรกรรม<br />เขตจตุจักร กรุงเทพฯ 10900</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">โทรศัพท์</h4>
                    <p className="text-gray-600">02-123-4567<br />02-765-4321</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">อีเมล</h4>
                    <p className="text-gray-600">info@riceworld.th<br />support@riceworld.th</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">เวลาทำการ</h4>
                    <p className="text-gray-600">จันทร์ - ศุกร์: 8:00 - 17:00<br />เสาร์: 9:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">ติดตามเรา</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">ส่งข้อความถึงเรา</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    ชื่อ-นามสกุล *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="กรุณากรอกชื่อ-นามสกุล"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    อีเมล *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  หัวข้อ *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                >
                  <option value="">เลือกหัวข้อที่สนใจ</option>
                  <option value="product">สอบถามผลิตภัณฑ์</option>
                  <option value="variety">สอบถามพันธุ์ข้าว</option>
                  <option value="knowledge">ขอความรู้เพิ่มเติม</option>
                  <option value="cooperation">ความร่วมมือ</option>
                  <option value="other">อื่นๆ</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  ข้อความ *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="กรุณากรอกข้อความที่ต้องการสอบถาม..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Send className="w-5 h-5" />
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4">
            <h3 className="text-xl font-bold text-white text-center">แผนที่</h3>
          </div>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">แผนที่ตำแหน่งสำนักงาน</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;