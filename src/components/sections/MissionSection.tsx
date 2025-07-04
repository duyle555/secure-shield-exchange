import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-32 bg-dark-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-dark-text tracking-tighter">
            Sứ mệnh của{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              chúng tôi
            </span>
          </h2>

          {/* Mission Statement */}
          <div className="glass-card p-12 rounded-3xl">
            <p className="text-2xl lg:text-3xl text-dark-text leading-relaxed font-medium">
              Mang lại sự an toàn và tin cậy tuyệt đối cho mọi giao dịch trực tuyến tại Việt Nam, 
              xóa bỏ nỗi lo lừa đảo và thúc đẩy một nền kinh tế số minh bạch.
            </p>
            
            {/* Supporting Text */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-dark-subtle">An toàn tuyệt đối</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-dark-subtle">Hỗ trợ không ngừng</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">∞</div>
                <div className="text-dark-subtle">Niềm tin vô hạn</div>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-dark-text mb-6">Tầm nhìn 2030</h3>
            <p className="text-xl text-dark-subtle leading-relaxed max-w-4xl mx-auto">
              Trở thành nền tảng giao dịch trung gian hàng đầu Đông Nam Á, 
              nơi mọi giao dịch đều được thực hiện với sự tin cậy và minh bạch hoàn toàn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;