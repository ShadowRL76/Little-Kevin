FROM node:20-alpine

LABEL authors="Shadow"

# Install bash and git
RUN apk update && apk add --no-cache git bash

# Set workdir
WORKDIR /usr/src/app

# Copy only the start script
COPY start.sh /usr/src/app/start.sh

# Make it executable
RUN chmod +x /usr/src/app/start.sh

# Set default command to run the start script
CMD ["bash", "/usr/src/app/start.sh"]
