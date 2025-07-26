# Makefile for russdias Next.js application
# Professional Docker build and deployment to DigitalOcean Container Registry

# Variables
APP_NAME := russdias
REGISTRY := registry.digitalocean.com
NAMESPACE := russdias
IMAGE_NAME := $(NAMESPACE)/$(APP_NAME)
VERSION ?= $(shell git rev-parse --short HEAD)
TAG ?= latest
FULL_IMAGE := $(REGISTRY)/$(IMAGE_NAME)

# Colors for output
RED := \033[0;31m
GREEN := \033[0;32m
YELLOW := \033[1;33m
BLUE := \033[0;34m
NC := \033[0m # No Color

.PHONY: help build build-prod push push-latest tag login test clean dev dev-down prod prod-down

# Default target
help: ## Show this help message
	@echo "$(BLUE)Available commands:$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-20s$(NC) %s\n", $$1, $$2}'

# Development commands
dev: ## Start development environment with Docker Compose
	@echo "$(YELLOW)Starting development environment...$(NC)"
	docker-compose up --build

dev-down: ## Stop development environment
	@echo "$(YELLOW)Stopping development environment...$(NC)"
	docker-compose down

dev-local: ## Start local Next.js development server
	@echo "$(YELLOW)Starting Next.js development server...$(NC)"
	pnpm dev

build-local: ## Build Next.js application locally
	@echo "$(YELLOW)Building Next.js application...$(NC)"
	pnpm build

# Production local testing
prod: ## Start production environment locally
	@echo "$(YELLOW)Starting production environment locally...$(NC)"
	docker-compose -f docker-compose.prod.yml up --build

prod-down: ## Stop production environment
	@echo "$(YELLOW)Stopping production environment...$(NC)"
	docker-compose -f docker-compose.prod.yml down

# Build commands
build: ## Build development Docker image for AMD64 (Kubernetes compatible)
	@echo "$(YELLOW)Building development image for linux/amd64...$(NC)"
	docker buildx build --platform linux/amd64 -t $(APP_NAME):dev --target development . --load
	@echo "$(GREEN)Development image built successfully for AMD64!$(NC)"

build-prod: ## Build production Docker image for AMD64 (Kubernetes compatible)
	@echo "$(YELLOW)Building production image for linux/amd64...$(NC)"
	docker buildx build --platform linux/amd64 -t $(APP_NAME):$(VERSION) --target runner . --load
	docker buildx build --platform linux/amd64 -t $(APP_NAME):latest --target runner . --load
	@echo "$(GREEN)Production image built successfully for AMD64!$(NC)"
	@echo "$(BLUE)Image tagged as: $(APP_NAME):$(VERSION) and $(APP_NAME):latest$(NC)"

# Registry commands
login: ## Login to DigitalOcean Container Registry
	@echo "$(YELLOW)Logging into DigitalOcean Container Registry...$(NC)"
	@echo "$(BLUE)Make sure you have doctl installed and authenticated$(NC)"
	doctl registry login
	@echo "$(GREEN)Login successful!$(NC)"

tag: build-prod ## Tag image for registry
	@echo "$(YELLOW)Tagging images for registry...$(NC)"
	docker tag $(APP_NAME):$(VERSION) $(FULL_IMAGE):$(VERSION)
	docker tag $(APP_NAME):latest $(FULL_IMAGE):latest
	@echo "$(GREEN)Images tagged successfully!$(NC)"
	@echo "$(BLUE)Tagged as: $(FULL_IMAGE):$(VERSION)$(NC)"
	@echo "$(BLUE)Tagged as: $(FULL_IMAGE):latest$(NC)"

push: tag ## Build, tag and push versioned image to DigitalOcean registry
	@echo "$(YELLOW)Pushing $(FULL_IMAGE):$(VERSION) to registry...$(NC)"
	docker push $(FULL_IMAGE):$(VERSION)
	@echo "$(GREEN)Image $(FULL_IMAGE):$(VERSION) pushed successfully!$(NC)"

push-latest: tag ## Build, tag and push latest image to DigitalOcean registry
	@echo "$(YELLOW)Pushing $(FULL_IMAGE):latest to registry...$(NC)"
	docker push $(FULL_IMAGE):latest
	@echo "$(GREEN)Image $(FULL_IMAGE):latest pushed successfully!$(NC)"

push-all: tag ## Build, tag and push both versioned and latest images for AMD64
	@echo "$(YELLOW)Pushing both versioned and latest images for AMD64...$(NC)"
	docker buildx build --platform linux/amd64 -t $(FULL_IMAGE):$(VERSION) --target runner . --push
	docker buildx build --platform linux/amd64 -t $(FULL_IMAGE):latest --target runner . --push
	@echo "$(GREEN)All images pushed successfully!$(NC)"
	@echo "$(BLUE)Pushed: $(FULL_IMAGE):$(VERSION)$(NC)"
	@echo "$(BLUE)Pushed: $(FULL_IMAGE):latest$(NC)"

# Release commands
release: ## Full release pipeline: build, tag, and push
	@echo "$(BLUE)Starting full release pipeline...$(NC)"
	@make build-prod
	@make tag
	@make push-all
	@echo "$(GREEN)Release completed successfully!$(NC)"
	@echo "$(BLUE)Released version: $(VERSION)$(NC)"

release-version: ## Release with custom version (usage: make release-version VERSION=v1.0.0)
	@echo "$(BLUE)Starting release pipeline with version $(VERSION)...$(NC)"
	@make build-prod
	@make tag
	@make push-all
	@echo "$(GREEN)Release $(VERSION) completed successfully!$(NC)"

# Utility commands
test: build ## Build and test the application
	@echo "$(YELLOW)Testing application...$(NC)"
	docker run --rm $(APP_NAME):dev pnpm test
	@echo "$(GREEN)Tests completed!$(NC)"

clean: ## Clean up Docker images and containers
	@echo "$(YELLOW)Cleaning up Docker resources...$(NC)"
	docker system prune -f
	docker rmi $(APP_NAME):dev $(APP_NAME):latest $(APP_NAME):$(VERSION) 2>/dev/null || true
	docker rmi $(FULL_IMAGE):latest $(FULL_IMAGE):$(VERSION) 2>/dev/null || true
	@echo "$(GREEN)Cleanup completed!$(NC)"

info: ## Show build information
	@echo "$(BLUE)Build Information:$(NC)"
	@echo "  App Name: $(APP_NAME)"
	@echo "  Registry: $(REGISTRY)"
	@echo "  Namespace: $(NAMESPACE)"
	@echo "  Full Image: $(FULL_IMAGE)"
	@echo "  Version: $(VERSION)"
	@echo "  Git Hash: $(shell git rev-parse --short HEAD)"
	@echo "  Git Branch: $(shell git rev-parse --abbrev-ref HEAD)"

# CI/CD helpers
ci-build: ## Build for CI/CD (no cache, AMD64)
	@echo "$(YELLOW)Building for CI/CD with linux/amd64...$(NC)"
	docker buildx build --platform linux/amd64 --no-cache -t $(FULL_IMAGE):$(VERSION) --target runner . --load
	@echo "$(GREEN)CI build completed!$(NC)"

ci-push: ## Push from CI/CD (AMD64)
	@echo "$(YELLOW)Pushing from CI/CD with linux/amd64...$(NC)"
	docker buildx build --platform linux/amd64 -t $(FULL_IMAGE):$(VERSION) --target runner . --push
	@echo "$(GREEN)CI push completed!$(NC)"

 