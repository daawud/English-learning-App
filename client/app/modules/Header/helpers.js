export default function calcAge(userAge) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    const mass = userAge.split('-').map((item) => parseInt(item));
    const dob = new Date(...mass); //ДР из userAge
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate(), 0, 0, 0); //ДР в текущем году

    //Возраст = текущий год - год рождения
    let age = today.getFullYear() - dob.getFullYear();

    if (today < dobnow) {
        age = age-1;
    }

    return age;
}