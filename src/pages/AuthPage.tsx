
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Shield, Eye, EyeSlash, UserPlus, SignIn, User, Envelope, Lock } from 'phosphor-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const loginSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

const registerSchema = z.object({
  fullName: z.string().min(2, 'Họ tên phải có ít nhất 2 ký tự'),
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(8, 'Mật khẩu phải có ít nhất 8 ký tự'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Mật khẩu xác nhận không khớp",
  path: ["confirmPassword"],
});

type LoginForm = z.infer<typeof loginSchema>;
type RegisterForm = z.infer<typeof registerSchema>;

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const registerForm = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onLogin = (data: LoginForm) => {
    console.log('Login attempt:', data);
    toast({
      title: "Đăng nhập thành công",
      description: "Chào mừng bạn trở lại với EscrowVN!",
    });
  };

  const onRegister = (data: RegisterForm) => {
    console.log('Register attempt:', data);
    toast({
      title: "Đăng ký thành công", 
      description: "Vui lòng kiểm tra email để xác thực tài khoản.",
    });
  };

  const handleWalletConnect = (walletType: string) => {
    console.log(`Connecting to ${walletType}...`);
    toast({
      title: "Kết nối ví",
      description: `Đang kết nối với ${walletType}...`,
    });
    // TODO: Implement actual wallet connection logic
  };

  return (
    <div className="min-h-screen glass-panel" style={{ 
      background: 'var(--color-background)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      <Card className="w-full max-w-md glass-card">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent">
              EscrowVN
            </span>
          </div>
          <CardTitle className="text-xl text-white">
            {isLogin ? 'Đăng nhập vào EscrowVN' : 'Tạo tài khoản EscrowVN'}
          </CardTitle>
          <CardDescription className="text-gray-300">
            {isLogin 
              ? 'Bảo vệ các giao dịch của bạn với tài khoản EscrowVN' 
              : 'Tham gia hệ sinh thái giao dịch an toàn và minh bạch'
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {isLogin ? (
            <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <div className="relative">
                  <Envelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="pl-12 bg-gray-800/50 border-0 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 focus:bg-gray-700/50 transition-all duration-300"
                    {...loginForm.register('email')}
                  />
                </div>
                {loginForm.formState.errors.email && (
                  <p className="text-sm text-red-500">{loginForm.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">Mật khẩu</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-12 pr-12 bg-gray-800/50 border-0 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 focus:bg-gray-700/50 transition-all duration-300"
                    {...loginForm.register('password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {loginForm.formState.errors.password && (
                  <p className="text-sm text-red-500">{loginForm.formState.errors.password.message}</p>
                )}
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <SignIn className="w-4 h-4 mr-2" />
                Đăng nhập An toàn
              </Button>
            </form>
          ) : (
            <form onSubmit={registerForm.handleSubmit(onRegister)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-300">Họ và tên</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="fullName"
                    placeholder="Nguyễn Văn A"
                    className="pl-12 bg-gray-800/50 border-0 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 focus:bg-gray-700/50 transition-all duration-300"
                    {...registerForm.register('fullName')}
                  />
                </div>
                {registerForm.formState.errors.fullName && (
                  <p className="text-sm text-red-500">{registerForm.formState.errors.fullName.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <div className="relative">
                  <Envelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="pl-12 bg-gray-800/50 border-0 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 focus:bg-gray-700/50 transition-all duration-300"
                    {...registerForm.register('email')}
                  />
                </div>
                {registerForm.formState.errors.email && (
                  <p className="text-sm text-red-500">{registerForm.formState.errors.email.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">Mật khẩu</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-12 bg-gray-800/50 border-0 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 focus:bg-gray-700/50 transition-all duration-300"
                    {...registerForm.register('password')}
                  />
                </div>
                {registerForm.formState.errors.password && (
                  <p className="text-sm text-red-500">{registerForm.formState.errors.password.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-300">Xác nhận mật khẩu</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="pl-12 bg-gray-800/50 border-0 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 focus:bg-gray-700/50 transition-all duration-300"
                    {...registerForm.register('confirmPassword')}
                  />
                </div>
                {registerForm.formState.errors.confirmPassword && (
                  <p className="text-sm text-red-500">{registerForm.formState.errors.confirmPassword.message}</p>
                )}
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                <UserPlus className="w-4 h-4 mr-2" />
                Đăng ký & Bắt đầu
              </Button>
            </form>
          )}
          
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
            >
              {isLogin 
                ? 'Chưa có tài khoản? Đăng ký ngay' 
                : 'Đã có tài khoản? Đăng nhập'
              }
            </button>
          </div>

          {/* Web3 Wallet Connection Section */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900 text-gray-400">Hoặc tiếp tục với</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => handleWalletConnect('MetaMask')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-700 rounded-lg text-white font-medium hover:bg-gray-800/50 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
                  M
                </div>
                <span>Kết nối MetaMask</span>
              </button>

              <button
                onClick={() => handleWalletConnect('WalletConnect')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-700 rounded-lg text-white font-medium hover:bg-gray-800/50 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                  W
                </div>
                <span>Kết nối WalletConnect</span>
              </button>

              <button
                onClick={() => handleWalletConnect('Coinbase Wallet')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-gray-700 rounded-lg text-white font-medium hover:bg-gray-800/50 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
                  C
                </div>
                <span>Kết nối Coinbase Wallet</span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
