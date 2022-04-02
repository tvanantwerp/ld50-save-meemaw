export interface IIntervention {
  id: string;
  name: string;
  description: string;
  cost: number;
}

export const interventions = [
  {
    id: 'cpr',
    name: 'CPR',
    description: 'Chest compressions to get the heart pumping!',
    cost: 1,
  },
  {
    id: 'oxygen',
    name: 'Oxygen',
    description: 'Chest compressions to get the heart pumping!',
    cost: 5,
  },
  {
    id: 'transfusions',
    name: 'Transfusion',
    description: 'Nothing like the blood of the young and innocent to restore your vim and vigor!',
    cost: 30,
  },
  {
    id: 'cpr',
    name: 'CPR',
    description: 'Chest compressions to get the heart pumping!',
    cost: 75,
  }
]