function git() {
    var originalName = document.getElementById("text").value;
    console.log(originalName);

    // Fetch user information
    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            document.getElementById("result").innerHTML = 
               `<img src="${data.avatar_url}" alt="user_avatar">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <p><a href="${data.html_url}" target="_blank">View Profile</a></p>`;
        });

    // Fetch user repositories
    // fetch("https://api.github.com/users/" + originalName + "/repos")
    //     .then((result) => result.json())
    //     .then((data) => {
    //         console.log(data);
    //         let repoList = "<h2>Repositories:</h2><ul>";
    //         data.forEach(repo => {
    //             repoList += `
    //                 <li>
    //                     <a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description}
    //                 </li>`;
    //         });
    //         repoList += "</ul>";
    //         document.getElementById("repos").innerHTML = repoList;
    //     });
}