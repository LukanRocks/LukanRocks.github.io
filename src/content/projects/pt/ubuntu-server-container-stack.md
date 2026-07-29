---
title: 'Servidor Ubuntu Doméstico'
description: 'Stack Docker Compose e documentação de um servidor doméstico Ubuntu auto-hospedado.'
pubDate: 2025-01-06
tags: ['Self-host', 'Docker', 'Home Lab']
featured: false
links:
  - label: 'GitHub'
    url: 'https://github.com/LukanRocks/ubuntu-server-container-stack'
    icon: 'simple-icons:github'
    variant: 'primary'
toc: 'center'
---

## Visão Geral

Este projeto documenta a stack Docker Compose que roda o meu servidor doméstico
Ubuntu. Ele reúne as definições do compose, as convenções de gerenciamento de
segredos e a configuração de backup que uso para manter uma pequena frota de
serviços auto-hospedados funcionando e recuperáveis.

## Destaques

- Docker Compose como fonte única da verdade para cada serviço.
- Segredos do Docker restritos ao usuário `root` (`chmod 600`) para credenciais.
- Backups por serviço via Duplicati, enviados por FTP para um TrueNAS Scale local.
- Um template reutilizável de config do Duplicati para adicionar pastas e senhas rapidamente.
- Fluxo de trabalho com VS Code Remote-SSH, incluindo marcadores de ícones Material para pastas com backup.

## Notas

O repositório também funciona como documentação viva — uma referência de como a
máquina está configurada para que os serviços possam ser reconstruídos ou
restaurados sem depender da memória.
