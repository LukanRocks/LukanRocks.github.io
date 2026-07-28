---
title: 'Configuração do Mac'
description: 'Como configuro um Mac novo — apps, ferramentas e ajustes.'
layout: 'page'
toc: 'side'
---

Uso Mac há muito tempo, e nesse processo refinei minha configuração e fluxo de trabalho inúmeras vezes para melhorar minha relação com meu computador.

Aqui está tudo que já conquistou um lugar permanente no meu Mac, na ordem de instalação de uma máquina nova, além de algumas coisas que ainda estou testando no final. Atualizo sempre que algo novo pega ou é substituído.

## Esconder o Dock mais rápido

O delay padrão para esconder o Dock é insuportavelmente lento, mas felizmente existe um jeito de contornar isso rodando os comandos abaixo no app Terminal:

> [!WARNING]
> Não saia rodando comandos de terminal de pessoas aleatórias na internet. Estes são seguros, mas pesquise também antes de rodar qualquer coisa na sua máquina.

```sh
defaults write com.apple.dock autohide-delay -float 0
defaults write com.apple.dock autohide-time-modifier -float 0
killall Dock
```

Os dois primeiros comandos zeram o tempo de animação ao esconder e revelar o Dock, e o último reinicia o processo do Dock para a mudança ter efeito imediato.

Sinta-se à vontade para testar outros valores como 0.1 ou 0.25 e ver o que funciona melhor pra você.

E caso queira voltar ao normal, é só rodar:

```sh
defaults delete com.apple.dock autohide-delay
defaults delete com.apple.dock autohide-time-modifier;
killall Dock
```

> [!NOTE]
> Sou meio esquisito e não gosto do Dock na parte de baixo da tela. Então, geralmente, depois dessa mudança, eu também movo o Dock para a direita.

## Instalar o Homebrew e alguns apps

O [Homebrew](https://brew.sh/) é um gerenciador de pacotes que funciona muito bem no Mac, e já que estou trabalhando no terminal, esse é um ótimo momento para instalá-lo.

Para isso, acesse o site do Homebrew e siga a forma oficial de instalação documentada por eles.

### Apps via Homebrew

#### Zen Browser

[Website](https://zen-browser.app/) |
[Homebrew](https://formulae.brew.sh/cask/zen)

Você provavelmente imaginou que uma lista de setup começaria com um navegador, mas na minha ele ficou em terceiro lugar. O Zen é meu navegador favorito porque tem tudo que eu amava no Arc, além de ser open source, o que o torna ainda melhor.

Também vale mencionar que há duas extensões que eu preciso ter instaladas:

- 1Password
- Karakeep

#### IsThereNet

[Github](https://github.com/FuzzyIdeas/IsThereNet)
[Homebrew](https://formulae.brew.sh/cask/istherenet)

Já que um navegador serve basicamente para surfar nas internetes, eu gosto de saber se minha conexão está funcionando (ou não) só de bater o olho. E esse app é perfeito pra isso! Ele adiciona uma faixinha de luz discreta no topo da tela sempre que o status da conexão muda. Um item de qualidade de vida que fica sempre rodando em segundo plano.

#### Node.js

[Website](https://nodejs.org/) |
[Homebrew](https://formulae.brew.sh/formula/node)

Node é um runtime de JavaScript construído sobre o motor V8 do Chrome, usado para rodar JS fora do navegador e para a maioria das ferramentas de frontend. Já que praticamente tudo que faço em código é full-stack JS, ter o Node instalado é obrigatório.

#### GitHub CLI

[Website](https://cli.github.com/) |
[Homebrew](https://formulae.brew.sh/formula/gh)

Falando em código, hospedo todos os meus projetos no GitHub, então um item obrigatório é a CLI oficial do GitHub, para gerenciar pull requests, issues e repositórios sem sair do terminal ou da minha IDE.

#### Fira Code

[GitHub](https://github.com/tonsky/FiraCode) |
[Homebrew](https://formulae.brew.sh/cask/font-fira-code)

Não me basta apenas entregar código, eu também gosto que ele fique bonito, e essa fonte monoespaçada faz até o pior código parecer um pouco mais agradável. Ela tem suporte a ligaduras de programação, então operadores com vários caracteres como `=>` ou `!=` são renderizados como um único glifo.

#### 1Password e CLI

[Website](https://1password.com/) |
[CLI Docs](https://developer.1password.com/docs/cli/) |
[Homebrew App](https://formulae.brew.sh/cask/1password) |
[Homebrew CLI](https://formulae.brew.sh/cask/1password-cli)

1Password é meu gerenciador de senhas favorito, que também tem uma ótima CLI que me permite usar minhas chaves seguras sempre que faço commit de código ou SSH em um servidor usando o Touch ID do Mac, o que é incrível.

#### Bruno

[Website](https://www.usebruno.com/) |
[Homebrew](https://formulae.brew.sh/cask/bruno)

Bruno é um cliente de API open source, uma alternativa ao Postman/Insomnia, que guarda as coleções como arquivos de texto simples, o que facilita colocá-las sob controle de versão com git. Na maioria das vezes, mantenho a coleção de APIs junto com o código, o que torna tudo muito mais fácil de gerenciar.

#### Markdown Preview

[Github](https://github.com/pluk-inc/markdown-preview) |
[Homebrew](https://formulae.brew.sh/cask/markdown-preview)

Esse é um editor de markdown leve que, o mais importante, vem com uma extensão de Quick Look, ou seja, dá pra apertar "espaço" com o arquivo selecionado para ter uma pré-visualização de verdade sem precisar abri-lo.

## Apps que baixo direto do site

Todo o resto, baixado direto da fonte em vez do Homebrew.

### Alfred 5

[Website](https://www.alfredapp.com/)

Meu launcher de apps preferido — substitui o Spotlight com workflows personalizados para tudo que faço repetidamente, além do básico de pular entre apps.

### Rectangle Pro

[Website](https://rectangleapp.com/pro)

Encaixe e organização de janelas via teclado, já que o macOS ainda não faz isso nativamente tão bem quanto deveria.

### VLC

[Website](https://www.videolan.org/vlc/)

Reproduz praticamente qualquer formato de vídeo sem complicação.

### Notion Calendar

[Website](https://calendar.notion.so/)

Sincroniza todas as minhas contas de calendário em uma visão única e organizada.

### SideNotes

Um app de notas na barra de menu que fica a um clique de distância, sem encher minha área de trabalho de post-its.

### Unify Endpoint

Conexão VPN direta para minha rede local em casa.

### CleanMyMac

[Website](https://cleanmymac.com/)

A forma mais fácil de encontrar e limpar os arquivos inúteis que se acumulam com o tempo.

### Vivid

Controla brilho e contraste de monitores externos que não expõem controles nativos.

### Desenvolvimento

#### Claude

[Website](https://claude.ai/download)

Tanto o app desktop para perguntas do dia a dia quanto o Claude Code no terminal para efetivamente construir coisas — esse site incluso.

- App
- CLI

#### VS Code

[Website](https://code.visualstudio.com/)

Meu editor para tudo que o Claude Code não resolve diretamente.

<!-- !TODO Add VS Code Extensions -->

#### GitHub Desktop

[Website](https://desktop.github.com/)

Uma interface gráfica sobre o git para quando prefiro clicar em um diff a ler um no terminal.

#### Xcode

[Website](https://developer.apple.com/xcode/)

Só está aqui porque é obrigatório para compilar qualquer coisa para iOS ou macOS — não é o que uso no dia a dia.

#### ClickUp

[Website](https://clickup.com/)

Onde acompanho tarefas e projetos.

## Documentos

### Keynote

O app de apresentações da Apple — resultado limpo com muito menos complicação que o PowerPoint.

### Pages

O processador de texto da Apple, para o raro documento que não precisa de compatibilidade com Word.

### Numbers

O app de planilhas da Apple, para contas rápidas e leves.

### Outros

#### Affinity

[Website](https://affinity.serif.com/)

A alternativa ao Adobe Creative Cloud — Photo, Designer e Publisher, sem assinatura.

#### Balena Etcher

[Website](https://etcher.balena.io/)

Grava imagens de sistema operacional em pendrives e cartões SD sem o drama de usar `dd` diretamente.

#### Bambu Studio

[Website](https://bambulab.com/en/download/bambu-studio)

Software de fatiamento para minha impressora 3D Bambu Lab.

#### Insta360 Link Controller

Controla enquadramento e rastreamento da minha webcam Insta360 Link.

#### Tolaria

[GitHub](https://github.com/refactoringhq/tolaria)

Minha base de conhecimento pessoal — é nela que o Claude lê e escreve quando peço para ele buscar algo ou anotar uma nota.

#### Pearcleaner

[GitHub](https://github.com/alienator88/Pearcleaner)

Desinstalador de apps gratuito e open source — remove os arquivos que sobram quando você simplesmente arrasta o app para a lixeira.

## Ainda decidindo

Ainda avaliando estes — nenhum deles conquistou um lugar permanente ainda.

### Ghost Pepper

<!-- TODO: write a line for this one -->

### Lunar

[GitHub](https://github.com/alin23/Lunar)

Sincroniza o brilho entre todos os meus monitores e adiciona brilho adaptativo para telas que não suportam isso nativamente.

### LocalCan

<!-- TODO: write a line for this one -->

### theboring.name

[Website](https://theboring.name/)

<!-- TODO: write a line for this one -->

### LocalSend

[GitHub](https://github.com/localsend/localsend)

Uma alternativa open source ao AirDrop que funciona entre Mac, Windows, Linux e celular.

### MusicDecoy

[GitHub](https://github.com/FuzzyIdeas/MusicDecoy)

<!-- TODO: write a line for this one -->

### KeepingYouAwake

[GitHub](https://github.com/newmarcel/KeepingYouAwake)

Evita que meu Mac durma durante builds longos, downloads ou compartilhamentos de tela.

### Antinote

[Website](https://antinote.io/)

Um bloco de notas rápido para anotações e contas simples, sem precisar abrir um app de notas completo.

### ONLYOFFICE Desktop Editors

[GitHub](https://github.com/ONLYOFFICE/DesktopEditors)

Uma suíte de escritório open source para quando preciso de arquivos compatíveis com Word/Excel sem assinatura da Microsoft.

<!--
### Notch Nook

### Bartender 4

[Website](https://www.macbartender.com/)

Keeps my menu bar from turning into a wall of icons I never asked for.
-->
