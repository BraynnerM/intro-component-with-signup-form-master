
import './styles/components/App/index.sass'
import './styles/components/App/responsive.sass'

function App() {
  function handleSubmit(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll('.form input');

    // Remove a classe 'error' de todos os inputs
    inputs.forEach(input => {
      input.classList.remove('error');
      input.nextElementSibling.style.display = 'none';
      input.previousElementSibling.style.display = 'none';
    });

    // Verifica se há algum input vazio e adiciona a classe 'error'
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        input.classList.add('error');
        input.nextElementSibling.style.display = 'block';
        input.previousElementSibling.style.display = 'inline';
      }
    });
  }

  return (
    <div className="container">
      <section className="title">
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve
          problems in real-time. Watching scripted
          tutorials is great, but understanding how
          developers think is invaluable.</p>
      </section>
      <section className="form-container">
        <span className='trial-box'>
          <p>Try it free 7 days</p>
          <p>then $20/mo. thereafter</p>
        </span>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' />
          <img className="error-icon" src="/public/src/assets/icon-error.svg" alt="Error Icon" />
          <span className="error-message">First Name cannot be empty</span>
          <input type="text" placeholder='Last Name' />
          <img className="error-icon" src="/public/src/assets/icon-error.svg" alt="Error Icon" />
          <span className="error-message">Last Name cannot be empty</span>
          <input type="text" placeholder='Email Address' />
          <img className="error-icon" src="/public/src/assets/icon-error.svg" alt="Error Icon" />
          <span className="error-message">Looks like this is not an email</span>
          <input type="text" placeholder='Password' />
          <img className="error-icon" src="/public/src/assets/icon-error.svg" alt="Error Icon" />
          <span className="error-message">Password cannot be empty</span>
          <button type='submit'>claim your free trial</button>
          <span>
            <p>By clicking the button, you are agreeing to our</p>
            <p>Terms and Services</p>
          </span>
        </form>

      </section>

    </div>
  )
}

export default App
