import { object, string } from "yup"
import { useFormik } from "formik"

export default ({ onSubmit }) => {
  const ToDoSchema = object().shape({
    title: string().required("Required").nullable(true),
    content: string().required("Required").nullable(true),
  })

  const initialValues = { title: null, content: null }

  const { values, handleChange, handleBlur, touched, errors, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: ToDoSchema,
  })

  return {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
  }
}
