<div align="center">
  <img src="https://www.rocketseat.com.br/favicon.ico" alt="Rocketseat logo" style="width:64px; height:64px; border-radius:50%;" />
</div>
<div align="center">
<strong style="color:#8257e5; font-size:2rem;#8257e5"> Challenger Ignite Lab - Rocketseat 2022 </strong> 
</div>

## 🧰 Tools

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com)
- [Apollo](https://www.apollographql.com)
- [GraphQL](https://graphql.org)
- [GraphCMS](https://graphcms.com)

## 🔥 Primeiro dia do desafio 20/06/2022

Iniciando projeto React com vite, instalando tailwindcss, apollo e o graphql e fazendo todas as configuraçoes. Após feita as configurações fizemos a criação dos schemas no GraphCMS e iniciando inserinado um professor e uma atividade e conectando com front-end.

## 🔥 Segundo dia do desafio 21/06/2022

Começamos a construir a estrutura visual do projeto, por componentes vamos montando a página, foi feito o header e a sidebar que ja foi conectada com o GraphCMS para buscar as aulas que estao disponível ou não e toda condicional também foi feita no front end para que cada aula tenho estado mutavél caso ela esteja ou não liberada.

Um ponto importante que gostaria de citar é uma nova lib que conheci que para uso cotidiano do dev front-end é excelente, a data-fns que dá todo suporte para manipulação de datas no javascript.

## 🔥 Terceiro dia do desafio 22/06/2022

Foi terminada toda parte de estilização e conexao com a API do graphcms para buscar todas as informçoes da aula.

Foi deixado como desafio fazer a responsabilidade do site, que até então não tinha nenhuma, aceitei o desafio e conclui toda responsabilidade do site, junto com um menu dropdown para as lessons e para melhorar UI do site, no momento de loading das lessons e das aulas criei os skeleton dos respectivos components e adicionei o shimmer effect, para usuário ter a experiência de loading.

## 🔥 Quarto dia do desafio 23/06/2022

Criamos a página inicial do projeto aonde contem um formulário para o usuário fazer a inscrição no projeto, para manipulação dos input do formulário usei a lib react hook form, nunca tinha usado ela somente a Formik, achei uma lib muito boa para lidar com formulários.

## 🔥 Quinto dia do desafio 24/06/2022

Projeto já estava completo, com todas funcionalidades propostas funcionando, mas para performar ainda mais o código foi usado uma lib chamada [graphql-codegen](https://www.graphql-code-generator.com).

**Como funciona essa lib ?**

Ela simplesmente se conecta com sua API graphql e gera um arquivo no seu projeto com toda a tipagem do seus schema e tambem podemos criar as queries e mutation em arquivos .graphql que ele mapeia todas essas queries e automaticamente ele criar hooks de acordo com a querie ou mutation criada nesses arquivos, facilidando leitura, manutenção e usabilidade do código.

## 🔥Desafio Master

foi deixado como desafio adicionar a aplicação um autentição pelo github para o usuário ter acesso a plataforma de aulas.

Codei a aplicação toda do zero, mas agora utilizando next, foi implementando recursos bem avaçandos, como SSG para buscar as aulas no server-side e gerar os paths estáticos de cada aula.

A lista de aula foi deixado padrão, sempre que usuário acessa a plataforma ele busca na API e se adicionarmos uma nova aula, elá sera listado e usuário poderá acessa=lá tranquilamente, pois o fallback está ativado e ela sera buscado na API.

Para autentição usei a lib [next-auth](https://next-auth.js.org), como provider o github, sendo assim usuário so poderá acessar a plataforma caso ele esteja logado e autenticado pelo github.

REPOSITÓRIO DO DESAFIO: [ignite-lab-joaobr200-next](https://github.com/joaobr200/ignite-lab-joaobr200-next)

## 🙅🏽‍♂️ Author

- **João Vitor** - [Joaobr200](https://github.com/joaobr200)
