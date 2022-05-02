import _vars from "../_vars";

const fieldArray = [..._vars.inputsFrom];

if (fieldArray.length > 0) {

  fieldArray.forEach(element => {
    element.addEventListener('focus', function () {
      this.parentElement.classList.add('focused');
    })

    element.addEventListener('blur', function () {
      var inputValue = this.value;
      if (inputValue == "") {
        this.classList.remove('filled');
        this.parentElement.classList.remove('focused');
      } else {
        this.classList.add('filled');
      }
    })
  })
}
