import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className="bg-blue-600 dark:bg-gray-800 text-white shadow-lg transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 dark:hover:text-gray-300 transition-colors">
            PLP Task Manager
          </Link>
          <div className="flex items-center space-x-4">
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-blue-200 dark:hover:text-gray-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-blue-200 dark:hover:text-gray-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-blue-200 dark:hover:text-gray-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header