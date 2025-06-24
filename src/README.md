# React.js and Tailwind CSS Assignment - Week 3

This project is a comprehensive React application built with Vite and styled with Tailwind CSS, demonstrating modern web development practices and component architecture.

## 🚀 Live Demo

https://quiet-gelato-4c2031.netlify.app/

## 📋 Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Component Architecture**: Reusable and modular components
- **State Management**: React hooks for local and global state
- **API Integration**: Fetching data from external APIs (JSONPlaceholder)
- **Routing**: Client-side navigation with React Router
- **Form Handling**: Interactive forms with validation
- **Loading States**: User feedback during data fetching
- **Error Handling**: Graceful error management
- **Modern JavaScript**: ES6+ features and best practices

## 🛠️ Technologies Used

- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Declarative routing for React
- **JSONPlaceholder API** - Fake REST API for testing and prototyping

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Card.jsx        # User card component
│   └── Button.jsx      # Reusable button component
├── pages/              # Page components
│   ├── Home.jsx        # Home page with user directory
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact form page
├── hooks/              # Custom React hooks
│   └── useApi.js       # API fetching hook
├── context/            # React context providers
│   └── AppContext.jsx  # Global state management
├── api/                # API integration functions
│   └── userApi.js      # User-related API calls
├── utils/              # Utility functions
│   └── helpers.js      # Common helper functions
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd react-tailwind-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Assignment Requirements Completed

### ✅ React Fundamentals
- [x] Functional components with JSX
- [x] Props and state management
- [x] Event handling
- [x] Conditional rendering
- [x] List rendering with keys

### ✅ React Hooks
- [x] useState for local state
- [x] useEffect for side effects
- [x] useContext for global state
- [x] Custom hooks (useApi)

### ✅ Component Architecture
- [x] Reusable components (Button, Card, Header)
- [x] Component composition
- [x] Props validation and default values
- [x] Separation of concerns

### ✅ State Management
- [x] Local state with useState
- [x] Global state with Context API
- [x] State lifting and prop drilling solutions
- [x] Complex state with useReducer

### ✅ API Integration
- [x] Fetch data from external API
- [x] Loading states
- [x] Error handling
- [x] Data transformation
- [x] Custom API hook

### ✅ Styling with Tailwind CSS
- [x] Responsive design
- [x] Utility classes
- [x] Custom components
- [x] Hover and focus states
- [x] Color schemes and spacing

### ✅ Routing
- [x] Multiple pages/routes
- [x] Navigation between pages
- [x] Active link styling
- [x] Route parameters (if needed)

## 🎨 Design Features

- **Responsive Grid Layout**: Adapts to different screen sizes
- **Interactive Elements**: Hover effects and transitions
- **Loading Animations**: Spinner for better UX
- **Form Validation**: Real-time feedback
- **Color Consistency**: Cohesive color scheme
- **Typography Hierarchy**: Clear content structure

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.cjs` - ESLint configuration

## 📚 Learning Outcomes

This project demonstrates:

1. **Modern React Development**: Using functional components and hooks
2. **Component Design**: Creating reusable and maintainable components
3. **State Management**: Handling both local and global application state
4. **API Integration**: Working with external data sources
5. **Responsive Design**: Building mobile-first applications
6. **Code Organization**: Structuring a scalable React application
7. **Development Tools**: Using modern build tools and linting

## 🚀 Deployment

To deploy this application:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Firebase Hosting

## 👨‍💻 Author
- GitHub: DevZoeKitonyi


## 📄 License

This project is part of a React.js assignment and is for educational purposes.


# Screenshots

### Main Page
![Login](./images/file:///C:/Users/user/Pictures/Screenshots/Screenshot%202025-06-24%20145147.png)

### Dashboard
![Dashboard](./images/file:///C:/Users/user/Pictures/Screenshots/Screenshot%202025-06-24%20145208.png)

### Task Management
![Tasks](./images/file:///C:/Users/user/Pictures/tasknmanager.png)

### Contact
![Tasks](./images/file:///C:/Users/user/Pictures/contact.png)
