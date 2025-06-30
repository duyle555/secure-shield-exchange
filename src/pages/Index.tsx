import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Wallet, Handshake } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="animated-bg absolute inset-0 opacity-5"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="rotating-3d w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Nền Tảng Giao Dịch<br />Trung Gian An Toàn & Minh Bạch
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Bảo vệ mọi giao dịch của bạn với quy trình đơn giản, bảo mật và chi phí thấp.
          </p>
          
          <Link to="/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-3d">
              Bắt Đầu Giao Dịch
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Cách Thức Hoạt Động
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="glass-card hover-3d group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center icon-pop group-hover:bg-blue-700 transition-colors">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tạo giao dịch</h3>
                <p className="text-gray-600">Tạo giao dịch với thông tin chi tiết về sản phẩm và người bán</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-3d group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center icon-pop group-hover:bg-blue-700 transition-colors">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Nạp tiền vào hệ thống</h3>
                <p className="text-gray-600">Tiền được giữ an toàn trong hệ thống cho đến khi hoàn thành giao dịch</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-3d group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center icon-pop group-hover:bg-blue-700 transition-colors">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hoàn thành thỏa thuận</h3>
                <p className="text-gray-600">Xác nhận việc nhận hàng và đánh giá sản phẩm</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover-3d group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center icon-pop group-hover:bg-blue-700 transition-colors">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tiền được giải ngân</h3>
                <p className="text-gray-600">Tiền được chuyển cho người bán sau khi xác nhận thành công</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Tại Sao Chọn EscrowVN?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center floating-animation">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Bảo Mật Tối Đa</h3>
              <p className="text-gray-600 text-lg">Hệ thống bảo mật đa lớp với mã hóa end-to-end và xác thực 2FA</p>
            </div>

            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center floating-animation" style={{animationDelay: '2s'}}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hỗ Trợ 24/7</h3>
              <p className="text-gray-600 text-lg">Đội ngũ hỗ trợ chuyên nghiệp sẵn sàng giúp đỡ bạn mọi lúc</p>
            </div>

            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center floating-animation" style={{animationDelay: '4s'}}>
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Giao Diện Thân Thiện</h3>
              <p className="text-gray-600 text-lg">Thiết kế đơn giản, dễ sử dụng cho mọi đối tượng người dùng</p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Index;
