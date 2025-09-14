import React, { useState } from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'jasmine', label: 'ข้าวหอมมะลิ' },
    { id: 'glutinous', label: 'ข้าวเหนียว' },
    { id: 'brown', label: 'ข้าวกล้อง' },
    { id: 'specialty', label: 'ข้าวพิเศษ' },
  ];

  const products = [
    {
      id: 1,
      name: 'ข้าวหอมมะลิ 105',
      category: 'jasmine',
      image: 'https://images.pexels.com/photos/1439846/pexels-photo-1439846.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '150 บาท/กก.',
      rating: 4.9,
      description: 'ข้าวหอมมะลิคุณภาพพรีเมียม หอมกลิ่นมะลิ เมล็ดยาวสวย',
      features: ['หอมกลิ่นมะลิ', 'เมล็ดยาวงาม', 'คุณภาพส่งออก']
    },
    {
      id: 2,
      name: 'ข้าวเหนียวขาว',
      category: 'glutinous',
      image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '120 บาท/กก.',
      rating: 4.8,
      description: 'ข้าวเหนียวขาวคุณภาดี เหนียวนุ่ม เหมาะสำหรับทำขนมไทย',
      features: ['เหนียวนุ่ม', 'สีขาวสวย', 'ทำขนมไทยได้ดี']
    },
    {
      id: 3,
      name: 'ข้าวกล้องแดง',
      category: 'brown',
      image: 'https://images.pexels.com/photos/1343648/pexels-photo-1343648.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '180 บาท/กก.',
      rating: 4.7,
      description: 'ข้าวกล้องแดงอุดมไปด้วยสารอาหาร เหมาะสำหรับคนรักสุขภาพ',
      features: ['อุดมสารอาหาร', 'ใยอาหารสูง', 'ดีต่อสุขภาพ']
    },
    {
      id: 4,
      name: 'ข้าวไรซ์เบอรี่',
      category: 'specialty',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '250 บาท/กก.',
      rating: 4.9,
      description: 'ข้าวไรซ์เบอรี่สีม่วงธรรมชาติ อุดมไปด้วยแอนโธไซยานิน',
      features: ['สีม่วงธรรมชาติ', 'แอนโธไซยานินสูง', 'ต้านออกซิเดชัน']
    },
    {
      id: 5,
      name: 'ข้าวหอมมะลิแดง',
      category: 'jasmine',
      image: 'https://images.pexels.com/photos/1435948/pexels-photo-1435948.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '200 บาท/กก.',
      rating: 4.6,
      description: 'ข้าวหอมมะลิแดงหายาก หอมกลิ่นมะลิ โภชนาการสูง',
      features: ['หายาก', 'หอมกลิ่นมะลิ', 'โภชนาการสูง']
    },
    {
      id: 6,
      name: 'ข้าวเหนียวดำ',
      category: 'glutinous',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '160 บาท/กก.',
      rating: 4.8,
      description: 'ข้าวเหนียวดำคุณภาพดี เหนียวหอม เหมาะทำขนมหวานไทย',
      features: ['สีดำธรรมชาติ', 'เหนียวหอม', 'ทำขนมไทย']
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            ผลิตภัณฑ์<span className="text-orange-500">ข้าวไทย</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            สำรวจคอลเลกชันข้าวไทยคุณภาพพรีเมียม แต่ละพันธุ์ได้รับการคัดสรรอย่างพิถีพิถัน
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-orange-600">{product.price}</div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
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

export default Products;