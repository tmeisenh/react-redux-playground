import _ from 'lodash';

export const cellStateForId = (state, id) => _.find(state.listy.data, { id });
