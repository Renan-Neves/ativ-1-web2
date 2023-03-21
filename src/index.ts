const express = require('express')
const app = express()
const PORT = 3000
const bodyparser = require('body-parser')
import Usuario from "./usuario"

app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }))



//EJS
app.set('views', './views');
app.set('view engine', 'ejs');

//MAIN
app.get('/', function(req, res){
    res.render('index')
})

//ex1
app.get('/idade', function(req, res){
    res.render('idade')
})

app.post('/idadeResposta', function(req, res){
    if (req.body.Idade < 15){
        res.send('<h2>Criança</h2><br><a href="/idade"><button>Home</button></a>')
    }
    else if(req.body.Idade >= 15 && req.body.Idade < 30){
        res.send('<h2>Jovem</h2><br><a href="/idade"><button>Home</button></a>')
    }
    else if(req.body.Idade >= 30 && req.body.Idade < 60){
        res.send('<h2>Adulto</h2><br><a href="/idade"><button>Home</button></a>')
    }
    else if (req.body.Idade >= 60){
        res.send('<h2>Idoso</h2><br><a href="/idade"><button>Home</button></a>')
    }
    else {
        res.send('<h2>Invalido</h2><br><a href="/idade"><button>Home</button></a>')
    }
})

//ex2
app.get('/media',function(req,res){
    res.render('media')
})

const calculo = function(media){
    if (media>9){
        return "A"
    }
    else if (media>8 && media<=9){
        return "B"
    }
    else if (media>7 && media<=8){
        return "C"
    }
    else if (media>6 && media<=7){
        return "D"
    }
    else if (media>5 && media<=6){
        return "E"
    }
    else if (media<=5){
        return "F"
    }
}

app.post('/mediaResultado', function(req, res){
    let media = ((req.body.pratica*2)+(req.body.prova*5)+(req.body.trabalho*3))/10
    let calculoF = calculo(media)
    res.send(`A média do aluno é ${media} e a classificação é ${calculoF}
             <br><br><a href="/media"><button>Home</button></a>`)
})

//ex3
app.get('/formulario', function(req, res){
    res.render('formulario', {usuario: usuario})
})

let usuario = new Usuario('nome','sobrenome','idade', 'país')

app.post('/formularioAltera', function(req, res){
    usuario.nome = req.body.nome;
    usuario.sobrenome = req.body.sobrenome;
    usuario.idade = req.body.idade;
    usuario.país = req.body.país;
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  })