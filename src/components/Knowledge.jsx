import React, { useState } from 'react';
import { Book, FileText, Download, ExternalLink, Users, Award, TrendingUp, Lightbulb } from 'lucide-react';

const Knowledge = () => {
  const [activeCategory, setActiveCategory] = useState('cultivation');

  const categories = [
    { id: 'cultivation', label: 'เทคนิคการปลูก', icon: Book },
    { id: 'processing', label: 'การแปรรูป', icon: FileText },
    { id: 'nutrition', label: 'คุณค่าทางโภชนาการ', icon: FileText },
    { id: 'research', label: 'งานวิจัย', icon: Award },
    { id: 'technology', label: 'เทคโนโลยี', icon: Lightbulb },
    { id: 'market', label: 'ตลาดและการค้า', icon: TrendingUp },
  ];

  // Function to handle PDF download
  const handleDownload = (item) => {
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = item.pdfUrl;
      link.download = item.filename || `${item.title}.pdf`;
      link.target = '_blank';
      
      // Check if file exists before downloading
      fetch(item.pdfUrl, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            alert('ไฟล์ PDF ไม่พบ กรุณาติดต่อผู้ดูแลระบบ');
          }
        })
        .catch(error => {
          console.error('Error checking file:', error);
          alert('เกิดข้อผิดพลาดในการดาวน์โหลดไฟล์');
        });
    } catch (error) {
      console.error('Download error:', error);
      alert('เกิดข้อผิดพลาดในการดาวน์โหลดไฟล์');
    }
  };

  const knowledgeData = {
    cultivation: [
      {
        title: 'เทคนิคการเตรียมดินและการปลูกข้าวหอมมะลิ',
        description: 'คู่มือการเตรียมดิน การเลือกเมล็ดพันธุ์ และการปลูกข้าวหอมมะลิให้ได้ผลผลิตสูงและคุณภาพดี รวมถึงการจัดการน้ำและปุ๋ย',
        type: 'document',
        pdfUrl: '/pdfs/cultivation-guide.pdf',
        filename: 'เทคนิคการปลูกข้าวหอมมะลิ.pdf',
        readTime: '15 นาที',
        tags: ['ข้าวหอมมะลิ', 'การปลูก', 'เตรียมดิน', 'GAP'],
        author: 'กรมส่งเสริมการเกษตร',
        publishDate: '2024-01-15',
        downloads: 2847,
        rating: 4.8
      },
      {
        title: 'การจัดการศัตรูพืชและโรคข้าวแบบผสมผสาน (IPM)',
        description: 'แนวทางการจัดการศัตรูพืชและโรคของข้าวโดยใช้วิธีผสมผสานระหว่างเคมี ชีวภาพ และการจัดการทางการเกษตร เพื่อลดต้นทุนและรักษาสิ่งแวดล้อม',
        type: 'document',
        pdfUrl: '/pdfs/ipm-guide.pdf',
        filename: 'การจัดการศัตรูพืชและโรคข้าว.pdf',
        readTime: '25 นาที',
        tags: ['ศัตรูพืช', 'โรคข้าว', 'IPM', 'ชีวภาพ'],
        author: 'ศูนย์วิจัยข้าวปทุมธานี',
        publishDate: '2024-02-10',
        downloads: 1923,
        rating: 4.7
      },
      {
        title: 'ระบบการให้น้ำข้าวแบบประหยัด (AWD)',
        description: 'เทคนิคการให้น้ำข้าวแบบ Alternate Wetting and Drying (AWD) เพื่อประหยัดน้ำ ลดการปล่อยก๊าซเรือนกระจก และเพิ่มผลผลิต',
        type: 'document',
        pdfUrl: '/pdfs/awd-technique.pdf',
        filename: 'ระบบการให้น้ำข้าวแบบประหยัด.pdf',
        readTime: '12 นาที',
        tags: ['การให้น้ำ', 'ประหยัดน้ำ', 'AWD', 'สิ่งแวดล้อม'],
        author: 'สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ',
        publishDate: '2024-01-28',
        downloads: 3156,
        rating: 4.9
      },
      {
        title: 'การใช้ปุ๋ยอินทรีย์ในการปลูกข้าว',
        description: 'วิธีการผลิตและใช้ปุ๋ยอินทรีย์ เช่น ปุ๋ยหมัก ปุ๋ยชีวภาพ และปุ๋ยพืชสด เพื่อเพิ่มความอุดมสมบูรณ์ของดินและลดการใช้ปุ๋ยเคมี',
        type: 'document',
        pdfUrl: '/pdfs/organic-fertilizer.pdf',
        filename: 'การใช้ปุ๋ยอินทรีย์.pdf',
        readTime: '18 นาที',
        tags: ['ปุ๋ยอินทรีย์', 'ปุ๋ยชีวภาพ', 'ดินอุดมสมบูรณ์', 'เกษตรยั่งยืน'],
        author: 'กรมพัฒนาที่ดิน',
        publishDate: '2024-03-05',
        downloads: 2234,
        rating: 4.6
      }
    ],
    processing: [
      {
        title: 'กระบวนการสีข้าวและการรักษาคุณภาพ',
        description: 'ขั้นตอนการสีข้าวที่ถูกต้องเพื่อรักษาคุณภาพและคุณค่าทางโภชนาการ รวมถึงเทคโนโลยีการสีข้าวสมัยใหม่และการควบคุมคุณภาพ',
        type: 'document',
        pdfUrl: '/pdfs/rice-milling.pdf',
        filename: 'กระบวนการสีข้าว.pdf',
        readTime: '18 นาที',
        tags: ['การสีข้าว', 'คุณภาพ', 'การแปรรูป', 'เทคโนโลยี'],
        author: 'สถาบันวิจัยข้าว',
        publishDate: '2024-02-20',
        downloads: 1876,
        rating: 4.5
      },
      {
        title: 'เทคโนโลยีการอบแห้งข้าวเปียก',
        description: 'วิธีการอบแห้งข้าวเปียกด้วยเทคโนโลยีสมัยใหม่ การควบคุมอุณหภูมิและความชื้น เพื่อรักษาคุณภาพและลดการสูญเสีย',
        type: 'document',
        pdfUrl: '/pdfs/rice-drying.pdf',
        filename: 'เทคโนโลยีการอบแห้งข้าว.pdf',
        readTime: '30 นาที',
        tags: ['การอบแห้ง', 'เทคโนโลยี', 'ข้าวเปียก', 'คุณภาพ'],
        author: 'สถาบันเทคโนโลยีการอาหาร',
        publishDate: '2024-01-12',
        downloads: 1654,
        rating: 4.7
      },
      {
        title: 'การผลิตผลิตภัณฑ์จากข้าวกล้อง',
        description: 'เทคนิคการแปรรูปข้าวกล้องเป็นผลิตภัณฑ์ต่างๆ เช่น แป้งข้าวกล้อง น้ำมันรำข้าว และขนมจากข้าวกล้อง',
        type: 'document',
        pdfUrl: '/pdfs/brown-rice-products.pdf',
        filename: 'ผลิตภัณฑ์จากข้าวกล้อง.pdf',
        readTime: '22 นาที',
        tags: ['ข้าวกล้อง', 'ผลิตภัณฑ์', 'แปรรูป', 'มูลค่าเพิ่ม'],
        author: 'สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ',
        publishDate: '2024-03-18',
        downloads: 1432,
        rating: 4.4
      }
    ],
    nutrition: [
      {
        title: 'คุณค่าทางโภชนาการของข้าวไทยแต่ละพันธุ์',
        description: 'การวิเคราะห์คุณค่าทางโภชนาการของข้าวไทยแต่ละพันธุ์ รวมถึงวิตามิน แร่ธาตุ และสารต้านอนุมูลอิสระ',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/nutrition-analysis.pdf',
        readTime: '20 นาที',
        tags: ['โภชนาการ', 'วิตามิน', 'แร่ธาตุ', 'สุขภาพ'],
        author: 'สถาบันโภชนาการ มหาวิทยาลัยมหิดล',
        publishDate: '2024-02-14',
        downloads: 3421,
        rating: 4.9
      },
      {
        title: 'ประโยชน์ของข้าวกล้องและข้าวไรซ์เบอรี่ต่อสุขภาพ',
        description: 'การศึกษาประโยชน์ต่อสุขภาพของข้าวกล้องและข้าวไรซ์เบอรี่ รวมถึงการป้องกันโรคเรื้อรังและการควบคุมน้ำหนัก',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/health-benefits.pdf',
        readTime: '22 นาที',
        tags: ['ข้าวกล้อง', 'ไรซ์เบอรี่', 'สุขภาพ', 'โรคเรื้อรัง'],
        author: 'คณะแพทยศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
        publishDate: '2024-01-30',
        downloads: 2876,
        rating: 4.8
      },
      {
        title: 'แอนโธไซยานินในข้าวสีและผลต่อสุขภาพ',
        description: 'การศึกษาสารแอนโธไซยานินในข้าวสี เช่น ข้าวไรซ์เบอรี่ ข้าวเหนียวดำ และผลประโยชน์ต่อการต้านอนุมูลอิสระ',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/anthocyanin-study.pdf',
        readTime: '16 นาที',
        tags: ['แอนโธไซยานิน', 'ข้าวสี', 'ต้านอนุมูลอิสระ', 'สารต้านอนุมูลอิสระ'],
        author: 'สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยี',
        publishDate: '2024-03-08',
        downloads: 1987,
        rating: 4.6
      }
    ],
    research: [
      {
        title: 'การวิจัยพัฒนาพันธุ์ข้าวทนแล้ง',
        description: 'ผลการวิจัยการพัฒนาพันธุ์ข้าวที่ทนต่อภาวะขาดน้ำ โดยใช้เทคนิคการปรับปรุงพันธุ์แบบดั้งเดิมและเทคโนโลยีชีวภาพ',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/drought-resistant-research.pdf',
        readTime: '35 นาที',
        tags: ['วิจัย', 'ทนแล้ง', 'พันธุ์ข้าว', 'เทคโนโลยีชีวภาพ'],
        author: 'สถาบันวิจัยข้าว กรมการข้าว',
        publishDate: '2024-01-05',
        downloads: 1543,
        rating: 4.7
      },
      {
        title: 'นวัตกรรมการเพิ่มผลผลิตข้าวด้วยเทคโนโลยี',
        description: 'การใช้เทคโนโลยีสมัยใหม่ เช่น ดาวเทียม โดรน และ AI เพื่อเพิ่มผลผลิตข้าวและลดต้นทุนการผลิต',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/technology-innovation.pdf',
        readTime: '28 นาที',
        tags: ['นวัตกรรม', 'เทคโนโลยี', 'ผลผลิต', 'AI'],
        author: 'สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ',
        publishDate: '2024-02-25',
        downloads: 2134,
        rating: 4.8
      },
      {
        title: 'การศึกษาผลกระทบของการเปลี่ยนแปลงสภาพภูมิอากาศต่อการปลูกข้าว',
        description: 'งานวิจัยเกี่ยวกับผลกระทบของการเปลี่ยนแปลงสภาพภูมิอากาศต่อการผลิตข้าวและแนวทางการปรับตัว',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/climate-change-impact.pdf',
        readTime: '42 นาที',
        tags: ['สภาพภูมิอากาศ', 'การปรับตัว', 'ความยั่งยืน', 'วิจัย'],
        author: 'สถาบันวิจัยสิ่งแวดล้อม จุฬาลงกรณ์มหาวิทยาลัย',
        publishDate: '2024-03-12',
        downloads: 1876,
        rating: 4.5
      }
    ],
    technology: [
      {
        title: 'การใช้ดาวเทียมในการตรวจสอบพื้นที่ปลูกข้าว',
        description: 'เทคโนโลยีการใช้ภาพดาวเทียมในการตรวจสอบพื้นที่ปลูกข้าว การประเมินผลผลิต และการวางแผนการผลิต',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/satellite-monitoring.pdf',
        readTime: '32 นาที',
        tags: ['ดาวเทียม', 'ภูมิสารสนเทศ', 'การตรวจสอบ', 'เทคโนโลยี'],
        author: 'สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ',
        publishDate: '2024-01-18',
        downloads: 1654,
        rating: 4.6
      },
      {
        title: 'ระบบเซนเซอร์อัจฉริยะสำหรับการปลูกข้าว',
        description: 'การใช้เซนเซอร์ IoT ในการตรวจวัดความชื้นดิน คุณภาพน้ำ และสภาพแวดล้อมเพื่อการจัดการแปลงข้าวอัจฉริยะ',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/smart-sensors.pdf',
        readTime: '24 นาที',
        tags: ['IoT', 'เซนเซอร์', 'อัจฉริยะ', 'การจัดการ'],
        author: 'สถาบันเทคโนโลยีแห่งเอเชีย',
        publishDate: '2024-02-08',
        downloads: 1432,
        rating: 4.4
      },
      {
        title: 'เทคโนโลยี Blockchain ในห่วงโซ่อุปทานข้าว',
        description: 'การประยุกต์ใช้เทคโนโลยี Blockchain เพื่อการติดตามและตรวจสอบย้อนกลับในห่วงโซ่อุปทานข้าว',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/blockchain-supply-chain.pdf',
        readTime: '26 นาที',
        tags: ['Blockchain', 'ห่วงโซ่อุปทาน', 'ติดตาม', 'ความปลอดภัย'],
        author: 'สถาบันเทคโนโลยีสารสนเทศ',
        publishDate: '2024-03-01',
        downloads: 987,
        rating: 4.3
      }
    ],
    market: [
      {
        title: 'แนวโน้มตลาดข้าวโลกและโอกาสสำหรับข้าวไทย',
        description: 'การวิเคราะห์แนวโน้มตลาดข้าวโลก ความต้องการของผู้บริโภค และโอกาสในการส่งออกข้าวไทย',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/global-market-trends.pdf',
        readTime: '30 นาที',
        tags: ['ตลาดโลก', 'ส่งออก', 'แนวโน้ม', 'โอกาส'],
        author: 'สำนักงานเศรษฐกิจการเกษตร',
        publishDate: '2024-02-28',
        downloads: 2543,
        rating: 4.7
      },
      {
        title: 'กลยุทธ์การตลาดข้าวออร์แกนิก',
        description: 'แนวทางการพัฒนาและการตลาดข้าวออร์แกนิก รวมถึงการสร้างมูลค่าเพิ่มและการเข้าถึงตลาดเฉพาะกลุ่ม',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/organic-marketing-strategy.pdf',
        readTime: '25 นาที',
        tags: ['ออร์แกนิก', 'การตลาด', 'มูลค่าเพิ่ม', 'กลยุทธ์'],
        author: 'สำนักงานมาตรฐานสินค้าเกษตรและอาหารแห่งชาติ',
        publishDate: '2024-01-22',
        downloads: 1876,
        rating: 4.5
      },
      {
        title: 'การพัฒนาแบรนด์ข้าวไทยในตลาดต่างประเทศ',
        description: 'กรณีศึกษาการพัฒนาแบรนด์ข้าวไทยในตลาดสากล และกลยุทธ์การสร้างความแตกต่างทางการแข่งขัน',
        type: 'document',
        pdfUrl: 'https://www.ricethailand.go.th/rkb3/doc/brand-development.pdf',
        readTime: '38 นาที',
        tags: ['แบรนด์', 'ตลาดต่างประเทศ', 'การแข่งขัน', 'กรณีศึกษา'],
        author: 'สำนักงานส่งเสริมการค้าระหว่างประเทศ',
        publishDate: '2024-03-15',
        downloads: 1654,
        rating: 4.6
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
            ศูนย์รวมความรู้เกี่ยวกับข้าวไทยอย่างครบถ้วน ตั้งแต่การปลูก การแปรรูป 
            ไปจนถึงงานวิจัยและเทคโนโลยีล่าสุด พร้อมข้อมูลที่เชื่อถือได้จากผู้เชี่ยวชาญ
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/70 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Book className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">150+</div>
            <div className="text-gray-600">เอกสารความรู้</div>
          </div>
          <div className="bg-white/70 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">50+</div>
            <div className="text-gray-600">ผู้เชี่ยวชาญ</div>
          </div>
          <div className="bg-white/70 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Download className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">25K+</div>
            <div className="text-gray-600">ดาวน์โหลด</div>
          </div>
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
                <div className="p-3 rounded-xl bg-blue-100">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < Math.floor(item.rating) ? 'bg-yellow-400' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{item.rating}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-3 mb-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>ผู้เขียน:</span>
                  <span className="font-medium text-gray-800">{item.author}</span>
                </div>
                <div className="flex justify-between">
                  <span>วันที่เผยแพร่:</span>
                  <span className="font-medium text-gray-800">{item.publishDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>เวลาอ่าน:</span>
                  <span className="font-medium text-orange-600">{item.readTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>ดาวน์โหลด:</span>
                  <span className="font-medium text-green-600">{item.downloads.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 text-sm">
                  onClick={() => handleDownload(item)}
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

        {/* Featured Research Section */}
        <div className="mt-16 bg-white/70 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              งานวิจัยเด่นประจำเดือน
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              งานวิจัยที่ได้รับความสนใจสูงสุดและมีผลกระทบต่อการพัฒนาข้าวไทย
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">งานวิจัยยอดเยี่ยม 2024</h4>
                  <p className="text-sm text-gray-600">รางวัลจากสมาคมวิจัยข้าวแห่งเอเซีย</p>
                </div>
              </div>
              <h5 className="font-bold text-gray-800 mb-2">การพัฒนาข้าวทนน้ำท่วมด้วยเทคโนโลยี CRISPR</h5>
              <p className="text-sm text-gray-600 mb-4">
                การใช้เทคโนโลยีการแก้ไขยีน CRISPR เพื่อพัฒนาข้าวที่สามารถทนต่อน้ำท่วมได้นานถึง 14 วัน
              </p>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                อ่านเพิ่มเติม →
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">นวัตกรรมแห่งปี</h4>
                  <p className="text-sm text-gray-600">รางวัลจากกระทรวงเกษตรและสหกรณ์</p>
                </div>
              </div>
              <h5 className="font-bold text-gray-800 mb-2">ระบบ AI สำหรับการวินิจฉัยโรคข้าว</h5>
              <p className="text-sm text-gray-600 mb-4">
                ระบบปัญญาประดิษฐ์ที่สามารถวินิจฉัยโรคข้าวได้ถูกต้อง 95% ผ่านการถ่ายภาพใบข้าว
              </p>
              <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                อ่านเพิ่มเติม →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;