import { useState } from 'react';
import { Eye, EyeOff, Chrome, Apple, Upload, CheckCircle } from 'lucide-react';
import { AuthCard } from './AuthCard';
import { RoleSwitcher } from './RoleSwitcher';
import { ThemeToggle } from './ThemeToggle';

interface SignupPageProps {
  onSignup: (role: 'student' | 'instructor' | 'admin') => void;
  onSwitchToLogin: () => void;
}

export function SignupPage({ onSignup, onSwitchToLogin }: SignupPageProps) {
  const [role, setRole] = useState<'student' | 'instructor' | 'admin'>('student');
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    institution: '',
    expertise: [] as string[],
    terms: false
  });

  const roleContent = {
    student: {
      title: 'Start your learning journey',
      subtitle: 'Create your student account in seconds',
      cta: 'Create Student Account',
      showSocial: true,
      steps: 1
    },
    instructor: {
      title: 'Become an instructor',
      subtitle: 'Share your expertise with students worldwide',
      cta: 'Create Instructor Account',
      showSocial: true,
      steps: 2
    },
    admin: {
      title: 'Request admin access',
      subtitle: 'Admin accounts require verification',
      cta: 'Request Admin Access',
      showSocial: false,
      steps: 2
    }
  };

  const content = roleContent[role];
  const totalSteps = content.steps;

  const expertiseTags = [
    'Web Development', 'Mobile Development', 'Data Science', 'Machine Learning',
    'UI/UX Design', 'Digital Marketing', 'Business', 'Photography',
    'Video Editing', 'Graphic Design', 'Writing', 'Music'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onSignup(role);
    }
  };

  const toggleExpertise = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      expertise: prev.expertise.includes(tag)
        ? prev.expertise.filter(t => t !== tag)
        : [...prev.expertise, tag]
    }));
  };

  const passwordStrength = () => {
    const password = formData.password;
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const getStrengthColor = () => {
    const strength = passwordStrength();
    if (strength <= 1) return 'bg-red-500';
    if (strength <= 3) return 'bg-orange-500';
    return 'bg-green-500';
  };

  const getStrengthLabel = () => {
    const strength = passwordStrength();
    if (strength <= 1) return 'Weak';
    if (strength <= 3) return 'Medium';
    return 'Strong';
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950">
      {/* Left side - Hero */}
      <div className="hidden lg:flex lg:w-1/2 p-12 items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YTQgNCAwIDEgMSAwIDggNCA0IDAgMCAxIDAtOHptOCAwYTQgNCAwIDEgMSAwIDggNCA0IDAgMCAxIDAtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10 max-w-md text-white">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="mb-4">Join LumaLearn</h2>
          <p className="text-xl mb-8 text-blue-100">
            {role === 'student' && 'Access thousands of courses taught by expert instructors from around the world.'}
            {role === 'instructor' && 'Share your knowledge, build your brand, and earn revenue teaching what you love.'}
            {role === 'admin' && 'Manage your institution\'s learning platform with powerful admin tools.'}
          </p>

          {/* Benefits */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="mb-1">Premium Content</h4>
                <p className="text-sm text-blue-100">Access to exclusive courses and learning materials</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="mb-1">Certifications</h4>
                <p className="text-sm text-blue-100">Earn recognized certificates upon completion</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="mb-1">Community</h4>
                <p className="text-sm text-blue-100">Connect with learners and experts globally</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-12">
        <div className="w-full max-w-md">
          {/* Theme Toggle */}
          <div className="flex justify-end mb-6">
            <ThemeToggle />
          </div>

          <AuthCard role={role} title={content.title} subtitle={content.subtitle}>
            {/* Role Switcher */}
            <div className="mb-6">
              <RoleSwitcher selectedRole={role} onRoleChange={(newRole) => { setRole(newRole); setStep(1); }} />
            </div>

            {/* Progress Steps */}
            {totalSteps > 1 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-600 dark:text-slate-400">Step {step} of {totalSteps}</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="flex gap-2">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 h-1.5 rounded-full transition-all ${
                        i < step ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-slate-200 dark:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <>
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="Enter your full name"
                      required
                      aria-label="Full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="you@example.com"
                      required
                      aria-label="Email address"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-3 pr-12 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        placeholder="Create a strong password"
                        required
                        aria-label="Password"
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-600 dark:text-slate-400">Password strength</span>
                          <span className={`text-xs ${passwordStrength() <= 1 ? 'text-red-600' : passwordStrength() <= 3 ? 'text-orange-600' : 'text-green-600'}`}>
                            {getStrengthLabel()}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`flex-1 h-1 rounded-full ${
                                i < passwordStrength() ? getStrengthColor() : 'bg-slate-200 dark:bg-slate-700'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          Min 12 characters, 1 uppercase, 1 number, 1 symbol
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Institution (Student only) */}
                  {role === 'student' && (
                    <div>
                      <label htmlFor="institution" className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                        Institution <span className="text-slate-400">(optional)</span>
                      </label>
                      <input
                        id="institution"
                        type="text"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                        placeholder="Your school or university"
                        aria-label="Institution name"
                      />
                    </div>
                  )}
                </>
              )}

              {/* Step 2: Additional Info (Instructor/Admin) */}
              {step === 2 && role === 'instructor' && (
                <>
                  <div>
                    <label className="block text-sm text-slate-700 dark:text-slate-300 mb-3">
                      Select Your Expertise <span className="text-slate-400">(choose up to 5)</span>
                    </label>
                    <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                      {expertiseTags.map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleExpertise(tag)}
                          disabled={formData.expertise.length >= 5 && !formData.expertise.includes(tag)}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                            formData.expertise.includes(tag)
                              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                              : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-600'
                          } disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          {tag}
                          {formData.expertise.includes(tag) && (
                            <CheckCircle className="w-3 h-3 inline ml-1" />
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                      Selected: {formData.expertise.length} of 5
                    </p>
                  </div>

                  <div>
                    <label htmlFor="institution-instructor" className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Institution or Company <span className="text-slate-400">(optional)</span>
                    </label>
                    <input
                      id="institution-instructor"
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="Where do you work or teach?"
                      aria-label="Institution or company"
                    />
                  </div>
                </>
              )}

              {step === 2 && role === 'admin' && (
                <>
                  <div>
                    <label htmlFor="organization" className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Organization Name
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="Your organization or institution"
                      required
                      aria-label="Organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-slate-700 dark:text-slate-300 mb-2">
                      Verification Document
                    </label>
                    <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl p-6 text-center hover:border-purple-400 dark:hover:border-purple-500 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                        Upload verification document
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-500">
                        PDF, PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                    <p className="text-xs text-blue-800 dark:text-blue-200">
                      ℹ️ Admin requests are reviewed within 24-48 hours. You'll receive an email once approved.
                    </p>
                  </div>
                </>
              )}

              {/* Terms & Conditions */}
              {step === totalSteps && (
                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.terms}
                      onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                      className="w-5 h-5 mt-0.5 rounded border-slate-300 text-purple-600 focus:ring-2 focus:ring-purple-500"
                      required
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-400 flex-1">
                      I agree to the{' '}
                      <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:shadow-xl hover:shadow-purple-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={step === totalSteps && !formData.terms}
                >
                  {step < totalSteps ? 'Continue' : content.cta}
                </button>
              </div>

              {/* Social Sign-Up (Step 1 only) */}
              {step === 1 && content.showSocial && (
                <>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white dark:bg-slate-900 text-slate-500">Or sign up with</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className="px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Chrome className="w-5 h-5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">Google</span>
                    </button>
                    <button
                      type="button"
                      className="px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Apple className="w-5 h-5" />
                      <span className="text-sm text-slate-700 dark:text-slate-300">Apple</span>
                    </button>
                  </div>
                </>
              )}

              {/* Login Link */}
              <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={onSwitchToLogin}
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  Sign in
                </button>
              </p>
            </form>
          </AuthCard>
        </div>
      </div>
    </div>
  );
}
