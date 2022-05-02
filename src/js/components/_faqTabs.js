const question = [...document.querySelectorAll(".faq__item-title")];

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".faq__item.faq__item--open");
    if (active && active !== question.parentNode) {
      active.classList.toggle("faq__item--open");
      active.querySelector('.faq__item-content').style.maxHeight = 0;
    }

    question.parentNode.classList.toggle("faq__item--open");
    const answer = question.nextElementSibling;

    if (question.parentNode.classList.contains("faq__item--open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
