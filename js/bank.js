/*
* Bank: Vbank
* Author: Cleber Vilela
* Author URL: https://viliv.dev/
* Version: 1.0.0
*/

var managers = [];
var users = [];

function random(number) {
    return Math.floor(Math.random()*(number+1));
};

function randomInterval( min, max ) {
  return Math.round( min + ( Math.random() * ( max - min ) ) );
};

function randomChoice(array){
  return array[ Math.round( random( 0, array.length - 1 ) ) ];
};

class Bank {
    constructor(name, balance, cashin, cashout) {
        this.name = name;
        this.balance = balance;
        this.cashin = cashin;
        this.cashout = cashout;
    }
};

class Manager {
    constructor(login, pass) {
        this.login = login;
        this.pass = pass;
    }
};

managers.push(new Manager);
managers[0].login = Encrypt("gerentevbank");
managers[0].pass = Encrypt("senhademo");
console.log(managers);
 
class User {
    constructor(login, pass, cpf, name, balance, phone, cep, cashin, cashout, transfer, history, cashindate, cashoutdate, tx) {
        this.login = login;
        this.pass = pass;
        this.cpf = cpf;
        this.name = name;
        this.balance = balance;
        this.phone = phone;
        this.cep = cep;
        this.cashin = cashin;
        this.cashout = cashout;
        this.transfer = transfer;
        this.history = history;
        this.cashindate = cashindate;
        this.cashoutdate = cashoutdate;
        this.tx = tx;
        //history = Array;
    }
    get txin() {
        return this.balance += this.cashin;
      }
    set txin(txin) {
        this.balance = txin;
    }
    get txout() {
        return this.balance -= this.cashout;
      }
    set txout(txout) {
        this.balance = txout;
    }
    get hst() {
        return this.history.push(Array.from([this.balance,this.cashin,this.cashout,this.cashindate,this.cashoutdate]));
    }
    set hst(hst) {
        this.history = hst;
    }
    get txi() {
        return this.tx += 1;
      }
    set txi(txi) {
        this.tx = txi;
    }
};

users.push(new User("69d837746a7eeb80c5ba18d2b2fa","3c8f692f6e08","123456789-11","Joao da Silva",50000,"11-985554444","99991-000",0,0,0,[],Date.now,Date.now,0));
users.push(new User("69d83774697eeb80c5ba18d2b2fa","3c8f692f6e08","123456789-22","Maria da Silva",17000,"22-985554444","99992-000",0,0,0,[],Date.now,Date.now,0));
users.push(new User("69d83774687eeb80c5ba18d2b2fa","3c8f692f6e08","123456789-33","Rafael da Silva",9000,"33-985554444","99993-000",0,0,0,[],Date.now,Date.now,0));
users.push(new User("69d837746f7eeb80c5ba18d2b2fa","3c8f692f6e08","123456789-44","Gabriela da Silva",68000,"44-985554444","99994-000",0,0,0,[],Date.now,Date.now,0));
users.push(new User("69d837746e7eeb80c5ba18d2b2fa","3c8f692f6e08","123456789-55","Pedro da Silva",34000,"55-985554444","99995-000",0,0,0,[],Date.now,Date.now,0));
users.push(new User("69d837746d7eeb80c5ba18d2b2fa","3c8f692f6e08","123456789-66","Carlos da Silva",45000,"66-985554444","99996-000",0,0,0,[],Date.now,Date.now,0));
users.push(new User("69d837746c7eeb80c5ba18d2b2fa","3c8f692f6e08","123456789-77","Sandra da Silva",22000,"77-985554444","99997-000",0,0,0,[],Date.now,Date.now,0));
users.push(new User("69d83774637eeb80c5ba18d2b2fa","3c8f692f6e08","123456789-88","Felipe da Silva",6000,"88-985554444","99998-000",0,0,0,[],Date.now,Date.now,0));
users.push(new User("69d83774627eeb80c5ba18d2b2fa","3c8f692f6e08","123456789-99","Jose da Silva",57000,"99-985554444","99999-000",0,0,0,[],Date.now,Date.now,0));

console.log(users);

/**************LOGIN MANAGER***************/

function submitManager () {
    document.querySelector("#manform");
    document.addEventListener("submit", trustManager);
    function trustManager(etm) {
    const manlogin = Encrypt(document.getElementById("manlogin").value);
    const manpass = Encrypt(document.getElementById("manpass").value);
    console.log(manlogin);
    console.log(manpass);
    const foundManager = managers.find(Manager => Manager.login == manlogin);
    if (foundManager == undefined || null){
        alert("Por favor verifique o login e senha inseridos!");
    } else{
        console.log(foundManager);
        console.log(foundManager.login);
        console.log(foundManager.pass);
    if(manpass == foundManager.pass){
        alert("Você está entrando num ambiente autenticado! Clique para prosseguir!");
        loadManager();
    } else{
        alert("Por favor verifique o login e senha inseridos!");
    };
    };
    document.removeEventListener("submit", trustManager);
    etm.stopImmediatePropagation();
    etm.preventDefault();
    };
};


/*************CREATE USER***************/

function submitNewUser () {
    document.querySelector("#newuserform");
    document.addEventListener("submit", newUser);
    function newUser(enu) {
    const userlogin = Encrypt(document.getElementById("login").value);
    const userpass = Encrypt(document.getElementById("pass").value);
    const userpasstrue = Encrypt(document.getElementById("passtrue").value);
    const usercpf = document.getElementById("cpf").value;
    const username = document.getElementById("name").value;
    const userbalance = document.getElementById("balance").value;
    const userphone = document.getElementById("phone").value;
    const usercep = document.getElementById("cep").value;
    const foundUser = users.find(User => User.login == userlogin);
    const foundCpf = users.find(User => User.cpf == usercpf);
    if((foundUser == undefined || null)&&(foundCpf == undefined || null)){
        if(userpass == userpasstrue){
            users.push(new User (userlogin,userpass,usercpf,username,userbalance,userphone,usercep,0,0,0,[],Date.now,Date.now,0));
            alert("Usuário criado com sucesso!");
            console.log(users);
            } else{
        
                alert("Por favor preencha a mesma senha no formulário!");
            };
    } else{
        
        alert("Já existe um usuário com este email / login ou CPF cadastrado!");
    }
    document.removeEventListener("submit", newUser);
    enu.stopImmediatePropagation();
    enu.preventDefault();
    };
};

/*************LOGIN USER***************/

function submitUser () {
    document.querySelector("#userform");
    document.addEventListener("submit", trustUser);
    function trustUser(etu) {
        const submituserlogin = Encrypt(document.getElementById("userlogin").value);
        const submituserpass = Encrypt(document.getElementById("userpass").value);
        const submitFoundUser = users.find(User => User.login == submituserlogin);
        console.log(submitFoundUser);
        console.log(submitFoundUser.login);
        console.log(submitFoundUser.pass);
        if(submitFoundUser == undefined || null){
            alert("Usuário não encontrado na base de dados!");
        } else{
            if(submituserpass == submitFoundUser.pass){
                alert("Você está entrando num ambiente autenticado! Clique para prosseguir!");
                loadUser();
                console.log(users);
                } else{
                    alert("Por favor verifique o login e senha inseridos!");
                };
        }
        document.removeEventListener("submit", trustUser);
        etu.stopImmediatePropagation();
        etu.preventDefault();
    };
};

/***************BANK MANAGEMENT*****************/

function txin() {
    document.querySelector("#bankuserform");
    document.addEventListener("submit", trustIn);
    function trustIn(eti) {
        const txincashin = parseFloat(document.getElementById("bankuservalue").value);
        const txinlogin = Encrypt(document.getElementById("bankuserlogin").value);
        const txinpass = Encrypt(document.getElementById("bankuserpass").value);
        const txinFoundUser = users.find(User => User.login == txinlogin);
        console.log(txinFoundUser);
        if(txinFoundUser == undefined || null){
            alert("Usuário não encontrado na base de dados!");
        } else{
            if(txinpass == txinFoundUser.pass){
                txinFoundUser.cashin = txincashin;
                txinFoundUser.txin;
                txinFoundUser.txi;
                alert("Obrigado por depositar $ " + txinFoundUser.cashin + " no Vbank!");
                console.log(txinFoundUser);
                txinFoundUser.hst;
                alert("Gravada as seguintes ações no seu extrato: Saldo: $ " + txinFoundUser.balance + " Depositado: $ " + txinFoundUser.cashin);
                console.log(txinFoundUser);
                } else{
                    alert("Por favor verifique o login e senha inseridos!");
                };
        }
        document.removeEventListener("submit", trustIn);
        eti.stopImmediatePropagation();
        eti.preventDefault();
    };
}

function txout() {
    document.querySelector("#bankuserform");
    document.addEventListener("submit", trustOut);
    function trustOut(eto) {
        const txoutcashin = parseFloat(document.getElementById("bankuservalue").value);
        const txoutlogin = Encrypt(document.getElementById("bankuserlogin").value);
        const txoutpass = Encrypt(document.getElementById("bankuserpass").value);
        const txoutFoundUser = users.find(User => User.login == txoutlogin);
        console.log(txoutFoundUser);
        if(txoutFoundUser == undefined || null){
            alert("Usuário não encontrado na base de dados!");
        } else{
            if(txoutpass == txoutFoundUser.pass){
                txoutFoundUser.cashout = txoutcashout;
                txoutFoundUser.txout;
                txoutFoundUser.txi;
                alert("Realizado saque de $ " + txoutFoundUser.cashout + " ! Obrigado por usar o Vbank!");
                console.log(txoutFoundUser);
                txoutFoundUser.hst;
                alert("Gravada as seguintes ações no seu extrato: Saldo: $ " + txoutFoundUser.balance + " Sacado: $ " + txoutFoundUser.cashout);
                console.log(txoutFoundUser);
                } else{
                    alert("Por favor verifique o login e senha inseridos!");
                };
        }
        document.removeEventListener("submit", trustOut);
        eto.stopImmediatePropagation();
        eto.preventDefault();
    };
}
