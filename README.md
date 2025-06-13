# Promptly - AI Prompt Generator

A modern, production-ready AI prompt generator built with React 18, TypeScript, and Vite. Features a beautiful glassmorphic dark theme and intuitive user experience for creating optimized AI prompts.

![Promptly UI](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan)

## ✨ Features

- **🎨 Modern UI/UX**: Glassmorphic dark theme with smooth animations
- **🤖 Multiple AI Models**: Support for Llama 4 Maverick, Shisa V2, and Nemotron 49B
- **📝 Smart Form Builder**: Comprehensive prompt creation with role, domain, task, and context fields
- **🎭 Interactive Model Selection**: 3D carousel slider for model selection
- **⚡ Real-time Generation**: Simulated prompt generation with loading states
- **📋 Export Options**: Copy to clipboard and download as text file
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🎬 Smooth Animations**: Powered by Framer Motion
- **🔧 TypeScript**: Fully typed for better development experience

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **UI Components**: Lucide React icons
- **Carousel**: SwiperJS
- **Routing**: React Router v7

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/akshatthakur04/promptengineer.git
   cd promptengineer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ModelCard.tsx   # Individual model selection card
│   └── PromptForm.tsx  # Main prompt creation form
├── pages/              # Application pages
│   ├── Landing.tsx     # Homepage with hero section
│   ├── ModelSelection.tsx  # Model selection page
│   └── PromptBuilder.tsx   # Prompt creation interface
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind
```

## 🎯 Usage

1. **Landing Page**: Start your journey with an overview of Promptly's capabilities
2. **Select Model**: Choose from three specialized AI models using the interactive carousel
3. **Build Prompt**: Fill out the comprehensive form with:
   - Role/Persona definition
   - Domain/Industry context
   - Task description
   - Additional context
   - Tone preferences
   - Response detail level
4. **Generate & Export**: Get your optimized prompt and copy or download it

## 🎨 Customization

### Theme Colors
The application uses a custom Tailwind theme with cyan and purple gradients. Modify `tailwind.config.js` to customize:

```javascript
colors: {
  background: '#0c0f15',
  card: '#1a1f2e',
  // Add your custom colors
}
```

### Adding New Models
Add new AI models in `PromptBuilder.tsx`:

```typescript
const modelData = {
  'your-model-id': {
    name: 'Your Model Name',
    description: 'Model description',
    icon: YourIcon,
    gradient: 'from-your-color-500 to-your-color-600',
    color: 'your-color'
  }
}
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### TypeScript Configuration

The project uses strict TypeScript configuration with:
- React 18 JSX transform
- Strict type checking
- Module resolution bundler mode
- No unused locals/parameters enforcement

## 🌟 Key Features Implemented

- ✅ **28+ TypeScript Errors Fixed**: Complete type safety
- ✅ **React 19 Compatibility**: Latest React features
- ✅ **Modern Build System**: Vite for fast development
- ✅ **Production Ready**: Optimized build output
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Accessibility**: Semantic HTML and ARIA labels
- ✅ **Performance**: Lazy loading and code splitting ready

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ by [Akshat Thakur](https://github.com/akshatthakur04)**
