import React from "react"
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, View } from "react-native"
import { color, spacing } from "../../theme"
import { isAndroid } from "../../utils/device"
import { ScreenProps } from "./screen.props"

export const Screen = ({
  children,
  style,
  backgroundColor,
  disableSafeArea,
  behavior = "padding",
  testID,
}: ScreenProps) => {
  const Wrapper = isAndroid ? View : KeyboardAvoidingView
  const WrapperChild = disableSafeArea ? View : SafeAreaView

  let props = {}
  if (!isAndroid) {
    props = { behavior }
  }

  return (
    <Wrapper
      testID={testID}
      {...props}
      style={[styles.container, { backgroundColor: backgroundColor || color.background }]}
    >
      <WrapperChild
        style={[
          styles.container,
          {
            marginHorizontal: spacing[4],
          },
          style,
        ]}
      >
        {children}
      </WrapperChild>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})
