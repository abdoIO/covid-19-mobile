export default [
    {
      id: '1',
      message: 'ما اسمك؟',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'كم عمرك؟',
      trigger: '4',
    },
    {
      id: '4',
      inputAttributes: {keyboardType: 'numeric'},
      user: true,
      trigger: '5',
    },
    {
      id: '5',
      message: 'ما هو جنسك؟',
      trigger: '6',
    },
    {
      id: '6',
      options: [
        { value: 1, label: 'ذكر', trigger: '7' },
        { value: 2, label: 'انثي', trigger: '7' },
      ],
      trigger: '7',
    },
    {
      id: '7',
      message: 'aa',
    },
  ];