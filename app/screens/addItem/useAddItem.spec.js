import { renderHook, act } from "@testing-library/react-hooks"
import useAddItem from "./useAddItem"

test("Test hooks", () => {
  const onSubmit = jest.fn()
  const { result } = renderHook(() => useAddItem({ onSubmit }))

  act(() => result.current.handleChange("title")("Test 1"))
  expect(result.current.values.title).toEqual("Test 1")
  act(() => result.current.handleChange("content")("Content 1"))
  expect(result.current.values.content).toEqual("Content 1")

  act(() => expect(() => result.current.handleSubmit).toBeTruthy())
})
