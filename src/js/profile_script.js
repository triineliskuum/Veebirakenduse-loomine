document.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement("div");
    div.className = "user-menu";

    let profileIcon = document.createElement("img");
    profileIcon.src = "res/images/profile.svg";
    profileIcon.width = 50;
    profileIcon.height = 50;
    profileIcon.alt = "Profile picture";
    profileIcon.className = "profile-picture";
    profileIcon.id = "profile-icon";
    profileIcon.style.cursor = "pointer";
    div.append(profileIcon);

    let ul = document.createElement("ul");
    ul.className = "dropdown-menu";
    
    let nameLi = document.createElement("li");
    let nameSpan = document.createElement("span");
    nameSpan.className = "dropdown-name";
    nameSpan.textContent = "John Doe";
    nameLi.append(nameSpan);
    ul.append(nameLi);

    let emailLi = document.createElement("li");
    let emailSpan = document.createElement("span");
    emailSpan.className = "dropdown-email";
    emailSpan.textContent = "john.doe@ut.ee";
    emailLi.append(emailSpan);
    ul.append(emailLi);

    let logoutLi = document.createElement("li");
    let logoutA = document.createElement("a");
    logoutA.className = "dropdown-logout";
    logoutA.href = "login.html";
    logoutA.textContent = "logout";
    logoutLi.append(logoutA);
    ul.append(logoutLi);

    div.append(ul);

    const navElement = document.querySelector("nav");
    if (navElement) {
         navElement.append(div);
    }

    profileIcon.addEventListener("click", function() {
        ul.classList.toggle("show");
    });
});