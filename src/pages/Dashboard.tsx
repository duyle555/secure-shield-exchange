import React, { useState, useEffect } from 'react';
import { Shield, Wallet, Plus, Clock, CheckCircle, Warning, ArrowUp, ArrowDown } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import EscrowHeader from '@/components/AegisHeader';

interface Transaction {
  id: string;
  title: string;
  otherParty: string;
  amount: number;
  status: 'pending' | 'funded' | 'shipped' | 'delivered' | 'completed' | 'disputed';
  progress: number;
  type: 'buy' | 'sell';
  createdAt: string;
}

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 'TX001',
      title: 'iPhone 15 Pro Max 256GB',
      otherParty: 'Nguyễn Văn A',
      amount: 28500000,
      status: 'funded',
      progress: 40,
      type: 'buy',
      createdAt: '2024-01-15'
    },
    {
      id: 'TX002', 
      title: 'MacBook Pro M3 14inch',
      otherParty: 'Trần Thị B',
      amount: 52000000,
      status: 'delivered',
      progress: 80,
      type: 'sell',
      createdAt: '2024-01-14'
    },
    {
      id: 'TX003',
      title: 'Canon EOS R5 Body',
      otherParty: 'Lê Văn C',
      amount: 89000000,
      status: 'completed',
      progress: 100,
      type: 'sell',
      createdAt: '2024-01-10'
    }
  ]);

  const walletBalance = 15750000;

  useEffect(() => {
    // Animate balance counter
    const balanceAnimation = { value: 0 };
    const targetBalance = walletBalance;
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        balanceAnimation.value += targetBalance / 50;
        if (balanceAnimation.value >= targetBalance) {
          balanceAnimation.value = targetBalance;
          clearInterval(interval);
        }
        setBalance(Math.round(balanceAnimation.value));
      }, 30);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'disputed': return 'bg-red-500';
      case 'delivered': return 'bg-blue-500';
      case 'funded': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Chờ thanh toán';
      case 'funded': return 'Đã thanh toán';
      case 'shipped': return 'Đã gửi hàng';
      case 'delivered': return 'Đã nhận hàng';
      case 'completed': return 'Hoàn thành';
      case 'disputed': return 'Tranh chấp';
      default: return status;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const actionRequiredTransactions = transactions.filter(tx => 
    tx.status === 'delivered' || tx.status === 'disputed'
  );

  return (
    <div className="min-h-screen bg-dark-background text-dark-text">
      <EscrowHeader />
      
      <div className="pt-24 px-4 max-w-7xl mx-auto py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Bảng điều khiển</h1>
          <p className="text-dark-subtle">Quản lý giao dịch và ví EscrowVN của bạn</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="glass-panel border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wallet className="w-5 h-5" />
                  <span>Ví EscrowVN</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-4">
                  {formatCurrency(balance)}
                </div>
                <div className="space-y-2">
                  <Button className="w-full btn-primary shadow-glow-primary hover:shadow-glow-primary-strong">
                    <ArrowDown className="w-4 h-4 mr-2" />
                    Nạp tiền
                  </Button>
                  <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10">
                    <ArrowUp className="w-4 h-4 mr-2" />
                    Rút tiền
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-panel border-accent/30">
              <CardHeader>
                <CardTitle>Thống kê</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Uy tín</span>
                    <span className="text-primary">4.8/5.0</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
                <div className="text-sm text-dark-subtle space-y-1">
                  <div>Giao dịch hoàn thành: <span className="text-primary font-semibold">47</span></div>
                  <div>Tổng giá trị: <span className="text-accent font-semibold">{formatCurrency(892000000)}</span></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Action Required */}
            {actionRequiredTransactions.length > 0 && (
              <Card className="glass-panel border-yellow-500/50 bg-yellow-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-yellow-400">
                    <Warning className="w-5 h-5" />
                    <span>Cần xử lý ({actionRequiredTransactions.length})</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {actionRequiredTransactions.map(tx => (
                      <div key={tx.id} className="flex items-center justify-between p-4 bg-dark-background/50 rounded-xl border border-yellow-500/20">
                        <div>
                          <div className="font-medium text-dark-text">{tx.title}</div>
                          <div className="text-sm text-dark-subtle">
                            {tx.type === 'buy' ? 'Từ' : 'Đến'} {tx.otherParty}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-primary">{formatCurrency(tx.amount)}</div>
                          <Button size="sm" className="btn-primary mt-1 shadow-glow-primary">
                            {tx.status === 'delivered' ? 'Xác nhận' : 'Xem chi tiết'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Create New Transaction */}
            <Card className="glass-panel border-primary/30">
              <CardContent className="p-8">
                <div className="text-center">
                  <Button className="btn-primary shadow-glow-primary hover:shadow-glow-primary-strong" size="lg">
                    <Plus className="w-5 h-5 mr-2" />
                    Tạo giao dịch mới
                  </Button>
                  <p className="text-sm text-dark-subtle mt-3">
                    Bắt đầu một giao dịch an toàn với EscrowVN
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Active Transactions */}
            <Card className="glass-panel border-accent/30">
              <CardHeader>
                <CardTitle>Giao dịch đang hoạt động</CardTitle>
                <CardDescription className="text-dark-subtle">
                  Theo dõi tình trạng các giao dịch của bạn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map(tx => (
                    <div key={tx.id} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-white/10 hover:border-primary/30">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-dark-text">{tx.title}</h3>
                          <p className="text-sm text-dark-subtle">
                            {tx.type === 'buy' ? 'Mua từ' : 'Bán cho'} {tx.otherParty}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-primary">{formatCurrency(tx.amount)}</div>
                          <Badge className={`${getStatusColor(tx.status)} text-white mt-1`}>
                            {getStatusText(tx.status)}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-dark-subtle">Tiến độ</span>
                          <span className="text-primary font-medium">{tx.progress}%</span>
                        </div>
                        <Progress value={tx.progress} className="h-2" />
                      </div>
                      
                      <div className="flex justify-between items-center mt-4 text-sm text-dark-subtle">
                        <span>#{tx.id}</span>
                        <span>{tx.createdAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
