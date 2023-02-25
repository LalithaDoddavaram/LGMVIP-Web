let resultSectionEl = document.getElementById("UserDetailsCard");
let getResultBtn = document.getElementById("getUsersBtn");

let url = "https://reqres.in/api/users?page=1";

let API = async function() {
    let response = await fetch(url);
    let result = await response.json();
    let userData = result.data
        .map(function(user) {
            return `<div class="user-card">
        <div class="result-image">
            <img src="bg.jpg" alt="">
        </div>
        <div class="user-image">
            <img src="${user.avatar}" alt="">
        </div>
        <div class="card-content">
            <h3 class="user-name">${user.first_name} ${user.last_name}</h3>
            <h2 class="user-email">${user.email}</h2>
            <h2 class="user-id">User ID: ${user.id}</h2>
        </div>
    </div>`;
        })
        .join("");
    resultSectionEl.innerHTML = userData;
}


getResultBtn.onclick = function() {
    resultSectionEl.innerHTML = `<div class="spinner-border loader" role="status">
  <span class="sr-only">Loading...</span>
</div>
<h1 class="loading">Loading...</h1>`;
    setTimeout(function() {
        API();
    }, 3000);
}