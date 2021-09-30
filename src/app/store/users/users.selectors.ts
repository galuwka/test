import { createSelector } from '@ngrx/store';
import {AppState} from "../index";
export const usersState = (state: AppState) => state.usersState;

export const usersListData = createSelector(usersState, (state ) => state.usersList);