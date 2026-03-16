# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./

RUN npm install

# Copy application code
COPY . .

# Build step if needed
# RUN npm run build


# ---------- Stage 2: Production ----------
FROM node:20-alpine

WORKDIR /app

# ENV NODE_ENV=production

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy only required files
COPY --from=builder /app /app

# Remove dev dependencies
RUN npm prune --production

# Change ownership
RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 5000

CMD ["npm", "start"]

















# # Stage 1: Build
# FROM node:lts AS build
# WORKDIR /app

# # Install only package.json first to cache dependencies
# COPY package.json package-lock.json ./
# RUN npm install

# # Copy backend application source
# COPY . .

# # Run tests (optional, but recommended for CI)
# # RUN npm test -- --ci --watchAll=false

# # Stage 2: Production Image
# FROM node:lts
# WORKDIR /app

# # Copy only built code + node_modules
# COPY --from=build /app /app

# # Expose backend port
# EXPOSE 5000

# # Start server
# CMD ["npm", "start"]
