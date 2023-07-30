# **Wordly: Wordle Clone**

---

Wordly is a clone of the popular word puzzle game "Wordle." Built using React.js and styled with Tailwind CSS. Wordly challenges players to guess a five-letter word within a limited number of attempts. Btw it doesn't make you wait till 12:00 AM to get a new word, just refresh and play again.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

Wordly is a fun and challenging word game designed to test your vocabulary and deduction skills. The game generates a random five-letter word, and your task is to guess the word within six attempts. After each guess, Wordly provides feedback on your progress, indicating which letters are correct and in the correct position (green) and which letters are correct but in the wrong position (yellow). Use this feedback to make better guesses and uncover the secret word!

## Features

- **Random Word Generation**: The game generates a random five-letter word for each round.
- **Limited Attempts**: Players have six attempts to guess the secret word.
- **Feedback System**: After each guess, Wordly provides feedback on the correctness of each letter.
- **Responsive Design**: The application is designed to be fully responsive and works well on various screen sizes.
- **Play Again**: Unlike the original wordle game it allows you to play again with every single refresh

## Installation

To run Wordly locally on your machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/sanketghosh/wordly.git
cd wordly
```

2. Install dependencies

```bash
npm install
```

3. Start vite Server

```bash
npm run dev
```

4. Start json server (in another terminal ) for fetching words

```bash
npm run server
```

## Contributing

Contributions to Wordly are welcome and encouraged! If you find any bugs, have feature requests, or want to improve the code, please open an issue or submit a pull request. Before contributing, please review the Contributing Guidelines to ensure a smooth collaboration process.
