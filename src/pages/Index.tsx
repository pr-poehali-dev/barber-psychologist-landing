import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="https://cdn.poehali.dev/files/c1099452-9b42-4bbe-ba4e-9bfd38a35bf2.jpg" alt="GURU" className="h-10 w-auto" />
              <span className="font-semibold text-lg">Барбер-Психолог</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О сервисе</button>
              <button onClick={() => scrollToSection('master')} className="hover:text-primary transition-colors">О мастере</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href="https://t.me/misha_prisyaga" target="_blank" rel="noopener noreferrer">
                  Записаться
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 fade-in">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Барбер-сеанс
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-medium">
                Мужской стиль и уход + психологическая консультация
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                Что происходит, когда парикмахер слушает так же хорошо, как стрижет?
              </p>
              <p className="text-lg mb-8 leading-relaxed text-muted-foreground">
                Вы получаете безопасное пространство для разговора, в котором можно быть и сильным, и уязвимым одновременно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
                  <a href="https://t.me/misha_prisyaga" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Записаться в Telegram
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                  <a href="tel:+79140730573">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (914) 073-05-73
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ee7cdf1c-a7af-40cb-9ff8-4f4bfc130cc5/files/22660d72-3ee9-4677-a433-1711ee58ecc2.jpg" 
                alt="Барбершоп интерьер"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Что такое "барбер-психолог"?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="text-5xl mb-4">✂️</div>
                <h3 className="text-xl font-semibold mb-3">Мужской стиль</h3>
                <p className="text-muted-foreground">
                  Профессиональная стрижка, моделирование бороды, создание вашего стиля
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="text-5xl mb-4">💭</div>
                <h3 className="text-xl font-semibold mb-3">Психология</h3>
                <p className="text-muted-foreground">
                  Структурированная беседа, практические инструменты саморазвития
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-3">Результат</h3>
                <p className="text-muted-foreground">
                  Новое отражение в зеркале и ясность в голове
                </p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Во время вашего сеанса:</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium mb-1">Первые 20-25 минут</p>
                    <p className="text-muted-foreground">Профессиональная мужская стрижка, моделирование бороды. Мастер работает руками, вы расслабляетесь.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium mb-1">Следующие 30-40 минут</p>
                    <p className="text-muted-foreground">Структурированная беседа. Мы говорим о том, что вас волнует. Я слушаю активно, задаю правильные вопросы, предлагаю практические инструменты.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-medium mb-1">Финал</p>
                    <p className="text-muted-foreground">Вы видите себя по-новому в зеркале И получаете ясность ума.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Почему мужчины выбирают этот формат
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "Shield",
                title: "Безопасность и доверие",
                desc: "Барбершоп — это мужское пространство. Здесь разговоры звучат естественно, без стресса психиатрического кабинета."
              },
              {
                icon: "Eye",
                title: "Результаты видны сразу",
                desc: "После физической трансформации вы ощущаете психологическую. Это мощный сигнал мозгу: я работаю над собой."
              },
              {
                icon: "Heart",
                title: "Никакой стигмы",
                desc: "Здесь вы просто проходите уход и получаете консультацию — естественно и без ярлыков."
              },
              {
                icon: "Lightbulb",
                title: "Практические инструменты",
                desc: "Вы получаете советы, которые можно применить сегодня же. Управление стрессом, эмоциональный интеллект, коммуникация."
              },
              {
                icon: "Clock",
                title: "Время, которое не давит",
                desc: "60-90 минут — достаточно для создания стиля, разговора и осмысления. Не спешно, не скомкано."
              },
              {
                icon: "Lock",
                title: "Анонимность",
                desc: "Вы приходите на стрижку — это обычно. Никто не узнает, что вы работаете над психологическим развитием."
              }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Icon name={item.icon} className="text-accent flex-shrink-0" size={28} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Услуги и стоимость
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">Вы выбираете, что вам нужно</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Классическая стрижка</h3>
                <p className="text-3xl font-bold text-accent mb-2">2 000 ₽</p>
                <p className="text-muted-foreground mb-4">30-40 минут</p>
                <p className="text-sm">Профессиональная мужская стрижка</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Стрижка + борода</h3>
                <p className="text-3xl font-bold text-accent mb-2">2 500 ₽</p>
                <p className="text-muted-foreground mb-4">40-50 минут</p>
                <p className="text-sm">Стрижка и уход за бородой</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                Популярно
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Барбер-Психолог</h3>
                <p className="text-3xl font-bold text-accent mb-2">3 500 ₽</p>
                <p className="text-muted-foreground mb-4">60 минут</p>
                <p className="text-sm">Стрижка (20 мин) + консультация (40 мин)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Премиум</h3>
                <p className="text-3xl font-bold text-accent mb-2">5 000 ₽</p>
                <p className="text-muted-foreground mb-4">90 минут</p>
                <p className="text-sm">Полный уход + глубокая консультация</p>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Пакет "5 сеансов"</h3>
                    <p className="text-3xl font-bold text-accent mb-2">15 000 ₽</p>
                    <p className="text-muted-foreground mb-2">Экономия 2 500 рублей!</p>
                    <p className="text-sm">Действует 2 месяца · 1 сеанс = 3 000 ₽</p>
                  </div>
                  <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg font-semibold">
                    -14%
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Дополнительная информация</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">💰 Почему именно такая цена?</strong> Стандартная стрижка во Владивостоке: 1 200-2 000 ₽. Консультация психолога: 3 000-5 000 ₽. Барбер-психолог — это честная цена за обе услуги интегрированно.</p>
                <p><strong className="text-foreground">🎁 Первый визит:</strong> Получите подарок — ароматическое масло для бороды (стоимость 500 ₽) при первом визите.</p>
                <p><strong className="text-foreground">💳 Способы оплаты:</strong> Наличные, Сбербанк, Сбер Пей, Яндекс.Касса</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="master" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            О мастере — Михаиле Присяжникове
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/8c90242d-6ffb-49c3-9b96-32453cbcdcdf.jpg" 
                  alt="Михаил Присяжников"
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/51ca1ee9-1731-4554-9ae9-b98b63336298.jpg" 
                  alt="Диплом педагога-психолога"
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Кто я:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Я парикмахер-мастер по мужским стрижкам и уходу за бородой с опытом 15+ лет. 
                  Работал в премиум-барбершопах, развивал мастерство, учился слушать клиентов.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Уже давно я заметил закономерность: мужчины, которые приходили на стрижку, 
                  часто рассказывали о своих проблемах. О стрессе на работе, о непонимании в отношениях, 
                  о потере уверенности в себе.
                </p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3">Что я сделал:</h4>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm">Основы психологического консультирования и лайф-коучинга (120 часов)</p>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm">Активное слушание и коммуникативные навыки (40 часов)</p>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm">Эмоциональный интеллект и управление стрессом (60 часов)</p>
                    </div>
                    <div className="flex gap-2">
                      <Icon name="Check" className="text-accent flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm">Регулярная супервизия с опытным психологом (1 раз в месяц)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div>
                <h4 className="text-lg font-semibold mb-3">Моя позиция:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Я не претендую на звание психотерапевта. Я предлагаю лайф-коучинг и консультирование 
                  в контексте создания мужского стиля.
                </p>
              </div>
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3">Гарантирую:</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2"><Icon name="Shield" size={18} className="text-accent" /> Конфиденциальность 100%</p>
                    <p className="flex items-center gap-2"><Icon name="Clock" size={18} className="text-accent" /> Уважение к вашему времени и словам</p>
                    <p className="flex items-center gap-2"><Icon name="Target" size={18} className="text-accent" /> Практические советы, а не теория</p>
                    <p className="flex items-center gap-2"><Icon name="Heart" size={18} className="text-accent" /> Отсутствие морализма и осуждения</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card px-6 rounded-lg border">
              <AccordionTrigger className="text-left hover:no-underline">
                Это психотерапия или что?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет. Это лайф-коучинг и консультирование в контексте создания мужского стиля. 
                Психотерапия требует медицинской лицензии. Если у вас серьезная психическая проблема 
                (депрессия, тревожные расстройства), обратитесь к психотерапевту. 
                Я помогаю с саморазвитием, стрессом, самоуверенностью.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-card px-6 rounded-lg border">
              <AccordionTrigger className="text-left hover:no-underline">
                Что если я не захочу разговаривать?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Никто не заставляет. Просто проведу вам отличную стрижку. 
                Но дам знать: я здесь, если захочешь поговорить.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-card px-6 rounded-lg border">
              <AccordionTrigger className="text-left hover:no-underline">
                Конфиденциальность гарантирована?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                100%. Я не буду рассказывать о ваших разговорах никому. 
                Это же касается информации о визитах.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="bg-card px-6 rounded-lg border">
              <AccordionTrigger className="text-left hover:no-underline">
                Как часто ходить?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                На стрижку: 1 раз в месяц (28-42 дня, в зависимости от типа волос). 
                Консультацию можно совместить со стрижкой или проходить отдельно. 
                Оптимально: 1 раз в месяц барбер-психолог + при необходимости — дополнительные.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="bg-card px-6 rounded-lg border">
              <AccordionTrigger className="text-left hover:no-underline">
                Какие гарантии результата?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Я не могу гарантировать "чудо" за один сеанс. 
                Но я гарантирую: вы получите отличную стрижку, будете услышаны, получите практические советы. 
                Результаты видны обычно после 2-3 сеансов регулярных посещений.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Забронировать сеанс
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">Всего 4 простых шага</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-1">Напишите мне в Telegram</h3>
                    <p className="text-muted-foreground text-sm">Отправьте сообщение и расскажите, что вас интересует</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-1">Уточним удобное время</h3>
                    <p className="text-muted-foreground text-sm">Выберем день и время, которое вам подходит</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-1">Подтвердим встречу</h3>
                    <p className="text-muted-foreground text-sm">За день до визита напомню о записи</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-1">Приходите</h3>
                    <p className="text-muted-foreground text-sm">Остальное я беру на себя</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-accent" />
                      Режим работы
                    </h3>
                    <p className="text-muted-foreground">Вторник-Суббота: 10:00 - 20:00</p>
                    <p className="text-muted-foreground">Воскресенье-Понедельник: Выходной</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="MapPin" size={20} className="text-accent" />
                      Адрес
                    </h3>
                    <p className="text-muted-foreground">Владивосток, центр, ул. Посьетская, 23</p>
                    <p className="text-sm text-muted-foreground">Парикмахерская "Стрижевский"</p>
                  </div>
                  <div className="pt-4 space-y-2">
                    <Button asChild className="w-full bg-accent hover:bg-accent/90">
                      <a href="https://t.me/misha_prisyaga" target="_blank" rel="noopener noreferrer">
                        <Icon name="Send" size={20} className="mr-2" />
                        Написать в Telegram
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a href="tel:+79140730573">
                        <Icon name="Phone" size={20} className="mr-2" />
                        +7 (914) 073-05-73
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.4166778892334!2d131.87691207653208!3d43.11199594643355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d041%3A0x847628c6b8b0f24e!2z0YPQuy4g0J_QvtGB0YzQtdGC0YHQutCw0Y8sIDIzLCDQktC70LDQtNC40LLQvtGB0YLQvtC6LCDQn9GA0LjQvNC-0YDRgdC60LjQuSDQutGA0LDQuSwgNjkwMDkw!5e0!3m2!1sru!2sru!4v1731092000000!5m2!1sru!2sru"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <a 
        href="https://t.me/misha_prisyaga" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Написать в Telegram"
      >
        <Icon name="Send" size={32} />
      </a>

      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://cdn.poehali.dev/files/c1099452-9b42-4bbe-ba4e-9bfd38a35bf2.jpg" alt="GURU" className="h-10 w-auto" />
                <span className="font-semibold text-lg">Барбер-Психолог</span>
              </div>
              <p className="text-sm opacity-90">
                Мужской стиль и уход + психологическая консультация
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm opacity-90">
                <p>Telegram: @misha_prisyaga</p>
                <p>Телефон: +7 (914) 073-05-73</p>
                <p>Email: mix_x@inbox.ru</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Адрес</h3>
              <p className="text-sm opacity-90">
                Владивосток, центр<br />
                ул. Посьетская, 23<br />
                Парикмахерская "Стрижевский"
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
            <p>© 2024 Барбер-Психолог Владивосток. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;