import { useState } from 'react'

// Sample data for demonstration
const initialUsers = [
  { id: '0x01', name: 'User 1', website: 'example1.com', affiliation: 'Company A', country: 'USA' },
  { id: '0x02', name: 'User 2', website: 'example2.com', affiliation: 'Company B', country: 'UK' },
  { id: '0x03', name: 'User 3', website: 'example3.com', affiliation: 'Company C', country: 'Canada' },
]

export default function UsersPage() {
  const [nameFilter, setNameFilter] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [users, setUsers] = useState(initialUsers)

  const handleSearch = (e) => {
    e.preventDefault()
    const filtered = initialUsers.filter(user => {
      const matchesName = user.name.toLowerCase().includes(nameFilter.toLowerCase())
      const matchesQuery = Object.values(user).some(value => 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
      return matchesName && matchesQuery
    })
    setUsers(filtered)
  }

  return (
    <div className="min-h-screen bg-black/60 text-white  p-4 sm:p-8">
      <div className="max-w-7xlv mt-[2rem] mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8 text-red-400">Users</h1>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                     placeholder-gray-400 w-full sm:w-[200px]"
          />
          <input
            type="text"
            placeholder="Search for matching users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md bg-gray-800/50 border border-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent
                     placeholder-gray-400"
          />
          <button
            type="submit"
            className="px-8 py-2 bg-gray-800/50 border border-gray-700 rounded-md
                     hover:bg-gray-700/50 focus:outline-none focus:ring-2 
                     focus:ring-red-500 transition-colors"
          >
            Search
          </button>
        </form>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="py-4 px-6">User</th>
                <th className="py-4 px-6">Website</th>
                <th className="py-4 px-6">Affiliation</th>
                <th className="py-4 px-6">Country</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr 
                  key={user.id}
                  className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="py-4 px-6">{user.id}</td>
                  <td className="py-4 px-6">{user.website}</td>
                  <td className="py-4 px-6">{user.affiliation}</td>
                  <td className="py-4 px-6">{user.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

