function validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  if (values.name === '') {
    error.name = 'Name is required';
  }

  if (values.email === '') {
    error.email = 'Email is required';
  } else if (!email_pattern.test(values.email)) {
    error.email = 'Invalid email format';
  }

  if (values.password === '') {
    error.password = 'Password is required';
  } else if (!password_pattern.test(values.password)) {
    error.password = 'Invalid password format';
  }

  return error;
}

export default validation;
