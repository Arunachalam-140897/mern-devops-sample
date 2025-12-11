# Stage 1: Build
FROM node:lts AS build
WORKDIR /app

# Install only package.json first to cache dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy backend application source
COPY . .

# Run tests (optional, but recommended for CI)
RUN npm test -- --ci --watchAll=false

# Stage 2: Production Image
FROM node:lts
WORKDIR /app

# Copy only built code + node_modules
COPY --from=build /app /app

# Expose backend port
EXPOSE 5000

# Start server
CMD ["npm", "start"]
