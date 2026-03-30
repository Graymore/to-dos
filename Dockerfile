# Этап 1: Сборка приложения
FROM node:24-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

# Этап 2: Продакшн запуск
FROM node:24-alpine AS release

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

COPY --from=build /app/.output ./.output

EXPOSE 3080
CMD ["node", ".output/server/index.mjs"]