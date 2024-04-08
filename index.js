import express  from "express";
import process from "process";
import path from "path";
import session from "express-session";
import autenticar from "./seguranca/autenticar.js";
import cors from "cors";
const host="localhost";
const porta=4000;
const app=express()
app.use(cors(
    {origin: '*'}
));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'SeNhAMatheus25',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 1000 * 30}}));
app.post('/login', (requisicao, resposta)=>{
    const usuario = requisicao.body.usuario;
    const senha   = requisicao.body.senha;
    if (usuario && senha && usuario === 'Matheus' && senha === '1234'){
        requisicao.session.usuarioLogado = true;
        resposta.redirect('/home.html');
    }
    else{
        resposta.redirect('/login.html');
    }
})
app.use(express.static(path.join(process.cwd(), `publico`)));
app.use(autenticar,express.static(path.join(process.cwd(), `privado`)));
app.listen(porta,host,()=>{console.log(`Servidor ouvindo em http://${host}:${porta}`);})
