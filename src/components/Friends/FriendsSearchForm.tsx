import { Field, Form, Formik } from 'formik';
import React from 'react'
import { FilterType } from '../../redux/friendsReducer';
type FormType = {
  term: string
  friend: "true"|"false"|"null"
}
interface PropsType {
  onFilterChanged: (filter: FilterType) => void
}
const FriendsSearchForm = React.memo((props: PropsType) => {
  const { onFilterChanged } = props
  const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === "null" ? null : values.friend === "true" ? true : false
    }

    onFilterChanged(filter)
    setSubmitting(false);
  }


  return (
    <>
      <Formik
        initialValues={{ term: '', friend: 'null' }}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <Field as="select" name="friend">
              <option value="null">All</option>
              <option value="true">Followed friends</option>
              <option value="false">Unfollowed friends</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}
)
export default FriendsSearchForm
