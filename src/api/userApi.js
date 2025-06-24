const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

// Get all users
export const getUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`)
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

// Get user by ID
export const getUserById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users/${id}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch user with ID: ${id}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}

// Get posts by user ID
export const getPostsByUserId = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts?userId=${userId}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch posts for user ID: ${userId}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

// Get all posts
export const getPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`)
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

// Create a new post
export const createPost = async (postData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    })
    if (!response.ok) {
      throw new Error('Failed to create post')
    }
    return await response.json()
  } catch (error) {
    console.error('Error creating post:', error)
    throw error
  }
}