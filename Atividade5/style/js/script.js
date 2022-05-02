let button = document.querySelector(".navegador-top button");

let menu_hamburguer = document.querySelector(".menu-hamburguer");

let feed = document.querySelector(".feed");

button.addEventListener("click", function(){
    menu_hamburguer.classList.toggle("active");
    feed.classList.toggle("direita");
});


let openModal = document.querySelector(".navegador-top .botao-postar");

let overLay = document.querySelector(".overlay-modal");

let closeModal = document.querySelector(".overlay-modal .modal .modal-title .fechar-modal");

openModal.addEventListener("click", function(){
    overLay.classList.add("active");
});

closeModal.addEventListener("click", function(){
    overLay.classList.remove("active");
});


let dadosPosts = [
    {
        nome:"Victor",
        mensagem:"Boa noite!",
    },
    {
        nome:"Carlos",
        mensagem:"Tá quente hoje!",
    }
];

let userName = document.querySelector(".user-name");
let newMensagem = document.querySelector(".texto");
let addPost = document.querySelector(".botao-publicar");

addPost.addEventListener("click", function(event){
    event.preventDefault();

    let post = document.createElement("div");
    post.classList.add("post");
    feed.appendChild(post);

    let nomeUser = document.createElement("h3");
    nomeUser.classList.add("user-nome");
    nomeUser.appendChild(document.createTextNode(userName.value));
    post.appendChild(nomeUser);

    let textoUser = document.createElement("p");
    textoUser.classList.add("post-mensagem");
    textoUser.appendChild(document.createTextNode(newMensagem.value));
    post.appendChild(textoUser);

    let newPost = {
        nome: userName.value,
        mensagem: newMensagem.value
    };

    dadosPosts.push(newPost);

    overLay.classList.remove("active");
    openModal.classList.remove("active");

    userName.value = '';
    newMensagem.value = '';
});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let post = 0;
let postAnterior;

/* a cada dois segundos muda o conteúdo do primeiro post*/
let Interval = setInterval(function() {

    let mesmoPost = true

    while (mesmoPost) {
        post = getRandomInt(0, dadosPosts.length)

        if(post !== postAnterior) {
            mesmoPost = false;
        }

    }

    postAnterior = post
    
    document.querySelector(".post.destaque .user-nome").innerHTML = dadosPosts[post].nome
    document.querySelector(".post.destaque .post-mensagem").innerHTML = dadosPosts[post].mensagem

}, 2000)