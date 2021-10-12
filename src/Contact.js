import React from 'react'
import {Link} from 'react-router-dom'

import email from './email.png'; 
import phone from './phone.png';  

function Contact(){
	return(
		<div> 
			<div className="titulo"> 
			<h1>Contáctanos</h1>

			</div>

			<div class="flex-container">
  				<div>
  					<img src={email} width="80" height="80" />
  						<h4>E-mail</h4>
  					<p>
  					grupo1ventas@gmail.com
  					</p>
  				</div>
  				<div>
  					<img src={phone} width="80" height="80" />
  					<h4>Teléfono</h4>
  					<p>
  					(502) 5421-5421
  					</p>
  					<p>
  					Horario: 8:00 AM a 7:00 PM
  					</p>
  				</div>	

  				<div>

  					<iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        			frameBorder='0'
        			allow='autoplay; encrypted-media'
        			allowFullScreen
       				title='video'
       				width="100%"
       				height="100%"
					/>	

  				</div>	

			</div>

			

			<Link className="btn1" style={{ textDecoration: 'none', color: 'white' }} to="/productos">Regresar a Productos</Link>
		</div>



	)
}

export default Contact;
