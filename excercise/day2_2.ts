/*
  Interactive greeting using prompt-sync
  To run:
  - Install dependency: npm install prompt-sync
  - (Optional, for TypeScript runtime) npm i -D ts-node typescript @types/node
  - Run with ts-node: npx ts-node excercise/day2_2.ts
  - Or transpile then run with Node
*/

// Use CommonJS require for broad compatibility without extra type packages
// eslint-disable-next-line @typescript-eslint/no-var-requires
const promptSync = require('prompt-sync');

type Prompt = (message?: string) => string;
const prompt: Prompt = promptSync({ sigint: true });

const language: string = 'JavaScript';

function promptNonEmptyString(message: string): string {
  // Keep asking until a non-empty trimmed string is provided
  // Allows any characters; only checks for non-empty input
  for (;;) {
    const input = prompt(message).trim();
    if (input.length > 0) return input;
    console.log('Input cannot be empty. Please try again.');
  }
}

function promptPositiveInteger(message: string): number {
  // Keep asking until a valid integer age is provided (0-120)
  for (;;) {
    const raw = prompt(message).trim();
    const value = Number(raw);
    if (Number.isInteger(value) && value >= 0 && value <= 120) return value;
    console.log('Please enter a valid age (integer between 0 and 120).');
  }
}

const name: string = promptNonEmptyString('Enter your name: ');
const age: number = promptPositiveInteger('Enter your age: ');

const greeting: string = `Hello, my name is ${name} and I am ${age} years old. I am learning ${language} as my main programming language.`;
console.log(greeting);
