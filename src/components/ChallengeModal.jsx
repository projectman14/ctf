import React, { useState } from 'react'

export default function ChallengeModal({ challenge, onClose, onSubmit }) {
  const [flag, setFlag] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(flag)
    setFlag('')
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1b1e] rounded-lg shadow-xl w-full max-w-lg">
        {/* Header */}
        <div className="flex border-b border-gray-800">
          <div className="px-4 py-2 border-b-2 border-red-500 text-white">
            Challenge
          </div>
          <div className="px-4 py-2 text-gray-400">
            {challenge.solves || 0} Solves
          </div>
          <button 
            onClick={onClose}
            className="ml-auto px-4 py-2 text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-2 text-red-400">
            {challenge.name}
          </h2>
          <div className="text-xl text-center mb-6 text-white">
            {challenge.points}
          </div>
          <p className="text-gray-300 mb-8">
            {challenge.description || 'This is Challenge Description'}
          </p>

          {/* Flag submission form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Flag"
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-md
                         text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                         focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-gray-800 text-white rounded-md
                         hover:bg-gray-700 focus:outline-none focus:ring-2
                         focus:ring-red-500 focus:ring-offset-2 
                         focus:ring-offset-gray-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

