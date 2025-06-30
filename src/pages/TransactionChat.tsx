
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const TransactionChat = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Người bán",
      content: "Chào bạn! Tôi đã chuẩn bị hàng và sẽ gửi trong hôm nay.",
      timestamp: "10:30"
    },
    {
      id: 2,
      sender: "Bạn",
      content: "Cảm ơn bạn! Tôi sẽ chờ thông tin vận chuyển.",
      timestamp: "10:35"
    }
  ]);

  const transactionData = {
    code: "TXN001234",
    productName: "iPhone 15 Pro Max 256GB",
    amount: "28,500,000 VNĐ",
    status: "Đang chờ thanh toán",
    statusColor: "yellow"
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "Bạn",
        content: message,
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-2rem)]">
          {/* Transaction Details - Left Panel */}
          <div className="lg:col-span-1">
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Chi Tiết Giao Dịch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-600">Mã giao dịch</label>
                  <p className="text-lg font-mono text-gray-900">{transactionData.code}</p>
                </div>
                
                <Separator />
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Tên sản phẩm</label>
                  <p className="text-lg text-gray-900">{transactionData.productName}</p>
                </div>
                
                <Separator />
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Số tiền</label>
                  <p className="text-2xl font-bold text-blue-600">{transactionData.amount}</p>
                </div>
                
                <Separator />
                
                <div>
                  <label className="text-sm font-medium text-gray-600">Trạng thái</label>
                  <div className="mt-2">
                    <Badge 
                      variant={transactionData.statusColor === "yellow" ? "secondary" : "default"}
                      className="bg-yellow-100 text-yellow-800"
                    >
                      {transactionData.status}
                    </Badge>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Xác nhận đã nhận hàng
                  </Button>
                  <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50">
                    Yêu cầu hỗ trợ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface - Right Panel */}
          <div className="lg:col-span-2">
            <Card className="glass-card h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Cuộc Trò Chuyện Bảo Mật
                </CardTitle>
                <p className="text-sm text-gray-600">
                  Tất cả tin nhắn được mã hóa và chỉ bạn và người bán có thể xem
                </p>
              </CardHeader>
              
              {/* Messages Area */}
              <CardContent className="flex-1 flex flex-col">
                <ScrollArea className="flex-1 pr-4 mb-4">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === "Bạn" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === "Bạn"
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-900"
                          }`}
                        >
                          <div className="text-xs opacity-75 mb-1">{msg.sender}</div>
                          <div>{msg.content}</div>
                          <div className="text-xs opacity-75 mt-1 text-right">{msg.timestamp}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                
                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Nhập tin nhắn..."
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" size="icon">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Gửi
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionChat;
