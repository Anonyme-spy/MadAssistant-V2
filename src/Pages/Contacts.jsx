import React, {useState} from "react";
import "../css/contacts.css";

const Contacts = () => {
	const [formData, setFormData] = useState ({
		name: "",
		email: "",
		message: ""
	});

	const handleChange = (e) => {
		setFormData ({... formData, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault ()
		setFormData ({name: "", email: "", message: ""})
	}

	return (
		<section className="contact-body" id="contact">

			<h1 className="section-header">Contact</h1>

			<div className="contact-wrapper">

				{/*Left contact page*/}

				<form id="contact-form" className="form-horizontal" onSubmit={handleSubmit} role="form">

					<div className="form-group">
						<div className="col-sm-12">
							<input type="text" className="form-control" id="name" placeholder="Nom" name="name" value={formData.name}
								onChange={handleChange} required/>
						</div>
					</div>

					<div className="form-group">
						<div className="col-sm-12">
							<input type="email" className="form-control" id="email" placeholder="Email" name="email"
								value={formData.email} onChange={handleChange}
								required/>
						</div>
					</div>

					<textarea className="form-control" rows="10" placeholder="Votre message..." name="message"
						value={formData.message} onChange={handleChange} required></textarea>

					<button className="btn btn-primary send-button" id="submit" type="submit" value="Envoyer">
						<div className="alt-send-button">
							<i className="fa fa-paper-plane"></i><span className="send-text">Envoyer</span>
						</div>

					</button>

				</form>

				{/*Left contact page*/}

				<div className="direct-contact-container">

					<ul className="contact-list">
						<li className="list-item"><i className="fa fa-map-marker fa-2x"><span
							className="contact-text place">Madagascar</span></i>
						</li>

						<li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a
							href="tel:+261300000000" title="Nous appeler">+2613000000</a></span></i></li>

						<li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a
							href="mailto:#" title="Envoyer un email">madassistant13@gmail.com</a></span></i></li>

					</ul>

					<hr/>
					<ul className="social-media-list">
						<a href="https://web.facebook.com/profile.php?id=61576297390781&locale=fr_FR" target="_blank"
							className="contact-icon">
							<li>
								<i className="fa-brands fa-facebook"></i>
							</li>
						</a>
						<a href="https://www.instagram.com/madassistant13/?utm_source=ig_web_button_share_sheet" target="_blank"
							className="contact-icon">
							<li>
								<i className="fa-brands fa-instagram"></i>
							</li>
						</a>

						<a href="https://x.com" target="_blank" className="contact-icon">
							<li>
								<i className="fa-brands fa-x-twitter"></i>
							</li>
						</a>

					</ul>

					<div className="copyright">&copy;2025 MadAssistant - Tous droits réservés</div>

				</div>

			</div>

		</section>
	)
}
export default Contacts;
