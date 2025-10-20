import express from 'express';
// require('dotenv').config();
const app = express();

app.get('/',(req,res)=>{
    res.send('Hell World!')
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'Chicken crossing the road',
            joke:'Why did the chicken cross the road? To get to the other side.'
        },
        {
            id:2,
            title:'Pun intended',
            joke:'What do you call a fake noodle? An impasta.'
        },
        {
            id:3,
            title:'Knock knock',
            joke:'Who\'s there?'
        },
        {
            id:4,
            title:'Knock knock',
            joke:'Who\'s there?'
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})