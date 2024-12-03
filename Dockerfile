# Step 1: Use Node.js for building the application
FROM node:18 as builder

# Create working directory
WORKDIR /kaur_samanpreet_ui_garden

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application for production (Storybook)
RUN npm run build-storybook

# Step 2: Use a lightweight web server for serving static files
FROM nginx:alpine

# Set the working directory for NGINX to serve files
WORKDIR /kaur_samanpreet_ui_garden

# Copy the custom nginx configuration file (ensure the next steps)
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the build output to the NGINX static file directory
COPY --from=builder /kaur_samanpreet_ui_garden/storybook-static /usr/share/nginx/html

# Expose port 8083 for accessing the application
EXPOSE 8083

# Run the NGINX server
CMD ["nginx", "-g", "daemon off;"]
