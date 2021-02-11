const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",  "*");
    app.use(cors());
    next();
})

app.get('/', (req, res)=>{
    res.json([
        {
            cardHeader:{
                title: "Form Login"
            },
            cardBody:{
                cardImage: "form-login/Thumbl/1280x720.jpg",
                imageAlt: "Form Login",
                descrip: "Um formulário com inputs no estilo da Google.",
                hrefProject: "form-login"
            }
        },
        {
            cardHeader:{
                title: "Sidebar"
            },
            cardBody:{
                cardImage: "sidebar/Thumbl/1280x720.jpg",
                imageAlt: "Sidebar",
                descrip: "Uma sidebar intuitiva e moderna para seu site.",
                hrefProject: "sidebar"
            }
        }
    ])
})

app.listen(PORT, ()=>{
    console.log('escutando a porta:' + PORT)
})
