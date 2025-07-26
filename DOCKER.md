# Docker Setup

This project includes Docker configurations for both development and production environments, with professional build and deployment tools for DigitalOcean Container Registry.

## Quick Start

### Development

To run the application in development mode with hot reload:

```bash
# Using Makefile (recommended)
make dev

# Using npm scripts
pnpm run docker:dev

# Or directly with docker-compose
docker-compose up --build
```

The application will be available at `http://localhost:3000`.

### Production

To run the application in production mode:

```bash
# Using Makefile (recommended)
make prod

# Using npm scripts
pnpm run docker:prod

# Or directly with docker-compose
docker-compose -f docker-compose.prod.yml up --build
```

## DigitalOcean Container Registry Setup

### Prerequisites

1. Install DigitalOcean CLI (`doctl`):

   ```bash
   # macOS
   brew install doctl
   
   # Or download from: https://github.com/digitalocean/doctl/releases
   ```

2. Authenticate with DigitalOcean:

   ```bash
   doctl auth init
   ```

3. Create a container registry in DigitalOcean:

   ```bash
   doctl registry create your-registry-name
   ```

4. Update the `NAMESPACE` variable in the Makefile:

   ```makefile
   NAMESPACE := your-registry-name  # Replace with your actual registry name
   ```

### Professional Build and Deploy Commands

```bash
# Show all available commands
make help

# Login to DigitalOcean Container Registry
make login

# Build and push to registry (automatic versioning with git hash)
make release

# Build and push with custom version
make release-version VERSION=v1.0.0

# Push only latest tag
make push-latest

# Build production image locally
make build-prod

# Show build information
make info

# Clean up Docker resources
make clean
```

## Available Makefile Commands

### Development

- `make dev` - Start development environment
- `make dev-down` - Stop development environment
- `make build` - Build development image

### Production

- `make prod` - Start production environment locally
- `make prod-down` - Stop production environment
- `make build-prod` - Build production image

### Registry Operations

- `make login` - Login to DigitalOcean Container Registry
- `make tag` - Tag images for registry
- `make push` - Build, tag and push versioned image
- `make push-latest` - Build, tag and push latest image
- `make push-all` - Build, tag and push both versions
- `make release` - Full release pipeline (build → tag → push)
- `make release-version VERSION=x.x.x` - Release with custom version

### Utilities

- `make test` - Build and test application
- `make clean` - Clean up Docker resources
- `make info` - Show build information
- `make help` - Show all commands

### CI/CD

- `make ci-build` - Build without cache for CI/CD
- `make ci-push` - Push from CI/CD pipeline

## Image Naming Convention

Images are tagged with professional naming:

- **Registry**: `registry.digitalocean.com`
- **Format**: `registry.digitalocean.com/your-registry-name/russdias:version`
- **Versioning**: Git short hash (e.g., `abc1234`) or custom version
- **Latest**: Always tagged as `latest` for production deployments

Example:

```
registry.digitalocean.com/your-registry-name/russdias:abc1234
registry.digitalocean.com/your-registry-name/russdias:latest
registry.digitalocean.com/your-registry-name/russdias:v1.0.0
```

## Kubernetes Integration

The images built with this setup are optimized for Kubernetes deployment:

```yaml
# Example Kubernetes deployment
spec:
  containers:
  - name: russdias
    image: registry.digitalocean.com/your-registry-name/russdias:latest
    ports:
    - containerPort: 3000
```

## Available Scripts

- `pnpm run docker:dev` - Start development environment
- `pnpm run docker:dev:down` - Stop development environment
- `pnpm run docker:prod` - Start production environment
- `pnpm run docker:prod:down` - Stop production environment
- `pnpm run docker:build` - Build development image
- `pnpm run docker:build:prod` - Build production image

## Docker Configuration

### Dockerfile

The Dockerfile uses multi-stage builds to optimize for both development and production:

- **base**: Common base image with Node.js 18 Alpine
- **deps**: Installs dependencies
- **builder**: Builds the Next.js application for production
- **runner**: Production runtime (default target)
- **development**: Development runtime with hot reload

### Development Environment (docker-compose.yml)

- Uses the `development` target from Dockerfile
- Enables hot reload with volume mounts
- Preserves `node_modules` and `.next` directories in anonymous volumes
- Exposes port 3000

### Production Environment (docker-compose.prod.yml)

- Uses the `runner` target from Dockerfile (optimized build)
- Includes health checks
- No volume mounts for security
- Optimized for performance and security

## Key Features

### Development

- Hot reload support
- Volume mounting for real-time code changes
- Full development dependencies available
- Interactive terminal support

### Production

- Optimized build with standalone output
- Minimal image size using output tracing
- Security: runs as non-root user
- Health checks for container monitoring
- Telemetry disabled for performance

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, modify the port mapping in the docker-compose files:

```yaml
ports:
  - "3001:3000"  # Change left side to available port
```

### Registry Authentication Issues

```bash
# Re-authenticate with DigitalOcean
doctl auth init

# Login to registry again
make login
```

### Permission Issues

The production image runs as a non-root user for security. If you encounter permission issues, ensure your host directory permissions are correct.

### Build Cache Issues

To rebuild without cache:

```bash
make clean
make build-prod
```

### View Logs

```bash
# Development
docker-compose logs -f

# Production
docker-compose -f docker-compose.prod.yml logs -f
```

## Environment Variables

Environment variables can be added to the docker-compose files. For secrets, consider using Docker secrets or a `.env` file (not tracked in git).

Example `.env` file:

```
DATABASE_URL=your_database_url
NEXT_PUBLIC_API_URL=your_api_url
```

Then reference in docker-compose:

```yaml
env_file:
  - .env
```
