
import { action, computed, observable } from 'mobx';

export default class StopwatchStore {
  @observable
  list = [1, 22];

  @action
  addTodo(text: number) {
    this.list.push(text);
  }

  @computed
  get getList() {
    return this.list;
  }
}
