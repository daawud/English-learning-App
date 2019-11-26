export default function calcAge(userAge) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const mass = userAge.split('-').map((item) => parseInt(item));
    const dob = new Date(...mass);
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году

    //Возраст = текущий год - год рождения
    let age = today.getFullYear() - dob.getFullYear();

    if (today < dobnow) {
        age = age-1;
    }

    return age;
}