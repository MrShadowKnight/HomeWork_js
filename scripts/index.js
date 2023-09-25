function showPassword(TARGET) {
  //get element
  const TARGET = document.querySelector(TARGET);
  TARGET.setAttribute("type", "text");
  //hide eye icon
}

const getUserRole = (element) => {
  const ACTIVE_ELEMENT = element.querySelector(".active");
  const DATA = ACTIVE_ELEMENT.getAttribute("data-role");
  return DATA;
};

const getLastNameUser = (element) => {
  const VALUE = element.value;
  if (VALUE.length >= 3) {
    return VALUE;
  } else {
    alert("Lastname to short");
    return null;
  }
};

// start point
document.addEventListener("DOMContentLoaded", () => {
  // GET ELEMENTS FROM DO CUMENT
  const LEFT_BLOCK = document.querySelector(".form__top_LFor_Lblock");
  const RIGHT_BLOCK = document.querySelector(".form__top_LFor_Rblock");
  const LF_BLOCK = document.querySelector(".form__top_LFor");
  const CHECK_BOX = document.querySelector(".form__input_checkbox");
  const SUDMIT_BTN = document.querySelector(".form__input_sumbit");
  const REGISTER_FORM = document.querySelector(".form");
  const INPUT_LAST_NAME = document.querySelector(".form__input_second_name");

  // EVENT LISTENER
  LF_BLOCK.addEventListener("click", () => {
    LEFT_BLOCK.classList.toggle("active");
    RIGHT_BLOCK.classList.toggle("active");
  });

  CHECK_BOX.addEventListener("click", () => {
    const CHECK_BOX_VALUE = CHECK_BOX.checked;
    CHECK_BOX_VALUE
      ? (SUDMIT_BTN.disable = false)
      : (SUDMIT_BTN.disable = true);
  });
  REGISTER_FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    // get data form
    let role = getUserRole(REGISTER_FORM);
    let lastUserName = getLastNameUser(INPUT_LAST_NAME);
    if (!lastUserName) {
      return;
    }
    // create data frame
    const USER_DATA = {
      role,
    };
    console.log("USER_DATA", USER_DATA);
  });
});
