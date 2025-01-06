import { useState } from 'react'

export default function LoginForm({ onSwitchToSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    console.log('Login attempted with:', { email, password })
  }

  return (
    <div className="w-full bg-black/70 text-white border-none shadow-2xl rounded-lg p-8
                    muxsm:max-w-[200px] uxsm:max-w-[300px] xsm:max-w-[450px] sm:max-w-[500px]">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            User Name or Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-red-500 focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-red-500 focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-sm text-white hover:text-red-400 focus:outline-none focus:underline"
          >
            Don't have an account? Sign up
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                       focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  )
}

