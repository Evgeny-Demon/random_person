const personGenerator = { 

    //ФАМИЛИИ МУЖСКИЕ
    surnameJson: `{  
        "count": 33,
        "list": {
            "id_1": "Белый",
            "id_2": "Волков",
            "id_3": "Турчинский",
            "id_4": "Достоевский",
            "id_5": "Трубецкой",
            "id_6": "Михалков",
            "id_7": "Дюжев",
            "id_8": "Царев",
            "id_9": "Никитин",
            "id_10": "Соловьев",
            "id_11": "Должанский",
            "id_12": "Киркоров",
            "id_13": "Смирнов",
            "id_14": "Гагарин",
            "id_15": "Бельский",
            "id_16": "Коровин",
            "id_17": "Кологривый",
            "id_18": "Шевченко",
            "id_19": "Коваленко",
            "id_20": "Гоголь",
            "id_21": "Лебедь",
            "id_22": "Смит",
            "id_23": "Уильямс",
            "id_24": "Браун",
            "id_25": "Гарсия",
            "id_26": "Тейлор",
            "id_27": "Конти",
            "id_28": "Галло",
            "id_29": "Рыбаков",
            "id_30": "Травкин",
            "id_31": "Златовласов",
            "id_32": "Андре",
            "id_33": "Рыкалин",
        }
    }`,

    //ИМЕНА МУЖСКИЕ
    firstNameMaleJson: `{
        "count": 24,
        "list": {     
            "id_1": "Геральт",
            "id_2": "Роберт",
            "id_3": "Всеволод",
            "id_4": "Глеб",
            "id_5": "Аркадий",
            "id_6": "Никита",
            "id_7": "Дмитрий",
            "id_8": "Инджрих",
            "id_9": "Шерлок",
            "id_10": "Николай",
            "id_11": "Александр",
            "id_12": "Ричард",
            "id_13": "Игорь",
            "id_14": "Вадим",
            "id_15": "Лев",
            "id_16": "Константин",
            "id_17": "Арнольд",
            "id_18": "Руслан",
            "id_19": "Леопольд",
            "id_20": "Илья",
            "id_21": "Валерий",
            "id_22": "Джон",
            "id_23": "Руперт",
            "id_24": "Матвей",
        }
    }`,

    //АЛГОРИТМ ГЕНЕРАЦИИ ОТЧЕСТВА
    GrandName : function GrandName(name) {
   
        let rule = ['бвгдзклмнпрстфх', 'жшчщцуаяэиыёоую', 'ь', 'ауыо', 'ий', 'и', 'е', 'ей'];
        let grandName = '';
        let sl;
        let arrNames = ["Никита", "Савва", "Илья", "Эмиль", "Добрыня"];
        let nameRule = ['Дмитрий', 'Сергий', 'Георгий', 'Валерий', 'Макарий', 'Евстахий', 'Аверкий', 'Дионисий', 'Иларий', 'Алексий'];

   
        for (let i = 0; i < nameRule.length; i++) {
            if (name === nameRule[i]) {
            grandName += nameRule[i];
            sl = grandName.slice(0, -1);
            sl += 'евич'
                return sl;
                }
        };
  
        if (name == arrNames[0] || name === arrNames[1] || name === arrNames[2] || name === arrNames[4]) {
            grandName += name;
            sl = grandName.slice(0, -1);
            return sl + 'ич'
            }
         else if (rule[3].includes(name.slice(-1))) {
            grandName += name;
            sl = grandName.slice(0, -1);
            return  sl + 'ович';
        };
  
        if (name == arrNames[3]) {
            return grandName += name += 'евич';
        }
        else if (rule[2].includes(name.slice(-1))) {
            grandName += name;
            sl = grandName.slice(0, -1);
            return  sl + 'евич';
        };
  
        if (rule[7].includes(name.slice(-2))) {
            grandName += name;
            sl = grandName.slice(0, -1);
            return sl += 'евич'  
        };
  
        if (rule[4].includes(name.slice(-2))) {
            grandName += name;
            sl = grandName.slice(0, -2);
            return sl += 'ьевич'
        };
  
    
        if (rule[0].includes(name.slice(-1))) {
            return grandName += name += 'ович';
        };

        if (rule[1].includes(name.slice(-1))) {
            return grandName += name += 'евич';
        };

 
        if (rule[5].includes(name.slice(-1))) {
            grandName += name;
            return grandName + 'евич';
        } else if (rule[6].includes(name.slice(-1))) {
            grandName += name;
            return grandName + 'вич';
        };
  
},

    GrandNameFemaleJson: `{
        "count": 18,
        "list": {     
            "id_1": "Вадимовна",
            "id_2": "Адовна",
            "id_3": "Руслановна",
            "id_4": "Хабибовна",
            "id_5": "Геральтовна",
            "id_6": "Дмитриевна",
            "id_7": "Васильевна",
            "id_8": "Михайловна",
            "id_9": "Хищниковна",
            "id_10": "Сама не в курсе чья дочь",
            "id_11": "Андреевна",
            "id_12": "Леоновна",
            "id_13": "Сэмуэльевна",
            "id_14": "Марковна",
            "id_15": "Артуровна",
            "id_16": "Вуншпуншовна",
            "id_17": "Витальевна",
            "id_18": "Мамина дочь"
        }
    }`,

        //ИМЕНА ЖЕНСКИЕ
        firstNameFemaleJson: `{
        "count": 21,
        "list": {
            "id_1": "Мэри",
            "id_2": "Лариса",
            "id_3": "Элли",
            "id_4": "Морриган",
            "id_5": "Фелиция",
            "id_6": "Наталья",
            "id_7": "Ирина",
            "id_8": "Цирилла",
            "id_9": "Лара",
            "id_10": "Клементина",
            "id_11": "Байонетта",
            "id_12": "Китана",
            "id_13": "Джейд",
            "id_14": "Соня",
            "id_15": "Рамильда",
            "id_16": "Гермиона",
            "id_17": "Джинни",
            "id_18": "Сильвана",
            "id_19": "Падме",
            "id_20": "Мэй",
            "id_21": "Памелла"
        }
    }`,

    randomStory : `{
        "count": 100,
        "list": {
      "id_1": "Волшебник-аллергик..."
        } 
    }`,

    randomStoryFemale : `{
        "count": 100,
        "list": {
      "id_1": "Волшебница-глитчер..."
        }   
    }`,

    randomWeapon: `{
    "count": 100,
    "list": {
      "id_1": "Резиновая курица..."
    }
    }`,

    randomArmor: `{
    "count": 100,
    "list": {
      "id_1": "Картонная коробка..."
    }
  }`,

    date : function howOldAreU(run) {
        let day;
        let mo_12 = (Math.floor(Math.random() * 12) + 1);
        if (mo_12 >= 1 && mo_12 <= 7) {
            day =  (Math.floor(Math.random() * 31) + 1); 
           } else if (8 <= mo_12 && mo_12 <= 11) {
            day = (Math.floor(Math.random() * 30) + 1);
           } else if (mo_12 == 12) {
            day = (Math.floor(Math.random() * 28) + 1);
           }
        let dayM = [day, mo_12];
        
        switch(dayM[1]) {
            case 1 : dayM[1] = 'января'; break;
            case 2 : dayM[1] = 'марта'; break;
            case 3 : dayM[1] = 'мая'; break;
            case 4 : dayM[1] = 'июля'; break;
            case 5 : dayM[1] = 'августа'; break;
            case 6 : dayM[1] = 'октября'; break;
            case 7 : dayM[1] = 'декабря'; break;
            case 8 : dayM[1] = 'апреля'; break;
            case 9 : dayM[1] = 'июня'; break;
            case 10 : dayM[1] = 'сентября'; break;
            case 11 : dayM[1] = 'ноября'; break;
            case 12 : dayM[1] = 'февраля'; break;
        };

        let daysText = ['первого', 'второго', 'третьего',
            'четвертого', 'пятого', 'шестого', 'седьмого', 'восьмого',
            'девятого', 'десятого', 'одиннадцатого', 'двенадцатого',
            'тринадцатого', 'четырнадцатого', 'пятнадцатого',
            'шестнадцатого', 'семнадцатого', 'восемнадцатого',
            'девятнадцатого', 'двадцатого', 'двадцать первого',
            'двадцать второго', 'двадцать третьего', 'двадцать четвертого',
            'двадцать пятого', 'двадцать шестого', 'двадцать седьмого', 'двадцать восьмого', 'двадцать девятого',
            'тридцатого', 'тридцать первого'];

            for(let i = 1; i < daysText.length; i++) {
                if (i === dayM[0]) {
                    dayM[0] = daysText[i - 1];
                    break;
                };   
            };

            if (run === this.GENDER_MALE) {
            let year = `Родился ${dayM[0]} ${dayM[1]} 1`;
            for(let i = 0; i < 3; i++) {
            year += String(Math.floor(Math.random() * 10));
            };
        year += ' От Рождества Христова!'
        return year;

        } else {
           let year = `Родилась ${dayM[0]} ${dayM[1]} 1`;
            for(let i = 0; i < 3; i++) {
            year += String(Math.floor(Math.random() * 10));
        };
        year += ' От Рождества Христова!'
        return year;
        };
  
    },

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max) => Math.floor(Math.random() * max )+ 1,

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const max = obj.count;
        const prop = `id_${this.randomIntNumber(max)}`;
        return obj.list[prop];
    },

    myRandom: function() {
        let wepon = this.randomValue(this.randomWeapon);
        let armor = this.randomValue(this.randomArmor);
        let run = this.randomGender();
        let howOld = this.date(run);
        
        if (run === this.GENDER_MALE) {
            let male = this.randomValue(this.firstNameMaleJson);
            let grandName = this.GrandName(male);
            return [male, run, "", howOld, grandName, "", wepon, armor];
        } else { 
            let female = this.randomValue(this.firstNameFemaleJson);
            return [female, run, "", howOld, "", "", wepon, armor];
        }
    },

    randomGender : function() { 
        const gender = Math.floor((Math.random() * 2 + 1));
        return (gender == 1) ?  this.GENDER_MALE : this.GENDER_FEMALE;
    },

    getPerson: function () {
        this.person = {};
        const genName = this.myRandom();
        this.person.firstName = genName[0];
        this.person.gender = genName[1];
        this.person.surName = genName[2];
        this.person.date = genName[3];
        this.person.gname = genName[4];
        this.person.story = genName[5];
        this.person.wepon = genName[6];
        this.person.armor = genName[7];
        return this.person;
    }
};