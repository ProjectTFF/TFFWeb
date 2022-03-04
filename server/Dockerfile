# Here we define the image for the serve (/backend). 


# Specifiy the node version with a tag
FROM node:14

# Set the working directory for this dockerfile (for later commands to be run to).
WORKDIR /server

ENV PATH /server/node_modules/.bin:$PATH

# Copy the package.json and package-lock.json files, which specify the required node-module dependencies.
COPY package*.json ./

# Install the node-module dependencies from package.json
RUN npm install

# Copy the files from the local directory in to the image's file system.
COPY . /server

# Expose a port for connections (incoming http-requests).
# NOTE: This is a port INSIDE the container. This still has to be forwarded to the platform OUTSIDE the container.
# Second note: The forwarding is done in the docker-compose.yml file.
EXPOSE 3001

CMD ["npm", "start"]