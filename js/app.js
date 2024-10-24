// Konstruktor funksiyasi uchun

// #1 

// function Information (name, age, nationality) {
//       this.name = name;
//       this.age = age;
//       this.nationality = nationality;
// }
// let mutalibov = new Information ("Mutalibov", 17, "Uzbek")
// console.log(mutalibov);

// #2

// function HeightAndWeight (height, weight) {
//     this.height = height;
//     this.weight = weight;
// }
// let mutalibov = new HeightAndWeight (177, 75);
// console.log(mutalibov);

// #3

// function School(name, speacialized, subject) {
//     this.name = name;
//     this.speacialized = speacialized;
//     this.subject = subject;
// }
// let mySchool = new School ("Prezident maktabi", "Math","English")
// console.log(mySchool);

// #4

// function ComputerType(type, price, battery,) {
//     this.type = type;
//     this.price = price;
//     this.battery = battery;
// }
// let myComputer = new ComputerType ("Mackbook air M1", "600$", "95");
// console.log(myComputer);

// #5

// function Education (job, skill, extraSkill, certificate, IQ,) {
//     this.job = job; 
//     this.skill = skill;
//     this.extraSkill = extraSkill;
//     this.certificate = certificate;
//     this.IQ = IQ;
// }
// let mutalibov = new Education ("Teacher", "critical thinking", "Marketing", "IELTS 7", "120")
// console.log(mutalibov);

// #5

// function StudyCentre(name, overallStudents, overallTeachers,) {
//     this.name = name;
//     this.overallStudents = overallStudents;
//     this.overallTeachers = overallTeachers;
// }
// let myStudycentre = ("Wisdom-way", 200, 10);
// console.log(myStudycentre);

// #6

// function PhoneType (name, price, year, sellerName) {
//     this.name = name;
//     this.price = price;
//     this.year = year;
//     this.sellerName = sellerName;
// }
// let mutalibov = new phoneType ("Iphone 15", "1000$", 2024, "John" );
// console.log(mutalibov);

// #7

// function Fighter (typeFighter, wins, loses, knockounts) {
//     this.typeFighter = typeFighter;
//     this.wins = wins;
//     this.loses = loses;
//     this.knockounts = knockounts;
// }
// let fighterType = new Fighter ("Boxer", 38, 0, 29)
// console.log(fighterType);

// #8

// function Businessman (networth, age, assets, network) {
//     this.networth = networth;
//     this.age = age; 
//     this.assets = assets;
//     this.networth = network;
// }
// let andrewTate = new Businessman ("1.1 Billion", 38, "Yacht, Bugatti, 40 Supercars, stocks, mansions in so many countries", "Real world, War room");
// console.log(andrewTate);

// #9

// function Country (population, wealth, averageSalary,) {
//     this.population = population;
//     this.wealth = wealth;
//     this.averageSalary = averageSalary;
// }
// let countryUzbekistan = new Country (38, "100 mlrd", "300$")
// console.log(countryUzbekistan);

// #10

// function Community (type, members, price, owner, collaborator, courses) {
//     this.type = type;
//     this.members = members;
//     this.price = price;
//     this.owner = owner;
//     this.collaborator = collaborator;
//     this.courses = courses;
// }
// let capitalClubCommunity = new Community ("Enteprenural network", "Businessmen", "365$ per year", "Luke Belmar", "Anthony", "E-com, Dropshipping, TIk-tok ads");
// console.log(capitalClubCommunity);

// Class 

// #1

// class User {
//     constructor (name, age, weight) {
//         this.name = name;
//         this.age = age;
//         this.weight = weight
//     }
// }
// let student = new User ("mutalibov", 17, 75);
// console.log(student);

// #2

// class JobType {
//     constructor (hours, salary, title) {
//         this.hours = hours;
//         this.salary = salary;
//         this.title = title;
//     }
// }
// let TeacherJob = new JobType ("9-5", "500$", "TEacher");
// console.log(TeacherJob);

// #3

// class Medicine {
//     constructor (type, price, use) {
//         this.type = type;
//         this.price = price;
//         this.use = use;
//     }
// }
// let medicineType = new Medicine ("Aspirin", "1$", "Headache");
// console.log(medicineType);

// #4

// class Personality {
//     constructor (type, advantage, disadvantage) {
//         this.type  = type;
//         this.advantage = advantage;
//         this.disadvantage = disadvantage;
//     }
// }
// let typePersonality = new Personality ("introvert", "you can become alone which is good for some people", "isolation");
// console.log(typePersonality);

// #5

// class CourseType {
//     constructor (type, price, lasts) {
//         this.type = type;
//         this.price = price;
//         this.lasts = lasts;
//     }
// }
// let informationAboutCourse = new courseType ("Frontend", "80$ per month", "8 months");
// console.log(informationAboutCourse);

// #6

// class CarType {
//     constructor (type, price, year, colour) {
//         this.type = type; 
//         this.price = price;
//         this.year = year;
//         this.colour = colour;
//     }
// }
// let carBmw = new carType ("Bmw", "300000$", 2024, "black");
// console.log(carBmw);

// #7

// class Movie {
//     constructor (type, actors, popularity) {
//         this.type = type;
//         this.actors = actors;
//         this.popularity = popularity;
//     }
// }
// let AvengersMovie = new Movie ("fantastic", "John Smith", 2);
// console.log(AvengersMovie);

// #8

// class AverageSalary {
//     constructor (country, salary, job) {
//         this.country = country;
//         this.salary = salary;
//         this.job = job;
//     }
// }
// let salaryInForeignCountry = new AverageSalary ("Usa", "150$ per day", "IT specailist");
// console.log(salaryInForeignCountry);

// #9

// class StudentInformation {
//     constructor (grade, whichClass,) {
//         this.grade = grade
//         this.whichClass = whichClass
//     }
// }
// let AbrorStudent = new StudentInformation (5, "10-b");
// console.log(AbrorStudent);

// #10

// class BoxerResults {
//     constructor(wins, loses, knockouts) {
//         this.wins = wins;
//         this.loses = loses;
//         this.knockouts = knockouts
//     }
// }
// let golovkinResults = new BoxerResults(35, 0, 35);
// console.log(golovkinResults);

// Masalalar

// 1-masala

// function onylAgeandNAme(massive) {
//     forEach(function (value) {
//         console.log(value.name);
//         console.log(value.age);

//     })
// }

// 2-masala

// function increseToTwentyPercent(massive) {
//     forEach(function(value){
//         console.log(value.price / 20 * 100);
//     })
// }

// 3-masala

// function ifOverEighteen(arr) {
//     let res = arr.every(function(value){
//         return value.age >= 18
//     })
//     return res
// }

// 4-masala

// function writingTheNamesOFAuthorsInTheSameWay(arr) {
//     forEach(function(value){
//     value.author = "Said Ahmad"
//     })
//     return arr
// }

// 5-masala

// function increaseWorkersSalarytoTenPercentAndAddThemTOAnewMassive(arr) {
//     let res = arr.map(function(value){
//         return value.salary + (value.salary / 10 * 100)
//     })
//     return res
// }

// 6-masala

// function addMrToTheNames(arr) {
//     forEach(function(value){
//         value.name = "Mr" + value.name;
//     })
//     return arr
// }

// 7-masala














































