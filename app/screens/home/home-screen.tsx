import React from "react"
import { StyleSheet, FlatList } from "react-native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen } from "../../components"
import { spacing } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { useStores } from "../../models"
import ToDoItem from "./components/ToDoItem"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export const HomeScreen = observer(
  ({ navigation }: NativeStackScreenProps<NavigatorParamList, "Home">) => {
    const { todoStore } = useStores()
    console.log(`[1;34m ~ file: home-screen.tsx ~ line 14 ~ todoStore`, todoStore)

    const renderItem = ({ item }) => {
      return <ToDoItem item={item} />
    }

    const onPressAdd = () => {
      navigation.navigate("AddItem")
    }

    const getKey = (item, index) => `${item.id} ${index}`

    return (
      <Screen testID="HomeScreen">
        <Header headerTx="homeScreen.home" />
        <FlatList
          testID="todoList"
          showsVerticalScrollIndicator={false}
          data={todoStore.todo || []}
          renderItem={renderItem}
          keyExtractor={getKey}
        />
        <Button
          testID="add-button"
          tx="homeScreen.add"
          onPress={onPressAdd}
          style={styles.paddingVertical}
        />
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  paddingVertical: { paddingVertical: spacing[3] },
})
