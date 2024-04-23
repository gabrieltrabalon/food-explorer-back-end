# Food Explorer

## Sobre

O Food Explorer é um aplicativo web criado com tecnologias como React.js no front-end e Node.js no back-end, fornecendo uma experiência completa de exploração e compra de alimentos para os clientes de um estabelecimento gastronômico. Com recursos como personalização de perfil, filtragem de favoritos e um carrinho totalmente operacional com opções de pagamento via cartão ou Pix, o projeto oferece segurança e comodidade aos utilizadores.

O gestor(Admin) tem permissão para criar, modificar e excluir itens do cardápio, além de poder ajustaro estado dos pedidos, que são atualizados instantaneamente na interface dos clientes, O ponto forte é a responsividade, onde se ajusta em diversos dispositivos, como computadores tablets e celulares.

Os clientes devem se cadastrar para utilizar a plataforma, incluindo opções, como personalização do perfil (Imagem, Nome, Email e Senha), melhorando assim sua experiência de navegação.

## Tecnologias

As seguintes tecnologias foram empregadas na no desenvolvimento do back-end:

- sqlite3
- Node
- bcryptjs
- cors
- express
- jest
- jsonwebtoken
- knex
- multer
- pm2

## Como utilizar

Clone do projeto.

```bash
git clone https://github.com/gabrieltrabalon/food-explorer-back-end.git
```

Execute o back-end

```bash
# No projeto renomeie o arquivo .env.example para .env e insira AUTH_SECRET + PORT
AUTH_SECRET =
PORT =

# Entre no diretório do back-end
cd food-explorer-back-end

# Instale as dependências necessárias
npm install

# Inicie o servidor
npm run dev

# O terminal irá exibir 'Server is running on Port' e a porta onde a aplicação está sendo executada. 
# Server is running on Port {PORT definida no arquivo .env}
```

### Senha do Administrador

`e-mail: admin@email.com` `senha: 123456`

O servidor deste projeto foi alojado no Render, um serviço de hospedagem sem custos. É relevante observar que, por estar hospedado em um serviço gratuito, o back-end entra em estado de inatividade após 15 minutos de inatividade. Se o usuário tentar acessar o site e o back-end não responder, é necessário aguardar um pouco, pois os serviços estarão sendo "reiniciados". Essa fase pode levar até 1 minuto, dependendo da carga nos servidores do Render. É importante salientar que esse tempo de reinicialização pode influenciar o desempenho da aplicação, especialmente durante períodos de grande demanda.

O front-end foi hospedado na plataforma Netlify, que oferece hospedagem gratuita para sites e aplicativos web. Para garantir o funcionamento adequado do front-end, é crucial que o servidor back-end esteja operacional e responda conforme esperado. Do contrário, o front-end poderá exibir erros ou comportamentos inesperados.


[CLIQUE AQUI E VEJA O RESULTADO FINAL](https://foodexplorerxz.netlify.app/)


[@GabrielTrabalon](https://github.com/gabrieltrabalon)
