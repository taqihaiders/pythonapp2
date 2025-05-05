# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

# Install serve to serve the build
RUN npm install -g serve

# Copy only the build output
COPY --from=builder /app/build ./build

# Expose port 80
EXPOSE 80

# Serve the app
CMD ["serve", "-s", "build", "-l", "80"]
