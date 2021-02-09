const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
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
                cardImage: "https://images.unsplash.com/photo-1541789094913-f3809a8f3ba5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
                imageAlt: "Form Login",
                descrip: "Um formulário com inputs no estilo da Google.",
                hrefProject: "../form-login"
            }
        },
        {
            cardHeader:{
                title: "Sidebar"
            },
            cardBody:{
                cardImage: "https://basehub.vercel.app/sidebar/Thumbl/1280x720.jpg",
                imageAlt: "Sidebar",
                descrip: "Uma sidebar intuitiva e moderna para seu site.",
                hrefProject: "../sidebar"
            }
        }
    ])
})

app.listen(PORT, ()=>{
    console.log('escutando a porta:' + PORT)
})
