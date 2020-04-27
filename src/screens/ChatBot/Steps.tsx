const Steps = [
  {
    id: '0',
    message: 'ما اسمك؟',
    trigger: '1',
  },
  {
    id: '1',
    user: true,
    trigger: '2',
  },
  {
    id: '2',
    message: ({ previousValue }) =>
      `${previousValue && previousValue + ','} ما هو عمرك؟`,
    trigger: '3',
  },
  {
    id: '3',
    user: true,
    inputAttributes: {
      keyboardType: 'number-pad',
    },
    validator: (value) => {
      if (!value || isNaN(value)) {
        return 'نحتاج عمرك للمضي قدما';
      }
      return true;
    },
    trigger: '4',
  },
  {
    id: '4',
    message: 'ما هو جنسك؟',
    trigger: '5',
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'ذكر', trigger: '6' },
      { value: 2, label: 'أنثى', trigger: '6' },
    ],
  },
  {
    id: '6',
    message:
      'قصّة مرضيّة للإصابة بمرض رئوي مزمن. مراض الرئة المزمنة هي أمراض تصيب الرئتين وتؤثر على وظيفتهما ووظيفة الأجزاء الأخرى من الجهاز التنفسي. وتتضمن هذه الأمراض: الداء الرئوي الساد المزمن COPD والربو متوسط الشدة والشديد بالإضافة إلى أمراض رئوية أخرى.',
    trigger: '7',
  },
  {
    id: '7',
    options: [
      { value: 1, label: 'نعم', trigger: '8' },
      { value: 2, label: 'لا', trigger: '8' },
    ],
  },
  {
    id: '8',
    message:
      'قصة مرضية لقصور قلب. قصور القلب الاحتقاني هو حالة مزمنة متفاقمة لا يكون فيها القلب قادراً على ضخ ما يكفي من الدم وذلك نتيجة لحالات معينة كأمراض الشرايين الإكليلية وارتفاع الضغط.',
    trigger: '9',
  },
  {
    id: '9',
    options: [
      { value: 1, label: 'نعم', trigger: '10' },
      { value: 2, label: 'لا', trigger: '10' },
    ],
  },
  {
    id: '10',
    message: 'هل درجة حرارة جسمك مرتفعة؟',
    trigger: '11',
  },
  {
    id: '11',
    options: [
      { value: 1, label: 'نعم', trigger: '12' },
      { value: 2, label: 'لا', trigger: '12' },
    ],
  },
  {
    id: '12',
    message: 'كم درجة حرارة جسمك؟',
    trigger: '13',
  },
  {
    id: '13',
    options: [
      { value: 1, label: '٣٦', trigger: '14' },
      { value: 1, label: '٣٧', trigger: '14' },
      { value: 1, label: '٣٨', trigger: '14' },
      { value: 1, label: '٣٩', trigger: '14' },
      { value: 2, label: '٤٠', trigger: '14' },
      { value: 2, label: '>٤٠', trigger: '14' },
    ],
  },
  {
    id: '14',
    message:
      'لا تشير أعراضك إلى أنك قد تكون مصابًا بعدوى COVID-19. ومع ذلك ، وفقًا لإرشادات منظمة الصحة العالمية ومركز السيطرة على الأمراض ، فمن المستحسن أن تبقي نفسك بعيدًا عن الآخرين لمدة 14 يومًا.',
    end: true,
  },
];

export default Steps;
