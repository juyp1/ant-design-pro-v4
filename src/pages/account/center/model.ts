import { queryCurrent, queryFakeList } from './service';
import { CurrentUser, ListItemDataType } from './data';

export interface ModalState {
  currentUser: Partial<CurrentUser>;
  list: ListItemDataType[];
}

import { Reducer } from 'redux';
import { EffectsCommandMap } from 'dva';
import { AnyAction } from 'redux';

export type Effect = (
  action: AnyAction,
  effects: EffectsCommandMap & { select: <T>(func: (state: ModalState) => T) => T },
) => void;

export interface ModelType {
  namespace: string;
  state: ModalState;
  effects: {
    fetchCurrent: Effect;
    fetch: Effect;
  };
  reducers: {
    saveCurrentUser: Reducer<ModalState>;
    queryList: Reducer<ModalState>;
  };
}

const Model: ModelType = {
  namespace: 'accountCenter',

  state: {
    currentUser: {},
    list: [],
  },

  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryFakeList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },

  reducers: {
    saveCurrentUser(state, action) {
      return {
        ...state!,
        currentUser: action.payload || {},
      };
    },
    queryList(state, action) {
      return {
        ...state!,
        list: action.payload,
      };
    },
  },
};

export default Model;
