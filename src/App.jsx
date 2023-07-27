
import './styles/components/App/index.sass'
import './styles/components/App/responsive.sass'

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    
    const inputs = document.querySelectorAll('.form input');    
    const emailInput = document.querySelector('.form #email');

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
        input.previousElementSibling.style.display = 'block';
      }      
    });

    const emailValue = emailInput.value.trim();
    console.log(emailValue)
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    if (emailValue !== '' && !emailRegex.test(emailValue)) {
      emailInput.classList.add('error');
      emailInput.nextElementSibling.style.display = 'block';
      emailInput.previousElementSibling.style.display = 'block';
    }
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
          <p> <strong>Try it free 7 days </strong> then $20/mo. thereafter</p>
        </span>
        <form className="form" onSubmit={handleSubmit}>
          <img className="error-icon" src="./public/src/assets/icon-error.svg" alt="Error Icon" />
          <input type="text" placeholder='First Name' />          
          <span className="error-message">First Name cannot be empty</span>
          <img className="error-icon" src="./public/src/assets/icon-error.svg" alt="Error Icon" />
          <input type="text" placeholder='Last Name' />          
          <span className="error-message">Last Name cannot be empty</span>
          <img className="error-icon" src="./public/src/assets/icon-error.svg" alt="Error Icon" />
          <input id="email" type="text" placeholder='Email Address' />          
          <span className="error-message">Looks like this is not an email</span>
          <img className="error-icon" src="./public/src/assets/icon-error.svg" alt="Error Icon" />
          <input type="text" placeholder='Password' />          
          <span className="error-message">Password cannot be empty</span>
          <button type='submit'>claim your free trial</button>          
          <span className='terms-and-services-advice'>
            <p>By clicking the button, you are agreeing to our <strong>Terms and Services</strong></p>            
          </span>
        </form>
        

      </section>

    </div>
  )
}

export default App
