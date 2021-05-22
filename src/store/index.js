import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const LS = { //LS的功能
  load() {
    return JSON.parse(localStorage.getItem("vue-todos") || "[]"); //localStorage 資料將永久被保留
  },
  save(data) { //存資料
    localStorage.setItem("vue-todos",JSON.stringify(data));
  }
}

const filter = { //每個分頁
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter(todo => {
      return !todo.complete;
    })
  },
  complete(todos) {
    return todos.filter(todo => {
      return todo.complete;
    })
  }
}

export default new Vuex.Store({
  strict: true,
  state: { //儲存資料狀態
    todos: [
      {content:"todo-content", complete: false},
      {content:"todo-content", complete: true},
      {content:"todo-content", complete: false}
    ]
  },
  getters: {
    todoIndex(state) {
      return filter[state.route.name](state.todos).map(todo => 
        state.todos.indexOf(todo)
      )
    }
  },
  mutations: {
    SET_TODOS(state, data) { //輸入的todo
      state.todos = data;
      //save
      LS.save(state.todos);
    },
    ADD_TODO(state, data){ //新增
      state.todos.push(data);
      LS.save(state.todos); //寫進localStorage
    },
    UPDATE_TODO(state, { index, data }){ //更新
      state.todos[index].complete = data.complete;
      state.todos[index].content = data.content; //index告知哪比內容
      LS.save(state.todos);
    },
    REMOVE_TODO(state, index){ //刪除
      state.todos.splice(index, 1);
      LS.save(state.todos);
    }
  },
  actions: { //呼叫 mutations
    INIT_TODOS({ commit }) { // {}物件
      //load LS
      commit("SET_TODOS", LS.load());
    }
  }
});
