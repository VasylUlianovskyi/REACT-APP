import { Formik } from "formik";

function UserForm() {
  const initialValues = { userName: "" };

  const handleSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formikProps) => {
        return (
          <form
            onSubmit={formikProps.handleSubmit}
            onReset={formikProps.handleReset}
          >
            <input
              type="text"
              name="userName"
              value={formikProps.values.userName}
              onChange={formikProps.handleChange}
            />
            <button type="submit">OK</button>
            <button type="reset" disabled={!formikProps.dirty}>
              Reset
            </button>
          </form>
        );
      }}
    </Formik>
  );
}

export default UserForm;
