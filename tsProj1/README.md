<div align="center">

# 🧮 Simple Calculator

**A modern, TypeScript-powered calculator for basic arithmetic operations**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Usage Guide](#-usage-guide)
- [Development](#-development)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

This Simple Calculator is a clean, responsive web application built with **TypeScript** that provides essential arithmetic operations. Designed with modern web standards and best practices, it offers a seamless user experience with robust error handling and input validation.

### Key Highlights
- 🔒 **Type-Safe**: Built with TypeScript for enhanced code reliability
- 🎨 **Responsive Design**: Works perfectly on desktop and mobile devices
- ⚡ **Fast Performance**: Lightweight and optimized for speed
- 🛡️ **Error Handling**: Comprehensive validation and error management

## ✨ Features

| Feature | Description |
|---------|-------------|
| ➕ **Addition** | Perform addition operations with decimal support |
| ➖ **Subtraction** | Calculate differences between numbers |
| ✖️ **Multiplication** | Multiply numbers with precision |
| ➗ **Division** | Divide numbers with zero-division protection |
| 🔍 **Input Validation** | Real-time validation for numeric inputs |
| 🚫 **Error Prevention** | Handles invalid operations gracefully |
| 📱 **Responsive UI** | Clean interface that works on all devices |

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- TypeScript compiler
- Modern web browser

### Installation

1. **Clone or download the project**
   ```bash
   cd tsProj1
   ```

2. **Compile TypeScript**
   ```bash
   tsc
   ```
   *This generates `app.js` from `app.ts`*

3. **Launch the application**
   ```bash
   # Open index.html in your browser
   # Or use a local server:
   npx serve .
   ```

4. **Start calculating!** 🎉

## 📁 Project Structure

```
tsProj1/
├── 📄 app.ts           # Core TypeScript logic
├── 🌐 index.html       # Main HTML structure
├── 🎨 style.css        # Styling and layout
├── ⚙️ tsconfig.json    # TypeScript configuration
├── 📜 app.js           # Compiled JavaScript (generated)
└── 📖 README.md        # Project documentation
```

### File Descriptions

- **`app.ts`**: Contains the main `calculate()` function with type-safe operations
- **`index.html`**: Responsive HTML structure with semantic elements
- **`style.css`**: Modern CSS styling with flexbox layout
- **`tsconfig.json`**: TypeScript compiler configuration with strict mode

## 📖 Usage Guide

### Basic Operations

1. **Enter Numbers**: Input your first and second numbers in the respective fields
2. **Choose Operation**: Click on Addition, Subtraction, Multiplication, or Division
3. **View Result**: The result appears instantly below the buttons

### Error Handling

- **Invalid Input**: Non-numeric inputs show "Please enter valid numbers"
- **Division by Zero**: Displays "Cannot divide by zero" for safety
- **Empty Fields**: Automatically treats empty inputs as invalid

## 🛠️ Development

### TypeScript Configuration

The project uses strict TypeScript settings:
- Strict null checks
- No implicit any types
- Exact optional property types
- Modern ES modules

### Code Quality Features
- **Type Safety**: All variables and functions are properly typed
- **Error Boundaries**: Comprehensive error handling for edge cases
- **Clean Architecture**: Separation of concerns between logic and presentation

### Building for Production

```bash
# Compile with optimizations
tsc --build --clean

# Minify CSS (optional)
npx clean-css-cli -o style.min.css style.css
```

## 🌐 Browser Support

| Browser | Version |
|---------|--------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |

## 🚀 Live Demo

🎯 **Try it now!** Experience the calculator in action:

[![Live Demo](https://img.shields.io/badge/Live%20Demo-4CAF50?style=for-the-badge&logo=github&logoColor=white)](https://lokeshwaran1310.github.io/tsprojday1/tsProj1/index.html)

**[👉 Click here to access the live calculator](https://lokeshwaran1310.github.io/tsprojday1/tsProj1/index.html)**

### Demo Features
- ✅ Fully functional arithmetic operations
- ✅ Real-time input validation
- ✅ Responsive design testing
- ✅ Error handling demonstration
- ✅ Cross-browser compatibility

*No installation required - runs directly in your browser!*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨💻 Author

<div align="center">

**Lokeshwaran**


</div>

---


