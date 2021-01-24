import Vue from 'vue';
import Vuex from 'vuex';
import users from '../config/user';

import {
  setData,
  resultField,
  newLotteryField,
  listField
} from '@/helper/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config: {
      name: '观远数据年会抽奖系统',
      number: '267',
      firstPrize: 1,
      secondPrize: 1,
      thirdPrize: 2,
      fourthPrize: 4,
      fifthPrize: 9
    },
    result: {
      firstPrize: [],
      secondPrize: [],
      thirdPrize: [],
      fourthPrize: [],
      fifthPrize: []
    },
    newLottery: [
      { key: 'secondPrize', name: '招财进宝' },
      { key: 'thirdPrize', name: '福星高照奖' },
      { key: 'fourthPrize', name: '恭喜发财奖' },
      { key: 'fifthPrize', name: '诸事顺利奖' }
    ],
    list: users,
    photos: []
  },
  mutations: {
    setClearConfig(state) {
      state.config = {
        name: '观远数据年会抽奖系统',
        number: '267',
        firstPrize: 1,
        secondPrize: 1,
        thirdPrize: 2,
        fourthPrize: 4,
        fifthPrize: 9
      };
      state.newLottery = [
        { key: 'secondPrize', name: '招财进宝' },
        { key: 'thirdPrize', name: '福星高照奖' },
        { key: 'fourthPrize', name: '恭喜发财奖' },
        { key: 'fifthPrize', name: '诸事顺利奖' }
      ];
    },
    setClearList(state) {
      state.list = [];
    },
    setClearPhotos(state) {
      state.photos = [];
    },
    setClearResult(state) {
      state.result = {
        firstPrize: []
      };
    },
    setClearStore(state) {
      state.config = {
        name: '年会抽奖',
        number: 70,
        firstPrize: 1
      };
      state.result = {
        firstPrize: []
      };
      state.newLottery = [];
      state.list = [];
      state.photos = [];
    },
    setConfig(state, config) {
      state.config = config;
    },
    setResult(state, result = {}) {
      state.result = result;

      setData(resultField, state.result);
    },
    setNewLottery(state, newLottery) {
      if (state.newLottery.find(item => item.name === newLottery.name)) {
        return;
      }
      state.newLottery.push(newLottery);
      setData(newLotteryField, state.newLottery);
    },
    setList(state, list) {
      const arr = state.list;
      list.forEach(item => {
        const arrIndex = arr.findIndex(data => data.key === item.key);
        if (arrIndex > -1) {
          arr[arrIndex].name = item.name;
        } else {
          arr.push(item);
        }
      });
      state.list = arr;

      setData(listField, arr);
    },
    setPhotos(state, photos) {
      state.photos = photos;
    }
  },
  actions: {},
  modules: {}
});
