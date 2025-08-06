export interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  year: number;
}

export interface TimelinePeriod {
  id: number;
  title: string;
  events: TimelineEvent[];
}

export const timelineData: TimelinePeriod[] = [
  {
    id: 1,
    title: 'Кино',
    events: [
      { id: 1, year: 2000, title: '"Дорога ярости"', description: 'Фильм получил 6 премий Оскар' },
      { id: 2, year: 2001, title: '"Звёздные войны"', description: 'Франшиза вернулась на экраны' },
      { id: 3, year: 2002, title: 'Канны: "Дипан"', description: 'Победа фильма Жака Одиара' },
      { id: 4, year: 2003, title: 'Берлин: "Такси"', description: 'Золото — фильм Джафара Панахи' },
      { id: 5, year: 2004, title: '"Выживший"', description: 'Ди Каприо получил Оскар' },
      { id: 6, year: 2005, title: '"Головоломка"', description: 'Лучшая анимация года' },
    ],
  },
  {
    id: 2,
    title: 'Литература',
    events: [
      { id: 7, year: 2006, title: 'Смерть Эко', description: 'Философ и автор "Имени розы"' },
      { id: 8, year: 2007, title: '"Гарри Поттер Проклятое дитя"', description: 'По вселенной Гарри Поттера' },
      { id: 9, year: 2008, title: 'Нобель Дилану', description: 'За вклад в литературу' },
      { id: 10, year: 2009, title: '"Большая книга"', description: 'Юзефович — лауреат премии' },
      { id: 11, year: 2010, title: '"Лабиринт"', description: 'Популяризация жанра литRPG' },
      { id: 12, year: 2011, title: '"Маленькая жизнь"', description: 'Книга года на русском' },
    ],
  },
  {
    id: 3,
    title: 'Наука',
    events: [
      { id: 13, year: 2012, title: 'Гравитационные волны', description: 'Подтверждение теории Эйнштейна' },
      { id: 14, year: 2013, title: 'CRISPR', description: 'Редактирование генома' },
      { id: 15, year: 2014, title: '"Кассини" — финал', description: 'Погружение в атмосферу Сатурна' },
      { id: 16, year: 2015, title: 'Карта мозга', description: 'Прогресс в нейронауках' },
      { id: 17, year: 2016, title: 'Запуск SpaceX', description: 'Повторное использование Falcon 9' },
      { id: 18, year: 2017, title: 'Победа AlphaGo', description: 'Прорыв в области ИИ' },
    ],
  },
  {
    id: 4,
    title: 'Театр',
    events: [
      { id: 19, year: 2018, title: '"Щелкунчик" в Большом', description: 'Хореография Юрия Посохова' },
      { id: 20, year: 2019, title: '"Золотая маска"', description: 'Премии театральным постановкам' },
      { id: 21, year: 2020, title: 'Смерть Табакова', description: 'Легенда русского театра' },
      { id: 22, year: 2021, title: '"Гоголь-центр"', description: 'Кирилла Серебренникова' },
      { id: 23, year: 2022, title: 'Фестиваль "Территория"', description: 'Площадка молодых театров' },
      { id: 24, year: 2023, title: '"Ревизор" в МХТ', description: 'Современное прочтение классики' },
    ],
  },
  {
    id: 5,
    title: 'Искусство',
    events: [
      { id: 25, year: 2024, title: '"Спящая красавица"', description: 'Современное прочтение балета' },
      { id: 26, year: 2025, title: 'Бэнкси в Венеции', description: 'Политическая уличная сатира' },
      { id: 27, year: 2026, title: 'Леонардо Да Винчи в Лувре', description: '500 лет со дня смерти художника' },
      { id: 28, year: 2027, title: 'Дали в Помпиду', description: 'Ретроспектива сюрреализма' },
      { id: 29, year: 2028, title: 'Аукцион Sotheby’s', description: 'Климт продан за $59 млн' },
      { id: 30, year: 2029, title: 'VR-проект Босха', description: 'Интерактивное искусство в тренде' },
    ],
  },
  {
    id: 6,
    title: 'Цифровая культура',
    events: [
      { id: 31, year: 2030, title: 'Zoom-культура', description: 'Мировой переход на онлайн' },
      { id: 32, year: 2031, title: 'Рост TikTok', description: 'Феномен коротких видео' },
      { id: 33, year: 2032, title: 'Популярность NFT', description: 'Цифровое искусство и блокчейн' },
      { id: 34, year: 2033, title: 'Концерты в Fortnite', description: 'Новая эра цифровых ивентов' },
      { id: 35, year: 2034, title: 'Взлёт Clubhouse', description: 'Аудио-соцсеть на пике' },
      { id: 36, year: 2035, title: 'Пандемия и культура', description: 'Театры, выставки — онлайн' },
    ],
  },
];

