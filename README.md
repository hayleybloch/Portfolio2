# Desktop App - Operating System Interface

This is the desktop operating system interface component of Hayley Bloch's portfolio, providing a macOS-inspired desktop experience for exploring projects and content.

## Features

- macOS-inspired desktop interface
- File system navigation
- Application windows and management
- Terminal emulator
- Project showcase applications
- About and contact information

## Applications

- **About**: Personal information and project overview
- **Skills**: Technical skills and tools
- **Terminal**: Command-line interface with custom programs
- **Finder**: File system browser
- **Notes**: Text editor
- **ImageViewer**: Image viewing application
- **Contact**: Contact information with resume download

## Development

### Running the Dev Server

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   
   The dev server will start at http://localhost:3001 (or the port specified by the `PORT` environment variable).

3. **Custom port** (optional):
   ```bash
   PORT=3000 npm run dev
   ```

The development server includes:
- Hot module reloading for instant updates
- Error reporting in the browser
- Source maps for debugging
- No static build optimization (faster iteration)

## Deployment

This project is configured for automatic deployment to **GitHub Pages** using GitHub Actions.

### How Deployment Works

1. **Trigger**: Every push to the `main` branch automatically triggers deployment
2. **Build Process**: 
   - GitHub Actions runs `npm ci` to install dependencies
   - Runs `npm run build` to create a static export
   - Output is generated in the `out/` directory with production configuration:
     - `output: 'export'` for static site generation
     - `basePath: '/Portfolio2'` for GitHub Pages subdirectory
3. **Deploy**: The `out/` directory is deployed to the `gh-pages` branch
4. **Live Site**: Changes appear at https://hayleybloch.github.io/Portfolio2/

### Manual Deployment

If you need to manually deploy changes:

```bash
# Build for production
npm run build

# The static files will be in the ./out directory
```

Then push to the `main` branch, and GitHub Actions handles the rest.

### Configuration Details

- **Dev vs Production**: The app uses conditional configuration based on `NODE_ENV`
  - **Development**: No `basePath`, no static export, runs on local server
  - **Production**: Uses `/Portfolio2` basePath, exports static HTML/CSS/JS
- **Workflow**: `.github/workflows/deploy.yml` contains the CI/CD configuration
- **Branch**: Deployment happens from `main` → `gh-pages` branch

## Build

To build the desktop app for production locally:

```bash
npm run build
```

This creates a static export in the `out/` directory with all assets properly configured for GitHub Pages.

## Technology Stack

- **Next.js 15.5.9** - React framework with static site generation
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **CSS Modules** - Scoped styling
- **next-i18next** - Internationalization
- **neverthrow** - Result type for error handling
- **@xterm/xterm** - Terminal emulator
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static site hosting
