import {Action, createReducer, on} from '@ngrx/store';
import {UserData} from "../../core/models/user-data";
import {userAdd, userDelete, userEdit, usersListGet, usersListGetFail, usersListGetSuccess} from "./users.action";

const UsersInitialState: UsersState = {
    usersList: [],
};

export interface UsersState {
    usersList: UserData[]
}

export const reducer = createReducer(
    UsersInitialState,
    on(usersListGet, (state: UsersState) => ({
        ...state
    })),

    on(usersListGetSuccess, (state: UsersState, {usersList}) => ({
            ...state,
            usersList
        })
    ),

    on(usersListGetFail, (state: UsersState) => ({
        ...state
    })),

    // TODO Move logic to BE and add proper effect
    on(userDelete, (state: UsersState, {userId}) => {
        const updatedUserList = state.usersList.filter((user) => user.id !== userId);
        return ({
            ...state,
            usersList: updatedUserList
        })
    }),

    on(userAdd, (state: UsersState, {user}) => ({
            ...state,
            usersList: [...state.usersList, user]
        })
    ),

    // TODO Move logic to BE and add proper effect
    on(userEdit, (state: UsersState, {userChanged}) => {
            const userIndex = state.usersList.findIndex(user => user.id === userChanged.id);
            const arrToUpdate = [...state.usersList];
            arrToUpdate[userIndex] = userChanged;
            return ({
                ...state,
                usersList: arrToUpdate
            })
        }
    )
    )
;

export function UsersListReducer(state: UsersState | undefined, action: Action): UsersState {
    return reducer(state as UsersState, action as Action);
}