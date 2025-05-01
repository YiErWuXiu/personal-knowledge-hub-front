
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("login");
  const [showPassword, setShowPassword] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Register form state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Use the AuthContext login function
    login();
    toast.success("登录成功！");
    navigate("/");
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
      toast.error("密码不匹配");
      return;
    }
    // Register and login the user
    login();
    toast.success("注册成功！");
    navigate("/");
  };
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  const skipLogin = () => {
    // Use the AuthContext login function
    login();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md premium-card p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">个人知识库</h1>
          <p className="text-green-700 text-lg">存储与管理您的学习笔记</p>
        </div>
        
        <Tabs 
          defaultValue="login" 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 mb-6 premium-header rounded-lg">
            <TabsTrigger 
              value="login" 
              className="data-[state=active]:bg-blue-700/80 text-white py-2 rounded-l-lg"
            >
              登录
            </TabsTrigger>
            <TabsTrigger 
              value="register"
              className="data-[state=active]:bg-blue-700/80 text-white py-2 rounded-r-lg"
            >
              注册
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-blue-800 block mb-1 font-medium">电子邮箱</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                  <Input 
                    type="email" 
                    placeholder="请输入您的电子邮箱" 
                    className="pl-10 bg-blue-50 border-blue-200"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="text-blue-800 block mb-1 font-medium">密码</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                  <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder="请输入您的密码" 
                    className="pl-10 bg-blue-50 border-blue-200"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button" 
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div className="!mt-8">
                <Button type="submit" className="premium-button w-full py-5">
                  登录
                </Button>
              </div>
              
              <div className="text-center mt-4">
                <button 
                  type="button" 
                  onClick={skipLogin} 
                  className="text-blue-600 hover:underline text-sm"
                >
                  跳过登录直接进入
                </button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="text-blue-800 block mb-1 font-medium">用户名</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
                  <Input 
                    type="text" 
                    placeholder="请输入您的用户名" 
                    className="pl-10 bg-green-50 border-green-200"
                    value={registerUsername}
                    onChange={(e) => setRegisterUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="text-blue-800 block mb-1 font-medium">电子邮箱</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
                  <Input 
                    type="email" 
                    placeholder="请输入您的电子邮箱" 
                    className="pl-10 bg-green-50 border-green-200"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="text-blue-800 block mb-1 font-medium">密码</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
                  <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder="请输入您的密码" 
                    className="pl-10 bg-green-50 border-green-200"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                  />
                  <button 
                    type="button" 
                    onClick={toggleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="text-blue-800 block mb-1 font-medium">确认密码</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
                  <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder="请再次输入您的密码" 
                    className="pl-10 bg-green-50 border-green-200"
                    value={registerConfirmPassword}
                    onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="!mt-8">
                <Button type="submit" className="premium-button w-full py-5">
                  注册
                </Button>
              </div>
              
              <div className="text-center mt-4">
                <button 
                  type="button" 
                  onClick={skipLogin} 
                  className="text-blue-600 hover:underline text-sm"
                >
                  跳过注册直接进入
                </button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
