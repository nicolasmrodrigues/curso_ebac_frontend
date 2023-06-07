$(document).ready(function () {
    endpoint = 'https://api.github.com/users/nicolasmrodrigues'

    fetch(endpoint)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const nameElement = $('#name')[0];
        const usernameElement = $('#username')[0];
        const reposElement = $('#repos')[0];
        const followersElement = $('#followers')[0];
        const followingElement = $('#following')[0];
        const linkElement = $('#link')[0];
        const avatarElement = $('#avatar')[0];
        

        avatarElement.src = json.avatar_url;
        nameElement.innerText = json.name;
        usernameElement.innerText = `@${json.login}`;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })
});