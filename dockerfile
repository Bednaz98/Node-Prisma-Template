FROM node:18-alpine
WORKDIR /usr/app
COPY ./ /usr/app

## Server ARGS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ARG EXPOSE_PORT=3000
ARG SYSTEM_ENV="DEV"
ARG ENABLE_LOCAL_LOG="true"

## other services ARGS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ARG LOGGING_ENDPOINT
ARG DATABASE_URL="postgresql://postgres:exmaple@localhost:5432/log"

## Server ENV ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ENV SYSTEM_PORT=${EXPOSE_PORT}
ENV ENABLE_LOCAL_LOG=${ENABLE_LOCAL_LOG}
ENV SYSTEM_ENVIORMENT=${SYSTEM_ENV}

## other services ENV ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ENV DATABASE_URL=${DATABASE_URL}
ENV LOGGING_ENDPOINT=${LOGGING_ENDPOINT}

RUN npm install
EXPOSE ${EXPOSE_PORT}
CMD ["npm", "start"]