
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const PaymentDeposit = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  
  const paymentMethods = [
    {
      id: "bank",
      name: "Chuyển khoản Ngân hàng",
      icon: "🏦",
      description: "Chuyển khoản qua ngân hàng nội địa"
    },
    {
      id: "momo",
      name: "Ví MoMo",
      icon: "📱",
      description: "Thanh toán qua ví điện tử MoMo"
    },
    {
      id: "zalopay",
      name: "ZaloPay",
      icon: "💳",
      description: "Thanh toán qua ví điện tử ZaloPay"
    }
  ];

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId);
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirmPayment = () => {
    console.log("Payment confirmed:", { amount, selectedMethod });
    // Here you would integrate with payment processing
  };

  const fee = amount ? (parseFloat(amount) * 0.02).toLocaleString('vi-VN') : "0";
  const total = amount ? (parseFloat(amount) + parseFloat(amount) * 0.02).toLocaleString('vi-VN') : "0";

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      step < currentStep ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Số tiền</span>
            <span>Phương thức</span>
            <span>Xác nhận</span>
          </div>
        </div>

        <Card className="glass-card shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-900">
              Nạp Tiền Vào Giao Dịch
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            {/* Step 1: Amount */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="amount" className="text-lg font-medium">
                    Nhập số tiền cần nạp
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="text-2xl text-center py-6"
                    />
                    <p className="text-center text-gray-600 mt-2">VNĐ</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {["100000", "500000", "1000000"].map((preset) => (
                    <Button
                      key={preset}
                      variant="outline"
                      onClick={() => setAmount(preset)}
                      className="py-6"
                    >
                      {parseInt(preset).toLocaleString('vi-VN')} đ
                    </Button>
                  ))}
                </div>
                
                <Button
                  onClick={handleNextStep}
                  disabled={!amount || parseFloat(amount) <= 0}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg"
                >
                  Tiếp Theo
                </Button>
              </div>
            )}

            {/* Step 2: Payment Method */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Chọn phương thức thanh toán</h3>
                  <div className="grid gap-4">
                    {paymentMethods.map((method) => (
                      <Card
                        key={method.id}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          selectedMethod === method.id
                            ? "ring-2 ring-blue-600 bg-blue-50"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={() => handleMethodSelect(method.id)}
                        style={{
                          transform: selectedMethod === method.id ? "rotateY(5deg)" : "rotateY(0deg)"
                        }}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className="text-3xl">{method.icon}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold">{method.name}</h4>
                              <p className="text-sm text-gray-600">{method.description}</p>
                            </div>
                            {selectedMethod === method.id && (
                              <Badge className="bg-blue-600">Đã chọn</Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="outline" onClick={handlePreviousStep} className="flex-1">
                    Quay lại
                  </Button>
                  <Button
                    onClick={handleNextStep}
                    disabled={!selectedMethod}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    Tiếp Theo
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Xác nhận thông tin thanh toán</h3>
                  
                  <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Số tiền nạp:</span>
                      <span className="font-semibold">{parseFloat(amount).toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phí dịch vụ (2%):</span>
                      <span className="font-semibold">{fee} VNĐ</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Tổng cộng:</span>
                      <span className="font-bold text-blue-600">{total} VNĐ</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phương thức:</span>
                      <span className="font-semibold">
                        {paymentMethods.find(m => m.id === selectedMethod)?.name}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="outline" onClick={handlePreviousStep} className="flex-1">
                    Quay lại
                  </Button>
                  <Button
                    onClick={handleConfirmPayment}
                    className="flex-1 bg-green-600 hover:bg-green-700 py-6 text-lg"
                  >
                    Xác Nhận và Nạp Tiền
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentDeposit;
