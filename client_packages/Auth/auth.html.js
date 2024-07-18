function showRegister() {
  register.style.display = 'flex';
  login.style.display = 'none';
  empty.style.display = 'none';
  char.style.display = 'none';
  already.style.display = 'none';

}

function showLogin() {
  register.style.display = 'none';
  login.style.display = 'flex';
  wg.style.display = 'none';
}

// Register
mp.events.add('html:regCase', (info) => {
  if (info === true) {
    already.style.display = "block";
  } else {
    register.style.display = "none"
    login.style.display = "flex"
    success.style.display = "block";
    already.style.display = "none";
  }
});

function sendRegInfo() {
  event.preventDefault();
  let usernameReg = document.getElementById('usernameReg').value;
  let passwordReg = document.getElementById('passwordReg').value;
  let pass1, pass2;

  if (usernameReg === "" || passwordReg === "") {
    let empty = document.getElementById('empty');
    empty.style.display = "block";
    pass1 = false;
  } else {
    empty.style.display = "none";
    pass1 = true;
  }

  regex = /^[a-zA-Z0-9]+$/;
  if ((regex.test(usernameReg)) === false) {
    char.style.display = "block";
    pass2 = false;
  } else {
    char.style.display = "none";
    pass2 = true;
  }

  if (pass1 === true && pass2 === true) mp.trigger('client:regData', usernameReg, passwordReg);
}

// Login
    mp.events.add('html:regCaseUsername', (res) => {
      setTimeout(() => {
        console.log(username)
      }, 1000);
    });

    function sendLoginInfo() {
      event.preventDefault();

      let username = document.getElementById('username');
      let password = document.getElementById('password');

      mp.events.add('html:loginCase', (res) => {
        if (res === false) wg.style.display = "block";
      });

      mp.trigger('client:loginData', username.value, password.value);
    }