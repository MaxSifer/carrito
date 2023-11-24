import { useState } from 'react'
import '../assets/css/App.css'
import iconRegister from '../assets/images/ajuste.png'

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [password, setPassword] = useState('');
  const [isLogger, setIsLogger] = useState(false);
  const [spiner, setSpinner] = useState(false);

  const login = (e) => { //declaracion - funcion de flecha
    e.preventDefault();

    if (validateInput()) {
      alert("Iniciando sesion...");
    }
  }

  const validateInput = () => {
    if (email === "") {
      alert("El campo email es requerido")
      return false;
    }
    if (nombre === "") {
      alert("El campo email es requerido")
      return false;
    }
    if (apellido === "") {
      alert("El campo email es requerido")
      return false;
    }
    if (direccion === "") {
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
        <h1>Sing up</h1>
        <img src={iconRegister} alt="" />
        <form>
          <input type="email" name='' placeholder='Email' onChange={e => setEmail(e.target.value)} />
          <input type="text" name='' placeholder='Nombre' onChange={e => setNombre(e.target.value)} />
          <input type="text" name='' placeholder='Apellido' onChange={e => setApellido(e.target.value)} />
          <input type="text" name='' placeholder='Direccion' onChange={e => setDireccion(e.target.value)} />
          <input type="password" name='' placeholder='Contrañeda' onChange={e => setPassword(e.target.value)} />
          <button onClick={(e) => login(e)}>Registrarse</button>
        </form>
        <p>Log in <a href="/">Here</a></p>
      </div>
    </>
  )
}

export default RegisterPage
