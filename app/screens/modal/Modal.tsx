import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import React, { useEffect, useRef } from "react"
import { Button } from "../../components"
import { goBack, NavigatorParamList } from "../../navigators"
import { deviceWidth } from "../../utils/device"
import { color, spacing } from "../../theme"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

const ModalScreen = ({ route }: NativeStackScreenProps<NavigatorParamList, "Modal">) => {
  const { buttons, description, title } = route?.params || {}
  const animation = useRef(new Animated.Value(0)).current
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(animation, { toValue: 1, useNativeDriver: true, duration: 150 }).start()
    }, 200)
  }, [])

  const requestClose = () => {
    Animated.timing(animation, { toValue: 0, useNativeDriver: true, duration: 100 }).start(() => {
      goBack()
    })
  }

  const onPressItem = (item) => () => {
    if (item.closeable) {
      requestClose()
    }
    item?.onPress?.(() => {
      requestClose()
    })
  }

  const renderButton = (item, index) => {
    return <Button style={styles.button} {...item} onPress={onPressItem(item)} key={index} />
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={requestClose} style={styles.container}>
      <Animated.View style={[styles.wrapContent, { opacity: animation }]}>
        <TouchableWithoutFeedback>
          <View style={styles.wrapBox}>
            <Text style={styles.txtTitle}>{title}</Text>
            <Text>{description}</Text>
            <View style={styles.wrapButton}>{buttons.map(renderButton)}</View>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default ModalScreen

const styles = StyleSheet.create({
  button: { flex: 1, marginHorizontal: spacing[2] },
  container: { flex: 1 },
  txtTitle: { fontSize: spacing[4], fontWeight: "bold", marginBottom: spacing[3] },
  wrapBox: {
    alignItems: "center",
    backgroundColor: color.background,
    borderRadius: spacing[2],
    padding: spacing[6],
    width: deviceWidth - spacing[6],
  },
  wrapButton: { flexDirection: "row", marginTop: spacing[4] },
  wrapContent: {
    alignItems: "center",
    backgroundColor: color.blackHalf,
    flex: 1,
    justifyContent: "center",
  },
})
