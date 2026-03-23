import { surnameJson, firstNameMaleJson, firstNameFemaleJson } from './data.js';

const personGenerator = {
    
    surnameJson: surnameJson,
    firstNameMaleJson: firstNameMaleJson,
    firstNameFemaleJson: firstNameFemaleJson,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    //метод генерации
    randomIntNumber: function (max) {
     return Math.floor(Math.random() * max )+ 1;
    },

    //метод генерации гендера
    randomGender : function() { 
        const gender = Math.floor((Math.random() * 2 + 1));
        return (gender == 1) ?  this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomValue: function (obj) {
        const max = obj.count;
        const prop = `id_${this.randomIntNumber(max)}`;
        return obj.list[prop];
    },

    
    //АЛГОРИТМ ГЕНЕРАЦИИ ОТЧЕСТВА
    GrandName : function GrandName(name) {
   
        let rule = ['бвгдзклмнпрстфх', 'жшчщцуаяэиыёоую', 'ь', 'ауыо', 'ий', 'и', 'е', 'ей', 'ай'];
        let grandName = '';
        let sl;
        let arrNames = ["Никита", "Савва", "Илья", "Эмиль", "Добрыня"];
        let nameRule = ['Дмитрий', 'Сергий', 'Георгий', 'Валерий', 'Макарий', 'Евстахий', 'Аверкий', 'Дионисий', 'Иларий', 'Алексий'];
        let nameRuleSecond = 'Лев';

        if (name === 'Лев') {
            name = 'Львович';
            return name;
        };

   
        for (let i = 0; i < nameRule.length; i++) {
            if (name === nameRule[i]) {
            grandName += nameRule[i];
            sl = grandName.slice(0, -1);
            sl += 'евич'
                return sl;
                }
        };
  
        if (name === arrNames[0] || name === arrNames[1] || name === arrNames[2] || name === arrNames[4]) {
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
        
        if(rule[8].includes(name.slice(-1))) {
          grandName = name.slice(0, -1);
          grandName += 'евич';
          return grandName
        };
  
},

    //АЛГОРИТМ ГЕНЕРАЦИИ ОТЧЕСТВА ЖЕН
    FemGrandName : function FemGrandName(grandName) {
  
        if (grandName === "Ильич" || grandName === "Фомич" || grandName === "Кузьмич" || grandName === "Патрикеич") {
        grandName = grandName.slice(0, -2);
        grandName += "инична";
        return grandName;
        };
 
        let end = grandName.slice(-4);
        let base = grandName.slice(0, -4); 


        switch (end) {
    
            case 'ович':
            end = 'овна';
            grandName = base += end;
            break;
    
            case 'евич':
            end = 'евна';
            grandName = base += end;
            break;
        };
  
        if (end.slice(-2) === "ич") {
        grandName += 'на';
        };
        return grandName;

},

    //АЛГОРИТМ ГЕНЕРАЦИИ ФАМИЛИИ ЖЕН
    familyFem : function familyFem(surName) {
        let rule = ["ин", "ов", "ев"];
        let secondRule = ["ой", "ий", "ый"];
  
        for(let i = 0; i < rule.length; i++) {
            if (surName.slice(-2) === rule[i]) {
                surName += 'a';
            }
            console.log(i);
        }
  
        for(let i = 0; i < secondRule.length; i++) {
            if(surName.slice(-2) === secondRule[i]) {
                surName = surName.slice(0, -2);
                surName += 'ая';
            }
        }
  
    return surName;
},

    profession : function profession(run) {
    const manProf = ["Инженер", "Строитель", "Механик", "Электрик", "Слесарь", "Плотник", "Маляр", "Крановщик"];
    const womanProf = ["учитель", "воспитатель", "няня", "швея", "пекарь", "акушер", "медсестра"];
    const generalProf = ["Врач", "Программист", "Продавец", 
    "Менеджер", "Юрист", "Бухгалтер", "Дизайнер", "Переводчик", "Журналист", "Писатель",
    "Художник", "Музыкант", "Артист", "Режиссёр", "Оператор",]
  
    let flag;

    let random = this.randomIntNumber(2);
    random === 2 ? flag = true : flag = false; 

        if (flag) {
            return generalProf[this.randomIntNumber(generalProf.length - 1)]; 
        } else {
        if (run === 'Мужчина') {
            return manProf[this.randomIntNumber(manProf.length - 1)];
        } else {
            return womanProf[this.randomIntNumber(womanProf.length - 1)];  
            }
        }
},

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

    //Здесь все функции собираются в единое целое и выходные данные - массив.
    myRandom: function() {
        //let wepon = this.randomValue(this.randomWeapon);
        //let armor = this.randomValue(this.randomArmor);
        let run = this.randomGender();
        let whereUworkKid = this.profession(run);
        let grandName = this.GrandName(this.randomValue(this.firstNameMaleJson)); //отчество мужское
        let howOld = this.date(run);
        let surName = this.randomValue(surnameJson);
        let male;
        
        if (run === this.GENDER_MALE) {
            male = this.randomValue(this.firstNameMaleJson);
        } else { 
             male = this.randomValue(this.firstNameFemaleJson);
             grandName = this.FemGrandName(grandName);
             surName = this.familyFem(this.randomValue(surnameJson));
        }
        return [male, run, howOld, grandName, surName, whereUworkKid];
    },

    //здесь массив который мы получили из функции myRandom мы распаковываем и передаем обработчику событий
    getPerson: function () {
        this.person = {};
        const genName = this.myRandom();
        this.person.firstName = genName[0];
        this.person.gender = genName[1];
        this.person.date = genName[2];
        this.person.surName = genName[3];
        this.person.gname = genName[4];
        this.person.work = genName[5];
      //  this.person.story = genName[5];
      //  this.person.wepon = genName[6];
       // this.person.armor = genName[7];
        return this.person;
    }
};

export default personGenerator;