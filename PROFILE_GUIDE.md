# Profile Data Guide

## 📝 How to Update Your Portfolio

All your personal information is now centralized in **one file**: `src/data/profile.js`

Simply edit this file to update your entire portfolio!

## 🎯 What to Update

### 1. Personal Information
```javascript
personal: {
  name: "Your Name",                    // Your name/title
  title: "Your Professional Title",     // Subtitle
  summary: "Your bio...",               // About you
  email: "your.email@example.com"       // Your email
}
```

### 2. Social Links
```javascript
social: {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resume: "/resume.pdf"                 // Path to your resume
}
```

### 3. Services (What I Do)
```javascript
about: {
  services: [
    {
      icon: "code",                      // Icon name (code, database, cloud, mobile)
      title: "Service Title",
      description: "Service description..."
    }
  ],
  aboutText: [
    "First paragraph...",
    "Second paragraph...",
    "Third paragraph..."
  ]
}
```

### 4. Experience
```javascript
experience: [
  {
    title: "Job Title",
    company: "Company Name",
    location: "Location",
    period: "2020 - Present",
    description: [
      "Achievement 1",
      "Achievement 2"
    ],
    technologies: ["React", "Node.js"]
  }
]
```

### 5. Projects
```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    image: "🛒",                        // Emoji or image path
    technologies: ["React", "Node.js"],
    github: "https://github.com/...",
    live: "https://demo.com",
    featured: true                       // true for featured projects
  }
]
```

### 6. Skills
```javascript
skills: {
  categories: [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },   // Level 0-100
        { name: "JavaScript", level: 95 }
      ]
    }
  ]
}
```

## ✅ Available Icon Names for Services

- `"code"` - Frontend Development
- `"database"` - Backend Development
- `"cloud"` - Cloud & DevOps
- `"mobile"` - Mobile Development

## 🎨 Tips

1. **Keep it updated**: Update `profile.js` whenever you have new projects, experience, or skills
2. **Featured projects**: Set `featured: true` for your best projects
3. **Skill levels**: Use 0-100 to represent your proficiency
4. **Images**: For projects, you can use emojis or replace with image paths later

## 📂 File Location

All your data is in: `src/data/profile.js`

That's it! Update one file, and your entire portfolio updates automatically! 🚀



