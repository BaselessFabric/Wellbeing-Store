# Use the official Node.js image as the base image
FROM node:lts-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code, including next.config.mjs
COPY . .

# Build the application
RUN npm run build

# Start a new stage from the base image
FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Copy built assets from the builder stage, including next.config.mjs
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Expose port 3000
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
