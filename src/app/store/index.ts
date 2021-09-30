import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {UserData} from "../core/models/user-data";
import {UsersListReducer, UsersState} from "./users/users.reducer";
import {UsersListEffects} from "./users/users.effects";

// Add new reducers should be define here
export interface AppState {
    usersState: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
    usersState: UsersListReducer,
};

// Add new effects should be define here
export const effects = [UsersListEffects];

export const metaReducers: MetaReducer<AppState>[] = [];