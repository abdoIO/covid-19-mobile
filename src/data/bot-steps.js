export default [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: '3amel eh ya {previousValue}',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        { value: 1, label: 'ta3ban', trigger: '5' },
        { value: 2, label: 'ta3ban nek', trigger: '5' },
        { value: 3, label: 'ana saleem', trigger: '5' },
      ],
      trigger: '5',
    },
    {
      id: '5',
      message: 'roo7 etnak',
      end: true,
    },
  ];