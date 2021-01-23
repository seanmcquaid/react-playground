import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email(),
});

const FormikYup = () => {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName'>First Name</label>
      <span>{errors.firstName}</span>
      <input
        id='firstName'
        name='firstName'
        type='text'
        onChange={handleChange}
        value={values.firstName}
      />
      <label htmlFor='lastName'>Last Name</label>
      <span>{errors.lastName}</span>
      <input
        id='lastName'
        name='lastName'
        type='text'
        onChange={handleChange}
        value={values.lastName}
      />
      <label htmlFor='email'>Email Address</label>
      <span>{errors.email}</span>
      <input
        id='email'
        name='email'
        type='email'
        onChange={handleChange}
        value={values.email}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormikYup;
