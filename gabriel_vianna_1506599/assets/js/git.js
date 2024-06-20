document.addEventListener('DOMContentLoaded', () => {
    const perfilConteiner = document.getElementById('info-perfil')

        fetch('https://api.github.com/users/ygabsxw')
        .then(response => response.json())
        .then(data => { 
            perfilConteiner.innerHTML += `
            <div class="perfil">
                <img src="${data.avatar_url}" alt="imagem de perfil" class="imagem">
                <h5 class="nome">${data.name}</h5>
                <p class="bio">Olá, meu nome é Gabriel Diniz Reis Vianna, tenho 18 anos e estou cursando Ciências da computação na PUC, Comecei na programação em 2024 juntamente ao ingressar na faculdade. Tenho conhecimento das linguagens HTML, CSS, Java Script, C e C++, além de possuir ingles intermédiario.</p>
                <p class="location"></p>${data.location}</p>
                <p class="seguidores">${data.followers}</p>
                <a href="https://www.facebook.com/?locale=pt_BR"><img  class="redes-sociais" src="assets/imgs/facebook.png"></a>
                <a href="https://twitter.com/home?lang=pt-br"><img class="redes-sociais" src="assets/imgs/twitter.png"></a>
                <a href="https://www.instagram.com/gabrieldinizv/"><img class="redes-sociais" src="assets/imgs/instagram.png"></a>
            </div>
            `
        })
    })

document.addEventListener('DOMContentLoaded', () => {
    const repositoriosContainer = document.getElementById('repo-infos')
    fetch('https://api.github.com/users/ygabsxw/repos')
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            repositoriosContainer.innerHTML += `
                <div class="col">
                    <div class="card">
                      <a href="./repo.html">
                          <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${repo.description}</p>
                            <div>
                            <span><i class="ph ph-git-fork"></i>${repo.forks_count} <i class="ph ph-star">${repo.stargazers_count}</i></span>
                            </div>
                          </div>
                      </a>
                    </div>
                </div>
                `
        })
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const sugeridoContainer = document.getElementById('sugestoes')
    fetch('https://29f9f73c-46af-4991-b0b0-977c1a3e3ca7-00-3fkpjx9ws74cr.kirk.replit.dev/sugeridos')
    .then(response => response.json())
    .then(data => {
        data.forEach(sugerido => {
            sugeridoContainer.innerHTML += `
                <div class="carousel-item">
                    <a href="${sugerido.link}" class="d-block w-100" alt=""><img src="${sugerido.imagem}" class="d-block w-100" alt=""></a>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>${sugerido.nome}</h5>
                      <p>${sugerido.descricao}</p>
                    </div>
                  </div>
                `
        })
        sugeridoContainer.children[0].classList.add('active')
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const colegasContainer = document.getElementById('colegas-trabalho')

    fetch('https://29f9f73c-46af-4991-b0b0-977c1a3e3ca7-00-3fkpjx9ws74cr.kirk.replit.dev/colegas')
    .then(response => response.json())
    .then(data => {
        data.forEach(colega => {
            colegasContainer.innerHTML += `
                <div class="card">
                    <a href="${colega.link}" class="d-block w-100" alt=""><img src="${colega.imagem}" class="d-block w-100" alt=""></a>
                    <div class="card-name">
                        <p class="card-text">${colega.nome}</p>
                    </div>
                </div>
                `
        })
    })
})