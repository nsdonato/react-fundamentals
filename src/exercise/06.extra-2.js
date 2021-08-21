import * as React from 'react'

// reutilizando el ejemplo anterior se puede hacer asi

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState('')
  const inputEl = React.useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputEl.current.value)
  }

  const handleChange = () => {
    const isValid =
      inputEl.current.value === inputEl.current.value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          id="userName"
          onChange={handleChange}
          type="text"
          ref={inputEl}
        />
        {error && <span role="alert">{error}</span>}
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
