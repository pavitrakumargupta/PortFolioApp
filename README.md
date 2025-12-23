# Full Stack Developer Portfolio

A modern, animated portfolio website built with React, featuring dark mode, scroll animations, and 3D elements.

## Features

- 🎨 **Beautiful Animations** - Smooth scroll animations using Framer Motion
- 🌙 **Dark Mode** - Toggle between dark and light themes
- 🎯 **3D Elements** - Interactive 3D scene using Three.js and React Three Fiber
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal performance
- 🎭 **Modern UI** - Glassmorphism effects and gradient designs

## Sections

1. **Hero Section** - Cover photo, profile photo, summary, and social links
2. **About/What I Do** - Services and about me section
3. **Experience** - Timeline of professional experience
4. **Projects** - Showcase of projects with GitHub and live demo links
5. **Skills** - Technical skills with animated progress bars
6. **Footer** - Contact links and scroll to top

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and summary
   - Replace placeholder images with your cover and profile photos
   - Update social media links (LinkedIn, GitHub, Resume)

2. **About Section** (`src/components/About.jsx`):
   - Modify services and descriptions
   - Update about me text

3. **Experience** (`src/components/Experience.jsx`):
   - Add your work experience
   - Update companies, roles, and descriptions

4. **Projects** (`src/components/Projects.jsx`):
   - Add your projects
   - Update GitHub and live demo links
   - Add project images (replace emoji placeholders)

5. **Skills** (`src/components/Skills.jsx`):
   - Update skill categories and proficiency levels
   - Add or remove technologies

6. **Footer** (`src/components/Footer.jsx`):
   - Update contact email
   - Update social media links

### Adding Images

1. Place your images in `public/` folder
2. Update image paths in components:
   - Cover photo: Replace the placeholder div with `<img src="/cover.jpg" alt="Cover" />`
   - Profile photo: Replace the placeholder div with `<img src="/profile.jpg" alt="Profile" />`
   - Project images: Replace emoji placeholders with actual images

### Styling

- Main styles: `src/App.css`
- Component styles: Individual CSS files in `src/components/`
- Color scheme: Update gradient colors in CSS files (search for `#667eea` and `#764ba2`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **React Icons** - Icon library
- **CSS3** - Styling with modern features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out if you have any questions or suggestions!
