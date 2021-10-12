import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
	return(
		<div className="sizefont"> 
			<h1>Proyecto Final Curso: Sistemas Operativos</h1>

			<h3>Visión</h3>
			<p> Crear o mejorar sistemas de información para
			la automatización de procesos de información </p>	

			<h3>Misión</h3>
			<p> Crear proyectos eficientes para mejorar </p>	

			<h3>Objetivo</h3>
			<p> Aprender más sobre el despliegue de applicaciones 
			por medio de jenkins utilizando nodejs </p>	

			<Link className="btn" style={{ textDecoration: 'none', color: 'white' }} to="/productos">Ir a Productos</Link>


		</div>


	
	)
}

export default Home;
