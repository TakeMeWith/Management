const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.get('/api/customers',(req,res)=>{
    res.send([

        
            {
            'id':1,
            'image': 'https://placeimg.com/64/64/1',
            'name' : '신완희',
            'birthday' : '20040515',
            'gender' : '남자',
            'job' :'고딩'
          },
            {
            'id':2,
            'image': 'https://placeimg.com/64/64/2',
            'name' : '이승훈',
            'birthday' : '20040314',
            'gender' : '남자',
            'job' :'고딩'
          },
          {
            'id':3,
            'image': 'https://placeimg.com/64/64/3',
            'name' : '배수찬',
            'birthday' : '20040709',
            'gender' : '남자',
            'job' :'고딩'
          },
          {
            'id':4,
            'image': 'https://placeimg.com/64/64/16',
            'name' : '한동훈',
            'birthday' : '20030504',
            'gender' : '남자',
            'job' :'고딩(의심스러움)'
          },
          {
            'id':5,
            'image': 'https://placeimg.com/64/64/19',
            'name' : '유상욱',
            'birthday' : '20040604',
            'gender' : '남자',
            'job' :'고딩'
          },
          {
            'id':6,
            'image': 'https://placeimg.com/64/64/1',
            'name' : '김민유',
            'birthday' : '20040303',
            'gender' : '미정',
            'job' :'고딩'
          },
    ]);
})



app.listen(port, () => console.log(`Listening on port ${port}`));