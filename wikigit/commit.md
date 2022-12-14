## Создание точки сохранения (коммита)

[![К рубрикатору](./192px-Git-logo.svg.png)](../readme.md)

Формат команды: **git commit -m *"название_точки"***

Название точки сохранения не должно быть длинным, но осмысленным. 

Эта команда создает точку сохранения (коммит) в локальном репозитории только тех файлов, которые предварительно добавлены [git add](add.md)!

```bash
git commit -m "add file test.txt"
```
Комментарий можно дополнить и исправить командой:
```bash
git commit --amend -m "add file test.txt and add.md"
```
Также можно сразу добавив все файлы и создать точку сохранения одной командой:

```bash
git commit -a -m "add file test.txt"
```

---

[К рубрикатору](../readme.md)