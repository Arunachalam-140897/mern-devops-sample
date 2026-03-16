# ---------- Stage 1: Build React ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# ---------- Stage 2: Production ----------
FROM nginx:1.25-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built frontend
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Healthcheck (important for Kubernetes)
HEALTHCHECK --interval=30s --timeout=5s \
 CMD wget --spider http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]











# # Stage 1: Build React
# FROM node:18 AS build
# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Stage 2: Serve with Nginx
# FROM nginx:alpine

# # Remove default nginx config
# RUN rm -rf /usr/share/nginx/html/*

# # Copy build assets
# COPY --from=build /app/build /usr/share/nginx/html

# # Copy nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# # Expose port
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
