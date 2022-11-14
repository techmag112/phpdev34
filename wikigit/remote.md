## Подключение внешнего репозитория

[![К рубрикатору](./192px-Git-logo.svg.png)](../readme.md)

Формат команды: **git remote add origin *https://github.com/имя_пепозитория.git***

**Варианты подключения внешнего репозитория**
### **1. С загрузкой файлов во внешний репозиторий.** 
Последовательно вводятся следующие команды:

*[git init](init.md)*

*[git commit -m "first commit"](commit.md)*

*[git branch -M main](branch.md)*

*git remote add origin https://github.com/имя_репозитория.git*

*[git push -u origin main](push.md)*

### **2. С выгрузкой файлов из внешнего репозитория.** 
Последовательно вводятся следующие команды:

*[git init](init.md)*

*[git branch](branch.md)*

*git remote add origin https://github.com/имя_репозитория.git*

*[git pull origin main](push.md)*

---

[К рубрикатору](../readme.md)






