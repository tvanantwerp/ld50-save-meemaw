import create from 'zustand';
import {persist} from 'zustand/middleware';

export interface InterventionsState {
  cpr: number;
  oxygen: number;
  transfusions: number;
}

export interface InterventionsUpdates {
  update_cpr: (count: number) => void;
  update_oxygen: (count: number) => void;
  update_transfusions: (count: number) => void;
}

type IStates = InterventionsState & InterventionsUpdates

export const useInterventions = create<IStates>(persist(set => ({
  cpr: 0,
  update_cpr: (count: number) => set(
    state => ({cpr: state.cpr + count})
  ),
  oxygen: 0,
  update_oxygen: (count: number) => set(
    state => ({oxygen: state.oxygen + count})
  ),
  transfusions: 0,
  update_transfusions: (count: number) => set(
    state => ({transfusions: state.transfusions + count})
  )
}), {name: 'interventions'}))
