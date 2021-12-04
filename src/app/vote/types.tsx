import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
export type ActionT = ActionType<typeof actions>;
export interface CandidatePayloadI {
  id: number;
  name: string;
  vote: number;
}
