import './landing.css'
import {useState} from 'react'

export default function Landing() {
  let [email, setEmail] = useState('')
  let [username, setUsername] = useState('')
  let [amount, setAmount] = useState('')
  let [phone, setPhone] = useState('')

  function handleSubmit() {}

  return (
    <main id="landing">
      <form id="user">
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
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <input
          type="number"
          placeholder="Phone number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {/* <form id="">
        <span>Create User</span>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="number" placeholder="Total Amount" />
        <input type="number" placeholder="Phone number" />
      </form> */}
    </main>
  )
}
