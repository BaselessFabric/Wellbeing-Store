# Use the official Node.js 20.11.1 image.
FROM node:20.11.1-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . ./

# Build the application.
RUN npm run build

# Specify the command to run on container startup.
CMD ["npm", "start"]
