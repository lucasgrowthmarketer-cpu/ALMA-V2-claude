# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock* package-lock.json* ./
RUN if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else npm install; fi

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=build /app/build /usr/share/nginx/html

# Railway uses PORT env variable
EXPOSE 80

# Start nginx - use envsubst to inject PORT at runtime
CMD sh -c "sed -i 's/listen 80/listen ${PORT:-80}/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
