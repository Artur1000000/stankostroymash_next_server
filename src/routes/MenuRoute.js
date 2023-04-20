import { Router } from "express";

const MenuRoute = new Router();
MenuRoute.get("/menu", (req, res) => {
  res.json({
    data: [
      { id: 1, title: "Главная", path: "" },
      {
        id: 2,
        title: "Металлообрабатывающие",
        alt: "Все",
        path: "metalworking",
        child: [
          { id: 3, title: "Токарные", path: "turning" },
          { id: 4, title: "Фрезерные", path: "milling" },
          { id: 5, title: "Сверлильные", path: "drilling" },
          { id: 6, title: "Заточные", path: "sharpening" },
          { id: 7, title: "Шлифовальные", path: "grinding" },
          { id: 8, title: "Долбёжные", path: "slotting" },
          { id: 9, title: "Зубообробатывающие", path: "gear" },
          { id: 10, title: "Протяжные", path: "lingering" },
          { id: 11, title: "Расточные", path: "boring" },
          { id: 12, title: "Строгальные", path: "planing" },
          { id: 13, title: "Обрабатывающие центр", path: "machining_center" },
        ],
      },
      {
        id: 14,
        title: "Кузнечно-прессовые",
        alt: "Все",
        path: "forgingpress",
        child: [
          { id: 15, title: "Гидравлические пресса", path: "hydraulic_press" },
          { id: 16, title: "Кривошипные пресса", path: "crank_press" },
          { id: 17, title: "Листогибы", path: "sheet_benders" },
          { id: 18, title: "Молоты", path: "hammers" },
          { id: 19, title: "Ножницы гильотинные", path: "guillotine_shears" },
          { id: 20, title: "Другие", path: "other" },
        ],
      },
      { id: 21, title: "Запчасти", path: "duplicates" },
      { id: 22, title: "О нас", path: "about" },
    ],
  });
});

export { MenuRoute };
