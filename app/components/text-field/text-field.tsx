import React from "react"
import { StyleSheet, TextInput, TextInputProps, TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { translate, TxKeyPath } from "../../i18n"
import { Text } from "../text/text"
import { FormikErrors } from "formik"

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  minHeight: 44,
  backgroundColor: color.palette.white,
  borderColor: color.line,
  borderRadius: spacing[2],
  borderWidth: 1,
  paddingHorizontal: spacing[4],
}

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: TxKeyPath

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string

  /**
   * The label i18n key.
   */
  labelTx?: TxKeyPath

  /**
   * The label text if no labelTx is provided.
   */
  label?: string

  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[]
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const { placeholderTx, placeholder, style: inputStyleOverride, error, ...rest } = props

  const style = [INPUT, inputStyleOverride]
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  return (
    <>
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.palette.lighterGrey}
        underlineColorAndroid={color.transparent}
        {...rest}
        style={[style, !!error && { borderColor: color.error }]}
      />
      {!!error && <Text style={styles.txtError}>{error}</Text>}
    </>
  )
}

const styles = StyleSheet.create({
  txtError: { color: color.error, fontSize: spacing[3], marginTop: spacing[2] },
})
