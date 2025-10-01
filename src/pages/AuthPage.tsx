
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
import Shield3D from '@/components/auth/Shield3D';
import SecurityNetwork3D from '@/components/auth/SecurityNetwork3D';
import WalletConnectButton from '@/components/auth/WalletConnectButton';
import Header from '@/components/Header';

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
    <>
      <Header />
      <div className="min-h-screen relative overflow-hidden bg-dark-background">
      {/* Animated Grid Background - giống trang chủ */}
      <div className="absolute inset-0 animated-grid opacity-30"></div>
      
      {/* Floating Energy Particles - giống HeroSection */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '6s' }}></div>
        
        {/* Small Energy Particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-accent rounded-full animate-ping opacity-40" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-ping opacity-50" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Centered Single Column Layout */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent">
                EscrowVN
              </span>
            </div>
            <CardTitle className="text-xl text-white mb-1">
              {isLogin ? 'Đăng nhập vào EscrowVN' : 'Tạo tài khoản EscrowVN'}
            </CardTitle>
            <CardDescription className="text-gray-300 text-sm">
              {isLogin 
                ? 'Bảo vệ các giao dịch của bạn với tài khoản EscrowVN' 
                : 'Tham gia hệ sinh thái giao dịch an toàn và minh bạch'
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent className="pt-4">
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
            
            <div className="mt-5 text-center">
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
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-black/20 text-gray-400">Hoặc tiếp tục với</span>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <WalletConnectButton
                  walletName="MetaMask"
                  walletLogoUrl="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                  onConnect={() => handleWalletConnect('MetaMask')}
                />
                
                <WalletConnectButton
                  walletName="WalletConnect"
                  walletLogoUrl="https://upload.wikimedia.org/wikipedia/commons/d/d3/WalletConnect_Icon.svg"
                  onConnect={() => handleWalletConnect('WalletConnect')}
                />
                
                <WalletConnectButton
                  walletName="Coinbase Wallet"
                  walletLogoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Coinbase_Wallet_logo.svg/512px-Coinbase_Wallet_logo.svg.png"
                  onConnect={() => handleWalletConnect('Coinbase Wallet')}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default AuthPage;
