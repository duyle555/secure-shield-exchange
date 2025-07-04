import React, { useState } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Minh Tuấn",
    avatar: "MT",
    quote: "Lần đầu giao dịch món đồ giá trị lớn online mà không phải lo lắng chút nào. Rất tin tưởng EscrowVN.",
    role: "Nhà đầu tư"
  },
  {
    id: 2,
    name: "Trần Thị Lan",
    avatar: "TL",
    quote: "Quy trình minh bạch, bảo mật tuyệt đối. Tôi đã thực hiện hơn 10 giao dịch không có vấn đề gì.",
    role: "Kinh doanh online"
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    avatar: "LN",
    quote: "EscrowVN giúp tôi yên tâm mua laptop cũ từ người lạ. Chất lượng dịch vụ rất chuyên nghiệp.",
    role: "Freelancer"
  },
  {
    id: 4,
    name: "Phạm Thị Hoa",
    avatar: "PH",
    quote: "Bán được món trang sức gia truyền với giá cao mà không lo bị lừa đảo. Cảm ơn EscrowVN!",
    role: "Chủ shop"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32 bg-dark-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(147, 114, 255) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-dark-text tracking-tighter">
            Khách hàng nói{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              gì về chúng tôi?
            </span>
          </h2>
          <p className="text-xl text-dark-subtle max-w-3xl mx-auto leading-relaxed">
            Hàng nghìn giao dịch thành công, niềm tin được xây dựng từng ngày
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
            {/* Quote */}
            <div className="text-6xl text-primary/20 mb-4 font-serif">"</div>
            <blockquote className="text-2xl lg:text-3xl text-dark-text leading-relaxed mb-8 font-medium">
              {currentTestimonial.quote}
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{currentTestimonial.avatar}</span>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-dark-text">{currentTestimonial.name}</div>
                <div className="text-dark-subtle">{currentTestimonial.role}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <CaretLeft className="w-6 h-6 text-primary" weight="bold" />
              </button>
              
              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <CaretRight className="w-6 h-6 text-primary" weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;