# Russdias Portfolio

A modern Next.js portfolio website with containerized deployment support.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```



## 📋 Prerequisites

- **Node.js** 18+ and **pnpm**
- **Docker Desktop**


### Install Prerequisites

```bash
# Node.js and pnpm
brew install node pnpm



# Docker Desktop
# Download from: https://www.docker.com/products/docker-desktop
```

## 🛠️ Development Workflows

### Standard Next.js Development

```bash
# Install dependencies
pnpm install

# Development server with hot reload
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

### Docker Development

```bash
# Build Docker image
make build-prod

# Run locally with Docker Compose
make prod

# Stop Docker containers
make prod-down

# Clean up Docker resources
make clean
```



## 🐳 Container Support

### Docker

The application uses a multi-stage Dockerfile optimized for production:

- **Development**: Hot reload with pnpm
- **Production**: Optimized Next.js standalone build
- **Security**: Non-root user (nextjs:nodejs)
- **Size**: Minimal Alpine Linux base image

## 📁 Project Structure

```
russdias/
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   ├── lib/          # Utilities and constants
│   └── modules/      # Feature modules
├── public/           # Static assets
├── Dockerfile        # Multi-stage container build
├── docker-compose.yml # Local development
└── Makefile         # Development commands
```

## 🔧 Available Make Commands

### Local Development
- `make dev` - Start development server
- `make build` - Build for production
- `make clean` - Clean up Docker resources

### Docker
- `make build-prod` - Build production Docker image
- `make prod` - Run with Docker Compose
- `make prod-down` - Stop Docker containers



### Production
- `make release` - Build and push to registry
- `make deploy-prod` - Deploy to production cluster

Run `make help` to see all available commands.

## 🚀 Deployment



### Production

See [DOCKER.md](./DOCKER.md) for production deployment instructions.

## 📖 Documentation

- [DOCKER.md](./DOCKER.md) - Docker development guide

## 🎯 Features

- **Modern Stack**: Next.js 14 with App Router
- **Containerized**: Docker with multi-stage builds
- **Kubernetes Ready**: Helm charts for easy deployment
- **Local Development**: Minikube integration
- **Type Safe**: TypeScript throughout
- **Optimized**: Performance and SEO optimized
- **Responsive**: Mobile-first design

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

2. **Docker build issues**:
   ```bash
   # Clean Docker cache
   make clean
   ```

3. **Kubernetes pod not starting**:
   ```bash
   # Check pod logs
   make local-logs
   
   # Get pod details
   kubectl describe pod -n russdias
   ```

4. **Minikube issues**:
   ```bash
   # Reset Minikube
   minikube delete
   make minikube-start
   ```

## 📝 License

MIT License - see LICENSE file for details.
