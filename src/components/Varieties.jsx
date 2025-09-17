import React from 'react';
import { Leaf, Droplets, Sun, Thermometer } from 'lucide-react';

const Varieties = () => {
  const varieties = [
    {
      name: 'ข้าวหอมมะลิ 105',
      scientificName: 'Oryza sativa L.',
      image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400',
      characteristics: [
        { icon: Leaf, label: 'เมล็ดยาว', value: '6-7 มม.' },
        { icon: Droplets, label: 'ความชื้น', value: '14%' },
        { icon: Sun, label: 'ระยะการเจริญ', value: '120-130 วัน' },
        { icon: Thermometer, label: 'อุณหภูมิ', value: '25-30°C' }
      ],
      description: 'ข้าวหอมมะลิ 105 เป็นข้าวพันธุ์พื้นเมืองของไทย มีกลิ่นหอมเฉพาะตัว เมล็ดข้าวยาวใส',
      cultivationArea: 'ภาคอีสาน ภาคเหนือตอนล่าง',
      yield: '3-4 ตัน/ไร่',
      specialty: 'หอมกลิ่นมะลิธรรมชาติ เมล็ดยาวใส คุณภาพส่งออก'
    },
    {
      name: 'ข้าวเหนียวขาว',
      scientificName: 'Oryza sativa var. glutinosa',
      image: 'https://images.pexels.com/photos/1343648/pexels-photo-1343648.jpeg?auto=compress&cs=tinysrgb&w=400',
      characteristics: [
        { icon: Leaf, label: 'เมล็ดกลม', value: '4-5 มม.' },
        { icon: Droplets, label: 'ความชื้น', value: '13%' },
        { icon: Sun, label: 'ระยะการเจริญ', value: '110-120 วัน' },
        { icon: Thermometer, label: 'อุณหภูมิ', value: '28-32°C' }
      ],
      description: 'ข้าวเหนียวขาวมีเนื้อแป้งเหนียว เมื่อสุกจะมีความเหนียวนุ่ม เหมาะสำหรับทำขนมไทย',
      cultivationArea: 'ภาคเหนือ ภาคอีสาน',
      yield: '2.5-3.5 ตัน/ไร่',
      specialty: 'เหนียวนุ่ม เหมาะทำขนมไทย อาหารพื้นบ้าน'
    },
    {
      name: 'ข้าวไรซ์เบอรี่',
      scientificName: 'Oryza sativa (Purple Rice)',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400',
      characteristics: [
        { icon: Leaf, label: 'เมล็ดยาว', value: '5-6 มม.' },
        { icon: Droplets, label: 'ความชื้น', value: '14%' },
        { icon: Sun, label: 'ระยะการเจริญ', value: '125-135 วัน' },
        { icon: Thermometer, label: 'อุณหภูมิ', value: '24-28°C' }
      ],
      description: 'ข้าวไรซ์เบอรี่เป็นข้าวพันธุ์ปรับปรุง มีสีม่วงธรรมชาติ อุดมไปด้วยแอนโธไซยานิน',
      cultivationArea: 'หลายจังหวัด (เพาะปลูกใหม่)',
      yield: '2.8-3.2 ตัน/ไร่',
      specialty: 'แอนโธไซยานินสูง ต้านออกซิเดชัน ดีต่อสุขภาพ'
    }
  ];

  return (
    <section id="varieties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            พันธุ์<span className="text-orange-500">ข้าวไทย</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ศึกษาพันธุ์ข้าวไทยที่หลากหลาย แต่ละพันธุ์มีลักษณะเฉพาะและคุณค่าที่แตกต่างกัน
          </p>
        </div>

        <div className="space-y-12">
          {varieties.map((variety, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={variety.image}
                    alt={variety.name}
                    className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{variety.name}</h3>
                    <p className="text-orange-600 font-medium italic mb-4">{variety.scientificName}</p>
                    <p className="text-gray-600 leading-relaxed">{variety.description}</p>
                  </div>

                  {/* Characteristics */}
                  <div className="grid grid-cols-2 gap-4">
                    {variety.characteristics.map((char, charIndex) => (
                      <div key={charIndex} className="flex items-center space-x-3 bg-white/60 rounded-xl p-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <char.icon className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">{char.label}</div>
                          <div className="font-medium text-gray-800">{char.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Info */}
                  <div className="bg-white/70 rounded-xl p-6 space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">พื้นที่เพาะปลูก:</h4>
                      <p className="text-gray-600">{variety.cultivationArea}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">ผลผลิต:</h4>
                      <p className="text-gray-600">{variety.yield}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">จุดเด่น:</h4>
                      <p className="text-gray-600">{variety.specialty}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Varieties;