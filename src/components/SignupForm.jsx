import React, { useState } from 'react'

export default function SignupForm({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    console.log('Register attempted with:', formData)
  }

  return (
    <div className="w-full bg-black/70 text-white border-none shadow-2xl rounded-lg p-8
                    muxsm:max-w-[200px] uxsm:max-w-[300px] xsm:max-w-[450px] sm:max-w-[500px]">
      <h2 className="text-2xl font-semibold text-center mb-6 text-red-400">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm font-medium">
            User Name
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-red-500 focus:border-transparent"
            placeholder="Choose a username"
          />
          <p className="text-xs text-gray-400">Your username on the site</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-red-500 focus:border-transparent"
            placeholder="Enter your email"
          />
          <p className="text-xs text-gray-400">Never shown to the public</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-md 
                       text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                       focus:ring-red-500 focus:border-transparent"
            placeholder="Choose a password"
          />
          <p className="text-xs text-gray-400">Password used to log into your account</p>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-sm text-white hover:text-red-400 focus:outline-none focus:underline"
          >
            Already have an account? Login
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

