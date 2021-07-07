const v_show = document.getElementById("content");
const v_avg = document.getElementById("result_avg");

const wait = (time) => new Promise(resolve => setTimeout(resolve, time));

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

async function showAvg() {
    try {
        console.log("Calculation start");
        let val_avg = getAvg(students);
        wait(5000)
            .then(() => console.log(val_avg))
            .then(() => v_avg.innerHTML = `Result AVG: ${val_avg}`)
        console.log("Second call started");
        await wait(2000)
            .then(() => console.log("Second call finished"))
            .then(() => console.log("Third call started"))
        await wait(2000)
            .then(() => console.log("Third call finished"))
    }
    catch(err) {
        console.log("Ada yang error")
    }
};

show();