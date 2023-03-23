# syntax=docker/dockerfile:1.4

FROM node:lts AS development
WORKDIR /app
COPY ./aws-sam/resume-site/package.json /app/package.json
COPY ./aws-sam/resume-site/package-lock.json /app/package-lock.json
RUN npm ci
COPY . /app

ENV CI=true
ENV PORT=3000
CMD [ "npm", "start" ]

FROM development AS build
WORKDIR '/app/aws-sam/resume-site'
RUN npm run build

FROM ubuntu:18.04 as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]

FROM nginx:alpine

COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/aws-sam/resume-site/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]