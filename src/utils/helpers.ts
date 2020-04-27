export const getAgeOptions = () => {
  const options = [];
  for (let number = 10; number < 100; number++) {
    options.push({ id: number, label: number.toString() });
  }
  return options;
}

export const getSymptomsOptions = () => [
  {id: 1, label: 'Fever of 38c or above'},
  {id: 2, label: 'Sore throat'},
  {id: 3, label: 'Diarrhea'},
  {id: 4, label: 'New loss of smell or taste, or a change in taste'},
]