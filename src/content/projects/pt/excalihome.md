---
title: 'ExcaliHome'
description: 'Gerenciador auto-hospedado de quadros do Excalidraw no seu próprio hardware.'
pubDate: 2026-07-10
tags: ['Self-host', 'Docker', 'Excalidraw']
featured: true
links:
  - label: 'GitHub'
    url: 'https://github.com/LukanRocks/excalihome'
    icon: 'simple-icons:github'
    variant: 'primary'
toc: 'center'
---

## Visão Geral

O ExcaliHome é um gerenciador auto-hospedado de quadros do
[Excalidraw](https://excalidraw.com/). Ele envolve o canvas do Excalidraw em um
app pequeno que permite criar e organizar seus desenhos no seu próprio hardware,
com cada quadro persistido localmente.

## Funcionalidades

- Crie e organize quadros do Excalidraw a partir de uma única interface.
- Canvas completo do Excalidraw embutido no app.
- Persistência local — os quadros ficam no seu próprio banco, não em uma nuvem de terceiros.
- Roda como um único container Docker para facilitar a implantação no homelab.

## Tecnologias

| Camada    | Tecnologia                |
| --------- | ------------------------- |
| Backend   | Node.js + Express         |
| Frontend  | React + Vite + Excalidraw |
| UI        | Tailwind CSS              |
| Banco     | SQLite via Drizzle ORM    |
| Container | Docker (container único)  |

## Implantação

O ExcaliHome roda a partir de uma única imagem Docker publicada no GHCR. O
esquema é inicializado na primeira execução e todos os quadros são armazenados
no volume montado `/app/data`. Feito para a comunidade de homelab — sem
serviços externos.
