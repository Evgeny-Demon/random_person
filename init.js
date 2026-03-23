import personGenerator from './personGenerator.js';


// Функция сброса к исходным значениям
function resetOutputs() {
    document.getElementById('firstNameOutput').innerText = 'Генерация имени';
    document.getElementById('surnameOutput').innerText = 'Генерация фамилии';
    document.getElementById('secondNameOutput').innerText = 'Генерация отчества';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = 'Генерация года рождения';
    document.getElementById('work').innerText = 'Генерация профессии';
}

// Обработчик кнопки "Сгенерировать"
document.getElementById('genereration').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.date;
    document.getElementById('secondNameOutput').innerText = initPerson.gname;
    document.getElementById('work').innerText = initPerson.work;
});

// Обработчик кнопки "Стереть"
document.getElementById('clear').addEventListener('click', resetOutputs);

// Сброс при загрузке страницы
document.addEventListener('DOMContentLoaded', resetOutputs);