const menuData = {};
const messageData = {};
const categoryData = {};
const birdsData = {};

birdsData.rus = [
  [
    {
      id: '1',
      name_latin: 'Passer domesticus',
      name: 'Воробей',
      description:
        'Наиболее распространённый вид из рода настоящих воробьёв семейства воробьиных. Одна из самых известных птиц, обитающая по соседству с жилищем человека и хорошо узнаваемая как по внешнему виду, так и по характерному чириканью.',
      category_id: '1',
      category_name: 'Городские птицы',
      img: './assets/img/birds/city/sparrow.jpg',
      sound: './assets/sound/birds/city/sparrow.mp3',
    },
    {
      id: '2',
      name_latin: 'Columba',
      name: 'Голубь',

      description:
        'Голуби считаются одними из самых интересных и распространенных видов птиц, встречающихся на нашей планете практически в любой географической точке',
      category_id: '1',
      category_name: 'Городские птицы',
      img: './assets/img/birds/city/pigeon.jpg',
      sound: './assets/sound/birds/city/pigeon.mp3',
    },
    {
      id: '3',
      name_latin: 'Pica pica',
      name: 'Сорока',
      description:
        'Сороки населяют всю Европу от Нордкапа в Скандинавии до южных оконечностей Испании и Греции. Она отсутствует только на нескольких островах Средиземного моря. Также населяет части прибрежных областей Марокко, Алжира, Туниса на севере Африки. Сорока — это оседлая птица, но в Скандинавии также и перелётная.',
      category_id: '1',
      category_name: 'Городские птицы',
      img: './assets/img/birds/city/magpie.jpg',
      sound: './assets/sound/birds/city/magpie.mp3',
    },
    {
      id: '4',
      name_latin: 'Corvidae',
      name: ' Ворона',
      description:
        'Род птиц из семейства врановых (Corvidae). Род включает виды, известные как во́роны, воро́ны, грачи и галки. Между «во́ронами» и «воро́нами» нет чёткого различия, так как эти наименования присваиваются различным видам главным образом на основе их размера: во́роны, как правило, крупнее ворон.',
      category_id: '1',
      category_name: 'Городские птицы',
      img: './assets/img/birds/city/crow.jpg',
      sound: './assets/sound/birds/city/crow.mp3',
    },
    {
      id: '5',
      name_latin: 'Hirundinidae',
      name: ' Ласточка',
      description:
        'Мелкая птица семейства ласточковых, широко распространённая в Европе, Северной Африке и умеренных широтах Азии. Как и сизый голубь, изначально обитательница скал, легко адаптировалась к жизни в городских условиях. Перелётный вид, зимует в Африке южнее Сахары и в тропической Азии',
      category_id: '1',
      category_name: 'Городские птицы',
      img: './assets/img/birds/city/martin.jpg',
      sound: './assets/sound/birds/city/martin.mp3',
    },
    {
      id: '6',
      name_latin: 'Parus major',
      name: ' Синица',
      description:
        'Широко распространённая птица из семейства синицевых, отряда воробьинообразных. Обитает на всей территории Европы, Ближнего Востока, Центральной и Северной Азии, в некоторых районах Северной Африки',
      category_id: '1',
      category_name: 'Городские птицы',
      img: './assets/img/birds/city/tit.jpg',
      sound: './assets/sound/birds/city/tit.mp3',
    },
    {
      id: '7',
      name_latin: 'Struthio camelus',
      name: ' Страус',
      description:
        'Бескилевая нелетающая птица семейства страусовых (Struthionidae). Его научное название в переводе с греческого означает «воробей-верблюд» ',
      category_id: '2',
      category_name: 'Южные птицы',
      img: './assets/img/birds/southern/ostrich.jpg',
      sound: './assets/sound/birds/southern/ostrich.mp3',
    },
    {
      id: '8',
      name_latin: 'Phoenicopterus',
      name: ' Фламинго',
      description:
        'Род птиц из семейства фламинговых отряда фламингообразных. К роду фламинго относятся самые крупные представители семейства — красный и розовый фламинго. Хотя Аллен полагал, что розовый фламинго является самым крупным, а красный лишь слегка уступает ему размерами[',
      category_id: '2',
      category_name: 'Южные птицы',
      img: './assets/img/birds/southern/flamingo.jpg',
      sound: './assets/sound/birds/southern/flamingo.mp3',
    },
    {
      id: '9',
      name_latin: 'Psittacidae',
      name: ' Попугай',
      description:
        'Птицы из отряда попугаеобразных, семейства попугаевые, латинское название «Psittacidae». Всего на земле их существует более 300 видов, различных размеров и окраски.',
      category_id: '2',
      category_name: 'Южные птицы',
      img: './assets/img/birds/southern/parrot.jpg',
      sound: './assets/sound/birds/southern/parrot.mp3',
    },
    {
      id: '10',
      name_latin: 'Pavo cristatus',
      name: ' Павлин',
      description:
        'Является монотипическим видом, то есть не подразделяется на подвиды, однако имеет целый ряд цветовых вариаций (мутаций). Одомашнен человеком.',
      category_id: '2',
      category_name: 'Южные птицы',
      img: './assets/img/birds/southern/peacock.jpg',
      sound: './assets/sound/birds/southern/peacock.mp3',
    },
    {
      id: '11',
      name_latin: 'Gruiformes',
      name: 'Журавль',
      description:
        'Это отряд крупных птиц семейства журавлеобразных. Внешний вид всех журавлей имеет общие характерные черты: длинные ноги, удлиненная шея и длинный тонкий клюв.',
      category_id: '2',
      category_name: 'Южные птицы',
      img: './assets/img/birds/southern/crane.jpg',
      sound: './assets/sound/birds/southern/crane.mp3',
    },
    {
      id: '12',
      name_latin: 'Ramphastos sulfuratus',
      name: 'Радужный тукан',
      description:
        'Вид туканов из рода Ramphastos. Радужный тукан распространён в тропических лесах от Южной Мексики до северной Колумбии и северо-восточной Венесуэлы. Встречается до высоты 1900 метров',
      category_id: '2',
      category_name: 'Южные птицы',
      img: './assets/img/birds/southern/rainbow-toucan.jpg',
      sound: './assets/sound/birds/southern/rainbow-toucan.mp3',
    },
    {
      id: '13',
      name_latin: 'Laridae',
      name: 'Чайка',
      description:
        'Семейство птиц отряда ржанкообразных, обитающих в морских акваториях либо внутренних водоёмах, а также в пределах населённых пунктов. Известны с олигоцена. В семейство включают 22 рода и 100 видов, в том числе таксоны, ранее входившие в семейства водорезовых и крачковых',
      category_id: '3',
      category_name: 'Морские птицы',
      img: './assets/img/birds/sea/gull.jpg',
      sound: './assets/sound/birds/sea/gull.mp3',
    },
    {
      id: '14',
      name_latin: 'Spheniscidae',
      name: ' Пингвин',
      description:
        'Семейство нелетающих морских птиц, единственное современное в отряде пингвинообразных. В него включают 18 современных видов. Все представители этого семейства хорошо плавают и ныряют. ',
      category_id: '3',
      category_name: 'Морские птицы',
      img: './assets/img/birds/sea/penguin.jpg',
      sound: './assets/sound/birds/sea/penguin.mp3',
    },
    {
      id: '15',
      name_latin: 'Fratercula arctica',
      name: 'Атлантический тупик',
      description:
        'вид морских птиц из семейства чистиковых отряда ржанкообразных. Обитают на побережьях Атлантического и Северного Ледовитого океанов. Гнездятся в норах на птичьих базарах. Питаются рыбой, в основном песчанками.',
      category_id: '3',
      category_name: 'Морские птицы',
      img: './assets/img/birds/sea/atlantic-puffin.jpg',
      sound: './assets/sound/birds/sea/atlantic-puffin.mp3',
    },
    {
      id: '16',
      name_latin: 'Diomedea',
      name: ' Альбатрос',
      description:
        'Род морских птиц, относящийся к семейству альбатросовых. Прежде род включал в себя все виды семейства за исключением дымчатых альбатросов, однако в 1996 году было принято решение зарегистрировать два новых рода Thalassarche и Phoebastria и часть птиц перенести туда. ',
      category_id: '3',
      category_name: 'Морские птицы',
      img: './assets/img/birds/sea/albatross.jpg',
      sound: './assets/sound/birds/sea/albatross.mp3',
    },
    {
      id: '17',
      name_latin: 'Pelecanus',
      name: ' Пеликан',
      description:
        'Род птиц, единственный в семействе пеликановых (Pelecanidae) отряда пеликанообразных. Включает 8 видов. Распространены пеликаны спорадично, в умеренном и тропическом поясах всех континентов, кроме Антарктиды. Виды умеренных широт перелётные.',
      category_id: '3',
      category_name: 'Морские птицы',
      img: './assets/img/birds/sea/pelican.jpg',
      sound: './assets/sound/birds/sea/pelican.mp3',
    },
    {
      id: '18',
      name_latin: 'Alca torda',
      name: ' Гагарка',
      description:
        'Вид морских птиц из семейства чистиковых. После истребления нелетающей бескрылой гагарки в XIX веке этот вид остался единственным в роде гагарок. ',
      category_id: '3',
      category_name: 'Морские птицы',
      img: './assets/img/birds/sea/gagarka.jpg',
      sound: './assets/sound/birds/sea/gagarka.mp3',
    },
    {
      id: '19',
      name_latin: 'Dendrocopos major',
      name: ' Дятел',
      description:
        'Cемейство птиц входящее в отряд дятлообразных. Занимает в нём центральное положение (включая 34 из 76 родов и 233 из 440 видов отряда). Характерная черта подавляющего большинства представителей семейства — долотообразный клюв, с помощью которого дятлы долбят кору и сердцевину дерева, извлекая оттуда пищу — насекомых и их личинок.',
      category_id: '4',
      category_name: 'Лесные птицы',
      img: './assets/img/birds/forest/woodpecker.jpg',
      sound: './assets/sound/birds/forest/woodpecker.mp3',
    },
    {
      id: '20',
      name_latin: 'Apus apus',
      name: ' Стриж',
      description:
        'Cемейство высоко воздушных птиц (Apodidae). Внешне они похожи на ласточек, но не являются близкими родственниками ни одному из видов воробьиных. Стрижи помещены в отряд Apodiformes вместе с колибри. Древесные стрижи тесно связаны с настоящими стриж, но образуют отдельное семейство, Hemiprocnidae.',
      category_id: '4',
      category_name: 'Лесные птицы',
      img: './assets/img/birds/forest/swift.jpg',
      sound: './assets/sound/birds/forest/swift.mp3',
    },
    {
      id: '21',
      name_latin: 'Phasianus colchicus',
      name: ' Фазан',
      description:
        'Вид птиц из подсемейства Phasianinae семейства Phasianidae. Азиатский вид, частично встречается и в Европе. Также интродуцирован в другие части света.',
      category_id: '4',
      category_name: 'Лесные птицы',
      img: './assets/img/birds/forest/pheasant.jpg',
      sound: './assets/sound/birds/forest/pheasant.mp3',
    },
    {
      id: '22',
      name_latin: 'Strigidae',
      name: ' Сова',
      description:
        'Совы охотятся в основном на мелких млекопитающих, насекомых и других птиц, хотя несколько видов специализируются на охоте на рыбу. Они встречаются во всех регионах Земли, кроме полярных ледяных шапок и некоторых отдаленных островов.',
      category_id: '4',
      category_name: 'Лесные птицы',
      img: './assets/img/birds/forest/owl.jpg',
      sound: './assets/sound/birds/forest/owl.mp3',
    },
    {
      id: '23',
      name_latin: 'Cuculus canorus',
      name: ' Кукушка',
      description:
        'Семейство из отряда кукушкообразных птиц, близких к воробьинообразным. Самый известный представитель семейства — обыкновенная кукушка. Можно встретить на всех континентах, кроме Антарктиды. Отсутствуют также на крайнем севере, на юго-западе Северной Америки и в слишком засушливых регионах Ближнего Востока и Северной Африки. Некоторые виды семейства совершают миграции',
      category_id: '4',
      category_name: 'Лесные птицы',
      img: './assets/img/birds/forest/cuckoo.jpg',
      sound: './assets/sound/birds/forest/cuckoo.mp3',
    },
    {
      id: '24',
      name_latin: 'Tetrao urogallus',
      name: ' Глухарь ',
      description:
        'Крупная птица из семейства фазановых, отряда курообразных. Названием «глухарь» птица обязана известной особенности токующего в брачный период самца утрачивать чуткость и бдительность, чем часто пользуются охотники.',
      category_id: '4',
      category_name: 'Лесные птицы',
      img: './assets/img/birds/forest/capercaillie.jpg',
      sound: './assets/sound/birds/forest/capercaillie.mp3',
    },
    {
      id: '25',
      name_latin: 'Falco peregrinus',
      name: ' Сокол',
      description:
        'Род хищных птиц из семейства соколиных, широко распространённых в мире. Научное название Falco является производным от латинского слова «falx» («серп») и подчёркивает серпообразную форму крыльев в полёте.',
      category_id: '5',
      category_name: 'Хищьные птицы',
      img: './assets/img/birds/predators/falcon.jpg',
      sound: './assets/sound/birds/predators/falcon.mp3',
    },
    {
      id: '26',
      name_latin: 'Accipiter gentilis',
      name: ' Ястреб',
      description:
        'Подсемейство хищных птиц из семейства ястребиных. В более широком смысле, я́стребом называют любую птицу из этого подсемейства. На территории России широкое распространение имеют ястреб-перепелятник и ястреб-тетеревятник.',
      category_id: '5',
      category_name: 'Хищьные птицы',
      img: './assets/img/birds/predators/hawk.jpg',
      sound: './assets/sound/birds/predators/hawk.mp3',
    },
    {
      id: '27',
      name_latin: 'Aquila nipalensis',
      name: ' Орел',
      description:
        'Род крупных птиц семейства ястребиных. Длина тела 75—88 см, хвост довольно короткий, крылья широкие, до 2,4 м в размахе, ноги оперены до пальцев. Распространены в Евразии, Африке и Северной Америке от лесотундры до пустынь.',
      category_id: '5',
      category_name: 'Хищьные птицы',
      img: './assets/img/birds/predators/eagle.jpg',
      sound: './assets/sound/birds/predators/eagle.mp3',
    },
    {
      id: '28',
      name_latin: 'Cathartidae',
      name: ' Американский гриф',
      description:
        'Семейство птиц из отряда ястребообразных (Accipitriformes), обитающих в районах с умеренным и тропическим климатом Северной и Южной Америки. Семейство в разное время относили также к отрядам соколообразных, аистообразных или грифов Нового Света (Cathartiformes). Представители семейства характеризуются крупными размерами и парящим полётом; питаются падалью.',
      category_id: '5',
      category_name: 'Хищьные птицы',
      img: './assets/img/birds/predators/american-vulture.jpg',
      sound: './assets/sound/birds/predators/american-vulture.mp3',
    },
    {
      id: '29',
      name_latin: 'Pandion haliaetus',
      name: ' Скопа',
      description:
        'Хищная птица, распространённая в обоих полушариях, единственный представитель монотипического семейства скопиных (Pandionidae)',
      category_id: '5',
      category_name: 'Хищьные птицы',
      img: './assets/img/birds/predators/osprey.jpg',
      sound: './assets/sound/birds/predators/osprey.mp3',
    },
    {
      id: '30',
      name_latin: 'Aquila chrysaetos',
      name: ' Беркут',
      description:
        'Одна из наиболее известных хищных птиц семейства ястребиных, самый крупный орёл. Распространён в Северном полушарии, где обитает преимущественно в горах, в меньшей степени на равнинных открытых и полуоткрытых ландшафтах. Избегает жилых районов, чувствителен к беспокойству со стороны человека. На большей части ареала живёт оседло, держится парами возле гнезда, на северной периферии области распространения и высокогорья часть птиц откочёвывает в менее снежные районы. ',
      category_id: '5',
      category_name: 'Хищьные птицы',
      img: './assets/img/birds/predators/berkut.jpg',
      sound: './assets/sound/birds/predators/berkut.mp3',
    },
  ],
];

birdsData.eng = [
  [
    {
      id: '1',
      name_latin: 'Passer domesticus',
      name: ' Sparrow',
      description:
        'The most common species from the genus of true sparrows of the passerine family. One of the most famous birds that lives in the neighborhood of a human dwelling and is well recognizable both in appearance and in its characteristic chirp.',
      category_id: '1',
      category_name: 'Сity birds',
      img: './assets/img/birds/city/sparrow.jpg',
      sound: './assets/sound/birds/city/sparrow.mp3',
    },
    {
      id: '2',
      name_latin: 'Columba',
      name: ' Pigeon',
      description:
        'Pigeons are considered one of the most interesting and common bird species found on our planet in almost any geographic location.',
      category_id: '1',
      category_name: 'Сity birds',
      img: './assets/img/birds/city/pigeon.jpg',
      sound: './assets/sound/birds/city/pigeon.mp3',
    },
    {
      id: '3',
      name_latin: 'Pica pica',
      name: ' Magpie',
      description:
        'Magpies inhabit all of Europe from the North Cape in Scandinavia to the southern tip of Spain and Greece. It is absent only on a few islands in the Mediterranean. It also inhabits parts of the coastal regions of Morocco, Algeria, Tunisia in northern Africa. The magpie is a resident bird, but also migratory in Scandinavia.',
      category_id: '1',
      category_name: 'Сity birds',
      img: './assets/img/birds/city/magpie.jpg',
      sound: './assets/sound/birds/city/magpie.mp3',
    },
    {
      id: '4',
      name_latin: 'Corvidae',
      name: ' Crow',
      description:
        'A genus of birds from the corvidae family (Corvidae). The genus includes species known as crows, crows, rooks, and jackdaws. There is no clear distinction between ravens and ravens, as these names are assigned to different species mainly on the basis of their size: crows are usually larger than crows.',
      category_id: '1',
      category_name: 'Сity birds',
      img: './assets/img/birds/city/crow.jpg',
      sound: './assets/sound/birds/city/crow.mp3',
    },
    {
      id: '5',
      name_latin: 'Hirundinidae',
      name: ' Martin',
      description:
        'A small bird of the swallow family, widespread in Europe, North Africa and temperate latitudes of Asia. Like the rock dove, originally an inhabitant of the rocks, it easily adapted to life in urban conditions. Migratory, winters in sub-Saharan Africa and tropical Asia.',
      category_id: '1',
      category_name: 'Сity birds',
      img: './assets/img/birds/city/martin.jpg',
      sound: './assets/sound/birds/city/martin.mp3',
    },
    {
      id: '6',
      name_latin: 'Parus major',
      name: ' Tit',
      description:
        'A widespread bird from the tit family, the order of passeriformes. It lives throughout Europe, the Middle East, Central and North Asia, in some areas of North Africa',
      category_id: '1',
      category_name: 'Сity birds',
      img: './assets/img/birds/city/tit.jpg',
      sound: './assets/sound/birds/city/tit.mp3',
    },
    {
      id: '7',
      name_latin: 'Struthio camelus',
      name: ' Ostrich',
      description:
        'A ratite flightless bird of the ostrich family (Struthionidae). Its scientific name is Greek for camel sparrow.',
      category_id: '2',
      category_name: 'Southern birds',
      img: './assets/img/birds/southern/ostrich.jpg',
      sound: './assets/sound/birds/southern/ostrich.mp3',
    },
    {
      id: '8',
      name_latin: 'Phoenicopterus',
      name: ' Flamingo',
      description:
        'A genus of birds from the flamingo family of the flamingo-like order. The flamingo genus includes the largest representatives of the family - red and pink flamingos. Although Allen believed that the pink flamingo is the largest, and the red one is only slightly inferior to it in size [',
      category_id: '2',
      category_name: 'Southern birds',
      img: './assets/img/birds/southern/flamingo.jpg',
      sound: './assets/sound/birds/southern/flamingo.mp3',
    },
    {
      id: '9',
      name_latin: 'Psittacidae',
      name: ' Parrot',
      description:
        'Birds from the order of parrots, parrot family, Latin name Psittacidae. In total, there are more than 300 species of them on earth, of various sizes and colors.',
      category_id: '2',
      category_name: 'Southern birds',
      img: './assets/img/birds/southern/parrot.jpg',
      sound: './assets/sound/birds/southern/parrot.mp3',
    },
    {
      id: '10',
      name_latin: 'Pavo cristatus',
      name: ' Peacock',
      description:
        'It is a monotypic species, that is, it is not divided into subspecies, but it has a number of color variations (mutations). Domesticated by man.',
      category_id: '2',
      category_name: 'Southern birds',
      img: './assets/img/birds/southern/peacock.jpg',
      sound: './assets/sound/birds/southern/peacock.mp3',
    },
    {
      id: '11',
      name_latin: 'Gruiformes',
      name: ' Crane',
      description:
        'This is a detachment of large birds of the crane family. The appearance of all cranes has common characteristics: long legs, an elongated neck and a long thin beak.',
      category_id: '2',
      category_name: 'Southern birds',
      img: './assets/img/birds/southern/crane.jpg',
      sound: './assets/sound/birds/southern/crane.mp3',
    },
    {
      id: '12',
      name_latin: 'Ramphastos sulfuratus',
      name: ' Rainbow toucan',
      description:
        'A species of toucans from the genus Ramphastos. The rainbow toucan is found in tropical rainforests from southern Mexico to northern Colombia and northeastern Venezuela. Occurs up to a height of 1900 meters',
      category_id: '2',
      category_name: 'Southern birds',
      img: './assets/img/birds/southern/rainbow-toucan.jpg',
      sound: './assets/sound/birds/southern/rainbow-toucan.mp3',
    },
    {
      id: '13',
      name_latin: 'Laridae',
      name: 'Gull',
      description:
        'A family of birds of the order Charadriiformes, living in marine areas or inland waters, as well as within settlements. Known since the Oligocene. The family includes 22 genera and 100 species, including taxa that were previously included in the families of water cutters and terns.',
      category_id: '3',
      category_name: 'Sea birds',
      img: './assets/img/birds/sea/gull.jpg',
      sound: './assets/sound/birds/sea/gull.mp3',
    },
    {
      id: '14',
      name_latin: 'Spheniscidae',
      name: ' Penguin',
      description:
        'A family of flightless seabirds, the only modern one in the penguin-like order. It includes 18 modern species. All members of this family swim and dive well.',
      category_id: '3',
      category_name: 'Sea birds',
      img: './assets/img/birds/sea/penguin.jpg',
      sound: './assets/sound/birds/sea/penguin.mp3',
    },
    {
      id: '15',
      name_latin: 'Fratercula arctica',
      name: ' Atlantic puffin',
      description:
        'species of seabirds from the auk family of the Charadriiformes order. They live on the coasts of the Atlantic and Arctic oceans. They nest in burrows in bird colonies. They feed on fish, mainly gerbils.',
      category_id: '3',
      category_name: 'Sea birds',
      img: './assets/img/birds/sea/atlantic-puffin.jpg',
      sound: './assets/sound/birds/sea/atlantic-puffin.mp3',
    },
    {
      id: '16',
      name_latin: 'Diomedea',
      name: ' Albatross',
      description:
        'A genus of seabirds belonging to the albatross family. Previously, the genus included all species of the family with the exception of sooty albatrosses, but in 1996 it was decided to register two new genera Thalassarche and Phoebastria and transfer some of the birds there.',
      category_id: '3',
      category_name: 'Sea birds',
      img: './assets/img/birds/sea/albatross.jpg',
      sound: './assets/sound/birds/sea/albatross.mp3',
    },
    {
      id: '17',
      name_latin: 'Pelecanus',
      name: ' Pelican',
      description:
        'A genus of birds, the only one in the pelican family (Pelecanidae) of the pelican-like order. Includes 8 types. Pelicans are sporadically distributed in the temperate and tropical zones of all continents except Antarctica. Types of temperate latitudes are migratory.',
      category_id: '3',
      category_name: 'Sea birds',
      img: './assets/img/birds/sea/pelican.jpg',
      sound: './assets/sound/birds/sea/pelican.mp3',
    },
    {
      id: '18',
      name_latin: 'Alca torda',
      name: ' Gagarka',
      description:
        'Species of seabirds from the auk family. After the extermination of the flightless great auk in the 19th century, this species remained the only one in the genus of auks.',
      category_id: '3',
      category_name: 'Sea birds',
      img: './assets/img/birds/sea/gagarka.jpg',
      sound: './assets/sound/birds/sea/gagarka.mp3',
    },
    {
      id: '19',
      name_latin: 'Dendrocopos major',
      name: ' Woodpecker',
      description:
        'A family of birds belonging to the order Woodpeckers. It occupies a central position in it (including 34 out of 76 genera and 233 out of 440 species of the order). A characteristic feature of the vast majority of members of the family is a chisel-shaped beak, with which woodpeckers hollow out the bark and core of a tree, extracting food from there - insects and their larvae.',
      category_id: '4',
      category_name: 'Forest birds',
      img: './assets/img/birds/forest/woodpecker.jpg',
      sound: './assets/sound/birds/forest/woodpecker.mp3',
    },
    {
      id: '20',
      name_latin: 'Apus apus',
      name: ' Swift',
      description:
        'A family of high-air birds (Apodidae). Outwardly, they are similar to swallows, but are not close relatives to any of the passerine species. Swifts are placed in the order Apodiformes along with hummingbirds. Tree swifts are closely related to true swifts, but form a separate family, Hemiprocnidae.',
      category_id: '4',
      category_name: 'Forest birds',
      img: './assets/img/birds/forest/swift.jpg',
      sound: './assets/sound/birds/forest/swift.mp3',
    },
    {
      id: '21',
      name_latin: 'Phasianus colchicus',
      name: ' Pheasant',
      description:
        'Species of birds from the subfamily Phasianinae of the family Phasianidae. Asian species, partially found in Europe. It has also been introduced to other parts of the world.',
      category_id: '4',
      category_name: 'Forest birds',
      img: './assets/img/birds/forest/pheasant.jpg',
      sound: './assets/sound/birds/forest/pheasant.mp3',
    },
    {
      id: '22',
      name_latin: 'Strigidae',
      name: ' Owl',
      description:
        'Owls prey primarily on small mammals, insects, and other birds, although a few species specialize in hunting fish. They are found in all regions of the Earth, except for the polar ice caps and some outlying islands.',
      category_id: '4',
      category_name: 'Forest birds',
      img: './assets/img/birds/forest/owl.jpg',
      sound: './assets/sound/birds/forest/owl.mp3',
    },
    {
      id: '23',
      name_latin: 'Cuculus canorus',
      name: ' Cuckoo',
      description:
        'A family from the order of cuckoo-like birds, close to passerines. The most famous member of the family is the common cuckoo. It can be found on all continents except Antarctica. They are also absent in the far north, southwestern North America, and the overly arid regions of the Middle East and North Africa. Some species of the family migrate',
      category_id: '4',
      category_name: 'Forest birds',
      img: './assets/img/birds/forest/cuckoo.jpg',
      sound: './assets/sound/birds/forest/cuckoo.mp3',
    },
    {
      id: '24',
      name_latin: 'Tetrao urogallus',
      name: ' Capercaillie',
      description:
        'A large bird from the pheasant family, order Galliformes. The name “grouse” is due to the well-known feature of the male current during the mating season, to lose sensitivity and vigilance, which is often used by hunters.',
      category_id: '4',
      category_name: 'Forest birds',
      img: './assets/img/birds/forest/capercaillie.jpg',
      sound: './assets/sound/birds/forest/capercaillie.mp3',
    },
    {
      id: '25',
      name_latin: 'Falco peregrinus',
      name: ' Falcon',
      description:
        'A genus of birds of prey in the falcon family, widespread in the world. The scientific name Falco is derived from the Latin word falx (sickle) and emphasizes the sickle-shaped wings in flight.',
      category_id: '5',
      category_name: 'Predator birds',
      img: './assets/img/birds/predators/falcon.jpg',
      sound: './assets/sound/birds/predators/falcon.mp3',
    },
    {
      id: '26',
      name_latin: 'Accipiter gentilis',
      name: ' Hawk',
      description:
        'A subfamily of birds of prey in the hawk family. In a broader sense, any bird of this subfamily is called a hawk. In the territory of Russia, the Quail and Goshawk are widespread.',
      category_id: '5',
      category_name: 'Predator birds',
      img: './assets/img/birds/predators/hawk.jpg',
      sound: './assets/sound/birds/predators/hawk.mp3',
    },
    {
      id: '27',
      name_latin: 'Aquila nipalensis',
      name: ' Eagle',
      description:
        'A genus of large birds of the Hawk family. Their body length is 75-88 cm, tail rather short, wings broad, up to 2.4 m in wingspan, legs plumed to toes. Widespread in Eurasia, Africa and North America from forest-tundra to deserts.',
      category_id: '5',
      category_name: 'Predator birds',
      img: './assets/img/birds/predators/eagle.jpg',
      sound: './assets/sound/birds/predators/eagle.mp3',
    },
    {
      id: '28',
      name_latin: 'Cathartidae',
      name: ' American Vulture',
      description:
        'A family of birds in the order Accipitriformes, inhabiting temperate and tropical areas of North and South America. At various times, the family was also referred to the Falconiformes, Storks, or New World Vultures (Cathartiformes). Representatives of the family are characterized by large size and soaring flight; they feed on carrion.',
      category_id: '5',
      category_name: 'Predator birds',
      img: './assets/img/birds/predators/american-vulture.jpg',
      sound: './assets/sound/birds/predators/american-vulture.mp3',
    },
    {
      id: '29',
      name_latin: 'Pandion haliaetus',
      name: ' Osprey',
      description:
        'A bird of prey distributed in both hemispheres, the only representative of the monotypic family Scopionidae (Pandionidae)',
      category_id: '5',
      category_name: 'Predator birds',
      img: './assets/img/birds/predators/osprey.jpg',
      sound: './assets/sound/birds/predators/osprey.mp3',
    },
    {
      id: '30',
      name_latin: 'Aquila chrysaetos',
      name: ' Berkut',
      description:
        'One of the most famous birds of prey of the Hawk family, the largest eagle. Widespread in the Northern Hemisphere, where it lives mostly in the mountains, to a lesser extent in flat open and semi-open landscapes. It avoids residential areas and is sensitive to human disturbance. It is sedentary throughout most of its range, keeping pairs near the nest; some birds migrate to less snowy areas on the northern periphery of its range and highlands.',
      category_id: '5',
      category_name: 'Predator birds',
      img: './assets/img/birds/predators/berkut.jpg',
      sound: './assets/sound/birds/predators/berkut.mp3',
    },
  ],
];

categoryData.eng = [
  {
    id: '0',
    category_name: 'Warm up',
    category_image: './assets/img/scene/dafault.jpg',
  },
  {
    id: '1',
    category_name: 'Сity birds',
    category_image: './assets/img/scene/city.jpg',
  },
  {
    id: '2',
    category_name: 'Southern birds',
    category_image: './assets/img/scene/southern.jpg',
  },
  {
    id: '3',
    category_name: 'Sea birds',
    category_image: './assets/img/scene/sea.jpg',
  },
  {
    id: '4',
    category_name: 'Forest birds',
    category_image: './assets/img/scene/forest.jpg',
  },
  {
    id: '5',
    category_name: 'Predator birds',
    category_image: './assets/img/scene/predator.jpg',
  },
];

categoryData.rus = [
  {
    id: '0',
    category_name: 'Разминка',
    category_image: './assets/img/scene/dafault.jpg',
  },
  {
    id: '1',
    category_name: 'Городские птицы',
    category_image: './assets/img/scene/city.jpg',
  },
  {
    id: '2',
    category_name: 'Южные птицы',
    category_image: './assets/img/scene/southern.jpg',
  },
  {
    id: '3',
    category_name: 'Морские птицы',
    category_image: './assets/img/scene/sea.jpg',
  },
  {
    id: '4',
    category_name: 'Леcные птицы',
    category_image: './assets/img/scene/forest.jpg',
  },
  {
    id: '5',
    category_name: 'Хищьные птицы',
    category_image: './assets/img/scene/predator.jpg',
  },
];

menuData.eng = [
  {
    index: 'Start',
    quiz: 'Quiz',
    catalog: 'Catalog',
  },
];
menuData.rus = [
  {
    index: 'Старт',
    quiz: 'Викторина',
    catalog: 'Каталог',
  },
];

messageData.eng = [
  {
    start: 'Welcome!',
    'start-text': "To start, click the 'Start quiz' button",
    score: 'Score',
    'next-level': 'Next level',
    'quiz-title-text': 'Listen to the player. Choose a bird from the list',
    'score-win':
      'You passed the quiz and scored ${score} out of 30 possible points.',
    'start-button': 'Start quiz',
    reply: 'To try one more time!',
    win: 'Congratulations!',
    play: 'Play',
    stop: 'Stop',
    pause: 'Pause',
    catalog: 'Bird catalog',
    'score-win-max':
      'You passed the quiz with the highest ${score} out of 30 possible points',
    'win-max': 'Congratulations! You have scored the maximum score!',
  },
];
messageData.rus = [
  {
    start: 'Добро пожаловать!',
    'start-text': "Для старта нажмите кнопку 'Начать викторину'",
    score: 'Результат',
    'next-level': 'Следующий уровень',
    'quiz-title-text': 'Послушайте плеер. Выберите птицу из списка',
    'score-win':
      'Вы прошли викторину и набрали ${score} из 30 возможных баллов.',
    'start-button': 'Начать викторину',
    reply: 'Попробовать еще раз!',
    win: 'Поздравляем!',
    play: 'Воспроизвести',
    stop: 'Стоп',
    pause: 'Пауза',
    catalog: 'Каталог птиц',
    'score-win-max':
      'Вы прошли викторину, набрав наибольшее количество баллов: ${score} из 30 возможных.',
    'win-max': 'Поздравляем! Вы набрали максимальный балл!',
  },
];

export {
  birdsData, menuData, messageData, categoryData,
};
