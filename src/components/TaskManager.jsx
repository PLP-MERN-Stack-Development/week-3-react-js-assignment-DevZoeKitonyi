import React, { useState, useEffect } from 'react'
import Button from './Button'

const TaskManager = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('all') // all, completed, pending
  const [loading, setLoading] = useState(false)

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed
    if (filter === 'pending') return !task.completed
    return true
  })

  const completedCount = tasks.filter(task => task.completed).length
  const pendingCount = tasks.filter(task => !task.completed).length

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Task Manager</h2>
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-blue-600 dark:text-blue-400">
            Total: {tasks.length}
          </span>
          <span className="text-green-600 dark:text-green-400">
            Completed: {completedCount}
          </span>
          <span className="text-orange-600 dark:text-orange-400">
            Pending: {pendingCount}
          </span>
        </div>
      </div>

      {/* Add Task Form */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        <Button onClick={addTask} variant="primary">
          Add Task
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        <Button
          onClick={() => setFilter('all')}
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="small"
        >
          All
        </Button>
        <Button
          onClick={() => setFilter('pending')}
          variant={filter === 'pending' ? 'warning' : 'secondary'}
          size="small"
        >
          Pending
        </Button>
        <Button
          onClick={() => setFilter('completed')}
          variant={filter === 'completed' ? 'success' : 'secondary'}
          size="small"
        >
          Completed
        </Button>
        {completedCount > 0 && (
          <Button
            onClick={clearCompleted}
            variant="danger"
            size="small"
          >
            Clear Completed
          </Button>
        )}
      </div>

      {/* Tasks List */}
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            {filter === 'all' ? 'No tasks yet. Add one above!' : `No ${filter} tasks.`}
          </div>
        ) : (
          filteredTasks.map(task => (
            <div
              key={task.id}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                task.completed
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                  : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <span
                className={`flex-1 ${
                  task.completed
                    ? 'line-through text-gray-500 dark:text-gray-400'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                {task.text}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {new Date(task.createdAt).toLocaleDateString()}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default TaskManager