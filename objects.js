// In JavaScript, Objects are King.

// let students = new Object({
//     // key : value
//     fName : "Ajay"
// })

// students.lName = "Patil"

// console.log(students);

// let students = {
//     fname: "Tony",
//     lname: "Stark",
//     userName: "tonyS",
//     refNo : 1010,
//     isActive : true
// }

// students.city = "London"

// console.log(students);


// let students = {
//     fname: "Tony",
//     lname: "Stark",
//     userName: "tonyS",
//     refNo : 1010,
//     isActive : true,
//     marksInSub : {
//         Maths : 75,
//         So_sci : 85,
//         GK : 80,
//         English : 65
//     }
// }

// console.log(students.marksInSub.English);


// let students = {
//     fname: "Tony",
//     lname: "Stark",
//     userName: "tonyS",
//     refNo : 1010,
//     isActive : true,
//     marksInSub : {
//         Maths : 75,
//         So_sci : 85,
//         GK : 80,
//         English : 65

//     },
//     participation : {
//         sport: true,
//         fest : false,
//         NCC : true,
//         NSS : false
//     }
// }


// console.log(students.participation.NSS);


// let students = {
//     fname: "Tony",
//     lname: "Stark",
//     userName: "tonyS",
//     refNo: 1010,
//     isActive: true,
//     participation: {
//         sport: true,
//         fest: false,
//         NCC: true,
//         NSS: false,
//         marksInSub: {
//             Maths: 75,
//             So_sci: 85,
//             GK: 80,
//             English: 65

//         }
//     }
// }




// students.participation.marksInSub.Marathi = 95;


// console.log(students.participation.marksInSub);




// let students = {
//     fname: "Tony",
//     lname: "Stark",
//     userName: "tonyS",
//     refNo: 1010,
//     isActive: true,
 
    
// }


// let {fname, lname, userName} = students

// console.log(userName);


// let obj1 = {
//       fname: "Tony",
//     lname: "Stark",
//     userName: "tonyS",
//     refNo: 1010,
//     isActive: true,
// }

// let obj2 = {
//     fname: "Araya",
//     lname: "Stark",
//     userName: "ArayaS",
//     refNo: 1020,
//     isActive: true,
// }
// let obj3 = {
//     fname: "Sansa",
//     lname: "Stark",
//     userName: "SansaS",
//     refNo: 1030,
//     isActive: true,
// }

// let res = Object.keys(obj3)
// let ans = (res.join(" "));



// console.log(ans);
// document.write(ans)




// let res2 = Object.assign({},  obj2, obj1)
// console.log(res2);


// let res = {...obj1, ...obj2, ...obj3}
// console.log(res);




// json

//  let obj3 = {
//     "fname": "Sansa",
//     'lname': "Stark",
//     "userName": "SansaS",
//     "refNo": 1030,
//     "isActive": true,
// }

// console.log(obj3.lname);


