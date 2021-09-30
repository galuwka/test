import { createAction, props } from '@ngrx/store';
import {UserData} from "../../core/models/user-data";

export const usersListGet = createAction('[Users List] Get');

export const usersListGetSuccess = createAction('[Users List] Get Success Action', props<{ usersList: UserData[] }>());

export const usersListGetFail = createAction('[Users List] Get Fail Action');

export const userDelete = createAction('[User] Delete', props<{ userId: number }>());

export const userDeleteSuccess = createAction('[User] Delete Success Action');

export const userDeleteFail = createAction('[User] Delete Fail Action');

export const userAdd = createAction('[User] Add', props<{ user: UserData }>());

export const userAddSuccess = createAction('[User] Add Success Action');

export const userAddFail = createAction('[User] Add Fail Action');

export const userEdit = createAction('[User] Edit', props<{ userChanged: UserData }>());

export const userEditSuccess = createAction('[User] Edit Success Action');

export const userEditFail = createAction('[User] Edit Fail Action');