
document.getElementById('genereration').addEventListener('click', function() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.date;
    document.getElementById('secondNameOutput').innerText = initPerson.gname;
    document.getElementById('story').innerText = initPerson.story;
    document.getElementById('wepon').innerText = initPerson.wepon;
    document.getElementById('armor').innerText = initPerson.armor;
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('genderOutput').innerText = 'Какой был пол?';
    document.getElementById('firstNameOutput').innerText = 'Забыто';
    document.getElementById('surnameOutput').innerText = 'Проклято';
    document.getElementById('birthYearOutput').innerText = 'А год какой?';
    document.getElementById('secondNameOutput').innerText = 'Да уже и не вспомнить';
    document.getElementById('story').innerText = 'Здесь могла быть чья-то эпическая история...';
    document.getElementById('wepon').innerText = 'генератор оружия';
    document.getElementById('armor').innerText = 'генератор брони';
})
