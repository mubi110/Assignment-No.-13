var stdData =
    [
        {
            name: "Hamza",
            age: 32,
            number: 123456789,
            gender: "male",
            rollno: 1
        },
        {
            name: "Zain",
            age: 29,
            number: 4567658,
            gender: "Male",
            rollno: 2
        },
        {
            name: "Rabia",
            age: 30,
            number: 234543567,
            gender: "Female",
            rollno: 3
        },
        {
            name: "Uzair",
            age: 26,
            number: 876545678765,
            gender: "Male",
            rollno: 4
        },
        {
            name: "Haniya",
            age: 33,
            number: 34567765678,
            gender: "Female",
            rollno: 5
        },
        {
            name: "Kamran",
            age: 29,
            number: 65434567,
            gender: "Male",
            rollno: 6
        },
        {
            name: "Danial",
            age: 33,
            number: 34567765678,
            gender: "Male",
            rollno: 7
        }
    ]
var thead_tr = document.getElementById("thead_tr");
var tbody = document.getElementById("tbody");



for (let i = 0; i < Object.keys(stdData[0]).length; i++) {
    const element = stdData[i];
    var trTh = `<th scope="col">${Object.keys(element)[i]}</th>`
    thead_tr.innerHTML += trTh.toUpperCase()
}

for (let i = 0; i < Object.keys(stdData).length; i++) {
    const element = stdData[i];
    var trTh = `
    <tr>
        <td scope="row">${Object.values(element)[0]}</td>
        <td scope="row">${Object.values(element)[1]}</td>
        <td scope="row">${Object.values(element)[2]}</td>
        <td scope="row">${Object.values(element)[3]}</td>
        <td scope="row">${Object.values(element)[4]}</td>
    </tr>
    `
    tbody.innerHTML += trTh
}

function search(){
    var search = document.getElementById("search");
    var getsearchresult = stdData.find(x => x.rollno == search.value);

    var trTh = `
    <tr>
        <td scope="row">${getsearchresult.name}</td>
        <td scope="row">${getsearchresult.age}</td>
        <td scope="row">${getsearchresult.number}</td>
        <td scope="row">${getsearchresult.gender}</td>
        <td scope="row">${getsearchresult.rollno}</td>
    </tr>
    `
    tbody.innerHTML = trTh
    console.log(getsearchresult);
}