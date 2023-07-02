Passo 1: Criando um novo repositório:

1.1 Clique em "New" na home do github para criar o novo repositório.

1.2 Coloque os dados do seu novo repositório, como nome, descrição, se ele é publico ou privado, etc.

Passo 2: Clonando o repositório pelo terminal

2.1. Abra o terminal no seu computador.

2.2. Navegue até o diretório onde você deseja clonar o repositório.

2.3. No site do repositório no GitHub, clique no botão "Code" e copie o link fornecido.

2.4. No terminal, execute o seguinte comando:

```bash
git clone <URL_DO_REPOSITÓRIO>
```
Substitua <URL_DO_REPOSITÓRIO> pelo link que você copiou.

2.5. Aguarde até que o repositório seja clonado para o seu computador.

Passo 3: Criando uma nova branch

3.1. No terminal, no diretório do repositório clonado. Execute o seguinte comando para criar uma nova branch:

```bash
git checkout -b <NOME_DA_BRANCH>
```
Substitua <NOME_DA_BRANCH> pelo nome que você deseja dar à nova branch.

3.3. Agora você está na nova branch e pode começar a fazer suas alterações.

Passo 4: Fazendo commits

4.1. Faça as alterações desejadas nos arquivos do repositório.

4.2. Você pode verificar se os arquivos alterados já foram adicionados ou não utilizando o `git status`, caso já tenham sido adicionados, o próximo comando não é necessario e você pode pular direto para o commit.

4.3. Para adicionar os arquivos necessários, no terminal, execute o seguinte comando para adicionar as alterações ao staging area:

```bash
git add .
```
Isso adicionará todas as alterações feitas nos arquivos do repositório.

4.3. Em seguida, execute o comando para fazer o commit das alterações:

```bash
git commit -am "Mensagem do commit"
```
Substitua "Mensagem do commit" por uma descrição breve das alterações realizadas.

Passo 5: Fazendo push

5.1. No terminal, execute o seguinte comando para fazer push das alterações para o repositório remoto:

```bash
git push origin <NOME_DA_BRANCH>
```
Substitua <NOME_DA_BRANCH> pelo nome da branch em que você está trabalhando.

5.2. Aguarde até que o push seja concluído. As alterações serão enviadas para o repositório remoto.

Passo 6: Criando um pull request

6.1. Acesse o site do repositório no GitHub.

6.2. Na página inicial do repositório, clique na aba "Pull requests".

6.3. Clique no botão "New pull request".

6.4. Selecione a branch base (normalmente a branch principal, como "main" ou "master") e a branch comparada (a branch que você criou e fez push das alterações