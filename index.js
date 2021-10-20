const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Wow.iam exiting to learn node')
});


const users = [
    { id: 0, name: "shabana", email: "shabana@gmail.com", phone: "018222222" },
    { id: 1, name: "Shabnoor", email: "Shabnoor@gmail.com", phone: "018222222" },
    { id: 2, name: "sochorita", email: "sochorita@gmail.com", phone: "018222222" },
    { id: 3, name: "srabonti", email: "srabonti@gmail.com", phone: "018222222" },
    { id: 4, name: "suchona", email: "suchona@gmail.com", phone: "018222222" }
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query parameter
    if (search) {
        const searcResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searcResult)
    }
    else {
        res.send(users)
    }

});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))

    res.json(newUser);
})


//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mangoe', 'orange', 'apple'])
})

app.get('/fruits/mangoe/fazli', (req, res) => {
    res.send('fazli onek tok')
})

app.listen(port, () => {
    console.log('listening to port', port)
})