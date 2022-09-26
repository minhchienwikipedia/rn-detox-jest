import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { TodoItemSnapshotIn, TodoItemModel } from '../todo-item/todo-item';

/**
 * Example store containing Rick and Morty characters
 */
export const TodoStoreModel = types
  .model("TodoStore")
  .props({
    todo: types.optional(types.array(TodoItemModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    addTodo: (params: TodoItemSnapshotIn) =>{
      self.todo.push(params);
    },
    deleteTodo: (id: number) =>{
        const arr = self.todo.filter(item=>item.id!==id)
        self.todo.replace(arr)
    }
  }))

export interface TodoStore extends Instance<typeof TodoStoreModel> {}
export interface TodoStoreSnapshotOut extends SnapshotOut<typeof TodoStoreModel> {}
export interface TodoStoreSnapshotIn extends SnapshotIn<typeof TodoStoreModel> {}
export const createTodoStoreDefaultModel = () => types.optional(TodoStoreModel, {})
