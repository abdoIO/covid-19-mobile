import React from 'react';

const steps = [
  {
    id: '1',
    type: 'input',
    question: 'ما اسمك؟',
    next: '2',
  },
  {
    id: '2',
    type: 'picker',
    question: 'كم عمرك؟',
    next: '3',
  },
  {
    id: '3',
    type: 'choice',
    question: 'ما هو جنسك؟',
    choices: [
      { id: 'g_m', value: 'male', label: 'ذكر' },
      { id: 'g_f', value: '', label: 'أنثى' },
    ],
    next: '4',
  },
];

export default steps;
