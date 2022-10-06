import { useFormik } from 'formik';
import './Signup.css';

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='input-container'>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div className='input-container'>
        <input
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Last Name'
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className='input-container'>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}
