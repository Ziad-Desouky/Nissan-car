document.addEventListener('click', (event) => {
    if (event.target.classList.contains('mark-plus') || //check if the element clicked is the link in span
        event.target.parentElement.classList.contains('mark-plus')) {  //check if the element clicked is the i element
        let lists = document.querySelectorAll('.disable-list'); //catch all lists to disabled it
        let pluses = document.querySelectorAll('.mark-plus');  //catch all icons plus to make it mines 
        for (let i = 0; i < 4; i++) {        // for loop to loop on all lists and plus icons
            lists[i].classList.replace('disable-list', 'disable-true');
            pluses[i].innerHTML = "HIDE KEY FEATURES <i class='fa-solid fa-minus'></i>";
            pluses[i].classList.replace('mark-plus', 'mark-mines')
        }
    }
    else if (event.target.classList.contains('mark-mines') ||
        event.target.parentElement.classList.contains('mark-mines')) {
        let lists = document.querySelectorAll('.disable-true');
        let minses = document.querySelectorAll('.mark-mines');
        for (let i = 0; i < 4; i++) {
            lists[i].classList.replace('disable-true', 'disable-list');
            minses[i].innerHTML = 'SHOW KEY FEATURES &nbsp;<i class="fa-solid fa-plus" style="color: #ff0000;" ></i> ';
            minses[i].classList.replace('mark-mines', 'mark-plus')
        }
    }
})