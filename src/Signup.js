import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Signup.css';

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be <= 15 characters')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be <= 20 characters')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.touched);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='input-container'>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
      </div>
      <div className='input-container'>
        <input
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Last Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
      </div>
      <div className='input-container'>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
