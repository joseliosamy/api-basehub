const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
})

app.get('/', (req,res)=>{
    res.json([{
        title: "form Login"
    }])
})

app.listen(PORT, ()=>{
    console.log('escutando a porta:' + PORT)
})
/*card: {
            cardHeader:{
                title: "Form Login"
            },
            cardBody: {
                image: "https",
                imageAlt: "Form Login",
                hrefProject: "../form-login"
            }
        }*/ 