import React from "react"
import { StyleProp, ViewStyle } from "react-native"

export interface ScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * An optional background color
   */
  backgroundColor?: string

  disableSafeArea?: boolean

  behavior?: 'height' | 'position' | 'padding' | undefined;

  testID?: string
}
