FROM node:12.16.3-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 1 - Serve Frontend Assets
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=build /app/build /usr/share/nginx/html

ENV PORT 3000
ENV HOST 0.0.0.0
EXPOSE 3000
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
