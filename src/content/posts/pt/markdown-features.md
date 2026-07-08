---
title: 'Recursos de Markdown no Astro Narrow'
description: 'Um passeio pelos recursos nativos de Markdown que o Astro Narrow suporta de fábrica: alertas, abas, matemática, Mermaid e galerias.'
pubDate: 2026-06-28
tags: ['Astro', 'Markdown']
toc: 'side'
series: ['theme-guide']
seriesOrder: 2
---

Este post continua o guia do tema apresentando os recursos nativos de Markdown que o Astro Narrow traz de fábrica, sem nenhuma camada de compatibilidade com shortcodes do Hugo.

## Alertas

> [!TIP]
> Alertas em blockquote no estilo do GitHub são transformados em callouts estilizados no momento do build.

## Abas

As abas usam a sintaxe do `remark-directive` e são controladas por um pequeno script no cliente que lida com cliques e navegação por teclado.

## Matemática e Mermaid

Matemática inline é renderizada como $a^2 + b^2 = c^2$, e blocos cercados ` ```mermaid ` são renderizados como diagramas.

## Galerias

Imagens Markdown consecutivas são agrupadas em uma galeria justificada com suporte a lightbox.
