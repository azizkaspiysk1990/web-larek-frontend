https://github.com/azizkaspiysk1990/web-larek-frontend.git

# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с компонентами
- src/components/base/ — папка с базовым кодом
- src/components/model/ — папка с моделями
- src/components/view/ — папка с представлениями
- src/components/shop/ — папка с компонентами магазина

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Описание кода
Парадигма: MVP
Слой Модель отвечает за работу с данными. Слой Представления отвечает за отображение данных на странице.
Слой Презентера реализован в основном файле проекта index.ts. Взаимодействие происходит за счет брокера событий.

1. Интерфейс `IProduct` - структура товара
состоит из:
  - id - уникальный идентификатор товара
  - title - наименование товара
  - description - описание товара
  - category - категория товара
  - image - изображение товара
  - price - цена товара

2. Класс `Page` отображает главную страницу проекта
состоит из: 
  - Отображение корзины и счетчика товаров
  - Управление каталогом товаров
  - Блокировка контента

3. Класс `Contacts` - форма контактных данных
Методы:
  - Управление полями email и телефон
  - Валидация полей
  - Отправка формы

4. Класс `Order` - форма оформления заказа
Методы:
  - Управление адресом доставки
  - Выбор способа оплаты
  - Валидация и отправка формы

5. Класс `Card` - карточка товара
Поля:
  - Отображение информации о товаре
  - Управление добавлением в корзину
  - Отображение категории и цены

6. Класс `BasketView` - представление корзины
Поля:
  - Список товаров в корзине
  - Общая сумма заказа
  - Управление оформлением заказа

7. Класс `Success` - окно успешного оформления заказа
  - Отображение информации о заказе
  - Возможность вернуться к покупкам

8. Класс `Modal` - модальные окна
Методы:
  - open - открытие окна
  - close - закрытие окна
  - setContent - установка содержимого

9. Класс `ShopApi` - работа с API магазина
методы: 
  - getProductList - получение списка товаров
  - getProductItem - получение информации о товаре
  - orderProducts - оформление заказа

10. Класс `EventEmitter`
Реализует паттерн «Наблюдатель» для коммуникации между компонентами
Методы:
  - on - подписка на событие
  - off - отписка от события
  - emit - отправка события
  - onAll - подписка на все события
  - offAll - сброс всех подписок
  - trigger - создание триггера события

11. Абстрактный класс `Component`
Базовый класс для всех компонентов
Методы:
  - setText - установка текста
  - toggleClass - переключение классов
  - setDisabled - управление блокировкой
  - setHidden/setVisible - управление видимостью
  - setImage - установка изображения
  - render - отрисовка компонента

12. Абстрактный класс `Form`
Базовый класс для форм
Методы:
  - onInputChange - обработка изменений полей
  - validate - валидация формы
  - setErrorMessages - установка сообщений об ошибках
  - render - отрисовка формы

# События приложения
- `product:select` - выбор товара
- `product:add` - добавление в корзину
- `product:remove` - удаление из корзины
- `basket:open` - открытие корзины
- `order:submit` - оформление заказа
- `contacts:submit` - отправка контактных данных
- `modal:open` - открытие модального окна
- `modal:close` - закрытие модального окна
- `formErrors:change` - изменение ошибок валидации

# Список основных типов/интерфейсов
- `IProduct` - интерфейс товара
- `IBasketView` - интерфейс представления корзины
- `IFormState` - интерфейс состояния формы
- `IModalData` - интерфейс данных модального окна
- `IShopAPI` - интерфейс API магазина
- `IContactsForm` - интерфейс формы контактов
- `IOrderForm` - интерфейс формы заказа
- `IResOrder` - интерфейс ответа на оформление заказа
