# Mindfulness Journal Prompts

![](https://img.shields.io/github/license/ghall89/mindfulness-prompts?style=for-the-badge)
![](https://img.shields.io/netlify/e42ca796-708c-410d-852e-7315694c5304?style=for-the-badge)
![](https://img.shields.io/github/languages/top/ghall89/mindfulness-prompts?style=for-the-badge)
![](https://img.shields.io/github/last-commit/ghall89/mindfulness-prompts/main?style=for-the-badge)

## Table of Contents

- [Description](#description)
  - [User Story](#user-story)
  - [Features](#features)
  - [Screenshot](#screenshot)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Credits](#credits)

## Description

### User Story

As a user I'd like an app that will generate a random prompt for journaling. I'd also like to view a history of generated prompts that is persistent between sessions. When I'm on the home page I'm presented with a prompt, as well as a button to generate a new prompt if I choose. Finally, I'd like a button that will bring up a list of all the prompts the page has generated for me.

### Features

- On page load the user is presented with a random journal prompt from a list of almost 400 possible choices
- The user can click a button to instantly get a new prompt
- Every prompt the user receives is kept in local storage
- The user can click a button to retrieve and view all previous prompts

### Screenshot

![](./screenshot.png)

## Installation

- Install node if you don't already have it
- Clone this repo
- Navigate to the repo's location on your computer in your terminal
- Run the `npm install` command and wait for the process to finish
- Run `npm start` and navigate to `localhost:3000` in your web browser

## Usage

- Visit http://www.journal-prompt.com, or `localhost:3000` if running locally
- Click `Generate New Prompt` to display a new prompt
- Click `Previous Prompts` to see a history of prompts you've seen

## Dependencies

- [React](https://reactjs.org)
- [react-modal](https://www.npmjs.com/package/react-modal)
- [react-text-transition](https://www.npmjs.com/package/react-text-transition)

## Credits

- [DIN Alternate font](https://www.cufonfonts.com/font/din-alternate)
- [Background Graphic](https://www.vecteezy.com/vector-art/2072726-spring-nature-landscape)
