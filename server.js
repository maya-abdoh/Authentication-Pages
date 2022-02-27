const express = require('express')
const app = express();

app.use(express.json())//this is to accept data in json format 
app.use(express.urlencoded())//this is to decode the data throu html format 

const users = [{fName: 'Rama', lName: 'Has', email: 'rama@gmail.com', password: 12345},
{fName: 'Tala', lName: 'Has', email: 'Tala@gmail.com', password: 12345},
{fName: 'Dana', lName: 'Has', email: 'Dana@gmail.com', password: 12345},
{fName: 'Rana', lName: 'Has', email: 'Rana@gmail.com', password: 12345}
]
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/UserInteface.html')
})

app.post("/signUpForm", (req, res) => {
    try{
    users.push(req.body)
    res.status(201).send("succeede")
}catch{
    res.status(400).send("Something went wrong!. Please try again later.")
}

})

app.listen(3100)