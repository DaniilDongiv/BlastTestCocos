# BlastTest — Cocos Creator 2.4.x, TypeScript

Прототип игры с механикой Blast (match-2): кликай по группе смежных тайлов одного цвета, зарабатывай очки, используй бустеры и супер-тайлы.

## Версии
- Cocos Creator: 2.4.x
- TypeScript: встроенный в проект

## Как запустить
1. Открой проект в Cocos Creator 2.4.x (папка `D:\CocosProject\BlastTest`).
2. Открой сцену (если нужна) и запусти Play.

## Сборка (Web Mobile)
1. Project → Build → Platform: Web Mobile
2. Build (и, при необходимости, Compile)
3. Готовая сборка: `build/web-mobile`

## Архитектура (слои)
- `assets/Scripts/core/` — доменная логика без зависимостей от Cocos (FieldModel, GameSession, MatchResolver, типы)
- `assets/Scripts/input/` — обработка ввода (State-паттерн)
- `assets/Scripts/strategies/` — эффекты супер-тайлов (Strategy-паттерн)
- `assets/Scripts/rendering/` — визуал и анимации (FieldRenderer, HUDPresenter, TileRenderer, ResultPopup)
- `assets/Scripts/config/` — константы игры (`GameConfig`)
- `assets/Scripts/BlastGame.ts` — фасад/оркестратор подсистем

## Геймплей
- Цель: набрать `TARGET_SCORE` очков за `MAX_MOVES` ходов (`config/GameConfig.ts`).
- Клик по группе ≥ `MIN_GROUP_SIZE` — сжигает группу, начисляет очки, запускает гравитацию и спавн.
- Супер-тайл появляется при больших группах (пороги в `GameConfig`):
  - Строка, столбец, радиус, всё поле.
- Бустеры:
  - Бомба (радиус `BOMB_RADIUS`)
  - Телепорт (обмен двух тайлов)
- Авто-перемешивание до `MAX_SHUFFLES` раз, затем поражение.

## Паттерны и принципы
- Facade (`BlastGame`), State (ввод), Strategy (супер-тайлы), DIP через `IFieldQuery`.
- SOLID соблюдён, логика/визуал разделены.
- Анимации — `async/await` + `Promise.all`.

## Настройка кнопок (через сцену)
1. На `BoosterBombPanel` и `BoosterTeleportPanel` повесь `cc.Button`.
2. В `BlastGame` есть публичные хендлеры: `onBombClicked`, `onTeleportClicked`.
3. В `Button.Click Events`: Target — нода с `BlastGame`, Component — `BlastGame`, Handler — нужный метод.

## Лицензия
MIT

