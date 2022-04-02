import { interventions } from "../../data/interventions"
import Intervention from "../intervention";

export const Interventions = () => {
  return (
    <div>
      {interventions.map(intervention => <Intervention metadata={intervention} />)}
    </div>
  );
}