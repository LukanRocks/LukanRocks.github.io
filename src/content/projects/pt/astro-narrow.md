---
title: 'Astro Narrow'
description: 'Um tema de conteúdo nativo em Astro inspirado no Hugo Narrow.'
pubDate: 2026-06-27
cover: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80'
tags: ['Astro', 'Content']
featured: true
links:
  - label: 'Website'
    url: 'https://astro.build/'
    icon: 'lucide:external-link'
    variant: 'primary'
  - label: 'GitHub'
    url: 'https://github.com/'
    icon: 'simple-icons:github'
toc: 'center'
---

## Visão Geral

O Astro Narrow reconstrói a experiência do Hugo Narrow com primitivas nativas do Astro.
O projeto mantém a experiência de escrita simples, substituindo as APIs de tema
do Hugo por configuração tipada, coleções de conteúdo e componentes pequenos e
focados.

## Objetivos

- Manter a escrita em Markdown limpa.
- Suportar conteúdo multilíngue.
- Fornecer um sistema tipográfico padrão sólido.
- Manter as cores do tema configuráveis com variáveis CSS.
- Usar bibliotecas maduras para busca, blocos de código e layout de galeria.

## Notas de Implementação

O projeto usa `astro-icon` para ícones, `fuse.js` para busca,
`astro-expressive-code` para blocos de código e `smart-gallery` para o layout de galeria.

## Roteiro

| Área                  | Status                  |
| --------------------- | ----------------------- |
| Coleções de conteúdo  | Concluído               |
| i18n                  | Concluído               |
| Galeria               | Em andamento            |
| Comentários           | Interface de provedor   |
| Analytics             | Interface de provedor   |
