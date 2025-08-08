# Futuristic Portfolio Website

A modern, responsive portfolio website built with React, featuring a dark, futuristic theme with sleek animations and interactive elements.

## 🚀 Features

- **Dark Futuristic Theme**: Inspired by modern tech companies with neon green and yellow accents
- **Full-Screen Hero Section**: Eye-catching introduction with animated elements
- **Work Experience Timeline**: Professional journey with interactive timeline layout
- **Project Showcase**: Grid layout with featured projects and hover effects
- **Visitor Counter**: Animated counter with real-time statistics
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern Tech Stack**: Built with React, Vite, Tailwind CSS, and Lucide React icons

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd website_new
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
   Navigate to `http://localhost:5173` to view the website.

## 🏗️ Project Structure

```
website_new/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Hero.jsx            # Full-screen hero section
│   │   ├── WorkExperience.jsx  # Work experience timeline
│   │   ├── Projects.jsx        # Projects showcase
│   │   └── VisitorCounter.jsx  # Visitor counter component
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles and Tailwind imports
├── public/                    # Static assets
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  'neon-green': '#00ff88',
  'neon-yellow': '#ffff00',
  'dark-bg': '#0a0a0a',
  'darker-bg': '#050505',
  'accent-gray': '#1a1a1a',
  'text-primary': '#ffffff',
  'text-secondary': '#a0a0a0',
}
```

### Content

Update the content in each component:

- **Hero.jsx**: Update personal information, stats, and call-to-action buttons
- **WorkExperience.jsx**: Modify the `experiences` array with your work history
- **Projects.jsx**: Update the `projects` array with your projects
- **VisitorCounter.jsx**: Customize the visitor count logic and statistics

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations are defined in `tailwind.config.js`

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, please open an issue in the repository.

---

Built with ❤️ using React and modern web technologies.
