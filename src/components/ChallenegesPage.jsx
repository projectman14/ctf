import React, { useState } from 'react'
import ChallengeModal from './ChallengeModal'

// Sample challenge data
const challengeCategories = [
  {
    name: 'WEB',
    challenges: [
      { 
        id: 1, 
        name: 'Challenge 1', 
        points: 200, 
        solved: false,
        solves: 0,
        description: 'This is Challenge Description'
      },
      { 
        id: 2, 
        name: 'Challenge 2', 
        points: 200, 
        solved: false,
        solves: 0,
        description: 'This is Challenge Description'
      },
    ]
  }
]

export default function ChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState(null)

  const handleChallengeClick = (challenge) => {
    setSelectedChallenge(challenge)
  }

  const handleCloseModal = () => {
    setSelectedChallenge(null)
  }

  const handleFlagSubmit = (flag) => {
    console.log('Submitted flag:', flag)
    // Here you would typically validate the flag with your backend
    handleCloseModal()
  }

  return (
    <div className="min-h-screen bg-black/90 text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto pt-16">
        <h1 className="text-4xl font-bold text-center mb-16 text-red-400 
                     drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">
          Challenges
        </h1>

        {challengeCategories.map((category) => (
          <div key={category.name} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white/90">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {category.challenges.map((challenge) => (
                <button
                  key={challenge.id}
                  onClick={() => handleChallengeClick(challenge)}
                  className={`
                    p-6 rounded-lg text-center transition-all duration-200
                    border border-transparent hover:border-red-500/50
                    ${selectedChallenge?.id === challenge.id 
                      ? 'bg-red-500/10 border-red-500' 
                      : 'bg-gray-800/50 hover:bg-gray-800/70'}
                  `}
                >
                  <h3 className="text-lg font-medium mb-2">{challenge.name}</h3>
                  <p className="text-red-400">{challenge.points}</p>
                </button>
              ))}
            </div>
          </div>
        ))}

        {selectedChallenge && (
          <ChallengeModal
            challenge={selectedChallenge}
            onClose={handleCloseModal}
            onSubmit={handleFlagSubmit}
          />
        )}
      </div>
    </div>
  )
}

