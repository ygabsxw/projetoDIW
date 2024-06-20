const perfil = document.querySelector('.perfil')
const nome = document.querySelector('.nome')
const bio = document.querySelector('.bio')
const seguidores = document.querySelector('.seguidores')
const colegas = document.querySelector('.colegas')
const repositorio = document.querySelector('.repositorio')
const sugeridos =  document.querySelector('.sugeridos')
const localizacao = document.querySelector('.localizacao')

document.addEventListener('DOMContentLoaded', function() => {
    fetch('https://api.github.com/users/ygabsxw')
    .then(response => response.json())
    .then(data => {
        perfil.src = data.avatar_url
        nome.textContent = data.name
        bio.textContent = data.bio
        seguidores.textContent = data.followers
        colegas.textContent = data.following
        repositorio.textContent = data.public_repos
        localizacao.textContent = data.location
    })
})

document.addEventeListener('DOMContentLoaded', function() => {
    const repositoriosContainer = document.getElementById('repositorios')
    fetch('https://api.github.com/users/ygabsxw/repos')
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            repositoriosContainer.innerHTML = `
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

document.addEventeListener('DOMContentLoaded', function() => {
    const sugeridoContainer = document.getElementById('conteudo-sugerido')
    fetch('https://29f9f73c-46af-4991-b0b0-977c1a3e3ca7-00-3fkpjx9ws74cr.kirk.replit.dev/sugeridos')
    .then(response => response.json())
    .then(data => {
        data.forEach(sugerido => {
            sugeridoContainer.innerHTML = `
                <div class="carousel-item">
                    <a href="${sugerido.link}" class="d-block w-100" alt=""><img src="${sugerido.imagem}" class="d-block w-100" alt=""></a>
                    <div class="carousel-caption d-none d-md-block">
                      <h5>${sugerido.nome}</h5>
                      <p>${sugerido.descricao}</p>
                    </div>
                  </div>
                `
        })
    })
})