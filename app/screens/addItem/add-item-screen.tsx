import { StyleSheet, View } from "react-native"
import React from "react"
import { Button, Header, Screen, TextField } from "../../components"
import { observer } from "mobx-react-lite"
import { goBack } from "../../navigators"
import { spacing } from "../../theme"
import { useStores } from "../../models"
import { object, string } from "yup"
import { useFormik } from "formik"
import useAddItem from "./useAddItem"

export const AddItemScreen = observer(() => {
  const onSubmit = ({ content, title }) => {
    const params = { id: Date.now(), content, title }
    todoStore.addTodo(params)
    goBack()
  }

  const { handleSubmit, handleBlur, handleChange, errors, touched, values } = useAddItem({
    onSubmit,
  })

  const { todoStore } = useStores()

  const onPressButton = () => {
    handleSubmit()
  }

  return (
    <Screen testID="AddItemScreen">
      <Header headerTx="addItem.addItem" leftIcon="back" onLeftPress={goBack} />
      <View style={styles.container}>
        <TextField
          testID="inputTitle"
          placeholderTx="addItem.title"
          onChangeText={handleChange("title")}
          onBlur={handleBlur("title")}
          value={values.title}
          error={touched.title && errors.title}
        />
        <TextField
          testID="inputContent"
          placeholderTx="addItem.content"
          onChangeText={handleChange("content")}
          onBlur={handleBlur("content")}
          value={values.content}
          style={{ marginTop: spacing[4] }}
          error={touched.content && errors.content}
        />
      </View>
      <Button
        testID="btnConfirm"
        tx="addItem.confirm"
        onPress={onPressButton}
        style={{ paddingVertical: spacing[3] }}
      />
    </Screen>
  )
})

export default AddItemScreen

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {},
})
