import React from 'react'
import {Link} from 'react-router-dom'

import p1 from './p1.png'; 
import p2 from './p2.png'; 
import p3 from './p3.png'; 
import p4 from './p4.png'; 
import p5 from './p5.png'; 

	

function Productos(){
	return(
		<div> 
			<h1>Productos</h1>

			

			<div class="flex-container">
  				<div>
  					<img src={p1} width="150" height="200" />
  					<small>
  					Tracfone LG Stylo 5 4G LTE prepago Smartphone (enlazado) - Negro - 32GB - Tarjeta SIM incluida - CDMA
  					</small>
  				</div>

  				<div>
  					<img src={p2} width="150" height="150" />
  					<small>
  					Microsoft Surface Go 3 - Pantalla táctil de 10,5" - Intel Core i3 - Memoria de 8 GB - SSD de 128 GB - Solo dispositivo - Platino (último modelo)
  					</small>
  				</div>

  				<div>
  					<img src={p3} width="200" height="200" />
  					<small>
					Apple Watch SE (GPS, 1.57 pulgadas) - Reloj inteligente con caja de aluminio color gris espacial y correa deportiva color medianoche - Regular  				
					</small>	
				</div>
  				
  				<div>
  					<img src={p4} width="150" height="200" />
  					<small>
						Presentamos la tablet Fire HD 10 Pro, 10.1 pulgadas, 1080p Full HD, edades de 6 a 12, 32 GB, Intergaláctico
					</small>	

  				</div>

  				<div>
  					<img src={p5} width="200" height="150" />
  					<small>
  						LG OLED65C1PUB C1 Series Televisor OLED inteligente 4K de 65", con Alexa incorporada (2021)
					</small>
  				</div>

			</div>





			<Link className="btn1" style={{ textDecoration: 'none', color: 'white' }} to="/">Regresar a Principal</Link>
			<Link className="btn" style={{ textDecoration: 'none', color: 'white' }} to="/contact">Contáctanos</Link>


		</div>
	)
}

export default Productos;
