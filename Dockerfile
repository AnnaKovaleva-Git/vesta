# Установка базового образа
FROM node:20-alpine

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование всех файлов в рабочую директорию
COPY . .

# Построение приложения
RUN npm run build

# Установка переменной окружения
ENV NODE_ENV=production

# Открытие порта
EXPOSE 80

# Запуск приложения с использованием порта 80
CMD ["npm", "start", "--", "-p", "80"]