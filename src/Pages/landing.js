import './landing.css'
import {useState} from 'react'

export default function Landing() {
  let [email, setEmail] = useState('')
  let [username, setUsername] = useState('')
  let [total, setTotal] = useState('')
  let [phone, setPhone] = useState('')
  let [numberA, setNumberA] = useState('')
  let [numberB, setNumberB] = useState('')
  let [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    fetch('https://pesaapi-production.up.railway.app/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        total,
        phone,
      }),
    }).then(r => {
      if (r.ok) {
        r.json().then(err => {
          setErrors(err.errors)
          console.log('success', err)
          setEmail('')
          setUsername('')
          setTotal('')
          setPhone('')
        })
      } else {
        r.json().then(err => {
          console.log(err)
        })
        console.log(errors)
      }
    })
  }

  function handleAdd(e) {
    e.preventDefault()
    fetch('https://pesaapi-production.up.railway.app/numbers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        numberA,
        numberB,
      }),
    }).then(r => {
      if (r.ok) {
        r.json().then(err => {
          setErrors(err.errors)
          console.log('success', err)
          setNumberA('')
          setNumberB('')
        })
      } else {
        r.json().then(err => {
          console.log(err)
        })
        console.log(errors)
      }
    })
  }

  return (
    <main id="landing">
      <form id="user" onSubmit={handleSubmit}>
        <span>Create User</span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="number"
          placeholder="Total Amount"
          value={total}
          onChange={e => setTotal(e.target.value)}
        />

        <input
          type="number"
          placeholder="Phone number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleAdd}>
        <span>Create Addition</span>
        <input
          type="number"
          placeholder="Number 1"
          value={numberA}
          onChange={e => setNumberA(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number 2"
          value={numberB}
          onChange={e => setNumberB(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
