const data = {
  equipmentDescription: {
    title: "Описание оборудования",
    description: `Этот комплекс — новая линейка программно-аппаратных комплексов. В его состав входят оборудование и технические средства, образующие комплексы: A и B. 
      Основное назначение комплекса — обеспечение контроля состояния человека в процессе выполнения различных видов работ. В комплект поставки входят два вида оборудования: A и B.
      Технические средства комплекса позволяют провести контроль с высочайшей точностью. Уровень точности и надежности позволяет выявить даже минимальные отклонения от нормы.`,
    details: ["Наличие", "Производитель", "Способы оплаты"],
  },
  technicalSpecifications: {
    title: "Технические характеристики",
    specifications: [{
        name: "Наименование параметра",
        value: "Значение"
      },
      {
        name: "Масса",
        value: "1.5 кг"
      },
      {
        name: "Габариты",
        value: "150x100x50 мм"
      },
      {
        name: "Мощность",
        value: "50 Вт"
      },
      {
        name: "Напряжение питания",
        value: "220 В"
      },
    ],
    details: ["Наличие", "Производитель", "Способы оплаты"],
  },
  services: {
    title: "Услуги и сервис",
    items: [{
        title: "Апробация",
        image: "image-url"
      },
      {
        title: "Помощь в подборе оборудования",
        image: "image-url"
      },
      {
        title: "Помощь инженерной настройке",
        image: "image-url"
      },
      {
        title: "Пуско-наладочные работы",
        image: "image-url"
      },
    ],
  },
  customerReviews: {
    title: "Отзывы покупателей",
    reviews: [{
      name: "Тимофей Иванов",
      comment: "Отличное оборудование! Очень доволен покупкой.",
    }, ],
  },
};

export default data;