"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("books", [
      {
        title: "merlin",
        language: "tr",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=jWlyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Fincayra, her yeri yakıp kül eden bir kötülüğün etkisi altında. Ve bu şeytani gücün tek isteği Merlin’in yok olması. Genç büyücünün yurdunu ve kaderini kurtarmak için yapması gereken yolculuk ise bu gücün kendisinden de tehlikeli. Sırlarla dolu bir aynanın içindeki sislerde yolculuk edip, görmeyi en son beklediği kişilerle karşılaşacak olan Merlin’in yazgısında bir gün muhteşem bir büyücü olmak mı yatmakta yoksa gelecek çok daha farklı bir biçimde mi yaşanacak? Bu soruları yanıtlayabilecek tek kişi yine Merlin olacak.",
        author: "T. A. Barron",
        borrowingPeriod: 14,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Bir Anne, Bir Kadın, Bir İnsan",
        language: "tr",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=MG_wBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Ailesi tarafından okuması engellenen; daha ortaokul yıllarında tanışıp, büyük bir aşkla sevdiği adamın ihanetine uğrayan; yine ailesi tarafından erken yaşta zorla evlendirilen; yaşamı boyunca her türden olumsuzluğu tadan, bahtsız bir kadın… Özverili bir anne… Evli olmasına rağmen gerçek aşkı aramaktan asla vazgeçmeyen tutkulu bir kadın… Darda olanlara yardım için canını verecek kadar asil ruhlu bir insan… Köy kökenli bir kadından beklenmeyecek kadar etkili konuşan, bakımlı ve güzel. Muhatap olduğu her türden erkeğin ahlaksız teklifine ve tacizine maruz kalan… Her şeye rağmen yaşamdan kopmayan, hiçbir haksızlığa boyun eğmeyen savaşçı ruhlu bir kadın…",
        author: "Çağrı Karlıdağ",
        borrowingPeriod: 28,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Mabedin Sırrı",
        language: "tr",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=Vn7jCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        description:
          "Göbeklitepe ile ilgili tüm bildiklerinizi unutun! Gerçekler henüz söylenmedi! Profesör oraya ‘Kainatın Göbeği’ adını vermişti. Tarihin bu ‘kara deliği’ henüz kimsenin bilmediği bir gizem daha taşıyordu içinde: Kuantum bombasını! Ve bu bomba patladığında algılanan dünyanın çöküşü gerçekleşecekti. Ama önce mabedin, bir şuurda yeniden inşası gerekiyordu. Peki neresiydi burası? İnsanın yaratıldığı ilk bahçe olabilir miydi? Ya da insanın dünyaya düştüğü ilk yer? Kim bilebilir? Harran Ovası’nın kuzeyinde kalan bu tılsımlı tepede dile gelmeyi bekleyen muammayı sıra dışı bir dedektif çözebilirdi. Mana dedektifi Hafi, kadim bir topluluğun bugün izlerini taşıyan bir geleneğin ocağında yetişmişti. Fakat ilahi bir sır sonucu berzah âleminde kaybolmuş ve yolunu tekrar bulmak için tuhaf bir plan yapmıştı. Bu romanda Hafi ile birlikte, kaybolduğu ummandan çıkacak, güzelliğine âşık olduğu ama ismini asla öğrenemediği gizemli kadının izini sürecek ve yıllardır peşinde olduğu tuhaf bir adamın da iç dünyasına seyahat edeceksiniz. Bir yandan da Göbeklitepe’nin gizemini araştırırken, bilginin ışığında onunla birlikte aydınlanacak, Arifler Meclisi ile tanışacaksınız. Tarihin taşlaşmış belleğinde tuhaf bir vak’a sizi bekliyor. Göbeklitepe’deki dünyanın ilk mabedine iniyoruz! “Olmak için ölmek, ölmek içinse kaybolmak gerekiyordu.",
        author: "Kaan Demirdöven",
        borrowingPeriod: 28,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Bela-Osmanlı'da Bir Vampir",
        language: "tr",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=scVmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Balkanların bir parçası olarak hâlâ bir vampir kahramanımızın olmaması tuhaftı doğrusu. Artık bir Osmanlı vampirimiz var. Öteki’leri bol Osmanlı tarihine bu kez de vampirler dahil oluyor. XIX. yüzyılda doğup günümüze kadar yaşıyor olmanın zengin hatıra ve tecrübelerine sahip bir vampir bu. Erken ölmüş bütün “rock star”lar gibi o da hâlâ 27 yaşında. Üstelik köçeklik yapması söz konusu bu hatıra ve tecrübeleri hayli renkli kılıyor. Resimli tarih kitaplarına özgü canlı kanlı sahnelerle, sürükleyici bir anlatımla ilerleyen eğlenceli bir roman Osmanlı’da Bir Vampir",
        author: "Mehmet Bilal",
        borrowingPeriod: 14,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Hükümdar",
        language: "tr",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=b6GfDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "İtalyan Rönesans hareketinin en önemli figürlerinden biri olan Floransalı yazar Niccolò Machiavelli (1469-1527) tarafından 1513 yılında o dönemde Floransa'yı yöneten Lorenzo Di Piero De Medici'ye ithafen yazılan ve orijinal adı “Il Principe” olan bu eser, güçlü bir hükümdarlığın nasıl oluşturulabileceği ve nasıl daha da güçlendirebileceği konusunu ele alır. Machiavelli'ye göre ahlaki ilkeler duruma göre değişebilir. Bir hükümdar sevilmekten çok korkulmalıdır ama yine de kendinden nefret ettirmemelidir. “Dolayısıyla, bir hükümdarın yukarıda belirttiğim bütün iyi niteliklere sahip olması gerekli değildir, ama bunlara sahipmiş gibi görünmesi son derece önemlidir. Hatta daha da öteye gidip şunu belirtmeliyim; bu niteliklere sahip olmak ve her zaman uymak zararlı, sahipmiş gibi görünmek ise yararlıdır",
        author: "Niccolo Machiavelli",
        borrowingPeriod: 42,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Васса Железнова",
        language: "ru",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=p3NKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "«Золотой фонд мировой литературы» - коллекция электронных книг, включающая лучшие образцы мировой художественной литературы, представляет собой максимально исчерпывающий список самых читаемых книг мира. Каждое из произведений, изданных под обложкой этой серии, входит в один или сразу несколько списков лучших книг по разным версиям, которые не противопоставляются один другим, а гармонично объединяются, чтобы предоставить читателю наибольший выбор.«Васса Железнова» - произведение русского прозаика и драматурга, одного из самых известных в мире русских писателей и мыслителей А. М. Горького (1868 – 1936).*** Пьеса написана в 1910 году. Повествует о владелице пароходной компании, распаде большой семьи. Традиционно идея пьесы рассматривалась как изображение разложения буржуазии. В последние годы критики уделяют больше внимания образу Вассы, недюжинности ее характера. Перу Горького принадлежат и такие произведения: «Вездесущее», «Весельчак», «Вечер у Панашкина», «Вечер у Сухомяткина», «Вечер у Шамова»",
        author: "Максим Горький",
        borrowingPeriod: 28,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Тернистый путь к счастью",
        language: "ru",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=Cpv6DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Более тринадцати с половиной тысяч лет тому назад на территории нынешней Европы существует страна Эльклея. Ее свободолюбивые жители с оружием в руках противостоят агрессии государств, образовавшихся после распада Атлантиды. Командировка на пограничье Алчиты, учительницы-воина одной из школ Эльклеи, заканчивается для нее пленением наемниками. Приключенческий роман «Тернистый путь к счастью» об испытаниях, которые проходит в плену Алчита на вражеской территории, а также о действиях ее освободителя – Зиада.",
        author: "Андрей Прохоренко, Иван Глемба",
        borrowingPeriod: 28,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Свои люди – сочтемся",
        language: "ru",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=V9pLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Свои люди – сочтемся» — замечательная комедия знаменитого русского драматурга Александра Николаевича Островского (1823 — 1886).*** Купец Большов увяз в долгах и, чтобы отвертеться от кредиторов, принимает решение объявить себя банкротом. Но для этого ему нужно переписать свое имущество на кого-то, кому можно доверять. И тут появляется приказчик Подхалюзин, который уже придумал целый план, включающий женитьбу на купеческой дочке... Другими известными произведениями Александра Островского являются «Семейная картина», «Утро молодого человека», «Бедная невеста», «Не в свои сани не садись», «Бедность не порок», «Не так живи, как хочется», «В чужом пиру похмелье», «Доходное место», «Праздничный сон - до обеда», «Шутники». Творчество Александра Николаевича Островского сыграло важнейшую роль в развитии русского национального театра. Его пьесы не сходят с театральных сцен и по сегодняшний день.",
        author: "Александр Островский",
        borrowingPeriod: 42,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Ричард Длинные Руки – маркграф",
        language: "ru",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=xdW_AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Непросто нанести поражение сильному противнику. Еще труднее остаться в захваченном королевстве и удержаться, когда в противниках не только блистательные и гордые рыцари, но маги, тролли, оборотни, колдуны и волшебники......но опаснее всех могущественные лорды, владеющие летательными аппаратами!",
        author: "Гай Орловский",
        borrowingPeriod: 14,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Ноль пополудни. История одной девчонки",
        language: "ru",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=oB4WDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Мечта как уходящий поезд: у одних счастливчиков был билет, другие успели уцепиться за состав, а большинство толкается в погоне за чужой мечтой. Пусть однажды поезд вашей мечты дождётся вас у дверей вашего дома. И тогда – счастливого пути!",
        author: "Даша Ивлиева",
        borrowingPeriod: 28,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Les Intéressants",
        language: "fr",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=jbh5CgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "En 1974, Julie passe son été à Spirit-in-the-Wood, une colonie de vacances. Elle y rencontre un groupe de cinq adolescents qui se sont baptisés les «Intéressants» : Ethan, un surdoué des films d'animation ; Goodman et sa soeur Ash, jeunes New-Yorkais bien nés ; Jonah, le fils d'une célèbre chanteuse folk, icône de la contre-culture, et enfin Cathy qui rêve de devenir danseuse.",
        author: "Meg Wolitzer",
        borrowingPeriod: 14,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Éparse",
        language: "fr",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=T4M_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "À travers une série de fragments, Lisa Balavoine – la quarantaine, divorcée et mère imparfaite de trois enfants – fait le tour de son existence comme on fait le tour du propriétaire, et signe le roman espiègle et nostalgique de toute une génération. Convoquant la mémoire de chansons, de films, d’événements emblématiques des années 80 à aujourd’hui, entremêlant souvenirs de jeunesse et instantanés de sa vie quotidienne, elle fait de son histoire intime un récit dans lequel chacun peut se reconnaître. Car les questions qu’elle pose (sur l’éternel recommencement de l’amour, sur les héritages et la transmission...) sont les nôtres. Car ses doutes, ses joies, ses peines fugaces ou durables, nous les connaissons. Car les inventaires audacieux qu’elle propose (description à la Perec d’un tiroir de salle de bain, arguments pour ou contre la vie de couple, liste de ses phobies, déclarations d’amour aux acteurs qu’elle a aimés...) nous renvoient à nos propres obsessions. Telle est la prouesse de ce livre : à mesure que l’auteur rassemble les morceaux de son puzzle personnel et tente l’autopsie de la première moitié de sa vie, c’est le lecteur qui se redécouvre lui-même.",
        author: "Lisa Balavoine",
        borrowingPeriod: 28,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Grossir le ciel",
        language: "fr",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=YYemCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Sélection Prix Polar SNCF Les Doges, un lieu-dit au fin fond des Cévennes. C’est là qu’habite Gus, un paysan entre deux âges solitaire et taiseux. Ses journées : les champs, les vaches, le bois, les réparations. Des travaux ardus, rythmés par les conditions météorologiques. La compagnie de son chien, Mars, comme seul réconfort. C’est aussi le quotidien d’Abel, voisin dont la ferme est éloignée de quelques mètres, devenu ami un peu par défaut, pour les bras et pour les verres. Un jour, l’abbé Pierre disparaît, et tout bascule : Abel change, des événements inhabituels se produisent, des visites inopportunes se répètent",
        author: "Franck Bouysse",
        borrowingPeriod: 28,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Rêver n'est pas un vilain défaut",
        language: "fr",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=87RIDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "À bientôt trente ans, Elisabeth a des rêves plein la tête. Elle aimerait être écrivain, voudrait être un peu moins enrobée et ne plus être l’éternelle célibataire que l’on regarde avec pitié. Mais voilà, elle fait partie des femmes qui passent inaperçues. Trop c’est trop ! Invitée à la soirée de gala des anciens étudiants (qu’elle n’a pas revu depuis dix ans), elle décide qu’elle n’ira pas toute seule pour ne pas subir les moqueries de ses anciennes camarades.",
        author: "Carole Cerruti",
        borrowingPeriod: 28,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Nul ne saura",
        language: "fr",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=VhBxDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        description:
          "Alors qu'il arpente la plage de Sarasota, en Floride, avec son détecteur de métaux, Vincent, onze ans, fait une découverte macabre : sous un lit d'algues gît une main ornée d'un rubis. S'il prévient aussitôt les autorités, il se garde bien de leur remettre son « trésor », dont il espère tirer un bon prix... Lui et ses proches deviennent dès lors la cible d'un homme prêt à tout pour récupérer la bague. Cassie Sheridan, ex-chroniqueuse vedette de Key News dépêchée sur place pour rendre compte de la progression d'un cyclone, pressent qu'elle tient là un scoop - et une chance de remettre sa carrière sur les rails.",
        author: "Mary Jane Clark",
        borrowingPeriod: 28,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Archangel One. Tom 1. Anioły w czerni",
        language: "pl",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=qhHADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Elitarna eskadra wyrusza na tajną misję za liniami wroga w kontynuacji sagi Odyssey One. Sprzymierzone siły Ziemi i Priminae zdołały wywalczyć kruchy rozejm z Imperium – jeśli jednak nie uda się przenieść walki na terytorium wroga, zagłada jest nieuchronna. Przygotowując się na nieunikniony wybuch kolejnej wojny, komandor Stephen Michaels obejmuje dowództwo nad eskadrą Archaniołów. Jego rozkazy są proste: zrzucić mundur i wyruszyć w bezkresną ciemność. Przyjmując role najemników, Michaels wraz z Archaniołami poszukują bezcennych informacji mogących podważyć potęgę najeźdźców. Misja prowadzi ich w niezbadane rejony Galaktyki, gdzie znów przychodzi im zmierzyć się ze wszechobecnym wpływem Imperium. ",
        author: "Evan Currie",
        borrowingPeriod: 28,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Lontano",
        language: "pl",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=V748DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Atrydzi załatwiali porachunki, przelewając krew. Morvanowie zagrzebują swoje trupy pod chwalebnymi sztandarami Republiki. Ojciec jest najważniejszym gliniarzem Francji, starszy syn pracuje w kryminalnej, młodszy robi karierę w świecie finansów, a córka, najmłodsza z rodzeństwa, za wszelką cenę próbuje zaistnieć w branży filmowej… To nienawiść pełni w rodzinie Morvanów funkcję najsilniejszego spoiwa. Lecz kiedy Człowiek Gwóźdź – mityczny morderca z lat 70., którego schwytaniem zasłynął senior rodu – nieoczekiwanie wynurza się z afrykańskiej przeszłości, klan musi naprawdę zewrzeć szeregi. Pośród intryg finansowych i pokątnego handlu cennymi minerałami, w świecie magii yombe i posępnych szpiegowskich nor, rodzinie przyjdzie stawić czoło nieprzeciętnemu mordercy, o którym po czterdziestu latach zdążyła już zapomnieć.",
        author: "Jean-Christophe Grangé",
        borrowingPeriod: 28,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Prawda",
        language: "pl",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=TayFAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Najnowsza powieść niezrównanego Michaela Palina, dowcipna i pełna ciepła. Zwykły zjadacz chleba, kusząca oferta, niesamowita podróż przez Indie. Keith Mabbut – niespełniony pisarz i dziennikarz – znajduje się na życiowym zakręcie, kiedy los zsyła mu okazję, która może diametralnie odmienić jego byt: otrzymuje propozycję napisania bestsellerowej z założenia biografii nieuchwytnego Hamisha Melville’a, wpływowego aktywisty, ekologa i obrońcy praw człowieka. Próby poznania prawdziwej historii tej żywej legendy prowadzą dziennikarza do wschodnich Indii, gdzie staje się świadkiem rujnowania świata miejscowych plemion i niszczenia przyrody przez ściągający tam przemysł.",
        author: "Michael Palin",
        borrowingPeriod: 28,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Przepowiednia",
        language: "pl",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=R7JoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Pełna tajemnic opowieść o przeznaczeniu, które zawsze nas odnajdzie Semele jest badaczką starożytnych rękopisów w ekskluzywnym domu aukcyjnym na Manhattanie. Kiedy trafia na bezcenny manuskrypt z czasów Kleopatry opisujący historię pewnej talii tarota, wie, że to najważniejsze odkrycie w jej karierze. Rękopis okazuje się dziełem potężnego jasnowidza, który przewidział wojny i klęski na tysiące lat przed ich wystąpieniem. Semele zagłębia się w treść tekstu i wkrótce odkrywa, że manuskrypt zaczyna wpływać na jej życie",
        author: "Gwendolyn Womack",
        borrowingPeriod: 28,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Elegancki morderca",
        language: "pl",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=1Wy0DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Jedna z najgłośniejszych historii kryminalnych powojennej Polski. Znajomi i sąsiedzi mówili o nim, że dobrze wychowany, kulturalny, uczynny, taki wrażliwy – często jeździł na grób swojego pieska, posadził tam nawet kwiaty. Na zdjęciach z prokuratorskich akt wygląda jak filmowy amant. Ciemne, zaczesane do góry włosy, wyniosła mina bez cienia uśmiechu; biała koszula, krawat, dobrze skrojona ciemna marynarka. Zajmował się szeroko pojętymi „interesami”, ale nikt dokładnie nie wiedział, z czego tak naprawdę żyje. Krążyły pogłoski, że w czasie wojny kolaborował z gestapo, przypuszczano, że współpracuje z UB, co zapewniało mu nietykalność.",
        author: "Cezary Łazarewicz",
        borrowingPeriod: 28,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "O monarca das areias",
        language: "pt",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=ZIRcuy9Fw14C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "O dever para com o seu reino impedia-o de se deixar levar pela paixão... Francesca ficou surpreendida quando Zahid al Hakam, um amigo da família, apareceu à porta da sua casa. Afinal, ele era o xeque de Khayarzah e devia estar habituado a movimentar-se noutros ambientes. Continuava tão atraente como sempre e ela sentiu-se tentada a aceitar o convite que lhe fez para ir trabalhar com ele para o seu país.",
        author: "Sharon Kendrick",
        borrowingPeriod: 28,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Amar, verbo intransitivo",
        language: "pt",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=PPQorm3I9sEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Mário de Andrade causou escândalo na década de 1920 ao publicar Amar, verbo intransitivo. O livro conta a história de Elsa, uma governanta alemã contratada por um membro da burguesia industrial paulistana para iniciar sexualmente seu filho adolescente.A partir do momento em que entra na casa dos Souza Costa, Fräulein – como todos a chamavam – conquista rapidamente a família, mas não se acostuma com a cultura dos novos-ricos brasileiros.A protagonista do romance é um ser humano dividido entre razão e emoção. O lado racional da governanta busca justificativas para a profissão de professora de amor, mas é o lado emocional que a faz se entregar à tarefa: ela alimenta a esperança de voltar para a Alemanha – que abandonara depois da Primeira Guerra Mundial – e se casar com o homem dos seus sonhos.",
        author: "Mário de Andrade",
        borrowingPeriod: 28,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "A Primeira Luz da Madrugada",
        language: "pt",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=avfd-XdDOeAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Este livro não pode ser lido de uma só vez. Tal como as Mil e Uma Noites, está construído como um emaranhado de histórias dentro de histórias. Os narradores são cinco pescadores da Cruz Quebrada que trabalham de momento como arrumadores do Lidl. Mas, na realidade, eles correspondem a cinco arquétipos históricos que aguardam o Segundo Regresso, que deverá ter lugar na madrugada seguinte. Com a ajuda do Professor Eleazar Melkievstein, que dedicou a sua vida ao estudo do mito do Judeu Errante, todos estes homens tentam explicar a Ana Maria, uma mulher que mora ali perto, não só as várias histórias do Judeu Errante mas também as suas próprias histórias",
        author: "CLARA PINTO CORREIA",
        borrowingPeriod: 28,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "A (O) Assassina (O)",
        language: "pt",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=t_I56_xSXFUC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        description:
          "Este livro é uma ficção que nos conta um drama romanceado dividido em quatro partes! Nas três primeiras partes, o enredo desenrola-se no Canadá, América do Norte! Na última desenvolve-se na Alemanha, Europa! TERRENCE HILL é canadense, advogada, sistemática e apaixonada! Teve três amores em sua vida, mas um é especial! ETHAN KRISTT, canadense, médico neuropsiquiatra, crédulo! Ama a vida, o sexo e o amor! Decide morar temporariamente na Alemanha por motivo de trabalho em equipe! Vários acontecimentos fazem com que essas duas almas afinizadas amadureçam nas alegrias e sofrimentos!",
        author: "T.M.",
        borrowingPeriod: 28,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "A Prisioneira dos Krinars",
        language: "pt",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=46hxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Um novo romance standalone da autora bestseller do New York Times, de Perverta-me e As Crônicas dos Krinars Emily Ross não esperava sobreviver à sua queda fatal na floresta Costa Riquenha e, certamente, nunca pensou que acordaria numa casa estranhamente futurística, feita prisioneira pelo homem mais belo que já viu. Um homem que parece ser mais do que humano... Zaron está na Terra para facilitar a invasão Krinar – e para esquecer a terrível tragédia que despedaçou sua vida.",
        author: "Anna Zaires, Dima Zales",
        borrowingPeriod: 28,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "El Hechizo de Tantos Mundos",
        language: "es",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=BtB3kg99w_sC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "El hechizo de tantos mundos habla de lo bello, estimulante, potencialmente fertil que es el vivir en un mundo pluralista: muchos pueblos, valores, realidades y perspectivas. Y por supuesto muchas preguntas. La primera parte del libro consiste en seis conversaciones, realizadas en Roma, entre la misma autora Ornella Rota y un General de la Aeronautica Militar Vincenzo Parma, personaje eclectico y culto, curioso de viajes en el sentido más amplio de la palabra. La segunda parte comprende las conversaciones entre un músico y artista visual Angelo Sturiale y el famoso escritor mexicano Felipe Montes.",
        author: "Ornella Rota",
        borrowingPeriod: 14,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Los embajadores (Los mejores clásicos)",
        language: "es",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=QqoWCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Los mejores libros jamás escritos El choque entre la inocencia americana y la experiencia europea es el tema principal de la que el propio autor consideraba su mejor novela. Los embajadores es la muestra de mayor refinamiento del tema favorito de Henry James: el choque entre la inocencia americana y la experiencia europea. En esta ocasión, relata el viaje a París de Lambert Strether, un maduro hombre de mundo, con la misión de rescatar de las garras de una malvada «europea» al joven Chadwick, el hijo de la señora Newsome, una viuda rica de Nueva Inglaterra.",
        author: "Henry James",
        borrowingPeriod: 14,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "El mundo es ancho y ajeno",
        language: "es",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=Mmwk95ZWdgkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "El genio narrativo del autor alcanza su cima más elevada con esta obra: novela de dimensiones épicas que relata la resistencia heroica de una comunidad indígena ante una injusta expropiación de tierras.",
        author: "Ciro Alegría",
        borrowingPeriod: 14,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Yo mato",
        language: "es",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=GfjOq18BB0MC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Un locutor de Radio Montercarlo recibe una noche durante su programa una llamada telefónica asombrosa: alguien revela que es un asesino. El hecho se pasa por alto, como una broma de pésimo gusto; sin embargo, al día siguiente un famoso piloto de fórmula uno y su novia aparecen en su barco, muertos y horrendamente mutilados.",
        author: "Giorgio Faletti",
        borrowingPeriod: 14,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "La biblioteca de los muertos",
        language: "es",
        isAvailable: true,
        imageUrl:
          "http://books.google.com/books/content?id=RKXzwv1rGlIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        description:
          "Tu destino está escrito. Y el de toda la humanidad... ¿Qué harías si supieras la fecha de tu muerte? Bretaña, siglo VII. En la abadía de Vectis crece Octavus, un niño al que le auguran poderes diabólicos. Octavus no tarda en empezar a escribir una lista de nombres y fechas sin ningún sentido aparente. Pero poco después, cuando una muerte en la abadía coincide con un nombre y una fecha de la lista, el miedo se apodera de los monjes. Nueva York, en la actualidad.",
        author: "Glenn Cooper",
        borrowingPeriod: 14,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("books", null, {});
  }
};
