# Создание GitHub репозитория для CasiBonus

## Вариант 1: Через веб-интерфейс GitHub

1. Перейдите на [GitHub](https://github.com) и авторизуйтесь в своей учетной записи
2. Нажмите на кнопку "New repository" или "+ New" → "New repository"
3. Введите имя репозитория: `CasiBonus`
4. Добавьте описание (по желанию)
5. Выберите тип репозитория: Public или Private (в зависимости от ваших предпочтений)
6. Установите галочку "Add a README file", если хотите создать README сразу
7. Нажмите "Create repository"

## Вариант 2: Через командную строку (Git CLI)

1. Убедитесь, что Git установлен на вашем компьютере
2. Откройте терминал или командную строку
3. Перейдите в директорию с проектом CasiBonus:
   ```
   cd C:\Users\Andrey\Desktop\casibonus\CasiBonus
   ```
4. Инициализируйте локальный репозиторий:
   ```
   git init
   ```
5. Добавьте удаленный репозиторий (замените username на ваш GitHub username):
   ```
   git remote add origin https://github.com/username/CasiBonus.git
   ```
6. Добавьте все файлы к коммиту:
   ```
   git add .
   ```
7. Сделайте первый коммит:
   ```
   git commit -m "Initial commit"
   ```
8. Отправьте изменения в удаленный репозиторий:
   ```
   git push -u origin main
   ```

## Вариант 3: Использование GitHub Desktop

1. Установите [GitHub Desktop](https://desktop.github.com/)
2. Откройте GitHub Desktop и войдите в свою учетную запись GitHub
3. Выберите "File" → "Add Local Repository"
4. Укажите путь к директории CasiBonus: `C:\Users\Andrey\Desktop\casibonus\CasiBonus`
5. Нажмите "Publish repository" для публикации на GitHub

## Настройка репозитория

После создания репозитория рекомендуется:

1. Настроить защиту ветки `main` в настройках репозитория
2. Добавить файлы `.gitignore`, если они еще не включены
3. Настроить автоматический деплой на Render, используя файл `render.yaml`
4. Добавить участников проекта (если необходимо)
5. Создать шаблоны для issue и pull request (по желанию)

## Интеграция с Render

Для автоматического деплоя на Render:

1. Перейдите на [Render Dashboard](https://dashboard.render.com)
2. Нажмите "New +" → "Web Service"
3. Выберите "Build and deploy from a Git repository"
4. Выберите ваш GitHub аккаунт и репозиторий CasiBonus
5. Render автоматически распознает файл `render.yaml` и настроит параметры деплоя