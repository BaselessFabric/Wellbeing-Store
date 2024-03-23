# Step 1: Use the official Node.js LTS version as a parent image
FROM node:lts-alpine as builder

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies, including 'devDependencies' since they might be needed for the build
RUN npm install

# Step 5: Copy the rest of your app's source code
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Start with a clean image to reduce size
FROM node:lts-alpine

# Step 8: Set working directory in the new image
WORKDIR /app

# Step 9: Copy only the production dependencies
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Step 10: Expose the port Next.js runs on
EXPOSE 3000

# Step 11: Command to run your app using the Next.js production server
CMD ["npm", "start"]
