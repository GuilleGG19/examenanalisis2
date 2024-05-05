import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correoElectronico: '',
    contraseña: '',
    confirmarContraseña: '',
    fechaNacimiento: '',
    genero: '',
    paisResidencia: '',
    aceptarTerminos: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre Completo:
        <input
          type="text"
          name="nombreCompleto"
          value={formData.nombreCompleto}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Correo Electrónico:
        <input
          type="email"
          name="correoElectronico"
          value={formData.correoElectronico}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Confirmar Contraseña:
        <input
          type="password"
          name="confirmarContraseña"
          value={formData.confirmarContraseña}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Género:
        <select
          name="genero"
          value={formData.genero}
          onChange={handleChange}
        >
          <option value="">Seleccionar</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </label>
      <br />
      <label>
        País de Residencia:
        <input
          type="text"
          name="paisResidencia"
          value={formData.paisResidencia}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="aceptarTerminos"
          checked={formData.aceptarTerminos}
          onChange={handleChange}
        />
        Acepto los términos y condiciones
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Formulario />
  </React.StrictMode>
);

// Si deseas medir el rendimiento de tu aplicación, puedes usar reportWebVitals
reportWebVitals();

