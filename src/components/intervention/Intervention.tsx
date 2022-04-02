import { IIntervention } from "../../data/interventions"
import {useInterventions, InterventionsState, InterventionsUpdates} from '../../state/stores';

interface Props {
  metadata: IIntervention;
}

export const Intervention = ({metadata}: Props) => {
  const interventionCount = useInterventions(state => state[metadata.id as keyof InterventionsState])
  const interventionsUpdate = useInterventions(state => state[`update_${metadata.id}` as keyof InterventionsUpdates])
  return (
    <div onClick={() => interventionsUpdate(1)}>
      <p>{metadata.name}</p>
      <p>Count: {interventionCount}</p>
      <p>Cost: {metadata.cost}</p>
    </div>
  )
}