import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

export const TodoItemModel = types.model("TodoItem").props({
  id: types.identifierNumber,
  title: types.maybe(types.string),
  content: types.maybe(types.string),
})

export interface TodoItem extends Instance<typeof TodoItemModel> {}
export interface TodoItemSnapshotOut extends SnapshotOut<typeof TodoItemModel> {}
export interface TodoItemSnapshotIn extends SnapshotIn<typeof TodoItemModel> {}
export const createTodoItemDefaultModel = () => types.optional(TodoItemModel, {})
