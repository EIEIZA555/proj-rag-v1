import React, { useState } from 'react';
import { Book, FileText, Video, Download, ExternalLink } from 'lucide-react';

const Knowledge = () => {
  const [activeCategory, setActiveCategory] = useState('cultivation');

  const categories = [
    { id: 'cultivation', label: 'เทคนิคการปลูก', icon: Book },
    { id: 'processing', label: 'การแปรรูป', icon: FileText },
    { id: 'nutrition', label: 'คุณค่าทางโภชนาการ', icon: Video },
    { id: 'research', label: 'งานวิจัย', icon: Download },
  ];

  const knowledgeData = {
    cultivation: [
      {
        title: 'เทคนิคการเตรียมดินและการปลูกข้าวหอมมะลิ',
        description: 'วิธีการเตรียมดิน การเลือกเมล็ดพันธุ์ และการปลูกข้าวหอมมะลิให้ได้ผลผลิตสูง',
        type: 'document',
        downloadUrl: '#',
        readTime: '15 นาที',
        tags: ['ข้าวหอมมะลิ', 'การปลูก', 'เตรียมดิน']
      },
      {
        title: 'การจัดการศัตรูพืชและโรคข้าวแบบผสมผสาน',
        description: 'แนวทางการจัดการศัตรูพืชและโรคของข้าวโดยใช้วิธีผสมผสานระหว่างเคมีและชีวภาพ',
        type: 'video',
        downloadUrl: '#',
        readTime: '25 นาที',
        tags: ['ศัตรูพืช', 'โรคข้าว', 'IPM']
      },
      {
        title: 'ระบบการให้น้ำข้าวแบบประหยัด',
        description: 'เทคนิคการให้น้ำข้าวแบบประหยัดน้ำและเพิ่มผลผลิต (AWD)',
        type: 'document',
        downloadUrl: '#',
        readTime: '12 นาที',
        tags: ['การให้น้ำ', 'ประหยัดน้ำ', 'AWD']
      }
    ],
    processing: [
      {
        title: 'กระบวนการสีข้าวและการรักษาคุณภาพ',
        description: 'ขั้นตอนการสีข้าวที่ถูกต้องเพื่อรักษาคุณภาพและคุณค่าทางโภชนาการ',
        type: 'document',
        downloadUrl: '#',
        readTime: '18 นาที',
        tags: ['การสีข้าว', 'คุณภาพ', 'การแปรรูป']
      },
      {
        title: 'เทคโนโลยีการอบแห้งข้าวเปียก',
        description: 'วิธีการอบแห้งข้าวเปียกด้วยเทคโนโลยีสมัยใหม่',
        type: 'video',
        downloadUrl: '#',
        readTime: '30 นาที',
        tags: ['การอบแห้ง', 'เทคโนโลยี', 'ข้าวเปียก']
      }
    ],
    nutrition: [
      {
        title: 'คุณค่าทางโภชนาการของข้าวไทย',
        description: 'วิเคราะห์คุณค่าทางโภชนาการของข้าวไทยแต่ละพันธุ์',
        type: 'document',
        downloadUrl: '#',
        readTime: '20 นาที',
        tags: ['โภชนาการ', 'วิตามิน', 'แร่ธาตุ']
      },
      {
        title: 'ประโยชน์ของข้าวกล้องและข้าวไรซ์เบอรี่',
        description: 'ประโยชน์ต่อสุขภาพของข้าวกล้องและข้าวไรซ์เบอรี่',
        type: 'video',
        downloadUrl: '#',
        readTime: '22 นาที',
        tags: ['ข้าวกล้อง', 'ไรซ์เบอรี่', 'สุขภาพ']
      }
    ],
    research: [
      {
        title: 'การวิจัยพัฒนาพันธุ์ข้าวทนแล้ง',
        description: 'ผลการวิจัยการพัฒนาพันธุ์ข้าวที่ทนต่อภาวะขาดน้ำ',
        type: 'document',
        downloadUrl: '#',
        readTime: '35 นาที',
        tags: ['วิจัย', 'ทนแล้ง', 'พันธุ์ข้าว']
      },
      {
        title: 'นวัตกรรมการเพิ่มผลผลิตข้าวด้วยเทคโนโลยี',
        description: 'การใช้เทคโนโลยีสมัยใหม่เพื่อเพิ่มผลผลิตข้าว',
        type: 'document',
        downloadUrl: '#',
        readTime: '28 นาที',
        tags: ['นวัตกรรม', 'เทคโนโลยี', 'ผลผลิต']
      }
    ]
  };

  const currentData = knowledgeData[activeCategory] || [];

  return (
    <section id="knowledge" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            ฐาน<span className="text-orange-500">ความรู้</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ศูนย์รวมความรู้เกี่ยวกับข้าวไทย ตั้งแต่การปลูก การแปรรูป ไปจนถึงงานวิจัยล่าสุด
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transform scale-105'
                    : 'bg-white/70 text-gray-600 hover:bg-white hover:text-orange-600 shadow-md'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Knowledge Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${
                  item.type === 'document' ? 'bg-blue-100' : 'bg-red-100'
                }`}>
                  {item.type === 'document' ? (
                    <FileText className={`w-6 h-6 ${
                      item.type === 'document' ? 'text-blue-600' : 'text-red-600'
                    }`} />
                  ) : (
                    <Video className={`w-6 h-6 ${
                      item.type === 'document' ? 'text-blue-600' : 'text-red-600'
                    }`} />
                  )}
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {item.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300">
                  <Download className="w-4 h-4" />
                  ดาวน์โหลด
                </button>
                <button className="px-4 py-2 border border-orange-300 text-orange-600 rounded-xl hover:bg-orange-50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white/70 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            ต้องการความรู้เพิ่มเติม?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            สมัครสมาชิกเพื่อเข้าถึงฐานความรู้ทั้งหมด และรับการอัปเดตงานวิจัยล่าสุด
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105">
            สมัครสมาชิก
          </button>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;