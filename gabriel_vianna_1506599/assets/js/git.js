document.addEventListener('DOMContentLoaded', () => {
    const perfilConteiner = document.getElementById('info-perfil')

        fetch('https://api.github.com/users/ygabsxw')
        .then(response => response.json())
        .then(data => { 
            perfilConteiner.innerHTML += `
            <div class="infos">
                <img src="${data.avatar_url}" alt="imagem de perfil" class="minha-foto">
                <div>
                    <h5 class="nome">${data.name}</h5>
                    <p class="bio">Olá, meu nome é Gabriel Diniz Reis Vianna, tenho 18 anos e estou cursando Ciências da computação na PUC, Comecei na programação em 2024 juntamente ao ingressar na faculdade. Tenho conhecimento das linguagens HTML, CSS, Java Script, C e C++, além de possuir ingles intermédiario.</p>
                    <p class="location"></p>${data.location}</p>
                    <p class="seguidores"><i class="ph ph-users"></i>${data.followers}</p>
                    <a href="mailto:gabrieldrvianna@gmail.com"><i class="ph ph-envelope redes-sociais"></i></a>
                    <a href="https://github.com/ygabsxw"><i class="ph ph-github-logo redes-sociais"></i></a>
                    <a href="https://www.instagram.com/gabrieldinizv/"><i class="ph ph-instagram-logo redes-sociais"></i></a>
                    
                </div>
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
                    <div class="card caixa">
                      <a href="./repo.html?id=${repo.id}">
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
    const colegasContainer = document.getElementById('colegas-texto')

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