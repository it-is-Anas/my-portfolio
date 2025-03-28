import state from "./Store/state";
import mutations from './Store/mutations';
import actions from './Store/actions';
import getters from './Store/getters';


export default {
    namespaced: true,
    state,
    mutations,
    actions,  
    getters,
};
