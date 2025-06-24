import React, { useState, useEffect } from 'react'
import Button from './Button'

const ApiDataDisplay = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error('Failed to fetch posts')
      }
      const data = await response.json()
      setPosts(data.slice(0, 20)) // Get first 20 posts
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(posts.length / postsPerPage)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">API Data - Blog Posts</h2>
        <Button onClick={fetchPosts} variant="primary" disabled={loading}>
          {loading ? 'Loading...' : 'Refresh'}
        </Button>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <>
          <div className="space-y-4 mb-6">
            {currentPosts.map(post => (
              <div
                key={post.id}
                className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 capitalize">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {post.body}
                </p>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500 dark:text-gray-400">
                  <span>Post ID: {post.id}</span>
                  <span>User ID: {post.userId}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <Button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                variant="secondary"
                size="small"
              >
                Previous
              </Button>
              
              <span className="text-sm text-gray-600 dark:text-gray-300 px-3">
                Page {currentPage} of {totalPages}
              </span>
              
              <Button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                variant="secondary"
                size="small"
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}

      {!loading && !error && posts.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          No posts available. Click refresh to fetch data.
        </p>
      )}
    </div>
  )
}

export default ApiDataDisplay