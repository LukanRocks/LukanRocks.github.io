---
title: 'Quick Hide'
description: 'Uma extensão do VS Code para gerenciar padrões do files.exclude direto do Explorer.'
pubDate: 2026-06-12
tags: ['VS Code', 'Extension']
featured: false
links:
  - label: 'GitHub'
    url: 'https://github.com/LukanRocks/vscode-extension-quick-hide'
    icon: 'simple-icons:github'
    variant: 'primary'
toc: 'center'
---

## Visão Geral

O Quick Hide é uma pequena extensão do VS Code que adiciona uma seção **Quick
Hide** ao Explorer para gerenciar seus padrões do `files.exclude` — sem nunca
abrir o `settings.json`.

## Funcionalidades

- Lista todos os padrões das suas configurações **de usuário** do `files.exclude`.
- Uma caixa de seleção por linha: marcada significa oculto (`true`), desmarcada significa visível (`false`).
- Adicione, edite e remova padrões diretamente na visualização.
- Organize padrões em **grupos** recolhíveis e alterne um grupo inteiro de uma vez.
- A caixa de um grupo fica marcada apenas quando todos os padrões dele estão ocultos.
- Mova padrões entre grupos ou deixe-os sem grupo.

## Design

A visualização lê `inspect('files.exclude').globalValue`, então só mostra e edita
os padrões que você adicionou — nunca os padrões internos do VS Code, como
`**/.git`. Todas as alterações são gravadas nas configurações **de usuário**,
mantendo o `files.exclude` um objeto plano que qualquer editor entende. As
definições de grupo ficam junto delas na configuração de usuário `quickHide.groups`.
