const submitForm = (e) => {
  e.preventDefault()

  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const phone_number = document.getElementById('phone_number').value
  const password = document.getElementById('password').value
  const confirm_password = document.getElementById('confirm_password').value

  console.log({
    name,
    email,
    phone_number,
    password,
    confirm_password
  })

  if (name === 'alvin') {
    console.log('yes')
  } else if (name === 'adrisa') {
    console.log('bukan alvin')
  } else {
    console.log('bukan alvin atau adrisa')
  }

  // Ternary Operators -> Condition ? true : false
  password === confirm_password ? console.log(true) : console.log(false)

}