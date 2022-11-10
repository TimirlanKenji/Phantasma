/*
Название: Время (Game Time)
Автор: DK (Денис Кузнецов) (http://vk.com/id8137201)
Группа ВК: http://vk.com/rpgmakervxaceandmv
Сайт: http://dk-plugins.ru/
Версия: 1.5
Релиз: 07.03.2016
Первый релиз: 26.10.2015
*/

//===========================================================================
// Настройка плагина
//===========================================================================

// Настройка оттенков экрана для смены дня и ночи
// Если не используется Динамическая смена дня и ночи
// Формат: RED, GREEN, BLUE, OPACITY
var GAME_TIME_TINTS = [
		[30, 0, 40, 165], 						// => 0 час
		[20, 0, 30, 165], 		 				// => 1 час
		[20, 0, 30, 155], 		 				// => 2 час
		[10, 0, 30, 145], 		 				// => 3 час
		[10, 0, 20, 125], 		 				// => 4 час
		[0, 0, 20, 125], 		   				// => 5 час
		[75, 20, 20, 115], 		 				// => 6 час
		[100, 30, 10,105],    					// => 7 час
		[75, 20, 10, 85], 		 				// => 8 час
		[0, 0, 0, 55], 				 			// => 9 час
		[0, 0, 0, 30], 				 			// => 10 час
		[0, 0, 0, 10], 				 			// => 11 час
		[0, 0, 0, 0], 				 			// => 12 час
		[0, 0, 0, 0], 				 			// => 13 час
		[0, 0, 0, 0], 				 			// => 14 час
		[0, 0, 0, 5], 				 			// => 15 час
		[0, 0, 0, 15], 				 			// => 16 час
		[0, 0, 10, 45], 			 			// => 17 час
		[75, 20, 20, 85], 		 				// => 18 час
		[100, 40, 30, 105],  	 				// => 19 час
		[75, 20, 40, 125], 		 				// => 20 час
		[10, 0, 45, 140], 		 				// => 21 час
		[20, 0, 45, 145], 		 				// => 22 час
		[20, 0, 50, 160]		 				// => 23 час
];

//===========================================================================
// Конец настройки плагина
//===========================================================================

/*:
 * @plugindesc v.1.5 Система времени, смены дня и ночи
 * @author DK (Денис Кузнецов)
 * @help
 
 ### Информация о плагине ###
 Название: DKCore_Game_Time
 Автор: DK
 Группа ВК: http://vk.com/rpgmakervxaceandmv
 Сайт: http://dk-plugins.ru/
 Версия: 1.5
 Релиз: 07.03.2016
 Первый релиз: 26.10.2015
 
 ### Требования к плагину ###
 Наличие включенного плагина DKCore версии 1.63 или выше
 
 ### Инструкция ###
 Если Вы не используете Динамическую смену дня и ночи:
 Чтобы настроить смену дня и ночи (оттенки экрана),
 нужно открыть js файл плагина и изменять настройки GAME_TIME_TINTS
 
 Чтобы не использовать строку даты или времени в окне, оставьте соответствующее поле пустым
 
 Ночной переключатель.
 Если Вы указали Время ночного переключателя, например, 21, 3
 В таком случае переключатель будет активен с 21 часа и до 3!
 В 3 часа он уже не будет работать

 Есть несколько способов изменять дату и время:
 1. Сбросить время до стартового 
  this.setGameTime();
  
 Для опытных пользователей
 2. Установить время из другого времени (объекта Game_Time):
  this.setGameTime(time);
  
 3. Установить определенное значение
 type - 'sec', 'min', 'hour', 'day', 'day_week', 'month', 'year'
 value - значение
  this.setGameTime(type, value);
 
 4. Полностью изменить дату и время
 sec - секунды
 min - минуты
 hour - час
 day - день
 day_week - день недели
 month - месяц
 year - год
  this.setGameTime(sec, min, hour, day, day_week, month, year);
 Пример: this.setGameTime(0, 15, 10, 3, 2, 3, 479);
  
 Чтобы получить текущую дату используйте:
  $Game_Time.sec
  sec, min, hour, day, day_week, month, year

 Чтобы сохранить текущее время или загрузить ранее сохраненное время, используйте:
  this.saveGameTime();
  this.loadGameTime();

 Чтобы добавить время, используйте скрипт:
 Возможно: 'Sec', 'Min', 'Hour', 'Day', 'Month', 'Year'
  this.changeGameTime('Min', 5); - добавит 5 минут
  this.changeGameTime('Hour', -10); - удалит 10 часов

 Чтобы принудительно показать / скрыть окно времени, воспользуйтесь
 flag может быть или true, или false (показать / скрыть)
  this.setGameTimeWindowVisible(flag);

 Чтобы изменить скорость времени, вызовите скрипт:
 speed может быть от 1 до 120
  this.setGameTimeSpeed(speed);
	
 Чтобы остановить обновление времени:
  this.stopGameTimeUpdate();
  
 Чтобы возобновить обновление времени:
  this.continueGameTimeUpdate();

 Чтобы узнать остановлено ли время:
 Вернет true, если время обновляется, иначе false
  this.getGameTimeUpdate();
	
 Чтобы установить час статического освещения на карте:
 hour - час
  this.setGameTimeStaticTintHour(hour);
  
 Чтобы остановить обновление оттенков экрана (смена дня и ночи):
  this.stopGameTimeUpdateTint();

 Чтобы продолжить обновление оттенков экрана (смена дня и ночи):
  this.continueGameTimeUpdateTint();
  
 Чтобы узнать обновляются ли оттенки экрана (смена дня и ночи):
  this.getGameTimeUpdateTint();
  
 Чтобы скрыть/показать оттенки экрана (смена дня и ночи):
 visible: true - показать, false - скрыть
  this.setGameTimeTintVisible(visible);

 Чтобы на определенной карте выставить освещение определенного часа, 
 используйте заметки карты: <Static Tint Hour = N>
 где N - нужный час
  
 ### Инструкция для опытных пользователей ###
 Вы можете создавать объекты типа Game_Time для своих нужд
 Важно! У нового времени скорость обновления будет стандартная (указанная в настройках плагина)
 
 Game_Time поддерживает следующие конструкторы для инициализации:
 1. Без параметров (будет создано время на основе настроек скрипта)
 Пример: $Game_Time = new Game_Time();

 2. С параметром в виде другого времени (объект Game_Time)
 Пример: $Saved_Game_Time = new Game_Time($Game_Time);

 3. С параметрами в виде чисел времени и даты (7 параметров - sec, min, hour, day, day_week, month, year)
 Пример: time = new Game_Time(0, 15, 10, 3, 2, 3, 479);
  
 Для объекта Game_Time определены следующие методы сравнения:
 
 more(time) - время слева больше времени справа
 Пример: $Game_Time.more($Saved_Game_Time);
 
 less(time) - время слева меньше времени справа
 Пример: $Game_Time.less($Saved_Game_Time);
 
 moreEquals(time) - время слева больше времени справа
 Пример: $Game_Time.moreEquals($Saved_Game_Time);
 
 lessEquals(time) - время слева меньше времени справа
 Пример: $Game_Time.lessEquals($Saved_Game_Time);
 
 Есть 2 метода сравнения:
 
 equalsWithoutSeconds(time) - сравнение без секунд
 Вернет true, если все параметры кроме секунд равны
 Пример: $Game_Time.equalsWithoutSeconds($Saved_Game_Time);

 equalsWithSeconds(time) - сравнение с секундами
 Вернет true, если все параметры вместе с секундами равны
 Пример: $Game_Time.equalsWithSeconds($Saved_Game_Time);
  
 ### Лицензия и правила использования плагина ###
 Вы можете:
 -Бесплатно использовать данный плагин в некоммерческих и коммерческих проектах
 -Переводить плагин на другие языки (пожалуйста, сообщите, если Вы перевели плагин на другой язык)
 
 Вы не можете:
 -Убирать или изменять любую информацию о плагине (Название, авторство, контактная информация, версия и дата релиза)
 -Изменять код плагина вне поля "Настройки плагина" и "Конец настройки плагина" (если нашли ошибку, напишите мне о ней)
 
 * @param Настройка словаря
 * @default ---------------------------------
 
 * @param Дни недели
 * @desc Название дней недели для отображения в окне времени
 * @default Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье
 
 * @param Месяцы
 * @desc Название месяцев для отображения в окне времени
 * @default Января, Февраля, Марта, Апреля, Мая, Июня, Июля, Августа, Сентября, Октября, Ноября, Декабря

 * @param Настройка времени
 * @default ---------------------------------
 
 * @param Реальное время
 * @desc Использовать время с компьютера ? true - да, false - нет
 * @default false
 
 * @param Стартовые секунды
 * @desc Количество секунд в начале игры (начиная с 0)
 * @default 0
 
 * @param Стартовые минуты
 * @desc Количество минут в начале игры (начиная с 0)
 * @default 0
 
 * @param Стартовый час
 * @desc Количество часов в начале игры (начиная с 0)
 * @default 0
 
 * @param Стартовый день
 * @desc Какой день в начале игры (начиная с 1)
 * @default 1
 
 * @param Стартовый день недели
 * @desc День недели в начале игры (0 - понедельник, 6 - воскресенье)
 * @default 0
 
 * @param Стартовый месяц
 * @desc Какой месяц в начале игры (начиная с 0)
 * @default 0
 
 * @param Стартовый год
 * @desc Какой год в начале игры (начиная с 0)
 * @default 2015
 
 * @param Секунд в минуте
 * @desc Количество секунд в одной минуте (минимум 1)
 * @default 60
 
 * @param Минут в часе
 * @desc Количество минут в одном часе (минимум 1)
 * @default 60
 
 * @param Часов в дне
 * @desc Количество часов в одном дне (минимум 1)
 * @default 24
 
 * @param Дней в месяце
 * @desc Количество дней в каждом месяце
Стандартно: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
 * @default 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
 
 * @param Время в меню
 * @desc Обновлять время в меню ? true - да, false - нет
 * @default false
 
 * @param Время в битве
 * @desc Обновлять время в битве ? true - да, false - нет
 * @default false
 
 * @param Пауза при сообщении
 * @desc Останавливать время при сообщении на экране ? true - да, false - нет
 * @default true
 
 * @param Скорость времени
 * @desc Скорость течения времени (от 1 до 120)
 * @default 1
 
 * @param Ночной переключатель
 * @desc Номер переключателя, который включается ночью (-1 чтобы отключить). Стандартно: -1
 * @default -1
 
 * @param Время ночного переключателя
 * @desc Время, когда переключатель включается.
Например, 21, 3
 * @default 21, 3
 
 * @param Общие настройки окон
 * @default ---------------------------------
 
 * @param Отображение секунд
 * @desc Отображать секунды в окне ? true - да, false - нет
 * @default false
 
 * @param Мерцание двоеточия
 * @desc Скорость мерцания двоеточия (минимум 1) (-1 чтобы отключить)
 * @default 30
 
 * @param Настройки окна в игре
 * @default ---------------------------------
 
 * @param Отображение окна в игре
 * @desc Отображать окно времени на карте игры ? true - да, false - нет
 * @default true
 
 * @param Параметры окна в игре
 * @desc Координата X, Y, ширина и высота окна времени на карте игры
 * @default 0, 0, 264, 108
 
 * @param Обложка окна в игре
 * @desc Обложка окна времени на карте игры
Стандартно: -1
 * @default -1
 
 * @param Прозрачность окна в игре
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна в игре
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Шрифт даты окна в игре
 * @desc Название шрифта, курсив, размер текста
Стандартно -1, false, -1
 * @default -1, false, -1
 
 * @param Шрифт времени окна в игре
 * @desc Название шрифта, курсив, размер текста
Стандартно -1, false, -1
 * @default -1, false, -1
 
 * @param Цвет даты окна в игре
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Цвет времени окна в игре
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Строка даты окна в игре
 * @desc Возможно: День, День недели, Месяц(название), Месяц(число), Год, Пробел, Свои команды
 * @default День, Пробел, Месяц(название), Пробел, Год
 
 * @param Строка времени окна в игре
 * @desc Возможно: Час, Минуты, Секунды, Двоеточие, Пробел, Свои команды
 * @default Час, Двоеточие, Минуты
 
 * @param Отображение окна в начале игры
 * @desc Отображать окно времени в начале игры ? true - да, false - нет
 * @default true
 
 * @param Клавиша управления окном в игре
 * @desc Укажите название клавиши. -1 чтобы не использовать
 * @default -1
 
 * @param Окно в игре без рамки
 * @desc Отображать окно без рамки ? true - да, false - нет
Стандартно: false
 * @default false
 
 * @param Настройки окна в меню
 * @default ---------------------------------
 
 * @param Отображение окна в меню
 * @desc Отображать окно времени в меню ? true - да, false - нет
 * @default true
 
 * @param Параметры окна в меню
 * @desc Координата X, Y, ширина и высота окна времени на карте игры
 * @default 0, 324, 240, 108
 
 * @param Обложка окна в меню
 * @desc Обложка окна времени в меню
Стандартно: -1
 * @default -1
 
 * @param Прозрачность окна в меню
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна в меню
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Шрифт даты окна в меню
 * @desc Название шрифта, курсив, размер текста
Стандартно -1, false, -1
 * @default -1, false, -1
 
 * @param Шрифт времени окна в меню
 * @desc Название шрифта, курсив, размер текста
Стандартно -1, false, -1
 * @default -1, false, -1
 
 * @param Цвет даты окна в меню
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Цвет времени окна в меню
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Строка даты окна в меню
 * @desc СВозможно: День, День недели, Месяц(название), Месяц(число), Год, Пробел, Свои команды
 * @default День, Пробел, Месяц(название), Пробел, Год
 
 * @param Строка времени окна в меню
 * @desc Возможно: Час, Минуты, Секунды, Двоеточие, Пробел, Свои команды
 * @default Час, Двоеточие, Минуты
 
 * @param Окно в меню без рамки
 * @desc Отображать окно без рамки ? true - да, false - нет
Стандартно: false
 * @default false
 
 * @param Настройки окна в битве
 * @default ---------------------------------
 
 * @param Отображение окна в битве
 * @desc Отображать окно времени в битве ? true - да, false - нет
 * @default false
 
 * @param Параметры окна в битве
 * @desc Координата X, Y, ширина и высота окна времени на карте игры
 * @default 0, 0, 264, 108
 
 * @param Обложка окна в битве
 * @desc Обложка окна времени в битве
Стандартно: -1
 * @default -1
 
 * @param Прозрачность окна в битве
 * @desc Прозрачность окна, прозрачность текста, прозрачность фона
Стандартно: -1, -1, -1
 * @default -1, -1, -1
 
 * @param Тон окна в битве
 * @desc Значения от -255 до 255
Стандартно: 0, 0, 0
 * @default 0, 0, 0
 
 * @param Шрифт даты окна в битве
 * @desc Название шрифта, курсив, размер текста
Стандартно -1, false, -1
 * @default -1, false, -1
 
 * @param Шрифт времени окна в битве
 * @desc Название шрифта, курсив, размер текста
Стандартно -1, false, -1
 * @default -1, false, -1
 
 * @param Цвет даты окна в битве
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Цвет времени окна в битве
 * @desc Цвет в hex формате
Стандартно: #ffffff
 * @default #ffffff
 
 * @param Строка даты окна в битве
 * @desc Возможно: День, День недели, Месяц(название), Месяц(число), Год, Пробел, Свои команды
 * @default День, Пробел, Месяц(название), Пробел, Год
 
 * @param Строка времени окна в битве
 * @desc Возможно: Час, Минуты, Секунды, Двоеточие, Пробел, Свои команды
 * @default Час, Двоеточие, Минуты
 
 * @param Окно в битве без рамки
 * @desc Отображать окно без рамки ? true - да, false - нет
Стандартно: false
 * @default false
 
 * @param Настройка смены дня и ночи
 * @default ---------------------------------
 
 * @param Смена дня и ночи
 * @desc Использовать смену дня и ночи ? true - да, false - нет. Настраивается в js файле плагина
 * @default false
 
 * @param Отображение смены дня и ночи в начале игры
 * @desc Отображать оттенки экрана смены дня и ночи в начале игры ? true - да, false - нет
 * @default true
 
 * @param Динамическая смена дня и ночи
 * @desc Использовать динамические оттенки для экрана ? true - да, false - нет. Будут использоваться значения из самого плагина
 * @default true
 
 * @param Смена дня и ночи в битве
 * @desc Использовать смену дня и ночи в битве ? true - да, false - нет
 * @default false
 
 * @param Отображение смены дня и ночи в фоне карты
 * @desc Отображать смену дня и ночи в фоне карты ? true - да, false - нет 
 * @default true
 
 */
 
var Imported = Imported || {};
Imported.DKCore_Game_Time = true;

var DKVersion = DKVersion || {};
DKVersion.DKCore_Game_Time = 1.5;

var DKCoreVersion = DKCoreVersion || {};
DKCoreVersion.DKCore_Game_Time = 1.63;

if (Imported.DKCore)
	DKCore.checkVersion();
else
{
	alert('Отсутствует плагин DKCore! Плагин DKCore_Game_Time не будет работать!');
	SceneManager.exit();
}

var $Game_Time = null;
var $Game_Time_Tint = null;
var $Saved_Game_Time = null;

var GameTimeParam = {};
GameTimeParam.param = PluginManager.parameters('DKCore_Game_Time');

// Инициализация настроек словаря
GameTimeParam.days_week 					= 	DKCore.SplitString(GameTimeParam.param['Дни недели']);
GameTimeParam.months 						= 	DKCore.SplitString(GameTimeParam.param['Месяцы']);

// Инициализация настроек времени и даты
GameTimeParam.real_time 					= 	DKCore.toBool(GameTimeParam.param['Реальное время']);
GameTimeParam.start_sec 					= 	Number(GameTimeParam.param['Стартовые секунды']);
GameTimeParam.start_min 					= 	Number(GameTimeParam.param['Стартовые минуты']);
GameTimeParam.start_hour 					= 	Number(GameTimeParam.param['Стартовый час']);
GameTimeParam.start_day 					= 	Number(GameTimeParam.param['Стартовый день']);
GameTimeParam.start_day_week 				= 	Number(GameTimeParam.param['Стартовый день недели']);
GameTimeParam.start_month 					= 	Number(GameTimeParam.param['Стартовый месяц']);
GameTimeParam.start_year 					= 	Number(GameTimeParam.param['Стартовый год']);
GameTimeParam.seconds_in_minute 			= 	Number(GameTimeParam.param['Секунд в минуте']);
GameTimeParam.minutes_in_hour 				= 	Number(GameTimeParam.param['Минут в часе']);
GameTimeParam.hours_in_day 					= 	Number(GameTimeParam.param['Часов в дне']);
GameTimeParam.days 							= 	DKCore.StringToNumberArray(GameTimeParam.param['Дней в месяце']);
GameTimeParam.update_time_in_menu 			= 	DKCore.toBool(GameTimeParam.param['Время в меню']);
GameTimeParam.update_time_in_battle 		= 	DKCore.toBool(GameTimeParam.param['Время в битве']);
GameTimeParam.stop_time_in_message 			= 	DKCore.toBool(GameTimeParam.param['Пауза при сообщении']);
GameTimeParam.time_speed 					= 	Number(GameTimeParam.param['Скорость времени']);
GameTimeParam.window_seconds 				= 	DKCore.toBool(GameTimeParam.param['Отображение секунд']);
GameTimeParam.blink_speed 					= 	Number(GameTimeParam.param['Мерцание двоеточия']);
GameTimeParam.night_switch					=	Number(GameTimeParam.param['Ночной переключатель']);
GameTimeParam.night_switch_time				=	DKCore.StringToNumberArray(GameTimeParam.param['Время ночного переключателя']);

// Инициализация настроек окна времени в игре
GameTimeParam.map_window 					= 	{};
GameTimeParam.map_window.show				=	DKCore.toBool(GameTimeParam.param['Отображение окна в игре']);
GameTimeParam.map_window.parameters			= 	DKCore.StringToNumberArray(GameTimeParam.param['Параметры окна в игре'], true);
GameTimeParam.map_window.windowskin			= 	GameTimeParam.param['Обложка окна в игре'];
GameTimeParam.map_window.opacity 			= 	DKCore.StringToNumberArray(GameTimeParam.param['Прозрачность окна в игре']);
GameTimeParam.map_window.tone				=	DKCore.StringToNumberArray(GameTimeParam.param['Тон окна в игре']);
GameTimeParam.map_window.font 				= 	{};
GameTimeParam.map_window.font['date']		=	DKCore.StringToFontArray(GameTimeParam.param['Шрифт даты окна в игре']);
GameTimeParam.map_window.font['time']		=	DKCore.StringToFontArray(GameTimeParam.param['Шрифт времени окна в игре']);
GameTimeParam.map_window.color				=	{};
GameTimeParam.map_window.color['date']		=	GameTimeParam.param['Цвет даты окна в игре'];
GameTimeParam.map_window.color['time']		=	GameTimeParam.param['Цвет времени окна в игре'];
GameTimeParam.map_window.date 				= 	DKCore.SplitString(GameTimeParam.param['Строка даты окна в игре']);
GameTimeParam.map_window.time 				= 	DKCore.SplitString(GameTimeParam.param['Строка времени окна в игре']);
GameTimeParam.map_window.button				=	GameTimeParam.param['Клавиша управления окном в игре'].toLowerCase();
GameTimeParam.map_window.frameless 			= 	DKCore.toBool(GameTimeParam.param['Окно в игре без рамки']);

// Инициализация настроек окна времени в меню
GameTimeParam.menu_window 					= 	{};
GameTimeParam.menu_window.show				=	DKCore.toBool(GameTimeParam.param['Отображение окна в меню']);
GameTimeParam.menu_window.parameters		= 	DKCore.StringToNumberArray(GameTimeParam.param['Параметры окна в меню']);
GameTimeParam.menu_window.windowskin		= 	GameTimeParam.param['Обложка окна в меню'];
GameTimeParam.menu_window.opacity 			= 	DKCore.StringToNumberArray(GameTimeParam.param['Прозрачность окна в меню']);
GameTimeParam.menu_window.tone				=	DKCore.StringToNumberArray(GameTimeParam.param['Тон окна в меню']);
GameTimeParam.menu_window.font 				= 	{};
GameTimeParam.menu_window.font['date']		=	DKCore.StringToFontArray(GameTimeParam.param['Шрифт даты окна в меню']);
GameTimeParam.menu_window.font['time']		=	DKCore.StringToFontArray(GameTimeParam.param['Шрифт времени окна в меню']);
GameTimeParam.menu_window.color				=	{};
GameTimeParam.menu_window.color['date']		=	GameTimeParam.param['Цвет даты окна в меню'];
GameTimeParam.menu_window.color['time']		=	GameTimeParam.param['Цвет времени окна в меню'];
GameTimeParam.menu_window.date 				= 	DKCore.SplitString(GameTimeParam.param['Строка даты окна в меню']);
GameTimeParam.menu_window.time 				= 	DKCore.SplitString(GameTimeParam.param['Строка времени окна в меню']);
GameTimeParam.menu_window.frameless 		= 	DKCore.toBool(GameTimeParam.param['Окно в меню без рамки']);

// Инициализация настроек окна времени в битве
GameTimeParam.battle_window 				= 	{};
GameTimeParam.battle_window.show			=	DKCore.toBool(GameTimeParam.param['Отображение окна в битве']);
GameTimeParam.battle_window.parameters		= 	DKCore.StringToNumberArray(GameTimeParam.param['Параметры окна в битве']);
GameTimeParam.battle_window.windowskin		= 	GameTimeParam.param['Обложка окна в битве'];
GameTimeParam.battle_window.opacity 		= 	DKCore.StringToNumberArray(GameTimeParam.param['Прозрачность окна в битве']);
GameTimeParam.battle_window.font 			= 	{};
GameTimeParam.battle_window.font['date']	=	DKCore.StringToFontArray(GameTimeParam.param['Шрифт даты окна в битве']);
GameTimeParam.battle_window.font['time']	=	DKCore.StringToFontArray(GameTimeParam.param['Шрифт времени окна в битве']);
GameTimeParam.battle_window.color			=	{};
GameTimeParam.battle_window.color['date']	=	GameTimeParam.param['Цвет даты окна в битве'];
GameTimeParam.battle_window.color['time']	=	GameTimeParam.param['Цвет времени окна в битве'];
GameTimeParam.battle_window.date 			= 	DKCore.SplitString(GameTimeParam.param['Строка даты окна в битве']);
GameTimeParam.battle_window.time 			= 	DKCore.SplitString(GameTimeParam.param['Строка времени окна в битве']);
GameTimeParam.battle_window.frameless 		= 	DKCore.toBool(GameTimeParam.param['Окно в битве без рамки']);

// Инициализация настроек смены дня и ночи
GameTimeParam.tint 							= 	DKCore.toBool(GameTimeParam.param['Смена дня и ночи']);
GameTimeParam.show_tint						=	DKCore.toBool(GameTimeParam.param['Отображение смены дня и ночи в начале игры']);
GameTimeParam.dynamic_tint 					= 	DKCore.toBool(GameTimeParam.param['Динамическая смена дня и ночи']);
GameTimeParam.tint_in_battle 				= 	DKCore.toBool(GameTimeParam.param['Смена дня и ночи в битве']);
GameTimeParam.background_tint				=	DKCore.toBool(GameTimeParam.param['Отображение смены дня и ночи в фоне карты']);

//===========================================================================
// Game Time
//===========================================================================

function Game_Time() {
	this.initialize.apply(this, arguments);
};

Game_Time.prototype.initialize = DKCore.overload(
	function() {
		this.setTime(GameTimeParam.start_sec, GameTimeParam.start_min, 
			GameTimeParam.start_hour, GameTimeParam.start_day, 
			GameTimeParam.start_day_week, GameTimeParam.start_month,
			GameTimeParam.start_year);
		this.setTimeSpeed(GameTimeParam.time_speed);
		this.time_update = true;
	},

	{ time: Game_Time },
	function(time) {
		this.setTime(time.sec, time.min, time.hour, time.day, time.day_week, time.month, time.year);
		this.setTimeSpeed(GameTimeParam.time_speed);
		this.time_update = true;
	},

	{ sec: Number, min: Number, hour: Number, day: Number, day_week: Number, month: Number, year: Number },
	function(sec, min, hour, day, day_week, month, year) {
		this.setTime(sec, min, hour, day, day_week, month, year);
		this.setTimeSpeed(GameTimeParam.time_speed);
		this.time_update = true;
	}
);

Game_Time.prototype.setTimeSpeed = function(speed) {
	this.time_speed = DKCore.MinMaxValue(1, 120, speed);
};
	
Game_Time.prototype.update = function() {
	if (!this.time_update) return;
	if ($gameMessage.isBusy() && GameTimeParam.stop_time_in_message) return;
	this.time_count += 1;
	this.checkNightSwitch();
	if (GameTimeParam.real_time) return this.realTime();
	if (this.time_count % this.time_speed === 0) return this.addSec();
};

Game_Time.prototype.more = function(time) {
	if (this.year > time.year) return true;
	if (this.year === time.year && this.month > time.month)	return true;
	if (this.year === time.year && this.month === time.month && this.day > time.day) return true;
	if (this.year === time.year && this.month === time.month && this.day === time.day && this.hour > time.hour) return true;
	if (this.year === time.year && this.month === time.month && this.day === time.day && this.hour === time.hour && this.min > time.min) return true;
	return this.year === time.year && this.month === time.month && this.day === time.day && this.hour === time.hour && this.min === time.min && this.sec > time.sec;
};

Game_Time.prototype.less = function(time) {
	if (this.year < time.year) return true;
	if (this.year === time.year && this.month < time.month)	return true;
	if (this.year === time.year && this.month === time.month && this.day < time.day) return true;
	if (this.year === time.year && this.month === time.month && this.day === time.day && this.hour < time.hour) return true;
	if (this.year === time.year && this.month === time.month && this.day === time.day && this.hour === time.hour && this.min < time.min) return true;
	return this.year === time.year && this.month === time.month && this.day === time.day && this.hour === time.hour && this.min === time.min && this.sec < time.sec;
};

Game_Time.prototype.moreEquals = function(time) {
	return !this.less(time);
};

Game_Time.prototype.lessEquals = function(time) {
	return !this.more(time);
};
	
Game_Time.prototype.equalsWithoutSeconds = function(time) {
	return this.year === time.year && this.month === time.month && this.day === time.day && this.hour === time.hour && this.min === time.min;
};

Game_Time.prototype.equalsWithSeconds = function(time) {
	return equalsWithoutSeconds(time) && this.sec === time.sec;
};

Game_Time.prototype.setTime = function(sec, min, hour, day, day_week, month, year) {
	this.sec = sec;
	this.min = min;
	this.hour = hour;
	this.day = day;
	this.day_week = day_week;
	this.month = month;
	this.year = year;
	this.time_count = 0;
};

Game_Time.prototype.changeTime = function(type, value) {
	var text = 'add';
	if (value < 0) text = 'rem';
	for(var i = 0; i < Math.abs(value); i++)
		eval('this.' + text + type + '()');
};

Game_Time.prototype.enableUpdateDynamicTint = function() {
	if (!GameTimeParam.tint || !GameTimeParam.dynamic_tint) return;
	$Game_Time_Tint.setUpdateDynamicTint(true);
};

Game_Time.prototype.checkNightSwitch = function() {
	if (GameTimeParam.night_switch === -1) return;
	setup = false;
	if (this.hour >= GameTimeParam.night_switch_time[0] || this.hour < GameTimeParam.night_switch_time[1]) setup = true;
	$gameSwitches.setValue(GameTimeParam.night_switch, setup);
};
	
Game_Time.prototype.realTime = function() {
	var date = new Date();
	this.sec = date.getSeconds();
	this.min = date.getMinutes();
	this.hour = date.getHours();
	if (this.day !== date.getDate())
	{
		this.day = date.getDate();
		this.enableUpdateDynamicTint();
	}
	this.day_week = (date.getDay() - 1 + GameTimeParam.days_week.length) % GameTimeParam.days_week.length; // в Date первый день - воскресенье
	if (this.month !== date.getMonth())
	{
		this.month = date.getMonth();
		this.enableUpdateDynamicTint();
	}
	this.year = date.getFullYear();
};
	
Game_Time.prototype.addSec = function() {
	this.sec++;
	if (this.sec !== GameTimeParam.seconds_in_minute) return;
	this.sec = 0;
	this.addMin();
};
	
Game_Time.prototype.addMin = function() {
	this.min++;
	if (this.min !== GameTimeParam.minutes_in_hour) return;
	this.min = 0;
	this.addHour();
};
	
Game_Time.prototype.addHour = function() {
	this.hour++;
	if (this.hour !== GameTimeParam.hours_in_day) return;
	this.hour = 0;
	this.addDay();
};
	
Game_Time.prototype.addDay = function() {
	this.day++;
	this.day_week++;
	if (this.day_week === GameTimeParam.days_week.length) this.day_week = 0;
	this.enableUpdateDynamicTint();
	if (this.day !== GameTimeParam.days[this.month]) return;
	this.day = 1;
	this.addMonth();
};
	
Game_Time.prototype.addMonth = function() {
	this.month++;
	this.enableUpdateDynamicTint();
	if (this.month !== GameTimeParam.months.length) return;
	this.month = 0;
	this.addYear();
};
	
Game_Time.prototype.addYear = function() {
	this.year++;
};

Game_Time.prototype.remSec = function() {
	this.sec--;
	if (this.sec !== -1) return;
	this.sec = GameTimeParam.seconds_in_minute - 1;
	this.remMin();
};

Game_Time.prototype.remMin = function() {
	this.min--;
	if (this.min !== -1) return;
	this.min = GameTimeParam.minutes_in_hour - 1;
	this.remHour();
};

Game_Time.prototype.remHour = function() {
	this.hour--;
	if (this.hour !== -1) return;
	this.hour = GameTimeParam.hours_in_day - 1;
	this.remDay();
};

Game_Time.prototype.remDay = function() {
	this.day--;
	this.day_week--;
	if (this.day_week === -1) this.day_week = GameTimeParam.days_week.length - 1;
	this.enableUpdateDynamicTint();
	if (this.day !== 0) return;
	this.remMonth();
	this.day = GameTimeParam.days[this.month];
};

Game_Time.prototype.remMonth = function () {
	this.month--;
	this.enableUpdateDynamicTint();
	if (this.month !== -1) return;
	this.month = GameTimeParam.months.length - 1;
	this.remYear();
};

Game_Time.prototype.remYear = function() {
	this.year--;
};

Game_Time.prototype.setSec = function(sec) {
	this.sec = DKCore.MinMaxValue(0, GameTimeParam.seconds_in_minute - 1, sec);
};

Game_Time.prototype.setMin = function(min) {
	this.min = DKCore.MinMaxValue(0, GameTimeParam.minutes_in_hour - 1, min);
};

Game_Time.prototype.setHour = function(hour) {
	this.hour = DKCore.MinMaxValue(0, GameTimeParam.hours_in_day - 1, hour);
};

Game_Time.prototype.setDay = function(day) {
	var last_day = this.day;
	this.day = DKCore.MinMaxValue(0, GameTimeParam.days[this.month] - 1, day);
	if (last_day !== this.day) this.enableUpdateDynamicTint();
};

Game_Time.prototype.setDayWeek = function(day_week) {
	this.day_week = DKCore.MinMaxValue(0, GameTimeParam.days_week.length - 1, day_week);
};

Game_Time.prototype.setMonth = function(month) {
	var last_month = this.month;
	this.month = DKCore.MinMaxValue(0, GameTimeParam.months.length - 1, month);
	if (last_month !== this.month) this.enableUpdateDynamicTint();
};

Game_Time.prototype.setYear = function(year) {
	this.year = year;
};

//=============================================================================
// Game Time Tint
//=============================================================================

function Game_Time_Tint() {
	this.initialize.apply(this, arguments);
}

Game_Time_Tint.prototype = Object.create(Sprite_Base.prototype);
Game_Time_Tint.prototype.constructor = Game_Time_Tint;

Game_Time_Tint.prototype.initialize = function() {
	Sprite_Base.prototype.initialize.call(this);
	this.bitmap = new Bitmap(Graphics.boxWidth, Graphics.boxHeight);
	this.update_tint = true;
	this.update_dynamic_tint = true;
	this.static_tint_hour = -1;
};

Game_Time_Tint.prototype.setUpdateDynamicTint = function(setup) {
	var last_update = this.update_dynamic_tint;
	this.update_dynamic_tint = setup;
	if (setup && !last_update) this.update();
};

Game_Time_Tint.prototype.setStaticTintHour = function(hour) {
	var last_hour = this.static_tint_hour;
	this.static_tint_hour = hour;
	if (last_hour === this.static_tint_hour) return;
	this.update();
};

Game_Time_Tint.prototype.update = function() {
	if (!GameTimeParam.tint || !this.update_tint) return;
	if (this.min === $Game_Time.min && this.static_tint_hour === -1) return;
	this.defaultTint();
};

Game_Time_Tint.prototype.settings = function() {
	this.min = $Game_Time.min;
	this.hour = $Game_Time.hour;
	this.month = $Game_Time.month;
	if (this.static_tint_hour !== -1)
	{
		this.min = GameTimeParam.minutes_in_hour / 2;
		this.hour = this.static_tint_hour;
	}
	if (GameTimeParam.dynamic_tint) return this.setupDynamicTint();
	this.now_hour = GAME_TIME_TINTS[this.hour];
	this.next_hour = GAME_TIME_TINTS[(this.hour + 1) % GameTimeParam.hours_in_day]
};

Game_Time_Tint.prototype.getTint = function() {
	var rgb = [];
	for(var i = 0; i < 3; i++)
		rgb[i] = DKCore.MinMaxValue(0, 255, this.now_hour[i] + (this.next_hour[i] - this.now_hour[i]) / 60 * this.min);
	return rgb;
};

Game_Time_Tint.prototype.getOpacity = function() {
	return DKCore.MinMaxValue(0, 255, (this.now_hour[3] + (this.next_hour[3] - this.now_hour[3]) / 60 * this.min) * 1.1);
};

Game_Time_Tint.prototype.defaultTint = function() {
	this.settings();
	this.bitmap.clear();
	this.bitmap.fillRect(0, 0, Graphics.boxWidth, Graphics.boxHeight, this.getTint());
	this.opacity = this.getOpacity();
};

Game_Time_Tint.prototype.getDynamicRed = function(hour, month) {
	var red = [];
	red[0] = [0, 0, 0, 0, 0, 10, 20, 60, 100, 70, 20, 10, 0, 0, 20, 40, 100, 80, 50, 20, 10, 0, 0, 0];
	red[1] = [0, 0, 0, 0, 0, 5, 10, 20, 30, 20, 10, 0, 0, 0, 10, 15, 20, 25, 15, 10, 0, 0, 0, 0],
	red[2] = [0, 0, 0, 0, 5, 10, 20, 30, 20, 10, 0, 0, 0, 0, 0, 5, 10, 25, 10, 5, 0, 0, 0, 0];
	red[3] = [0, 0, 0, 0, 5, 10, 30, 20, 10, 5, 0, 0, 0, 0, 0, 0, 0, 10, 15, 30, 15, 10, 0, 0];
	red[4] = [0, 0, 0, 10, 15, 30, 15, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 25, 15, 10, 0];
	red[5] = [0, 0, 10, 20, 30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 30, 15, 0];
	red[6] = [0, 0, 10, 15, 30, 15, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 15, 0];
	red[7] = [0, 0, 0, 10, 20, 30, 15, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 20, 10, 0];
	red[8] = [0, 0, 0, 0, 10, 20, 30, 15, 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 15, 10, 0, 0];
	red[9] = [0, 0, 0, 0, 0, 10, 15, 30, 10, 0, 0, 0, 0, 0, 0, 5, 15, 25, 15, 10, 0, 0, 0, 0];
	red[10] = [0, 0, 0, 0, 0, 10, 20, 30, 20, 10, 0, 0, 0, 0, 10, 20, 30, 20, 10, 0, 0, 0, 0, 0];
	red[11] = [0, 0, 0, 0, 0, 0, 10, 15, 30, 15, 10, 0, 0, 0, 10, 15, 30, 15, 10, 0, 0, 0, 0, 0];
	return red[month][hour];
};

Game_Time_Tint.prototype.getDynamicGreen = function(hour, month) {
	var green = [];
	green[0] = [0, 0, 0, 0, 0, 5, 10, 20, 30, 20, 10, 0, 0, 0, 10, 15, 25, 15, 10, 0, 0, 0, 0, 0];
	green[1] = [0, 0, 0, 0, 0, 5, 10, 20, 30, 20, 10, 0, 0, 0, 10, 15, 20, 25, 15, 10, 0, 0, 0, 0];
	green[2] = [0, 0, 0, 0, 5, 10, 20, 30, 20, 10, 0, 0, 0, 0, 0, 5, 10, 25, 10, 5, 0, 0, 0, 0];
	green[3] = [0, 0, 0, 0, 5, 10, 30, 20, 10, 5, 0, 0, 0, 0, 0, 0, 0, 10, 15, 30, 15, 10, 0, 0];
	green[4] = [0, 0, 0, 10, 15, 30, 15, 10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 25, 15, 10, 0];
	green[5] = [0, 0, 10, 20, 30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 30, 15, 0];
	green[6] = [0, 0, 10, 15, 30, 15, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 15, 0];
	green[7] = [0, 0, 0, 10, 20, 30, 15, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 20, 10, 0];
	green[8] = [0, 0, 0, 0, 10, 20, 30, 15, 10, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 15, 10, 0, 0];
	green[9] = [0, 0, 0, 0, 0, 10, 15, 30, 10, 0, 0, 0, 0, 0, 0, 5, 15, 25, 15, 10, 0, 0, 0, 0];
	green[10] = [0, 0, 0, 0, 0, 10, 20, 30, 20, 10, 0, 0, 0, 0, 10, 20, 30, 20, 10, 0, 0, 0, 0, 0];
	green[11] = [0, 0, 0, 0, 0, 0, 10, 15, 30, 15, 10, 0, 0, 0, 10, 15, 30, 15, 10, 0, 0, 0, 0, 0];
	return green[month][hour];
};

Game_Time_Tint.prototype.getDynamicBlue = function(hour, month) {
	var blue = [];
	blue[0] = [10, 15, 20, 25, 30, 45, 30, 20, 10, 0, 0, 0, 0, 0, 0, 15, 20, 55, 45, 30, 20, 10, 0, 0];
	blue[1] = [10, 15, 20, 25, 30, 40, 20, 15, 10, 0, 0, 0, 0, 0, 0, 0, 15, 20, 55, 45, 30, 20, 10, 0];
	blue[2] = [10, 15, 25, 30, 40, 30, 20, 15, 10, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 50, 45, 40, 35, 20];
	blue[3] = [15, 20, 20, 35, 45, 25, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 25, 35, 50, 40, 35, 20];
	blue[4] = [15, 20, 35, 45, 25, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 35, 55, 40, 30];
	blue[5] = [15, 30, 50, 35, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 50, 30];
	blue[6] = [15, 30, 50, 30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 50, 25];
	blue[7] = [10, 15, 30, 50, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 35, 50, 35, 20];
	blue[8] = [10, 15, 25, 35, 50, 30, 20, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 55, 35, 20, 15];
	blue[9] = [10, 15, 20, 25, 35, 50, 30, 20, 10, 0, 0, 0, 0, 0, 0, 10, 20, 35, 55, 40, 30, 20, 15, 10];
	blue[10] = [10, 10, 15, 20, 35, 55, 35, 20, 10, 0, 0, 0, 0, 10, 20, 30, 40, 55, 35, 20, 15, 15, 10, 10];
	blue[11] = [10, 15, 20, 25, 35, 55, 35, 20, 10, 0, 0, 0, 0, 10, 20, 30, 45, 60, 40, 30, 20, 15, 15, 10];
	return blue[month][hour];
};

Game_Time_Tint.prototype.getDynamicOpacity = function(hour, month) {
	var opacity = [];
	opacity[0] = [175, 170, 160, 160, 150, 150, 145, 140, 120, 90, 55, 20, 10, 10, 10, 15, 25, 75, 105, 135, 155, 160, 165, 180];
	opacity[1] = [170, 165, 155, 150, 140, 130, 130, 125, 110, 80, 50, 20, 10, 10, 10, 15, 25, 70, 95, 125, 140, 150, 160, 175];
	opacity[2] = [165, 160, 150, 135, 130, 110, 115, 110, 90, 70, 45, 20, 10, 10, 10, 10, 20, 60, 80, 105, 120, 135, 150, 160];
	opacity[3] = [160, 150, 140, 120, 120, 100, 90, 85, 70, 60, 40, 15, 10, 10, 10, 10, 20, 40, 60, 85, 100, 120, 135, 150];
	opacity[4] = [155, 140, 130, 110, 105, 85, 75, 70, 50, 45, 35, 15, 10, 10, 10, 10, 10, 20, 40, 70, 85, 110, 125, 140];
	opacity[5] = [150, 130, 120, 100, 90, 70, 55, 50, 40, 30, 35, 10, 10, 10, 10, 10, 10, 15, 25, 55, 65, 100, 105, 130];
	opacity[6] = [145, 120, 110, 110, 100, 80, 70, 65, 55, 40, 35, 10, 10, 10, 10, 10, 10, 25, 40, 70, 80, 110, 125, 140];
	opacity[7] = [150, 130, 120, 120, 110, 100, 85, 80, 70, 50, 40, 15, 10, 10, 10, 10, 10, 40, 60, 80, 100, 120, 130, 140];
	opacity[8] = [155, 140, 130, 130, 120, 110, 100, 95, 85, 60, 45, 15, 10, 10, 10, 10, 10, 50, 70, 90, 115, 130, 140, 150];
	opacity[9] = [160, 150, 140, 140, 130, 120, 115, 110, 100, 70, 50, 20, 10, 10, 10, 10, 15, 60, 80, 100, 130, 140, 150, 155];
	opacity[10] = [165, 160, 150, 150, 140, 130, 130, 125, 110, 80, 55, 20, 10, 10, 10, 15, 20, 70, 90, 115, 145, 150, 155, 160];
	opacity[11] = [170, 170, 160, 160, 150, 150, 145, 140, 120, 90, 60, 25, 10, 10, 10, 15, 25, 75, 105, 135, 155, 160, 165, 170];
	return opacity[month][hour];
};

Game_Time_Tint.prototype.dynamicTintSettings = function() {
	this.now_hour = this.tint[this.hour];
	this.next_hour = this.tint[(this.hour + 1) % GameTimeParam.hours_in_day];
};

Game_Time_Tint.prototype.setupDynamicTint = function() {
	if (!this.update_dynamic_tint) return this.dynamicTintSettings();
	this.tint = [];
	var minus = 7;
	var no_zero = 6 + minus * 1.5; // магия
	for(var i = 0; i < 24; i++)
	{
		this.tint[i] = [
			this.getDynamicRed(i, this.month) - minus + Math.randomInt(no_zero),
			this.getDynamicGreen(i, this.month) - minus + Math.randomInt(no_zero),
			this.getDynamicBlue(i, this.month) - minus + Math.randomInt(no_zero), 
			this.getDynamicOpacity(i, this.month)
		];
	}
	this.update_dynamic_tint = false;
	return this.dynamicTintSettings();
};

//=============================================================================
// Game Time Window
//=============================================================================

function Game_Time_Window() {
    this.initialize.apply(this, arguments);
}

Game_Time_Window.prototype = Object.create(Window_Base.prototype);
Game_Time_Window.prototype.constructor = Game_Time_Window;

Game_Time_Window.prototype.initialize = function(preset, game_time) {
	this.preset = preset;
	if (game_time)
		this.game_time = game_time;
	else
		this.game_time = $Game_Time;
    Window_Base.prototype.initialize.call(this, this.preset.parameters[0], this.preset.parameters[1], this.preset.parameters[2], this.preset.parameters[3]);
	DKCore.setupWindow(this, preset);
	this.date = this.preset['date'];
	this.time = this.preset['time'];
};

Game_Time_Window.prototype.getSeconds = function() {
	return this.game_time.sec < 10 ? '0' + this.game_time.sec : this.game_time.sec;
};

Game_Time_Window.prototype.getMinutes = function() {
	return this.game_time.min < 10 ? '0' + this.game_time.min : this.game_time.min;
};

Game_Time_Window.prototype.getHours = function() {
	return this.game_time.hour < 10 ? '0' + this.game_time.hour : this.game_time.hour;
};

Game_Time_Window.prototype.getBlink = function() {
	if (SceneManager._scene != SceneManager._nextScene && SceneManager._nextScene != null) return ':';
	if ($gameMessage.isBusy() && GameTimeParam.stop_time_in_message) return ':';
	if (GameTimeParam.blink_speed === -1) return ':';
	if (SceneManager._scene instanceof Scene_Menu && !GameTimeParam.update_time_in_menu) return ':';
	if (SceneManager._scene instanceof Scene_Battle && !GameTimeParam.update_time_in_battle) return ':';
	if (!this.game_time.time_update) return ':';
	if (this.game_time.time_count % GameTimeParam.blink_speed >= GameTimeParam.blink_speed / 2) return ':';
	return ' ';
};

Game_Time_Window.prototype.getDate = function() {
	var date = '';
	for(var i = 0; i < this.date.length; i++)
	{
		var value = this.date[i];
		switch(value.toLowerCase())
		{
			case 'день':
			date += this.game_time.day;
			break;
			
			case 'день недели':
			date += GameTimeParam.days_week[this.game_time.day_week];
			break;
			
			case 'месяц(число)':
			date += this.game_time.month + 1;
			break;
			
			case 'месяц(название)':
			date += GameTimeParam.months[this.game_time.month];
			break;
			
			case 'год':
			date += this.game_time.year;
			break;
			
			case 'пробел':
			date += ' ';
			break;
			
			default:
			date += value;
			break;
		};
	};
	return date;
};

Game_Time_Window.prototype.getTime = function() {
	var time = '';
	for(var i = 0; i < this.time.length; i++)
	{
		var value = this.time[i];
		switch(value.toLowerCase())
		{
			case 'час':
			time += this.getHours();
			break;
			
			case 'минуты':
			time += this.getMinutes();
			break;
			
			case 'секунды':
			time += this.getSeconds();
			break;
			
			case 'двоеточие':
			time += this.getBlink();
			break;
			
			case 'пробел':
			time += ' ';
			break;
			
			default:
			time += value;
			break;
		};
	};
	return time;
};

Game_Time_Window.prototype.dateColor = function() {
	if (this.preset.color['date']) return this.preset.color['date'];
	return '#ffffff';
};

Game_Time_Window.prototype.timeColor = function() {
	if (this.preset.color['time']) return this.preset.color['time'];
	return '#ffffff';
};

Game_Time_Window.prototype.update = function(update) {
	if ((this.now_sec !== this.game_time.sec && GameTimeParam.window_seconds) || this.now_min !== this.game_time.min || GameTimeParam.blink_speed !== -1 || this.now_hour !== this.game_time.hour || this.now_day !== this.game_time.day || this.now_day_week !== this.game_time.day_week || this.now_month !== this.game_time.month || this.now_year !== this.game_time.year || update)
	{
		this.contents.clear();
		this.setupVariables();
		var date = this.getDate();
		var time = this.getTime();
		if (date !== '' && time !== '')
		{
			var y = (this.contentsHeight() - this.lineHeight() * 2) / 2;
			DKCore.setupFont(this, this.preset.font['date']);
			this.changeTextColor(this.dateColor());
			this.drawText(date, 0, y, this.contentsWidth(), 'center');
			DKCore.setupFont(this, this.preset.font['time']);
			this.changeTextColor(this.timeColor());
			return this.drawText(time, 0, y + this.lineHeight(), this.contentsWidth(), 'center');
		}
		if (date !== '' && time === '')
		{
			DKCore.setupFont(this, this.preset.font['date']);
			this.changeTextColor(this.dateColor());
			return this.drawText(date, 0, (this.contentsHeight() - this.lineHeight()) / 2, this.contentsWidth(), 'center');
		}
		if (date === '' && time !== '')
		{
			DKCore.setupFont(this, this.preset.font['time']);
			this.changeTextColor(this.timeColor());
			return this.drawText(time, 0, (this.contentsHeight() - this.lineHeight()) / 2, this.contentsWidth(), 'center');
		}
	}
};

Game_Time_Window.prototype.setupVariables = function() {
	this.now_sec = this.game_time.sec;
	this.now_min = this.game_time.min;
	this.now_hour = this.game_time.hour;
	this.now_day = this.game_time.day;
	this.now_day_week = this.game_time.day_week;
	this.now_month = this.game_time.month;
	this.now_year = this.game_time.year;
};

//=============================================================================
// Scene Base
//=============================================================================

Scene_Base.prototype.createGameTimeWindow = function(preset, game_time) {
	this.removeGameTimeWindow();
	this.game_time_window = new Game_Time_Window(preset, game_time);
	this.addWindow(this.game_time_window);
};

Scene_Base.prototype.removeGameTimeWindow = function() {
	if (this.game_time_window == null) return;
	this._windowLayer.removeChild(this.game_time_window);
	this.game_time_window = null;
};

Scene_Base.prototype.addGameTimeTint = function() {
	if (!this._spriteset) return;
	this._spriteset.addChild($Game_Time_Tint);
};

Scene_Base.prototype.removeGameTimeTint = function() {
	if (!this._spriteset) return;
	this._spriteset.removeChild($Game_Time_Tint);
};

//=============================================================================
// Scene Map
//=============================================================================

var Game_Time_Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function() {
	Game_Time_Scene_Map_onMapLoaded.call(this);
	this.setGameTimeTintVisible($gameSystem.game_time_show_tint);
	if (!GameTimeParam.tint) return;
	if ($dataMap.note.match(/<[\s]*Static[\w\s]*Tint[\w\s]*Hour[\s]*=[\s]*(\d+)[\s]*>/i))
		$Game_Time_Tint.setStaticTintHour(Number(RegExp.$1));
	else
		$Game_Time_Tint.setStaticTintHour(-1);
};

 var Game_Time_Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function() {
	Game_Time_Scene_Map_createAllWindows.call(this);
	this.setGameTimeWindowVisible($gameSystem.game_time_show_window);
};

Scene_Map.prototype.setGameTimeWindowVisible = function(visible) {
	if (!GameTimeParam.map_window.show) return;
	visible ? this.createGameTimeWindow(GameTimeParam.map_window) : this.removeGameTimeWindow();
	$gameSystem.game_time_show_window = visible;
};

Scene_Map.prototype.setGameTimeTintVisible = function(visible) {
	if (!GameTimeParam.tint) return;
	visible ? this.addGameTimeTint() : this.removeGameTimeTint();
	$gameSystem.game_time_show_tint = visible;
};

var Game_Time_Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
	Game_Time_Scene_Map_update.call(this);
	$Game_Time.update();
	$Game_Time_Tint.update();
	if (GameTimeParam.map_window.button === '-1') return;
	if (Input.isTriggered(GameTimeParam.map_window.button))
		this.setGameTimeWindowVisible(!$gameSystem.game_time_show_window);
};

var Game_Time_Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
	this.removeGameTimeWindow();
	if (GameTimeParam.tint && !GameTimeParam.background_tint) this._spriteset.removeChild($Game_Time_Tint);
	Game_Time_Scene_Map_terminate.call(this);
	if (GameTimeParam.tint) this._spriteset.removeChild($Game_Time_Tint);
};

//=============================================================================
// Scene Menu
//=============================================================================

var Game_Time_Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
	Game_Time_Scene_Menu_create.call(this);
	if (GameTimeParam.menu_window.show) this.createGameTimeWindow(GameTimeParam.menu_window);
};

var Game_Time_Scene_Menu_update = Scene_Menu.prototype.update;
Scene_Menu.prototype.update = function() {
	if (GameTimeParam.update_time_in_menu) $Game_Time.update();
	Game_Time_Scene_Menu_update.call(this);
};

var Game_Time_Scene_Menu_terminate = Scene_Menu.prototype.terminate;
Scene_Menu.prototype.terminate = function() {
	this.removeGameTimeWindow();
	Game_Time_Scene_Menu_terminate.call(this);
};

//=============================================================================
// Scene Battle
//=============================================================================

var Game_Time_Scene_Battle_create = Scene_Battle.prototype.create;
Scene_Battle.prototype.create = function() {
	Game_Time_Scene_Battle_create.call(this);
	if (GameTimeParam.tint_in_battle) this._spriteset.addChild($Game_Time_Tint);
};

var Game_Time_Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
Scene_Battle.prototype.createAllWindows = function() {
	Game_Time_Scene_Battle_createAllWindows.call(this);
	if (GameTimeParam.battle_window.show) this.createGameTimeWindow(GameTimeParam.battle_window);
};

var Game_Time_Scene_Battle_stop = Scene_Battle.prototype.stop;
Scene_Battle.prototype.stop = function() {
	Game_Time_Scene_Battle_stop.call(this);
	this.removeGameTimeWindow();
};

var Game_Time_Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	Game_Time_Scene_Battle_update.call(this);
	if (GameTimeParam.update_time_in_battle) $Game_Time.update();
	if (GameTimeParam.tint_in_battle) $Game_Time_Tint.update();
};

var Game_Time_Scene_Battle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
	Game_Time_Scene_Battle_terminate.call(this);
	if (GameTimeParam.tint_in_battle) this._spriteset.removeChild($Game_Time_Tint);
};

//=============================================================================
// Game System
//=============================================================================

var Game_Time_Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	Game_Time_Game_System_initialize.call(this);
	this.game_time_show_window = GameTimeParam.map_window.show;
	this.game_time_show_tint = GameTimeParam.show_tint;
};
 
//=============================================================================
// Game Interpreter
//=============================================================================

Game_Interpreter.prototype.saveGameTime = function() {
	$Saved_Game_Time = new Game_Time($Game_Time);
};

Game_Interpreter.prototype.loadGameTime = function() {
	$Game_Time = new Game_Time($Saved_Game_Time);
};

Game_Interpreter.prototype.setGameTimeWindowVisible = function(visible) {
	SceneManager._scene.setGameTimeWindowVisible(visible);
};

Game_Interpreter.prototype.setGameTime = DKCore.overload(
	function() {
		$Game_Time = new Game_Time();
	},
	
	{ time: Game_Time },
	function(time) {
		$Game_Time = new Game_Time(time);
	},
	
	{ type: String, value: Number },
	function(type, value) {
		switch(type.toLowerCase())
		{
			case 'sec': return $Game_Time.setSec(value);
			case 'min': return $Game_Time.setMin(value);
			case 'hour': return $Game_Time.setHour(value);
			case 'day': return $Game_Time.setDay(value);
			case 'day_week': return $Game_Time.setDayWeek(value);
			case 'month': return $Game_Time.setMonth(value);
			case 'year': return $Game_Time.setYear(value);
		}
	},
	
	{ sec: Number, min: Number, hour: Number, day: Number, day_week: Number, month: Number, year: Number },
	function(sec, min, hour, day, day_week, month, year) {
		$Game_Time.setTime(sec, min, hour, day, day_week, month, year);
	}
);

Game_Interpreter.prototype.setGameTimeSpeed = function(speed) {
	$Game_Time.setTimeSpeed(speed);
};

Game_Interpreter.prototype.changeGameTime = function(type, value) {
	$Game_Time.changeTime(type, value);
};

Game_Interpreter.prototype.stopGameTimeUpdate = function() {
	$Game_Time.time_update = false;
};

Game_Interpreter.prototype.continueGameTimeUpdate = function() {
	$Game_Time.time_update = true;
};

Game_Interpreter.prototype.getGameTimeUpdate = function() {
	return $Game_Time.time_update;
};

Game_Interpreter.prototype.setGameTimeStaticHour = function(hour) {
	$Game_Time_Tint.setStaticTintHour(hour);
};

Game_Interpreter.prototype.stopGameTimeUpdateTint = function() {
	$Game_Time_Tint.update_tint = false;
};

Game_Interpreter.prototype.continueGameTimeUpdateTint = function() {
	$Game_Time_Tint.update_tint = true;
};

Game_Interpreter.prototype.getGameTimeUpdateTint = function() {
	return $Game_Time_Tint.update_tint;
};

Game_Interpreter.prototype.setGameTimeTintVisible = function(visible) {
	SceneManager._scene.setGameTimeTintVisible(visible);
};

//=============================================================================
// Data Manager
//=============================================================================

var Game_Time_DataManager_createGameObjects = DataManager.createGameObjects;
DataManager.createGameObjects = function() {
	Game_Time_DataManager_createGameObjects.call(this);
	$Game_Time = new Game_Time();
	$Game_Time_Tint = new Game_Time_Tint();
	$Saved_Game_Time = new Game_Time($Game_Time);
};

var Game_Time_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function() {
	var contents = Game_Time_DataManager_makeSaveContents.call(this);
	contents.Game_Time = $Game_Time;
	contents.Game_Time_Tint_update_tint = $Game_Time_Tint.update_tint;
	contents.Game_Time_Tint_static_tint_hour = $Game_Time_Tint.static_tint_hour;
	contents.Saved_Game_Time = $Saved_Game_Time;
	return contents;
};

var Game_Time_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function(contents) {
	Game_Time_DataManager_extractSaveContents.call(this, contents);
	if (contents.Game_Time) $Game_Time = contents.Game_Time;
	if (contents.Game_Time_Tint_update_tint) $Game_Time_Tint.update_tint = contents.Game_Time_Tint_update_tint;
	if (contents.Game_Time_Tint_static_tint_hour) $Game_Time_Tint.static_tint_hour = contents.Game_Time_Tint_static_tint_hour;
	if (contents.Saved_Game_Time) $Saved_Game_Time = contents.Saved_Game_Time;
};