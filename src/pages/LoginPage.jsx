import { useState } from 'react'
import '../assets/css/App.css'
import iconUser from '../assets/images/perfil-del-usuario.png'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogger, setIsLogger] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const login = (e) => { //declaracion - funcion de flecha
    e.preventDefault();

    if(validateInput()){
      setSpinner(true);

      setTimeout(() =>{
        setSpinner(false);
      }, 5000);
    }

    if (validateInput()) {
      alert("Iniciando sesion...");
    }
  }

  const validateInput = () => {
    if (email === "") {
      alert("El campo email es requerido")
      return false;
    }
    if (password === "") {
      alert("El campo email es requerido")
      return false;
    }
    return true;
  }

  return (
    <>
      <div className='container'>
        <h1>Log In</h1>
        <img src={iconUser} alt="" />
        <form>
          <input type="email" name='' placeholder='Email' onChange={e => setEmail(e.target.value)} />
          <input type="password" name='' placeholder='Contrañeda' onChange={e => setPassword(e.target.value)} />
          {
            spinner ?
              <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
              <button onClick={(e) => login(e)}>Iniciar sesión</button>
          }
        </form>
        <p>Sing up <a href="/register">Here</a></p>
      </div>
    </>
  )
}
export default LoginPage
