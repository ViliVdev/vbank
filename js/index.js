function loadHome(){
	document.getElementById("app").innerHTML = `

	
	<div id="container">
	<p>Bem vindo ao ViliV Bank.</p>
	<p>Prezamos pela satisfação do nosso Usuário. Sinta-se livre para viver a experiência VBank!</p>
	</div>
    
	<div id="container">
		<button onclick="loadLogin()" type="button">- ENTRAR -</button>
    </div>
`}

function loadProject(){
	document.getElementById("app").innerHTML = `

	
	<div id="container">
	<p>Olá nesta página eu busco montar um sistema que simula um ambiente bancário para saques e depósitos.</p>
	<p>O projeto de programação se chama VBank! Viliv Bank!</p>
	</div>
`}

function loadAbout(){
	document.getElementById("app").innerHTML = `

	
	<div id="container">
	<p>Olá, meu nome é Cleber Vilela.</p>
	<p>Sou Apaixonado por tecnologia e estou em constante aprendizado.</p>
    <p>No momento focado em desenvolvimento Fullstack com JavaScript.</p>
	</div>
`}

function loadCalc(){
	document.getElementById("app").innerHTML = `

	
	<div id="container">
	<p>Calculadora teste.</p>
	<p>AQUIIIII</p>
	</div>
`}

function loadLogin(){
	document.getElementById("app").innerHTML = `

	
	<div id="container">
	<p>Escolha o método de login abaixo. Se deseja apenas acessar sua conta clique em "USUÁRIO".</p>
	</div>
    
	<div id="container">
		<button onclick="loadPassUser()" type="button">- USUÁRIO -</button>
        <button onclick="loadPassManager()" type="button">- GERENTE -</button>
    </div>
`}

function loadPassUser(){
	document.getElementById("app").innerHTML = `
	<div id="container">
	<p>Ambiente para autenticação do USUÁRIO.</p>
	</div>
    <div id="form">
                <div id="form">
                <p>Usuário, entre com seu login e senha:</p>
                </div>
                <form id="userform" name="userform" method="post">
                    <label for="userlogin">Login</label><br>
                    <input type="text" id="userlogin" name="userlogin" placeholder="Digite seu email" pattern="[a-z0-9._-]+@[a-z0-9.-]+" required name=userlogin><br>
                    <label for="userpass">Senha</label><br>
                    <input type="password" id="userpass" name="userpass" placeholder="Senha" pattern="[0-9]{6}" required name=userpass><br>
                    <button type="submit" id="buttonhiddenx" onclick="submitUser()">Entrar</button>
                </form>         
    </div>
`}

function loadPassManager(){
	document.getElementById("app").innerHTML = `
	<div id="container">
	<p>Ambiente para autenticação do GERENTE.</p>
	</div>
    <div id="form">
                <div id="form">
                <p>Gerente, entre com seu login e senha:</p>
                </div>
                <form id="manform" name="manform" method="post">
                    <label for="manlogin">Login</label><br>
                    <input type="text" id="manlogin" name="manlogin" placeholder="Gerente" pattern="[a-z0-9]{1,20}" required name=manlogin><br>
                    <label for="manpass">Senha</label><br>
                    <input type="password" id="manpass" name="manpass" placeholder="Senha" pattern="[a-z0-9]{1,20}" required name=manpass><br>
                    <button type="submit" id="buttonhiddenx" onclick="submitManager()">Entrar</button>
                </form>         
    </div>
`}

function loadManager(){
	document.getElementById("app").innerHTML = `

	<div id="container">
	<p><b>Gerente, selecione uma das opções abaixo:</b></p>
	</div>
	<div id=container>
        <button onclick="loadNewUser()" type="button">--- NOVO USUÁRIO ---</button>
		<button onclick="loadScreen()" type="button">--- CONSOLE ---</button>
        <button onclick="txin()" type="button">----- IN -----</button>
        <button onclick="txout()" type="button">----- OUT -----</button> 
    </div>
	
	<div id="container">
	<!--
    <form id="temp-form" name="temp-form">
            <input type="intenger" id="celsius" name="celsius" />
            <button>Calcular</button>
        </form>
		<button onclick="calcular()" type="button"> CALC </button>
    </div>-->

	
	<div id="appManager"> 
    </div>
	
`}

function loadNewUser(){
	document.getElementById("appManager").innerHTML = `
            <div id="form">
                <div id="form">
                <p>Gerente, favor preencher os dados do novo usuário bancário:</p>
                </div>
                <form id="newuserform" name="newuserform method="post">
                    <label for="login">Login (E-mail)</label><br>
                    <input type="text" id="login" name="login" placeholder="usuario@email.com" pattern="[a-z0-9._-]+@[a-z0-9.-]+" required name=login><br>
                    <label for="pass">Senha</label><br>
                    <input type="password" id="pass" name="pass" placeholder="Senha com 6 números" pattern="[0-9]{6}" required name=pass><br>
                    <label for="passtrue">Confirmar senha</label><br>
                    <input type="password" id="passtrue" name="passtrue" placeholder="Senha com 6 números" pattern="[0-9]{6}" required name=passtrue><br>
                    <label for="cpf">CPF</label><br>
                    <input type="text" id="cpf" name="cpf" placeholder="123456789-55" pattern="[0-9]{9}-[0-9]{2}" required name=cpf><br>
                    <label for="name">Nome</label><br>
                    <input type="text" id="name" name="name" placeholder="Nome e Sobrenome" pattern="[a-zA-Z ]{4,50}" required name=name><br>
                    <label for="balance">Depósito de abertura</label><br>
                    <input type="float" id="balance" name="balance" placeholder="Ex: 1875.64" pattern="[0-9]+.[0-9]{2}" required name=balance><br>
                    <label for="text">Número de telefone</label><br>
                    <input type="tel" id="phone" name="phone" placeholder="11-123456789" pattern="[0-9]{2}-[0-9]{5}[0-9]{4}" required name=phone><br>
                    <label for="cep">CEP</label><br>
                    <input type="text" id="cep" name="cep" placeholder="99999-000" pattern="[0-9]{5}-[0-9]{3}" required name=phone><br>
                    
                    <button type="submit" id="buttonhiddenx" onclick="submitNewUser()">Enviar</button>
                </form>         
            </div>

`}

function loadScreen(){
	document.getElementById("appManager").innerHTML = `
    <div id="screen">
	<div id="">
	<p> </p> <br>
        <p><label id=""></label></p> 
       
    </div>
	</div>

`}

function loadUser(){
	document.getElementById("app").innerHTML = `

	<div id="container">
        <button onclick="alert("Em construção")" type="button">-SALDO-</button>
        <button onclick="alert("Em construção")" type="button">-EXTRATO-</button>
    </div>
    <div id="form">
                <div id="form">
                <p>Digite a operação ao lado e finalize com seu login e senha:</p>
                </div>
                <form id="bankuserform" name="bankuserform" method="post">
                    <label for="bankuservalue">Valor</label><br>
                    <input type="float" id="bankuservalue" name="bankuservalue" placeholder="Ex: 45.87" pattern="[0-9]{1,7}.[0-9]{2}" required name=bankuservalue><br>
                    <label for="bankuserlogin">Login</label><br>
                    <input type="text" id="bankuserlogin" name="bankuserlogin" placeholder="Digite seu email" pattern="[a-z0-9._-]+@[a-z0-9.-]+" required name=bankuserlogin><br>
                    <label for="bankuserpass">Senha</label><br>
                    <input type="password" id="bankuserpass" name="bankuserpass" placeholder="Senha" pattern="[0-9]{6}" required name=bankuserpass><br>
                    <button type="submit" id="buttonhiddenx" onclick="txout()">SACAR</button>
                    <button type="submit" id="buttonhiddenx" onclick="txin()">DEPOSITAR</button>
                </form>         
    </div>
	<div id="screen">
        <p></p>
        <p><label id="console"></label></p>
        
    </div>
`}

