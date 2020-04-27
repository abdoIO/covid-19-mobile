import React from 'react';
import DummyBotPage from './DummyBotPage';

const questions = [
  {
    questionText: 'What is your name?',
    inputType: 'text',
    options: null,
    nextRoute: 'SecondQuestion',
  },
  {
    questionText: 'How old are you?',
    inputType: 'picker',
    options: null,
    nextRoute: 'ThirdQuestion',
  },
  {
    questionText: 'What is your sex?',
    inputType: 'radio',
    options: ['male, female'],
    nextRoute: 'FourthQuestion',
  },
  {
    questionText: 'Do you have a fever?',
    inputType: 'radio',
    options: ['Yes', 'No'],
    nextRoute: 'end',
  },
]

export const FirstQuestion = () => <DummyBotPage question={questions[0]} />
export const SecondQuestion = () => <DummyBotPage question={questions[1]} />
export const ThirdQuestion = () => <DummyBotPage question={questions[2]} />
export const FourthQuestion = () => <DummyBotPage question={questions[3]} />
