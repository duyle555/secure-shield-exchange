
import React from 'react';
import { 
  Globe, 
  Palette, 
  Code, 
  Car, 
  Diamond, 
  Monitor 
} from 'phosphor-react';

const useCases = [
  {
    icon: Globe,
    title: "Tên miền",
    description: "Bảo vệ giao dịch tên miền giá trị cao với xác minh quyền sở hữu",
    example: "1-10 tỷ VNĐ+",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: Palette,
    title: "NFTs & Nghệ thuật số",
    description: "Bảo vệ nhà sưu tập và nghệ sĩ trong các giao dịch tài sản số giá trị cao",
    example: "25-2,5 tỷ VNĐ+",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: Code,
    title: "Phần mềm & Sở hữu trí tuệ",
    description: "Cấp phép phần mềm doanh nghiệp và mã nguồn với thanh toán theo từng giai đoạn",
    example: "125-6 tỷ VNĐ+",
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: Car,
    title: "Phương tiện Cao cấp",
    description: "Xe cổ điển, siêu xe và xe chuyên dùng với thời gian kiểm tra",
    example: "600-25 tỷ VNĐ+",
    color: "from-orange-600 to-red-600"
  },
  {
    icon: Diamond,
    title: "Trang sức & Đồng hồ",
    description: "Đồng hồ cao cấp và trang sức với xác thực tính xác thực",
    example: "50-2,5 tỷ VNĐ+",
    color: "from-yellow-600 to-amber-600"
  },
  {
    icon: Monitor,
    title: "Thiết bị Điện tử",
    description: "Thiết bị chuyên nghiệp, công nghệ hiếm và máy tính tùy chỉnh",
    example: "12-1,2 tỷ VNĐ+",
    color: "from-indigo-600 to-blue-600"
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-20 bg-gray-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-animate="fadeInUpBlur">
          <h2 className="text-4xl font-bold mb-4">Lý tưởng cho Giao dịch Giá trị lớn</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            EscrowVN chuyên bảo vệ các giao dịch mà ở đó, sự tin cậy và quy trình xác thực là yếu tố tiên quyết
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate="staggered">
          {useCases.map((useCase, index) => (
            <div key={index} className="glass-card group cursor-pointer">
              <div className="mb-4 flex items-center justify-between">
                <div className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-lg flex items-center justify-center`}>
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-400">{useCase.example}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                {useCase.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-panel inline-block">
            <p className="text-lg font-medium mb-2">Sẵn sàng bảo vệ giao dịch của bạn?</p>
            <p className="text-gray-400 mb-4">Tham gia cùng hàng nghìn người tin tưởng EscrowVN</p>
            <a href="/register" className="btn-primary">
              Bắt đầu Giao dịch Đầu tiên
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
