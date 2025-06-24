import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About This Project</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">React.js</h3>
              <p className="text-blue-600">Modern JavaScript library for building user interfaces</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Tailwind CSS</h3>
              <p className="text-green-600">Utility-first CSS framework for rapid UI development</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800">Vite</h3>
              <p className="text-purple-600">Fast build tool and development server</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-800">React Router</h3>
              <p className="text-orange-600">Declarative routing for React applications</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features Implemented</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Responsive design with Tailwind CSS</li>
            <li>Component-based architecture</li>
            <li>State management with React hooks</li>
            <li>API integration with external services</li>
            <li>Client-side routing</li>
            <li>Loading states and error handling</li>
            <li>Modern ES6+ JavaScript features</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Assignment Goals</h2>
          <p className="text-gray-600 leading-relaxed">
            This project demonstrates proficiency in modern React development practices, 
            including the use of functional components, hooks for state management, 
            integration with external APIs, and styling with Tailwind CSS. The application 
            showcases responsive design principles and follows React best practices for 
            component organization and code structure.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About