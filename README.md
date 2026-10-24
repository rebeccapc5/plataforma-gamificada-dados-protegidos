# plataforma-gamificada-dados-protegidos
Plataforma gamificada de treinamentos sobre segurança digital. Projeto de extensão para a  UFMS. 

-> Descrição do Projeto
Este projeto consiste num Painel Gamificado de Segurança Digital desenvolvido em React, cujo objetivo é transformar a aprendizagem de conceitos e boas práticas de segurança da informação numa experiência interativa, dinâmica e envolvente. 
A aplicação utiliza uma temática visual colorida e divertida inspirada em jogos clássicos (como Super Mario), incorporando elementos de gamificação como: sistema de níveis e experiência (xp): com o acompanhamento visual da progressão do usuário através de uma barra de nível animada; treinamentos interativos: módulos de segurança (como prevenção de phishing, gestão de senhas e 2FA) que concedem pontos de xp ao serem concluídos; ranking geral: tabela de classificação competitiva para incentivar o engajamento da equipe; conquistas (badges): distintivos desbloqueados à medida que o usuário evolui nas práticas de segurança. 
Além disso, conta com um banco de dados próprio. 

-> Tecnologias Utilizadas
React (componentes funcionais e hooks `useState`)
JavaScript (ES6+)
HTML5 / CSS3 (estilização responsiva com flexbox e CSS grid)
Node.js (ambiente de execução e desenvolvimento local)
PostgreSQL

-> Pré-requisitos
Certifique-se de ter instalado no seu computador:
Node.js (versão 14 ou superior recomendada)
Git
PgAdmin 4

-> Instalação e Execução Local
Siga os passos abaixo para clonar e executar o projeto na sua máquina:

1. copie o repositório
2. navegue para a pasta do projeto (cd plataforma-gamificada-dados-protegidos/frontend)
3. instale as dependências
4. inicie o servidor 

1. crie a base de dados no pgAdmin
2. execute o script schema.sql para gerar as tabelas e restrições
3. execute o script seed_dml.sql para popular com os dados iniciais
