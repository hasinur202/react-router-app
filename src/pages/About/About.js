import Meta from '../../components/Meta/Meta'
import SocialLink from '../SocialLink/SocialLink'
import './About.css'

const About = () => {
  // page content
  const pageTitle = 'About'

  return (
    <div>
      	<Meta title={pageTitle}/>
	  	<div className="aboutus-secktion paddingTB60">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h1 className="strong">Who we are and<br/>what we do</h1>
						<p className="lead">This is the world's leading portal for<br/>easy and quick </p>
					</div>
					<div className="col-md-6">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet. Nulla convallis egestas rhoncus.</p>
					</div>
				</div>
			</div>
		</div>
      	<div className="container team-sektion paddingTB60">
			<div className="row">
				<div className="site-heading text-center">
					<h3>Our Team</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim </p>
					<div className="border"></div>
				</div>
			</div>
      		<div className="row">
				<div className="col-md-4 team-box">
					<div className="team-img thumbnail">
						<div className="team-content">    
							<h3>Philip Freeman</h3>
							<div className="border-team"></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
							<SocialLink></SocialLink>
						</div>
					</div>
				</div>
				<div className="col-md-4 team-box">
					<div className="team-img thumbnail">
						<div className="team-content">    
							<h3>Robert D'costa</h3>
							<div className="border-team"></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
							<SocialLink></SocialLink>
						</div>
					</div>
				</div>
				<div className="col-md-4 team-box">
					<div className="team-img thumbnail">
						<div className="team-content">
							<h3>David Smith</h3>
							<div className="border-team"></div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
							<SocialLink></SocialLink>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default About