---
title: 'Stack'
description: 'Como configuro um Mac novo — ajustes, apps e ferramentas.'
layout: 'page'
toc: false
---

Uso Mac há muito tempo e, nesse processo, refinei minha configuração e meu fluxo de trabalho inúmeras vezes para melhorar minha relação com o computador.

Aqui está tudo que já conquistou um lugar permanente no meu Mac, na ordem de instalação de uma máquina nova, além de algumas coisas que ainda estou testando no fim. Atualizo isto sempre que algo novo pega ou é substituído.

<details>
<summary>Não é um app, é um ajuste no Dock</summary>

O delay padrão para esconder o Dock é insuportavelmente lento, mas felizmente dá para contornar isso rodando os comandos abaixo no app Terminal:

> [!WARNING]
> Não saia rodando comandos de terminal de pessoas aleatórias na internet. Estes são seguros, mas pesquise também antes de rodar qualquer coisa na sua máquina.

```sh
defaults write com.apple.dock autohide-delay -float 0
defaults write com.apple.dock autohide-time-modifier -float 0
killall Dock
```

Os dois primeiros comandos zeram o tempo de animação ao esconder e revelar o Dock, e o último reinicia o processo do Dock para a mudança ter efeito imediato.

Sinta-se à vontade para testar outros valores como 0.1 ou 0.25 e ver o que fica melhor pra você.

E, caso queira voltar ao normal, é só rodar:

```sh
defaults delete com.apple.dock autohide-delay
defaults delete com.apple.dock autohide-time-modifier
killall Dock
```

> [!NOTE]
> Sou meio esquisito e não gosto do Dock na parte de baixo da tela. Então, geralmente, depois dessa mudança, também movo o Dock para a direita.

</details>

# Aplicativos

::::tabs
:::tab{title="Essenciais"}

Estes são os básicos que eu queria que fossem recursos padrão do macOS.

|                                      | Nome                                                             | Pra que serve                                          | Status   | Download                                                   |
| :----------------------------------: | ---------------------------------------------------------------- | ------------------------------------------------------ | -------- | ---------------------------------------------------------- |
| ![](/img/stack/homebrew.svg)         | [Homebrew](https://brew.sh/)                                     | Gerenciador de pacotes que funciona muito bem no macOS | Ativo    |                                                            |
| ![](/img/stack/alfred.png)           | [Alfred 5](https://www.alfredapp.com/)                           | Substituto do Spotlight com workflows personalizados   | Ativo    |                                                            |
| ![](/img/stack/markdown-preview.png) | [Markdown Preview](https://github.com/pluk-inc/markdown-preview) | Pré-visualização de markdown no Quick Look             | Ativo    | [Homebrew](https://formulae.brew.sh/cask/markdown-preview) |
| ![](/img/stack/rectangle-pro.png)    | [Rectangle Pro](https://rectangleapp.com/pro)                    | Encaixe e organização de janelas via teclado           | Ativo    | [Homebrew](https://formulae.brew.sh/cask/rectangle-pro)    |
| ![](/img/stack/istherenet.png)       | [IsThereNet](https://github.com/FuzzyIdeas/IsThereNet)           | Uma faixa de luz que avisa quando o Wi-Fi cai          | Ativo    | [Homebrew](https://formulae.brew.sh/cask/istherenet)       |
| ![](/img/stack/supercmd.png)         | [SuperCmd](https://supercmd.sh/)                                 | Alternativa ao Alfred e ao Rectangle, quem sabe?       | Testando | [Homebrew]()                                               |

:::

:::tab{title="Produtividade"}

|                                      | Nome                                                | Pra que serve                                         | Status   | Download                                                    |
| :----------------------------------: | --------------------------------------------------- | ----------------------------------------------------- | -------- | ----------------------------------------------------------- |
| ![](/img/stack/zen.png)              | [Zen Browser](https://zen-browser.app/)             | Meu substituto open source do Arc                     | Ativo    | [Homebrew](https://formulae.brew.sh/cask/zen)               |
| ![](/img/stack/claude.png)           | [Claude](https://claude.ai/download)                | App desktop para perguntas e conversas do dia a dia   | Ativo    | [Homebrew](https://formulae.brew.sh/cask/claude)            |
| ![](/img/stack/clickup.png)          | [ClickUp](https://clickup.com/)                     | Onde acompanho tarefas e projetos                     | Ativo    | [Homebrew](https://formulae.brew.sh/cask/clickup)           |
| ![](/img/stack/notion-calendar.webp) | [Notion Calendar](https://calendar.notion.so/)      | Ótimo app de calendário com contagem na barra de menu | Ativo    | [Homebrew](https://formulae.brew.sh/cask/notion-calendar)   |
| ![](/img/stack/1password.png)        | [1Password](https://1password.com/)                 | Senhas e chaves seguras, em todo lugar                | Ativo    | [Homebrew](https://formulae.brew.sh/cask/1password#default) |
| ![](/img/stack/tolaria.png)          | [Tolaria](https://github.com/refactoringhq/tolaria) | Minha base de conhecimento pessoal                    | Testando | [Homebrew](https://formulae.brew.sh/cask/tolaria)           |
| ![](/img/stack/antinote.png)         | [Antinote](https://antinote.io/)                    | Um bloco de notas rápido para anotações e contas      | Testando |                                                             |

:::

:::tab{title="Desenvolvimento"}

|                                    | Nome                                                       | Pra que serve                                         | Status | Download                                                     |
| :--------------------------------: | ---------------------------------------------------------- | ----------------------------------------------------- | ------ | ------------------------------------------------------------ |
| ![](/img/stack/claude-code.png)    | [Claude Code](https://claude.com/claude-code)              | Agente de código no terminal                          | Ativo  | [Homebrew](https://formulae.brew.sh/cask/claude-code)        |
|                                    | [Fira Code](https://github.com/tonsky/FiraCode)            | Fonte monoespaçada com ligaduras                      | Ativo  | [Homebrew](https://formulae.brew.sh/cask/font-fira-code)     |
| ![](/img/stack/vscode.png)         | [VS Code](https://code.visualstudio.com/)                  | Editor para tudo que o Claude Code não resolve        | Ativo  | [Homebrew](https://formulae.brew.sh/cask/visual-studio-code) |
| ![](/img/stack/github-desktop.svg) | [GitHub Desktop](https://desktop.github.com/)              | Uma interface gráfica pro git quando prefiro clicar   | Ativo  | [Homebrew](https://formulae.brew.sh/cask/github)             |
| ![](/img/stack/github-cli.svg)     | [GitHub CLI](https://cli.github.com/)                      | PRs e issues sem sair do terminal                     | Ativo  | [Homebrew](https://formulae.brew.sh/formula/gh)              |
| ![](/img/stack/1password-cli.png)  | [1Password CLI](https://developer.1password.com/docs/cli/) | Chaves SSH e variáveis de ambiente a um Touch ID      | Ativo  | [Homebrew](https://formulae.brew.sh/cask/1password)          |
| ![](/img/stack/nodejs.png)         | [Node.js](https://nodejs.org/)                             | Runtime de JS por trás de todas as minhas ferramentas | Ativo  | [Homebrew](https://formulae.brew.sh/formula/node)            |
| ![](/img/stack/bruno.png)          | [Bruno](https://www.usebruno.com/)                         | Cliente de API open source, amigável ao git           | Ativo  | [Homebrew](https://formulae.brew.sh/cask/bruno)              |
| ![](/img/stack/xcode.png)          | [Xcode](https://developer.apple.com/xcode/)                | Só está aqui para compilar iOS/macOS                  | Ativo  |                                                              |

:::

:::tab{title="Documentos"}

|                                | Nome                                                       | Pra que serve                                         | Status   |
| :----------------------------: | ---------------------------------------------------------- | ----------------------------------------------------- | -------- |
| ![](/img/stack/keynote.png)    | Apple Keynote                                              | Apresentações, mais limpas que no PowerPoint          | Ativo    |
| ![](/img/stack/numbers.png)    | Apple Numbers                                              | Planilhas rápidas e leves                             | Ativo    |
| ![](/img/stack/pages.png)      | Apple Pages                                                | Processador de texto para o raro documento sem Word   | Ativo    |
| ![](/img/stack/onlyoffice.png) | [ONLYOFFICE](https://github.com/ONLYOFFICE/DesktopEditors) | Documentos compatíveis com Word/Excel, sem assinatura | Testando |

:::

:::tab{title="Utilitários"}

|                                     | Nome                                                            | Pra que serve                                   | Status   |
| :---------------------------------: | --------------------------------------------------------------- | ----------------------------------------------- | -------- |
| ![](/img/stack/affinity.png)        | [Affinity](https://affinity.serif.com/)                         | Photo, Designer, Publisher, sem assinatura      | Ativo    |
| ![](/img/stack/vlc.png)             | [VLC](https://www.videolan.org/vlc/)                            | Reproduz praticamente qualquer formato de vídeo | Ativo    |
| ![](/img/stack/pearcleaner.png)     | [Pearcleaner](https://github.com/alienator88/Pearcleaner)       | Desinstalador que remove o que sobra            | Ativo    |
| ![](/img/stack/lunar.png)           | [Lunar](https://github.com/alin23/Lunar)                        | Sincroniza o brilho entre todos os monitores    | Testando |
| ![](/img/stack/keepingyouawake.png) | [KeepingYouAwake](https://github.com/newmarcel/KeepingYouAwake) | Evita que meu Mac durma durante builds e demos  | Testando |
| ![](/img/stack/localsend.png)       | [LocalSend](https://github.com/localsend/localsend)             | AirDrop open source e multiplataforma           | Testando |

:::

:::tab{title="Hardware"}

|                                   | Nome                                                          | Pra que serve                                 | Status |
| :-------------------------------: | ------------------------------------------------------------- | --------------------------------------------- | ------ |
| ![](/img/stack/bambu-studio.png)  | [Bambu Studio](https://bambulab.com/en/download/bambu-studio) | Fatiador para minha impressora Bambu Lab      | Ativo  |
| ![](/img/stack/balena-etcher.png) | [Balena Etcher](https://etcher.balena.io/)                    | Grava imagens de SO em USB/SD sem complicação | Ativo  |
| ![](/img/stack/insta360.png)      | Insta360 Link Controller                                      | Enquadramento e rastreamento da minha webcam  | Ativo  |
| ![](/img/stack/unify.png)         | Unify Endpoint                                                | Conexão VPN direta para minha rede local      | Ativo  |
:::

::::
