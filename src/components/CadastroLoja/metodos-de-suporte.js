

export function m_success(text) {
    var message = document.querySelector(".message");

    message.style.display = "flex";

    message.innerHTML = `
      <span class="fieldSuccess">${text}</span>
    `
}

export function m_error(text) {
    var message = document.querySelector(".message");

    message.style.display = "flex";

    message.innerHTML = `
      <span class="fieldError">${text}</span>
    `
}