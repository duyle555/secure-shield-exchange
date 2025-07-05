
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Shield, ArrowRight, ArrowLeft, Plus, Trash } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import EscrowHeader from '@/components/EscrowHeader';
import { useToast } from '@/hooks/use-toast';

const transactionSchema = z.object({
  title: z.string().min(5, 'Tiêu đề phải có ít nhất 5 ký tự'),
  description: z.string().min(20, 'Mô tả phải có ít nhất 20 ký tự'),
  amount: z.number().min(100000, 'Số tiền tối thiểu là 100.000 VND'),
  buyerEmail: z.string().email('Email người mua không hợp lệ'),
  inspectionPeriod: z.number().min(24, 'Thời gian kiểm tra tối thiểu là 24 giờ'),
  category: z.string().min(1, 'Vui lòng chọn danh mục'),
  shippingMethod: z.string().optional(),
  useMilestones: z.boolean().default(false),
});

interface Milestone {
  id: string;
  title: string;
  description: string;
  amount: number;
}

type TransactionForm = z.infer<typeof transactionSchema>;

const CreateTransaction = () => {
  const [step, setStep] = useState(1);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [useMilestones, setUseMilestones] = useState(false);
  const { toast } = useToast();

  const form = useForm<TransactionForm>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      inspectionPeriod: 48,
      useMilestones: false,
    }
  });

  const addMilestone = () => {
    const newMilestone: Milestone = {
      id: Date.now().toString(),
      title: '',
      description: '',
      amount: 0,
    };
    setMilestones([...milestones, newMilestone]);
  };

  const removeMilestone = (id: string) => {
    setMilestones(milestones.filter(m => m.id !== id));
  };

  const updateMilestone = (id: string, field: keyof Milestone, value: string | number) => {
    setMilestones(milestones.map(m => 
      m.id === id ? { ...m, [field]: value } : m
    ));
  };

  const onSubmit = (data: TransactionForm) => {
    console.log('Transaction data:', data);
    console.log('Milestones:', milestones);
    
    toast({
      title: "Giao dịch đã được tạo",
      description: "Lời mời đã được gửi đến người mua. Chờ xác nhận thanh toán.",
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const totalMilestoneAmount = milestones.reduce((sum, m) => sum + m.amount, 0);
  const mainAmount = form.watch('amount') || 0;

  return (
    <div className="min-h-screen bg-dark-background text-dark-text">
      <EscrowHeader />
      
      <div className="pt-24 px-4 max-w-4xl mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-dark-text">Tạo giao dịch mới</h1>
          <p className="text-dark-subtle text-lg">Thiết lập một giao dịch an toàn với EscrowVN</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                step >= num 
                  ? 'bg-primary text-white shadow-glow-primary' 
                  : 'bg-dark-background/60 text-dark-subtle border border-white/20'
              }`}>
                {num}
              </div>
              {num < 3 && (
                <div className={`w-16 h-1 mx-4 rounded-full ${
                  step > num ? 'bg-primary shadow-glow-primary' : 'bg-white/20'
                }`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle>
                {step === 1 && 'Thông tin cơ bản'}
                {step === 2 && 'Chi tiết giao dịch'}
                {step === 3 && 'Xác nhận và gửi'}
              </CardTitle>
              <CardDescription>
                {step === 1 && 'Nhập thông tin về sản phẩm/dịch vụ'}
                {step === 2 && 'Thiết lập điều khoản và phương thức'}
                {step === 3 && 'Kiểm tra lại thông tin trước khi gửi'}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {step === 1 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Tiêu đề giao dịch *</Label>
                      <Input
                        id="title"
                        placeholder="iPhone 15 Pro Max 256GB Xanh Titan"
                        {...form.register('title')}
                      />
                      {form.formState.errors.title && (
                        <p className="text-sm text-red-500">{form.formState.errors.title.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Danh mục *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn danh mục" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="electronics">Điện tử</SelectItem>
                          <SelectItem value="fashion">Thời trang</SelectItem>
                          <SelectItem value="vehicles">Xe cộ</SelectItem>
                          <SelectItem value="services">Dịch vụ</SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Mô tả chi tiết *</Label>
                    <Textarea
                      id="description"
                      placeholder="Mô tả tình trạng, thông số kỹ thuật, phụ kiện kèm theo..."
                      rows={4}
                      {...form.register('description')}
                    />
                    {form.formState.errors.description && (
                      <p className="text-sm text-red-500">{form.formState.errors.description.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Số tiền (VND) *</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="25000000"
                        {...form.register('amount', { valueAsNumber: true })}
                      />
                      {form.formState.errors.amount && (
                        <p className="text-sm text-red-500">{form.formState.errors.amount.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="buyerEmail">Email người mua *</Label>
                      <Input
                        id="buyerEmail"
                        type="email"
                        placeholder="buyer@example.com"
                        {...form.register('buyerEmail')}
                      />
                      {form.formState.errors.buyerEmail && (
                        <p className="text-sm text-red-500">{form.formState.errors.buyerEmail.message}</p>
                      )}
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="inspectionPeriod">Thời gian kiểm tra (giờ)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn thời gian" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="24">24 giờ</SelectItem>
                          <SelectItem value="48">48 giờ</SelectItem>
                          <SelectItem value="72">72 giờ</SelectItem>
                          <SelectItem value="168">7 ngày</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="shippingMethod">Phương thức vận chuyển</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn phương thức" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ghn">Giao Hàng Nhanh</SelectItem>
                          <SelectItem value="ghtk">Giao Hàng Tiết Kiệm</SelectItem>
                          <SelectItem value="viettel">Viettel Post</SelectItem>
                          <SelectItem value="direct">Giao trực tiếp</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="milestones"
                        checked={useMilestones}
                        onCheckedChange={(checked) => setUseMilestones(checked as boolean)}
                      />
                      <Label htmlFor="milestones">Sử dụng thanh toán theo giai đoạn</Label>
                    </div>
                    
                    {useMilestones && (
                      <div className="space-y-4 p-4 bg-black/20 rounded-lg">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Các giai đoạn thanh toán</h3>
                          <Button type="button" onClick={addMilestone} size="sm">
                            <Plus className="w-4 h-4 mr-1" />
                            Thêm giai đoạn
                          </Button>
                        </div>
                        
                        {milestones.map((milestone, index) => (
                          <div key={milestone.id} className="grid grid-cols-1 md:grid-cols-4 gap-2 p-3 bg-black/30 rounded">
                            <Input
                              placeholder={`Giai đoạn ${index + 1}`}
                              value={milestone.title}
                              onChange={(e) => updateMilestone(milestone.id, 'title', e.target.value)}
                            />
                            <Input
                              placeholder="Mô tả công việc"
                              value={milestone.description}
                              onChange={(e) => updateMilestone(milestone.id, 'description', e.target.value)}
                            />
                            <Input
                              type="number"
                              placeholder="Số tiền"
                              value={milestone.amount}
                              onChange={(e) => updateMilestone(milestone.id, 'amount', Number(e.target.value))}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeMilestone(milestone.id)}
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                        
                        {milestones.length > 0 && (
                          <div className="text-sm text-gray-400">
                            Tổng các giai đoạn: {formatCurrency(totalMilestoneAmount)}
                            {totalMilestoneAmount !== mainAmount && (
                              <span className="text-yellow-400 ml-2">
                                (Chưa khớp với tổng tiền: {formatCurrency(mainAmount)})
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="glass-card p-4">
                    <h3 className="font-medium mb-4">Tóm tắt giao dịch</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Tiêu đề:</span>
                        <span>{form.watch('title')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Số tiền:</span>
                        <span className="font-medium text-green-400">
                          {formatCurrency(form.watch('amount') || 0)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Người mua:</span>
                        <span>{form.watch('buyerEmail')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thời gian kiểm tra:</span>
                        <span>{form.watch('inspectionPeriod')} giờ</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-400 mb-1">Bảo vệ bởi Aegis</p>
                        <p className="text-gray-300">
                          Số tiền sẽ được giữ an toàn trong ví Aegis cho đến khi người mua xác nhận hài lòng. 
                          Phí dịch vụ: 2.5% ({formatCurrency((form.watch('amount') || 0) * 0.025)})
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={step === 1}
              className="btn-secondary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại
            </Button>
            
            {step < 3 ? (
              <Button type="button" onClick={nextStep} className="btn-primary">
                Tiếp theo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button type="submit" className="btn-primary">
                <Shield className="w-4 h-4 mr-2" />
                Tạo giao dịch
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTransaction;
