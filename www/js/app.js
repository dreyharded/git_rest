// Dom7
var $$ = Dom7;
$$('.logoff').hide();
$$('.login-screen-open').show();
$$('.cardapioindex').hide();
$$('.reservaindex').hide();

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'REST', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .SingUp').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase
    .auth()
    .createUserWithEmailAndPassword(username,password)//Promisses
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text = 'Bem Vindo: ' + username;
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/ivalid-email'){
        app.dialog.alert('Email invalido no seu formato!!!');
      }$$('#btnSalvar').on('click', function () {
        var formData = app.form.convertToData('#form-user-content')
        var nameInput = $$('#name [name="name"]').val();
        var nameInput = $$('#password [name="password"]').val();
        alert(JSON.stringify(formData))
        firebase.database().ref().child('usuarios').push(JSON.stringify(formData))
    });
  app.loginScreen.close('#my-login-screen');
  })
  0
  app.loginScreen.close('#my-login-screen');
});



$$('#my-login-screen .SingIn').on('click', function () {
  var username = $$('#my-login-screen [name="email"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  firebase
    .auth()
    .signInWithEmailAndPassword(username,password)//Promisses
    .then( function () {
      app.dialog.alert('Bem vindo: ' + username);
      this.$$('.toolbar-inner').text('Bem Vindo: ' + username + 'vc está logado!');
      $$('.logoff').show();
      $$('.cardapioindex').show();
      $$('.reservaindex').show();
      $$('.login-screen-open').hide();
      $$('input#email').val('');
      $$('input#password').val('');
    })
    .catch(function(error){
      console.error(error.code)
      console.error(error.message)
      if (error.code =='auth/user-not-found'){
        app.dialog.alert('Não há registro de usuario correspondente a este identificador. O usuário pode ter sido excluído');
      }
        app.dialog.alert('Email invalido no seu formato!!!');
    })
  app.loginScreen.close('#my-login-screen');
});






$$('#my-login-screen .SignOut').on('click', function () {
  app.loginScreen.close('#my-login-screen');
  $$('input#emailInput').val('');
  $$('input#passwordInput').val('');
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      app.dialog.alert('Usuário não autenticado');
      app.loginScreen.close('#my-login-screen');
      $$('.logoff').hide();
      $$('.login-screen-open').show();      
    }, function(error){
      console.error(error)
    })
});
$$('#my-login-screen .login-screen-close').on('click', function () {
  $$('input#emailInput').val('');
  $$('input#passwordInput').val('');
})
$$('.logoff').on('click', function () {
  firebase
    .auth()
    .signOut()
    .then( function () {
      this.$$('.toolbar-inner').text('Usuário não autenticado');
      app.dialog.alert('Usuário não autenticado');
      $$('input#emailInput').val('');
      $$('input#passwordInput').val('');
      $$('.logoff').hide();
      $$('.login-screen-open').show();
      $$('.cardapioindex').hide();
      $$('.reservaindex').hide();
    }, function(error){
      console.error(error)
    })  
})


$$('#addButton').on('click', function () {
  var nome = $$('#nome').val();
  var email = $$('#emailorcamento').val();
  var telefone = $$('#telefone').val();
  var especificacoesp = $$('#especificacoes').val();

  var formData = {Nome: nome, Email: email, Telefone: telefone, especificacoes: especificacoesp}
  console.log(formData);
  firebase.database().ref().child('reserva').push(formData)
  .then( function () {
    app.dialog.alert('pre-reserva Efetuado com Sucesso, aguarde o contato');
    $$('input#nome').val('');
    $$('input#emailorcamento').val('');
    $$('input#telefone').val('');
    $$('#especificacoes').val("");
  }, function(error){
    app.dialog.alert('Erro, confira o console');
    console.error(error)
  })
});




                          // barra

                          
// Set progress on inline progressbar
$$('.set-inline-progress').on('click', function (e) {
  var progress = $$(this).attr('data-progress');
  app.progressbar.set('#demo-inline-progressbar', progress);
});


// Function show determinate progressbar and emulate loading
determinateLoading = false;
function showDeterminate(inline) {
  determinateLoading = true;
  var progressBarEl;
  if (inline) {
    // inline progressbar
    progressBarEl = app.progressbar.show('#demo-determinate-container', 0);
  } else {
    // root progressbar
    progressBarEl = app.progressbar.show(0, app.theme === 'md' ? 'yellow' : 'blue');
  }
  var progress = 0;
  function simulateLoading() {
    setTimeout(function () {
      var progressBefore = progress;
      progress += Math.random() * 20;
      app.progressbar.set(progressBarEl, progress);
      if (progressBefore < 100) {
        simulateLoading(); //keep "loading"
      }
      else {
        determinateLoading = false;
        app.progressbar.hide(progressBarEl); //hide
      }
    }, Math.random() * 200 + 200);
  }
  simulateLoading();
}
// show inline determinate progressbar
$$('.show-determinate').on('click', function (e) {
  showDeterminate(true);
});

// show root determinate progressbar
$$('.show-determinate-root').on('click', function (e) {
  showDeterminate(false);
});

var infiniteLoading = false;
// show inline infinite progressbar
$$('.show-infinite').on('click', function () {
  app.progressbar.show(app.theme === 'md' ? 'yellow' : 'blue');
  setTimeout(function () {
    infiniteLoading = false;
    app.progressbar.hide();
  }, 3000);
});

// show root infinite progressbar
$$('.show-infinite-root').on('click', function () {
  app.progressbar.show('multi');
  setTimeout(function () {
    infiniteLoading = false;
    app.progressbar.hide();
  }, 3000);
});