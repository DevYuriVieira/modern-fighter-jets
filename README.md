# Modern Fighter Jets

<div align="center">

![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-6.4.2-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
![Router](https://img.shields.io/badge/React_Router-7.17.0-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-UI-1F4D3A?style=for-the-badge)

### Live Demo

[Open Modern Fighter Jets](https://modern-fighter-jets.vercel.app/)

An interactive React app about modern combat aircraft, built with reusable components, props, styled-components and useState.

</div>

---

## Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Technologies Used](#technologies-used)
- [Data Structure](#data-structure)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Notes](#notes)
- [Developer](#developer)

---

## Overview

Modern Fighter Jets is a small React project focused on modern aircraft. The app was built to practice component architecture, props, reusable UI, state handling and responsive layout.

The project includes:

- a hero section
- a featured aircraft section
- a database of 10 fighter jets
- generation filters
- favorite toggle
- show and hide details
- a responsive navbar with mobile hamburger menu
- an About page

---

## Core Features

### Hero Section

- Main landing section with a strong visual focus
- CTA button that scrolls to the aircraft section
- Two Top Gun-inspired quotes

### Aircraft Database

- Displays 10 aircraft cards from a local data file
- Each card receives data through props
- Cards are reusable and render any item from the array

### Filters

- Filter aircraft by:
  - All
  - 4.5 Generation
  - 5th Generation

### Card Interactions

- Favorite toggle for each aircraft
- Show or hide detailed specifications

### Navigation

- Logo returns to the hero section
- Home scrolls back to the hero
- Aircraft jumps to the database section
- About opens the second page and starts from the top
- Mobile hamburger menu for smaller screens

### About Page

- Explains the project idea
- Lists objectives and technologies used
- Works as a second page required by the assignment

---

## Technologies Used

- React
- React Router DOM
- Styled Components
- Vite
- JavaScript ES6+
- HTML5
- CSS3

---

## Data Structure

The aircraft data lives in `src/data/fighters.jsx`.

Each object contains at least:

- `id`
- `name`
- `country`
- `generation`
- `role`
- `manufacturer`
- `speed`
- `image`
- `description`
- `firstFlight`
- `introduced`

---

## Folder Structure

```text
src/
├── assets/
│   └── Images/
├── components/
│   ├── FighterCard/
│   ├── FeaturedAircraft/
│   ├── Footer/
│   ├── Hero/
│   └── Navbar/
├── data/
├── pages/
│   ├── About/
│   └── Home/
├── routes/
├── styles/
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Notes

- The app is responsive.
- The logo and favicon are custom assets.
- The project was adjusted to work correctly in deployment environments like Vercel.

---

## Developer

Built by Yuri Vieira.

---

# Versão em Português

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Tecnologias Usadas](#tecnologias-usadas)
- [Estrutura dos Dados](#estrutura-dos-dados)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Como Executar](#como-executar)
- [Observações](#observações)
- [Desenvolvedor](#desenvolvedor)

---

## Visão Geral

**Modern Fighter Jets** é um projeto React sobre aeronaves de combate modernas. A aplicação foi criada para praticar arquitetura de componentes, props, UI reutilizável, controle de estado e layout responsivo.

O projeto inclui:

- uma seção hero
- uma seção de aeronave em destaque
- um banco de dados com 10 caças
- filtros por geração
- botão de favorito
- exibição e ocultação de detalhes
- navbar responsiva com menu hamburguer no mobile
- uma página About

---

## Funcionalidades Principais

### Seção Hero

- Landing page com foco visual forte
- Botão CTA que leva até a seção de aeronaves
- Duas frases inspiradas em Top Gun

### Banco de Aeronaves

- Exibe 10 cards de aeronaves vindos de um arquivo local de dados
- Cada card recebe informações por props
- O componente é reutilizável e renderiza qualquer item do array

### Filtros

- Filtra aeronaves por:
  - All
  - 4.5 Generation
  - 5th Generation

### Interações dos Cards

- Favoritar cada aeronave
- Mostrar ou esconder especificações detalhadas

### Navegação

- A logo volta para o hero
- Home retorna para o hero
- Aircraft vai até a seção da base de dados
- About abre a segunda página e inicia do topo
- Menu hamburguer no mobile

### Página About

- Explica a ideia do projeto
- Mostra objetivos e tecnologias usadas
- Funciona como a segunda página exigida pelo trabalho

---

## Tecnologias Usadas

- React
- React Router DOM
- Styled Components
- Vite
- JavaScript ES6+
- HTML5
- CSS3

---

## Estrutura dos Dados

Os dados das aeronaves ficam em `src/data/fighters.jsx`.

Cada objeto contém pelo menos:

- `id`
- `name`
- `country`
- `generation`
- `role`
- `manufacturer`
- `speed`
- `image`
- `description`
- `firstFlight`
- `introduced`

---

## Estrutura de Pastas

```text
src/
├── assets/
│   └── Images/
├── components/
│   ├── FighterCard/
│   ├── FeaturedAircraft/
│   ├── Footer/
│   ├── Hero/
│   └── Navbar/
├── data/
├── pages/
│   ├── About/
│   └── Home/
├── routes/
├── styles/
├── App.jsx
└── main.jsx
```

---

## Como Executar

### Instalar Dependências

```bash
npm install
```

### Rodar o Projeto

```bash
npm run dev
```

### Gerar Build de Produção

```bash
npm run build
```

---

## Observações

- A aplicação é responsiva.
- A logo e o favicon são assets personalizados.
- O projeto foi ajustado para funcionar corretamente em ambientes de deploy como a Vercel.

---

## Desenvolvedor

Desenvolvido por Yuri Vieira.
