import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { color, spacing } from "../../../theme"
import { showPopupButton } from "../../../navigators"
import { useStores } from "../../../models"
import { translate } from "../../../i18n"

const ToDoItem = ({ item }) => {
  const { todoStore } = useStores()
  const onPressItem = () => {
    showPopupButton({
      title: translate("homeScreen.delete"),
      description: translate("homeScreen.deleteDesc"),
      buttons: [
        { text: translate("common.cancel"), closeable: true, testID: "btnCancel" },
        { text: translate("common.yes"), warning: true, onPress: onDelete, testID: "btnDelete" },
      ],
    })
  }

  const onDelete = (callback) => {
    todoStore.deleteTodo(item.id)
    callback?.()
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPressItem}>
      <View style={styles.wrapItem}>
        <Text style={styles.txtTitle}>{item.title}</Text>
        <Text>{item.content}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ToDoItem

const styles = StyleSheet.create({
  txtTitle: { fontSize: spacing[4], fontWeight: "bold" },
  wrapItem: {
    borderColor: color.line,
    borderRadius: spacing[2],
    borderWidth: 1,
    marginVertical: spacing[2],
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
})
