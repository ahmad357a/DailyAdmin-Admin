import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Eye, EyeOff, ArrowLeft, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import api from '@/lib/axios';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [showResendOption, setShowResendOption] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { toast } = useToast();
  
  // Get return URL from query params or location state
  const params = new URLSearchParams(location.search);
  const returnTo = params.get('returnTo');
  const from = returnTo || location.state?.from?.pathname || '/dashboard';

// Check if the API is reachable
  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        // Simple health check to the backend
        await api.get('/health', { timeout: 5000 });
        setApiStatus('online');
      } catch (error) {
        console.error('API health check failed:', error);
        setApiStatus('offline');
      }
    };
    
    checkApiStatus();
  }, []);

  const handleResendVerification = async () => {
    if (!email) {
      toast({
        title: 'Email required',
        description: 'Please enter your email address first.',
        variant: 'destructive'
      });
      return;
    }

    setIsResending(true);
    try {
      const response = await api.post('/api/resend-verification', { email });
      toast({
        title: 'Email sent!',
        description: response.data.message,
      });
      setShowResendOption(false);
    } catch (error: any) {
      toast({
        title: 'Failed to send email',
        description: error.response?.data?.error || 'Please try again later.',
        variant: 'destructive'
      });
    } finally {
      setIsResending(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');
    setShowResendOption(false);
    
    try {
      console.log(`Attempting to login with email: ${email}`);
      await login(email, password);
      
      toast({
        title: 'Welcome back!',
        description: 'Successfully logged in to your account.',
      });
      
      console.log(`Login successful, redirecting to ${from}`);
      navigate(from, { replace: true });
    } catch (error: unknown) {
      let errorMsg = 'Login failed. Please try again.';
      
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with an error
          errorMsg = error.response.data?.error || errorMsg;
          console.error(`Login failed with status ${error.response.status}:`, error.response.data);
          
          // Check if it's an unverified email error
          if (error.response.data?.error?.includes('verify your email')) {
            setShowResendOption(true);
          }
        } else if (error.request) {
          // Request was made but no response received
          errorMsg = 'No response from server. Please check your connection.';
          console.error('Login failed - no response:', error.request);
        } else {
          // Request setup failed
          errorMsg = `Request failed: ${error.message}`;
          console.error('Login request setup failed:', error.message);
        }
      } else if (error instanceof Error) {
        errorMsg = error.message;
      }
      
      setLoginError(errorMsg);
      
      toast({
        title: 'Login failed',
        description: errorMsg,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-300/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 text-gray-700 hover:text-purple-600 hover:bg-purple-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-xl border-purple-200 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl w-fit shadow-lg">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-gray-800">Welcome Back!</CardTitle>
              <CardDescription className="text-gray-600">
                Sign in to continue your lucky streak
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            {apiStatus === 'offline' && (
              <Alert className="mb-4 bg-yellow-50 border-yellow-300">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  We're having trouble connecting to our servers. Please try again later.
                </AlertDescription>
              </Alert>
            )}
            
            {loginError && (
              <Alert className="mb-4 bg-destructive/10 border-destructive/30">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <AlertDescription className="text-destructive">
                  {loginError}
                </AlertDescription>
              </Alert>
            )}

            {showResendOption && (
              <Alert className="mb-4 border-blue-200 bg-blue-50">
                <AlertDescription className="text-blue-800">
                  <div className="flex items-center justify-between">
                    <span>Need to verify your email? We can resend the verification link.</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleResendVerification}
                      disabled={isResending}
                      className="ml-4"
                    >
                      {isResending ? 'Sending...' : 'Resend Email'}
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12"
                  disabled={apiStatus === 'offline'}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  className="h-12 pr-12"
                  disabled={apiStatus === 'offline'}
                />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white h-12 text-lg font-semibold shadow-lg transition-all duration-300"
                disabled={isLoading || apiStatus === 'offline'}
              >
                {isLoading ? "Signing in..." : apiStatus === 'checking' ? "Checking connection..." : apiStatus === 'offline' ? "Service Unavailable" : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                >
                  Sign up now
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-purple-200">
              <p className="text-xs text-center text-gray-500">
                By signing in, you agree to our{' '}
                <Link to="/terms" className="text-purple-600 hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-purple-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;