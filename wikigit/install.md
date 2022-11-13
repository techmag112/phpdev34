## Установка GIT на локальном компьютере

[![К рубрикатору](./192px-Git-logo.svg.png)](../readme.md)

### 1. **Windows.** 
Скачайте [Git для Windows](https://git-scm.com/download/win), запустите exe-файл, следуйте инструкциям.

### 2 .**macOS.** 
Скачайте [Git для macOS](https://sourceforge.net/projects/git-osx-installer/) и запустите dmg-файл. Если он не запускается, зайдите в *Системные настройки — Безопасность* и нажмите кнопку *Open anyway* (Всё равно открыть).

### 3. **Linux.** 
Установите Git через встроенный менеджер пакетов. Если у вас Ubuntu, используйте команду **sudo apt-get install git**. 
<br>

После установки проверяем, что Git установился командой
```
git --version
```
и завершаем настройку набором команд:
```
git config --global user.name "ваше имя"

git config --global user.email email@example.com
```

---

[К рубрикатору](../readme.md)






