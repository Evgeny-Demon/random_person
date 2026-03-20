let name = 'Добрыня';

function GrandName(name) {

  
  
   
let rule = ['бвгдзклмнпрстфх', 'жшчщцуаяэиыёоую', 'ь', 'ауыо', 'ий', 'и', 'е', 'ей']
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
  return sl + 'ьевич'
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
  }
 

  
}




console.log(GrandName(name)); 
