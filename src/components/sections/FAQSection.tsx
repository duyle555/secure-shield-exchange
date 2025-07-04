import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "EscrowVN hoạt động như thế nào?",
    answer: "EscrowVN là dịch vụ trung gian thanh toán. Người mua chuyển tiền vào tài khoản ký quỹ an toàn của chúng tôi. Sau khi người mua nhận hàng và xác nhận hài lòng, chúng tôi sẽ chuyển tiền cho người bán. Nếu có vấn đề, chúng tôi sẽ hoàn tiền cho người mua."
  },
  {
    question: "Tôi có thể tin tưởng EscrowVN không?",
    answer: "EscrowVN được cấp phép hoạt động hợp pháp tại Việt Nam. Chúng tôi sử dụng công nghệ blockchain để bảo mật giao dịch và có đội ngũ hỗ trợ 24/7. Hơn 50,000 người dùng đã tin tưởng và sử dụng dịch vụ của chúng tôi."
  },
  {
    question: "Phí dịch vụ là bao nhiêu?",
    answer: "EscrowVN chỉ thu phí 2.5% trên giá trị giao dịch, áp dụng cho mọi giao dịch không phân biệt giá trị. Phí chỉ được thu khi giao dịch hoàn tất thành công. Không có phí ẩn hay phí bổ sung nào khác."
  },
  {
    question: "Mất bao lâu để nhận được tiền?",
    answer: "Sau khi người mua xác nhận hài lòng với sản phẩm/dịch vụ, tiền sẽ được chuyển cho người bán trong vòng 1-2 giờ làm việc. Trong trường hợp giao dịch ngoài giờ hành chính, tiền sẽ được chuyển vào sáng hôm sau."
  },
  {
    question: "Nếu có tranh chấp thì sao?",
    answer: "EscrowVN có đội ngũ chuyên gia giải quyết tranh chấp với quy trình minh bạch. Chúng tôi sẽ xem xét bằng chứng từ cả hai bên và đưa ra quyết định công bằng dựa trên điều khoản giao dịch đã được thống nhất từ đầu."
  },
  {
    question: "Có giới hạn giá trị giao dịch không?",
    answer: "EscrowVN hỗ trợ giao dịch từ 1 triệu VNĐ trở lên, không có giới hạn tối đa. Đối với các giao dịch có giá trị rất lớn (trên 1 tỷ VNĐ), chúng tôi có thể yêu cầu thêm tài liệu xác thực để đảm bảo an toàn."
  },
  {
    question: "Tôi có thể hủy giao dịch không?",
    answer: "Bạn có thể hủy giao dịch trước khi người bán gửi hàng. Sau khi hàng đã được gửi, việc hủy giao dịch cần sự đồng ý của cả hai bên hoặc thông qua quy trình giải quyết tranh chấp."
  },
  {
    question: "EscrowVN có hỗ trợ thanh toán quốc tế không?",
    answer: "Hiện tại EscrowVN chỉ hỗ trợ giao dịch trong nước với VNĐ. Chúng tôi đang phát triển tính năng thanh toán quốc tế và sẽ ra mắt trong thời gian tới."
  }
];

const FAQSection = () => {
  return (
    <section className="py-32 bg-dark-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(147, 114, 255) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-dark-text tracking-tighter">
            Câu hỏi{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Thường gặp
            </span>
          </h2>
          <p className="text-xl text-dark-subtle max-w-3xl mx-auto leading-relaxed">
            Tìm hiểu thêm về EscrowVN và cách chúng tôi bảo vệ giao dịch của bạn
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-dark-text hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-dark-subtle leading-relaxed text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <p className="text-dark-subtle mb-6 text-lg">
            Không tìm thấy câu trả lời bạn cần?
          </p>
          <button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
            Liên hệ Hỗ trợ
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;