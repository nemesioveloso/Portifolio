Projeto Criado com React-ts, dependencias node instalado com pnpm.
baixe o Node depois rode o comando:

iwr https://get.pnpm.io/install.ps1 -useb | iex

Reinicie o computador.

Adicionado a configuração de lint no projeto:

pnpm install eslint -D

Usando vscode, baixe a extensão do lint no vscode, após fazer isso aperte Ctrl + Shift + P
digite settings e abra o settings.json e adicione:

"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    }

no arquivo package.json no comando lint modifique para:

"lint": "eslint src --ext .ts,.tsx --fix",

e ao rodar:

pnpm run lint

Todos os erros de lint serão resolvidos.

E depois instale as dependencias com o comando:

pnpm install

e rode o projeto:

pnpm dev
