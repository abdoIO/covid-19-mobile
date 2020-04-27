import React from 'react';
import DummyBotPage from './DummyBotPage';
import { getAgeOptions, getSymptomsOptions } from '../../utils/helpers';

type QuestionType = {
  questionText: string;
  inputType: 'text' | 'picker' | 'select-list';
  options: { id: any, label: string }[] | null;
  nextRoute: string;
}

const questions: QuestionType[] = [
  {
    questionText: 'What is your name?',
    inputType: 'text',
    options: null,
    nextRoute: 'SecondQuestion',
  },
  {
    questionText: 'How old are you?',
    inputType: 'picker',
    options: getAgeOptions(),
    nextRoute: 'ThirdQuestion',
  },
  {
    questionText: 'What is your sex?',
    inputType: 'picker',
    options: [{ id: 'male', label: 'Male' }, { id: 'female', label: 'Female' }],
    nextRoute: 'FourthQuestion',
  },
  {
    questionText: 'In the last 48 hours, have you had any of the following symptoms?',
    inputType: 'select-list',
    options: getSymptomsOptions(),
    nextRoute: 'end',
  },
]

const FirstQuestion = () => <DummyBotPage question={questions[0]} />
const SecondQuestion = () => <DummyBotPage question={questions[1]} />
const ThirdQuestion = () => <DummyBotPage question={questions[2]} />
const FourthQuestion = () => <DummyBotPage question={questions[3]} />

export default [
  { routeName: 'FirstQuestion', routeComponent: FirstQuestion },
  { routeName: 'SecondQuestion', routeComponent: SecondQuestion },
  { routeName: 'ThirdQuestion', routeComponent: ThirdQuestion },
  { routeName: 'FourthQuestion', routeComponent: FourthQuestion },
]
