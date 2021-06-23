let year = +(prompt('В каком году Вы родились?', '')), age, city, sport,
    renouncement = 'Жаль что Вы не захотели ввести свой: ' + ' ',
    champion = 'Круто! хочешь стать как: ' + ' ';

switch (year) {
    case null:
        age = renouncement + 'год рождения';
        alert(age);
        break;
    default:
        if (!isFinite(year)) {
            age = renouncement + 'год рождения';
            alert(age);
        } else {
            age = 2021 - year;
        }
        city = prompt('В каком городе Вы живете?', '');
        switch (city) {
            case null:
                city = renouncement + 'город';
                alert(city);
                break;
            case 'Киев':
                city = 'Вы живете в столице Украины';
                break;
            case 'Москва':
                city = 'Вы живете в столице России';
                break;
            case 'Минск':
                city = 'Вы живете в столице Беларуси';
                break;
            default:
                city = 'Вы живете в городе: '+ ' ' + city;
        }
        sport = prompt('Какой Ваш любимый вид спорта?', '')
        switch (sport) {
            case null:
                sport = renouncement + 'любимый вид спорта';
                alert(sport);
                break;
            case 'Бокс':
                sport = champion + 'Майк Тайсон';
                break;
            case 'Футбол':
                sport = champion + 'Криштиану Роналду';
                break;
            case 'Батскетбол':
                sport = champion + 'Майкл Джордан';
                break;
            default:
                sport = 'Ваш любимый вид спорта: ' + ' ' + sport;
        }
        alert('Тебе: ' + ' ' + age + ' лет' + '\n' + city + '\n' + sport);
}
