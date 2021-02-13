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
                hrefProject: "form-login",
                date: "02/02/21",
                repository: "https://github.com/joseliosamy/basehub/tree/master/projetos/form-login",
                tutorial: "https://youtu.be/4wxcDI80mJQ"
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
                hrefProject: "sidebar",
                date: "04/02/21",
                repository: "https://github.com/joseliosamy/basehub/tree/master/projetos/sidebar",
                tutorial: "https://youtu.be/AMA1uySGk9I"
            }
        },
        {
            cardHeader:{
                title: "Loading"
            },
            cardBody:{
                cardImage: "loading/Thumbl/1280x720.jpg",
                imageAlt: "Loading",
                descrip: "Um loading simples e fácil de se fazer",
                hrefProject: "loading",
                date: "13/02/21",
                repository: "https://github.com/joseliosamy/basehub/tree/master/projetos/loading",
                tutorial: "https://youtu.be/pVESc9XcF1M"
            }
        }
    ])
})

app.listen(PORT, ()=>{
    console.log('escutando a porta:' + PORT)
})
