# Learn-Vue

A modern job listing application built with Vue 3, featuring a responsive design and full CRUD operations for job management.

## Features

### 🏠 Home Page
![Home Page](./src/assets/Screenshot%202025-07-06%20084451.png)

The home page showcases featured job listings with a clean, modern interface. Features include:
- **Hero Section**: Eye-catching header with call-to-action buttons
- **Featured Jobs**: Grid layout displaying job cards with key information
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Navigation**: Easy access to all sections of the application

### 💼 Jobs Listing Page
![Jobs Listing](./src/assets/Screenshot%202025-07-06%20084505.png)

Comprehensive job listing page with advanced features:
- **Job Cards**: Detailed job information including title, company, location, and salary
- **Loading States**: Smooth loading animations using vue-spinner
- **API Integration**: Real-time data fetching from backend API
- **Grid Layout**: Responsive grid system that adapts to screen size
- **Search & Filter**: Easy job discovery with filtering capabilities

### ➕ Add Job Form
![Add Job](./src/assets/Screenshot%202025-07-06%20084520.png)

Complete job creation interface with comprehensive form validation:
- **Form Validation**: Required field validation and error handling
- **Job Details**: Type, title, description, salary, and location fields
- **Company Information**: Company name, description, contact email, and phone
- **Real-time Updates**: Instant form feedback and validation
- **API Integration**: Seamless data submission to backend

## Technical Implementation

### Frontend Technologies
- **Vue 3**: Composition API for reactive state management
- **Vue Router**: Client-side routing with nested routes
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Axios**: HTTP client for API communication
- **Vue Spinner**: Loading animations and user feedback

### Key Components
- **JobCardList**: Reusable job card component with props
- **JobList**: Main listing component with API integration
- **AddJobView**: Form component with validation
- **EditJobView**: Edit functionality with pre-populated forms
- **Navbar**: Navigation component with responsive design

### State Management
- **Reactive State**: Using Vue 3's reactive() for component state
- **Props**: Component communication through props
- **API Integration**: Real-time data fetching and updates

### API Endpoints
- `GET /api/jobs` - Fetch all jobs
- `GET /api/jobs/:id` - Fetch specific job
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/:id` - Update existing job
- `DELETE /api/jobs/:id` - Delete job

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Start JSON Server (for development)

```sh
npm run server
```

## Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── JobCardList.vue
│   ├── JobList.vue
│   └── Navbar.vue
├── views/              # Page components
│   ├── HomeView.vue
│   ├── JobsView.vue
│   ├── AddJobView.vue
│   └── EditJobView.vue
├── router/             # Vue Router configuration
├── assets/             # Static assets and screenshots
└── jobs.json          # Mock data for development
```

## Development Features

- **Hot Reload**: Instant updates during development
- **TypeScript Support**: Enhanced development experience
- **ESLint Integration**: Code quality and consistency
- **Responsive Design**: Mobile-first approach
- **Modern UI/UX**: Clean, professional interface

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

