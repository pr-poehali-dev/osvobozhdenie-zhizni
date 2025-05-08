import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
              ОЖ
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-purple-800">Ось Жизни</span>
              <span className="text-xs text-gray-500">Центр омоложения</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a
              href="#benefits"
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#science"
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Научный подход
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#author"
              className="text-gray-700 hover:text-purple-700 transition-colors"
            >
              Об авторе
            </a>
          </nav>

          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-100 to-indigo-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold">
                Запатентованная технология
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Природное омоложение суставов и позвоночника
                <span className="block text-purple-700 mt-2">
                  без лекарств и операций
                </span>
              </h1>
              <p className="text-xl text-gray-700">
                Адаптивно функциональная гимнастика на тренажёре «Ось Жизни» —
                ваш короткий путь к омоложению, источнику энергии молодости.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">
                  Записаться на первое занятие
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-800 hover:bg-purple-50 text-lg px-8 py-6"
                >
                  <Icon name="PlayCircle" className="mr-2 h-5 w-5" />
                  Посмотреть видео
                </Button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Icon name="Calendar" className="h-4 w-4 text-purple-500" />
                <span>Тренировки расписаны на 3 недели вперед</span>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/files/3ad5d660-5a3d-4c4c-ade0-4456c132d097.png"
                  alt="Тренажер Ось Жизни"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-full shadow-lg p-4">
                <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium">
                  98% эффективность
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Recognition Section */}
      <section id="problems" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Узнаете себя?</h2>
            <p className="text-gray-600">
              Многие сталкиваются с этими проблемами ежедневно, не подозревая,
              что от них можно избавиться без таблеток и операций
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "BatteryLow",
                title: "Постоянная усталость и сонливость",
              },
              { icon: "Bone", title: "Боли в суставах, спине, шее" },
              { icon: "Activity", title: "Потеря гибкости и мелкой моторики" },
              { icon: "Skull", title: "Ломота в костях и остеопороз" },
              {
                icon: "AlarmClock",
                title: "Стресс, раздражительность, апатия",
              },
              {
                icon: "BadgeAlert",
                title: "Сколиоз, искривления позвоночника",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-700">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">
                      Эти симптомы — не приговор, а сигнал, что пора
                      действовать!
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="text-lg border-purple-300 text-purple-800 hover:bg-purple-50"
            >
              <Icon name="ArrowDownCircle" className="mr-2 h-5 w-5" />
              Узнать, как мы решаем эти проблемы
            </Button>
          </div>
        </div>
      </section>

      {/* Tried Methods Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Пробовали эти методы?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { method: "Массажи, йога, медитации", result: "без результата" },
              { method: "Операции, уколы, гормоны", result: "дорого и опасно" },
              {
                method: "Блокады, таблетки, приборы",
                result: "временно снимают симптомы",
              },
              { method: "БАДы, иголки, колдуны", result: "боль возвращается" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="p-3 rounded-full bg-red-100 text-red-600">
                  <Icon name="XCircle" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.method}</h3>
                  <p className="text-red-600">{item.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-purple-100 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-4">
              Мы знаем, как вновь сделать вас молодыми, энергичными и активными
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              За одну программу, опираясь лишь на научные открытия скрытых
              ресурсов вашего тела, о которых знала лишь элита!
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Approach Section */}
      <section id="science" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">У нас научный подход</h2>
            <p className="text-gray-600">
              Наша методика основана на фундаментальных научных открытиях
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-xl mb-3">
                Пьезоэлектрический эффект в костях
              </h3>
              <p className="text-gray-600">
                Открытие 1957 года, Ивао Ясуда: кости генерируют электрический
                сигнал при механическом давлении, стимулируя регенерацию.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-xl mb-3">Закон Вольфа</h3>
              <p className="text-gray-600">
                Кости укрепляются при механической нагрузке, в 15 раз
                превышающей вес тела, активируется рост костной ткани и
                выделение гормонов.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-xl mb-3">
                Практическое применение
              </h3>
              <p className="text-gray-600">
                С 1997 г. институты Harvard, Emory и другие создали
                фитнес-программы, доказав эффективность укрепления костной
                ткани.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg">
              Записаться на первое занятие
            </Button>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-indigo-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Кому и когда нужно?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Shield",
                title: "Военным",
                desc: "Мобилизация скрытых ресурсов организма при реабилитации",
              },
              {
                icon: "Medal",
                title: "Спортсменам",
                desc: "Быстрое восстановление после травм, ушибов, растяжений",
              },
              {
                icon: "Car",
                title: "Водителям",
                desc: "Исправление тазовой деформации и шейно-воротниковой зоны",
              },
              {
                icon: "Laptop",
                title: "Офисным работникам",
                desc: "При нервных истощениях, стрессах и депрессиях",
              },
              {
                icon: "Heart",
                title: "Людям с избыточным весом",
                desc: "Нормализация гормонального фона и метаболизма",
              },
              {
                icon: "Activity",
                title: "При травмах",
                desc: "Способствует ускорению регенеративных процессов",
              },
              {
                icon: "Baby",
                title: "Детям и подросткам",
                desc: "Исправление осанки, профилактика сколиоза",
              },
              {
                icon: "Heart",
                title: "Пожилым людям",
                desc: "Возвращаем активность суставам, сохраняем подвижность",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 inline-flex rounded-full bg-purple-100 text-purple-700 mb-3">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Training Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Что такое гимнастика и тренажер "Ось Жизни"
              </h2>
              <div className="space-y-4">
                {[
                  "Адаптивная гимнастика на тренажёре «Ось Жизни» — революционный способ укрепления костей и суставов.",
                  "Запуск естественного омоложения: за 45 минут, 1 раз в неделю, под контролем специалиста.",
                  "Результаты с первого занятия: улучшение осанки, исчезновение болей, повышение плотности костей.",
                  "Безопасно для любого возраста и уровня подготовки — научно доказано, подтверждено исследованиями Harvard, Emory, 100+ публикаций.",
                  "Без лекарств, операций и побочных эффектов — только ваши внутренние ресурсы!",
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-green-100 text-green-700 mt-1">
                      <Icon name="Check" className="h-4 w-4" />
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.poehali.dev/files/795a67ba-fe9f-4431-906a-791efa0577f8.jpeg"
                alt="Вячеслав Ан - автор методики"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-6">
                <h3 className="text-white font-bold text-xl">Вячеслав Ан</h3>
                <p className="text-purple-100">
                  Автор АФГ гимнастики и тренажера «Ось Жизни»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Что дают занятия?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Brain",
                title: "Перезагрузка нервной системы",
                desc: "Расслабление и прилив сил",
              },
              {
                icon: "Shield",
                title: "Усиление иммунитета",
                desc: "На уровне ДНК",
              },
              {
                icon: "Droplets",
                title: "Гормональный фон",
                desc: "Возвращается к молодым показателям",
              },
              {
                icon: "Bone",
                title: "Регенерация костей",
                desc: "И соединиельной ткани",
              },
              {
                icon: "Snowflake",
                title: "Коллаген",
                desc: "Восстанавливает суставы и гибкость",
              },
              {
                icon: "Droplets",
                title: "Лимфатическая система",
                desc: "Очищается",
              },
              {
                icon: "Smile",
                title: "Гормоны радости",
                desc: "Мгновенно поднимают настроение",
              },
              {
                icon: "Zap",
                title: "Прилив энергии",
                desc: "Уже во время тренировки!",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 inline-flex rounded-full bg-purple-100 text-purple-700 mb-3">
                  <Icon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principle Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Принцип воздействия тренажёра «Ось Жизни»
              </h2>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-700">
                      {
                        [
                          "Формирует точечно направленную весовую нагрузку на осевой скелет",
                          "Передаёт усилие в кость, минуя суставы и поверхностные мышцы",
                          "Включает в работу глубокие стабилизирующие цепи тела",
                          "Происходит выделение новых клеток, коллагена",
                          "Запускается мобилизация гормональной и нервной регуляции",
                        ][i]
                      }
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Узнать больше о технологии
                </Button>
              </div>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-800">
                Уникальность влияния тренажера
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Основан на естественных ресурсах тела и природных механизмах.
                  В отличие от традиционных методов лечения, которые часто
                  требуют длительного времени, хирургического вмешательства или
                  медикаментов, тренажёр «Ось Жизни» предлагает:
                </p>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-green-100 text-green-700 mt-1">
                      <Icon name="Check" className="h-4 w-4" />
                    </div>
                    <p className="text-gray-700">
                      {
                        [
                          "Мгновенный эффект: уже после первого занятия ощущается прилив энергии, омоложение",
                          "Безопасность и естественность: никаких инъекций, медикаментов или хирургии",
                          "Глубокая регенерация: стимулируется рост новых клеток, коллагена",
                          "Мощная перезагрузка нервной системы: расслабление, снятие мышечного напряжения",
                          "Долгосрочный эффект: укрепление костей, суставов и связок",
                        ][i]
                      }
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Реальные истории
          </h2>

          <Tabs defaultValue="elder" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white">
                <TabsTrigger value="elder">Старшее поколение</TabsTrigger>
                <TabsTrigger value="middle">Средний возраст</TabsTrigger>
                <TabsTrigger value="young">Молодежь</TabsTrigger>
              </TabsList>
            </div>

            {["elder", "middle", "young"].map((group) => (
              <TabsContent key={group} value={group} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {{
                    elder: [
                      "Я снова бегаю с внуком и сплю всю ночь без боли. Вы подарили мне вторую молодость!",
                      "За 3 занятия исчезла «холка», подтянулась кожа лица, а после программы прошли боли в кистях.",
                      "После 1 занятия давление снизилось с 150/130 до 130/110, после полного курса ушла боль в шее, повысилась жизненная энергия.",
                    ],
                    middle: [
                      "После первой тренировки улучшился сон, а после курса исправилась осанка, ушёл горб.",
                      "Пройдя полный курс, у меня восстановилась чувствительность половины тела, которой не было уже полтора года после инсульта.",
                      "В голове — полная тишина, ощущение прозрения и бодрости. После курса — ощущение, что я лечу по жизни на новой энергии.",
                    ],
                    young: [
                      "Погрузилась в депрессию, потеряла смысл жизни и работу. После первого упражнения почувствовала прилив энергии и вдохновения.",
                      "Впервые за долгое время почувствовал уверенность и контроль. Навел порядок в отношениях и в работе.",
                      "На грани выгорания и разочарования. После курса вернулась к жизни, обрела уверенность, новых клиентов и творческое вдохновение.",
                    ],
                  }[group].map((quote, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-start gap-2 mb-4 text-yellow-400">
                        {[...Array(5)].map((_, star) => (
                          <Icon key={star} name="Star" className="h-5 w-5" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4">"{quote}"</p>
                      <div>
                        <p className="font-semibold">
                          {
                            [
                              "Владимир, 62 года",
                              "Дмитрий, 55 лет",
                              "Анастасия, 26 лет",
                            ][i]
                          }
                        </p>
                        <p className="text-sm text-gray-500">
                          {
                            ["военный пенсионер", "проектировщик", "дизайнер"][
                              i
                            ]
                          }
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg">
              Стать нашим клиентом
            </Button>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section id="author" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Вячеслав Ан</h2>
              <p className="text-lg text-purple-800 mb-4">
                Автор АФГ гимнастики и тренажера «Ось Жизни»
              </p>

              <div className="space-y-4">
                {[
                  "Мастер-тренер с 30-летним опытом в оздоровительных практиках",
                  "Профессиональный спортсмен с высшим тренерским образованием",
                  "Более 1500 клиентов",
                  "Трижды чемпион страны, МС по гребле, чемпион по паурлифтингу, 1 дан кекусинкай карате",
                  "3 года в СПб с АФГ",
                  "Клиенты сэкономили более 16 млн ₽ на медицине благодаря АФГ",
                  "У 98% клиентов нормализуется гормональный уровень",
                  "У 200 прошли: остеопороз, сколиозов и боли в ОДА",
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-purple-100 text-purple-700 mt-1">
                      <Icon name="Check" className="h-4 w-4" />
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://cdn.poehali.dev/files/795a67ba-fe9f-4431-906a-791efa0577f8.jpeg"
                alt="Вячеслав Ан"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full shadow-lg p-2">
                <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium">
                  Эксперт высшей категории
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Как это работает?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: "ClipboardList",
                title: "Индивидуальная программа",
                desc: "Упражнения подбираются под ваши цели и состояние",
              },
              {
                icon: "UserCheck",
                title: "Тренировки под контролем",
                desc: "Только сертифицированные специалисты",
              },
              {
                icon: "Zap",
                title: "Мгновенная обратная связь",
                desc: "Результат можно измерить анализами",
              },
              {
                icon: "LayersLinked",
                title: "Комплексный эффект",
                desc: "Укрепляются кости, связки, сустави, улучшается работа систем",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                  <Icon name={item.icon} className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-purple-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              У 92% занимающихся:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Уходят зависимости от «стимуляторов радости и бодрости»",
                "Возвращается чувствительность в конечностях тела",
                "Раскрепощаются нервные и мышечные зажимы",
                "Мгновенный выход из депрессий и подавленности",
                "Либидо снова захочет «страсти»",
                "Омоложение кожи",
                "Прилив жизненной энергии: умственной, физической, психической",
                "Рост когнитивных способностей: память, мышление, речь",
              ].map((text, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-green-100 text-green-700 mt-1 flex-shrink-0">
                      <Icon name="Check" className="h-4 w-4" />
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Выберите свой результат</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Запишитесь на первое занятие уже сегодня, потому как тренировки
            расписаны на 3 недели вперед!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              "Избавление от болей в спине, шее, суставах",
              "Красивая осанка и здоровый мышечный тонус",
              "Свобода движений, сила и гибкость",
              "Восстановление опорно-двигательного аппарата",
              "Улучшение координации и равновесия",
              "Повышение энергии и самочувствия",
            ].map((text, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-start gap-3"
              >
                <div className="p-1 rounded-full bg-white text-purple-700 mt-1">
                  <Icon name="Check" className="h-4 w-4" />
                </div>
                <p className="text-white text-start">{text}</p>
              </div>
            ))}
          </div>

          <Button className="bg-white text-purple-800 hover:bg-purple-50 text-lg px-8 py-6">
            Оставить заявку
          </Button>
        </div>
      </section>

      {/* Recommenders Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Нас рекомендуют
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Виктор Алексеевич Ефимов",
                role: "Советский и российский партийный и государственный деятель, инженер-метролог, экономист и публицист",
                details:
                  "Кандидат технических наук, доктор экономических наук, профессор. Автор серии книг: Концепция Общественной Безопасности, Концептуальная власть и десятки других книг в сфере экономики, политики, управления.",
              },
              {
                name: "Борис Алексеевич Семенов",
                role: "Советский российский живописец, график",
                details:
                  "Член Санкт-Петербургского Союза художников, представитель ленинградской школы живописи. Академик Российской Академии естественных наук.",
              },
            ].map((person, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                    <Icon name="User" className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{person.name}</h3>
                    <p className="text-purple-800 mb-3">{person.role}</p>
                    <p className="text-gray-600">{person.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Owners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Ваш ключ к новым возможностям!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Хотите расширить возможности вашего бизнеса или приобрести
                  тренажер для дома?
                </h3>
                <p className="text-gray-700 mb-6">
                  Вы — профессионал в сфере фитнеса, массажа, мануальной терапии
                  или оздоровления? Хотите предложить своим клиентам уникальные
                  методы восстановления и укрепления организма, которые
                  гарантируют быстрый эффект и высокий уровень
                  удовлетворенности?
                </p>
                <p className="font-semibold text-purple-800 mb-6">
                  У нас есть решение — откройте свой Центр Жизни или купите
                  тренажер для домашнего использования, освоив гимнастику для
                  самостоятельной практики!
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                  Получить коммерческое предложение
                </Button>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.poehali.dev/files/3ad5d660-5a3d-4c4c-ade0-4456c132d097.png"
                  alt="Тренажер Ось Жизни для бизнеса"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  ОЖ
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">Ось Жизни</span>
                  <span className="text-xs text-gray-400">
                    Центр омоложения
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Адаптивно функциональная гимнастика, на запатентованном
                тренажёре «Ось Жизни» ваш короткий путь к омоложению.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  Санкт-Петербург
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (XXX) XXX-XX-XX
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@oszhizni.ru
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#benefits"
                    className="hover:text-white transition-colors"
                  >
                    Преимущества
                  </a>
                </li>
                <li>
                  <a
                    href="#science"
                    className="hover:text-white transition-colors"
                  >
                    Научный подход
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-white transition-colors"
                  >
                    Отзывы
                  </a>
                </li>
                <li>
                  <a
                    href="#author"
                    className="hover:text-white transition-colors"
                  >
                    Об авторе
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                >
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                >
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                >
                  <Icon name="Telegram" className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-purple-600 transition-colors"
                >
                  <Icon name="Youtube" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Ось Жизни. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
