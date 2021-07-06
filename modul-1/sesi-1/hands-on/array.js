const v_show = document.getElementById("content");
const v_avg = document.getElementById("result_avg");

const students = [
    {name: "Bagus", age: 21},
    {name: "Ariel", age: 23},
    {name: "Arsil", age: 20},
];

const show = () => {
    students.forEach(({ name, age }) => {
        v_show.innerHTML += `<tr><td>${name}</td><td>${age}</td></tr>`;
    });
};

const getAvg = (students) => {
    const total = students.reduce((val, student) => val + student.age, 0);
    return total / students.length;
};

const showAvg = () => {
    let val_avg = getAvg(students);
    v_avg.innerHTML = `Result AVG: ${val_avg}`;
};

show();