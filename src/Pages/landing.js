import './landing.css'

export default function Landing() {
  return (
    <main id="landing">
      <form id="user">
        <span>Create User</span>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="number" placeholder="Total Amount" />
        <input type="number" placeholder="Phone number" />

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
