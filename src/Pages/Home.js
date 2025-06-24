import React from 'react'
import TaskManager from '../components/TaskManager'
import Counter from '../components/counter'
import ApiDataDisplay from '../components/ApiDataDisplay'
import Card from '../components/Card'
import Button from '../components/Button'
import { useState, useEffect } from 'react'

const Home = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showUsers, setShowUsers] = useState(false)

  // API Integration - Fetch users from JSONPlaceholder
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        const data = await response.json()
        setUsers(data.slice(0, 6)) // Get first 6 users
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const refreshUsers = () => {
    setUsers([])
    setError(null)
    // Re-fetch users
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data.slice(0, 6))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Welcome to PLP Task Manager
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          A comprehensive React application with task management, API integration, and modern UI components.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button onClick={() => setShowUsers(!showUsers)} variant="primary">
            {showUsers ? 'Hide' : 'Show'} User Directory
          </Button>
          <Button onClick={refreshUsers} variant="secondary">
            Refresh Users
          </Button>
        </div>
      </div>

      {/* Task Manager Component */}
      <TaskManager />

      {/* Counter Component */}
      <Counter />

      {/* API Data Display */}
      <ApiDataDisplay />

      {/* User Directory Section */}
      {showUsers && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">User Directory</h2>
            
            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}

            {error && (
              <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded">
                Error: {error}
              </div>
            )}

            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map(user => (
                  <Card key={user.id} user={user} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home