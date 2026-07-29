---
title: 'Tally'
description: 'Gerenciador auto-hospedado de coleção de jogos de tabuleiro e registro de partidas.'
pubDate: 2026-04-25
tags: ['Self-host', 'Docker', 'React']
featured: true
links:
  - label: 'GitHub'
    url: 'https://github.com/LukanRocks/tally'
    icon: 'simple-icons:github'
    variant: 'primary'
toc: 'center'
---

## Visão Geral

O Tally é um app web auto-hospedado para gerenciar uma coleção de jogos de
tabuleiro e registrar partidas. Registre jogos, classifique jogadores e
acompanhe o ranking do seu grupo — tudo no seu próprio hardware, com todos os
dados permanecendo na sua máquina.

## Funcionalidades

- Gerencie sua coleção com imagens de capa, manuais, número de jogadores, preço e mais.
- Registre partidas e classifique jogadores com arrastar e soltar.
- Rankings globais e por jogo com pontos, vitórias e taxa de vitória.
- Comparação direta entre dois jogadores quaisquer.
- Filtre e ordene sua biblioteca por nome, número de jogadores, dono ou data de adição.
- Integração opcional com o BoardGameGeek para autocompletar nomes de jogos.
- Cronômetro regressivo, rolador de dados e sorteio de "Quem Começa".
- Temas claro, escuro e do sistema.

## Tecnologias

| Camada    | Tecnologia                |
| --------- | ------------------------- |
| Backend   | Node.js + Express         |
| Frontend  | React + Vite              |
| UI        | shadcn/ui + Tailwind CSS  |
| Banco     | SQLite via Drizzle ORM    |
| Container | Docker (container único)  |

## Implantação

O Tally roda como um único container Docker. Na primeira execução o esquema
SQLite é inicializado automaticamente, e todos os dados — o arquivo do banco e
os arquivos enviados — são persistidos no volume montado `/app/data`, então toda
a coleção fica onde você escolher hospedar.
