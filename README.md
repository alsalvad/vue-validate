
<main>
<h2>O que é o</h2>
<p>
  O <b>Vue Validate</b> é um plugin para criação de formulários. <br>
  Com apenas 1 componente, é possível criar todos os tipos de inputs para formulários. Desde um simples input de texto até um campo de multiselect com pesquisa, tudo isso com uma sintaxe limpa e simples. <br><br>
  Um de seus maiores diferenciais é o sistema de regras para a validação dos dados informados nos campos. <br>
  Basta informar o parâmetro <b>rules</b> com as regras desejadas e o plugin se encarrega de fazer o resto no momento do submit. <br>
  Este parâmetro foi inspirado nas validações do framework Laravel, portanto basta informar da seguinte forma: <br>
  <div class="text-html">
    <span class="text-param">rules</span>=<span class="text-class">"required|min:5|max:20|email"</span>
  </div>

  As regras acima farão com que o campo seja obrigatório de ser preenchido, tenha no mínimo 5 caracteres, no máximo 20 caracteres e seja um email.

  <p>
    Veja o projeto funcionando! <br>
    1. Clone
    2. npm install
    3. npm run dev
  </p>
</p>

<hr>

<h2>Requisitos</h2>
<p>
  O único requisito para a utilização do Vue Validate é o <a href="https://npm.io/package/mitt" target="_blank">mitt</a>. <br>
  O mitt é utilizado no momento do envio do formulário, para que todos os campos sejam validados conforme suas regras.
</p>

<hr>

<p>
  Este projeto está sendo desenvolvido por André Luiz Salvador.
  <a href="https://github.com/alsalvad/vue-validate" target="_blank" class="social">
    <i class="fab fa-github"></i>
  </a>
  <a href="https://www.linkedin.com/in/alsalvad/" target="_blank" class="social">
    <i class="fab fa-linkedin"></i>
  </a>
</p>
</main>
