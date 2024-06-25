document.addEventListener('DOMContentLoaded', function () {
    const infoRepositoriosContainer = document.getElementById('descricao-repos');
    
    function carregarRepos() {
        const reposId = getReposIdFromURL();
        fetch('https://api.github.com/users/ygabsxw/repos')
        .then(response => response.json())
        .then(data => {
            const repo = data.find(r => r.id == reposId);
            if (repo) {
                mostraRepo(repo);
            } else {
                infoRepositoriosContainer.innerHTML = '<p>Repositório não encontrado</p>';
            }
        })
        .catch(error => {
            infoRepositoriosContainer.innerHTML = '<p>Erro ao carregar repositórios</p>';
        });
    }
    
    function mostraRepo(repo) {
        infoRepositoriosContainer.innerHTML += `
            <div class="repos">
            <h4 class="titulo-repositorio border-bottom border-dark border-2 pb-1">${repo.name}</h4>
            <div class="repo-description">
                <h6>Descrição</h6>
                <p class="repo-description">${repo.description}</p>
            </div>
            <div class="repo-created">
                <h6>Criado em</h6>
                <p>${new Date(repo.created_at).toLocaleDateString()}</p>
            </div>
            <div class="link-git">
                <h6>Link GitHub</h6>
                <a href="${repo.html_url}" target="_blank">${repo.html_url}</a>
            </div>
            <div class="repo-language">
                <h6>Linguagem</h6>
                <p>${repo.language}</p>
            </div>
            <div class="repo-topics">
                <h6>Tópicos</h6>
                <ul>
                ${repo.topics.map(topic => `<li>${topic}</li>`).join('')}
                </ul>
            </div>
            <div>
                <span><i class="ph ph-git-fork"></i>${repo.forks_count}</span>
                <span><i class="ph ph-star"></i>${repo.stargazers_count}</span>
            </div>
            </div>
        `;
    }

    function getReposIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    carregarRepos();
});
