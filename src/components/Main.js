import React from 'react'
import Contact from './Contact'

import hi from "./sourabh davari resume.pdf"
import Skills from './Skills'
import Slider1 from './Slider1'
import Slider2 from './Slider2'
export default function Main() {
    const d = "</>"
	const handleClick = () => {
		const section = document.getElementById( 'contact-us' );
		section.scrollIntoView({behavior: 'smooth'});
	};
    return (
    <div className='maindiv'>
        
	{/* <!--================ Start Home Banner Area =================--> */}
	<section class="home_banner_area">
		<div class="banner_inner">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-6">
						<div class="banner_content">
							<h3 class="text-uppercase">Hello</h3>
						
							<h1 class="text-uppercase name " >I am Sourabh Davari</h1>
							<h5 class="text-uppercase">MERN stack Developer {d}  </h5>
							<div class="d-flex align-items-center">
								<span class="primary_btn" onClick={handleClick} ><span>Hire Me</span></span>
								<a class="primary_btn tr-bg" href={hi}><span>Get CV</span></a>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="home_right_img">
							<img class="w-75" src={require("../img/banner/home-right.png")} alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--================ End Home Banner Area =================-->

	<!--================ Start About Us Area =================--> */}
	<section class="about_area section_gap align-items-center">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="about_img">
						<img class="w-100" src={require("../img/about-us.png")} alt=""/>
					</div>
				</div>

				<div class=" col-md-6">
					<div class="main_title text-left">
						<h2>let’s <br/>
							Introduce about <br/>
							myself</h2>
						<p>
						I'm Certified MERN stack  developer and an Open Source Enthusiast, who is always curious to learn and build new things.

						</p>
						<p>
						I am a dedicated and diligent individual, amplified with curiosity and discipline when it comes to the wonderful world of Computers. I have a self-driven attitude to embrace new skills and competencies. I have used self-learning rigor to gain a good grip on the javascript programming language and its frameworks; apart from various ui/ux and frontend framework like Bootstrap. I have also been adding knowledge in networking domains (basic concepts like SSH, routes, etc.). I feel proud to have gone a step ahead while learning these technology skills. I have applied them and learnt from both successes and failures here. I have also put in time and efforts in deepening my familiarity with deployment. I am getting adequately conversant with development communities like Xda developers, Quora, Stack overflow as well as cloud platforms like mongoDB ,Firebase (I have worked on many projects along with development tools like Visual Studio code, mongoDB compass).
						</p>
						<a class="primary_btn" href={hi} download><span>Download CV</span></a>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--================ End About Us Area =================-->

	<!--================ Srart Brand Area =================--> */}
	<section class="brand_area section_gap_bottom mb-5">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6">
					<div class="row mt-5">
						<div class="col-lg-4 col-md-4 col-sm-6">
								<a href="http://www.luminatepaints.com">
							<div class="single-brand-item d-table">
								<div class="d-table-cell text-center">

									<img src={require("../img/brands/logo1.png")} alt=""/>
								</div>
							</div>
								</a>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6">
								<a href="http://www.teknovace.com">
							<div class="single-brand-item d-table">
								<div class="d-table-cell text-center">

									<img src={require("../img/brands/logo2.png")} alt=""/>
								</div>
							</div>
								</a>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6">
								<a href="http://vintajeflow.com">
							<div class="single-brand-item d-table">
								<div class="d-table-cell text-center">

									<img src={require("../img/brands/logo3.png")} alt=""/>
								</div>
							</div>
								</a>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6">
								<a href="http://blisshospital.in/">
							<div class="single-brand-item d-table">
								<div class="d-table-cell text-center">

									<img src={require("../img/brands/logo4.png")} height="30" width="100" alt=""/>
								</div>
							</div>
								</a>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6">
								<a href="http://antiquitynutrition.com/">
							<div class="single-brand-item d-table">
								<div class="d-table-cell text-center">
									
									<img src={require("../img/brands/logo5.png")} alt=""/>
								</div>
							</div>
								</a>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6">
						<a href="http://www.printallez.com/">

							<div class="single-brand-item d-table">
								<div class="d-table-cell text-center">
									<img src={require("../img/brands/logo6.png")} alt=""/>
								</div>
							</div>
						</a>
						</div>
						{/* <div class="col-lg-4 col-md-4 col-sm-6">
							<div class="single-brand-item d-table">
								<div class="d-table-cell text-center">
									<img src={require("../img/brands/logo7.png")} alt=""/>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6">
							<div class="single-brand-item d-table">
								<div class="d-table-cell text-center">
									<img src={require("../img/brands/logo8.png")} alt=""/>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6">
							<div class="single-brand-item d-table">
								<div class="d-table-cell text-center">
									<img src={require("../img/brands/logo9.png")} alt=""/>
								</div>
							</div>
						</div> */}
					</div>
				</div>
				<div class="offset-lg-2 col-lg-4 col-md-6  ">
					<div class="client-info ">
						<div class="d-flex mb-50">
							<span class="lage">01</span>
							<span class="smll">Years Experience Working</span>
						</div>
						<div class="call-now d-flex">
							<div>
								<span class="fa fa-phone"></span>
							</div>
							<div class="ml-15">
								<p>call me now</p>
								<a href="tel:+919881647749">

								<h3>+91 9881647749</h3>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--================ End Brand Area =================-->

	<!--================ Start Features Area =================--> */}
	<section class="features_are">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 text-center">
					<div class="main_title">
						<h2 className='display-4'>Key features </h2>
						<p>
						 The main purpose of development to create websites. While the primary role is to ensure the website is visually appealing and easy to navigate also responsible for the website's performance and capacity.
						</p>
					</div>
				</div>
			</div>
			<div class="row feature_inner">
				<div class="col-lg-3 col-md-6">
					<div class="feature_item">
						<img src={require("../img/services/s1.png")} alt=""/>
						<h4>MERN Stack </h4>
						<p>The main purpose of using MERN stack is to develop site using JavaScript only while provide minium error environment after deployment &  it's an open source code that's constantly being improved  by tech experts around the world</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="feature_item">
						<img src={require("../img/services/s2.png")} alt=""/>
						<h4>UI/ux design</h4>
						<p> UI/UX also lets you segment your audience which is very important for understanding the wants of your audience. Most importantly, a proper understanding of the users makes it simple to convert them into loyal customers. As a result, your actual sales will increase.</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="feature_item">
						<img src={require("../img/services/s3.png")} alt=""/>
						<h4>Web design</h4>
						<p>If only given 15 minutes to consume content, 66 percent of people would prefer to see something beautifully designed versus something plain and simple. Your website’s design is an important part of your online marketing presence.</p>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="feature_item">
						<img src={require("../img/services/s4.png")} alt=""/>
						<h4>seo optimize</h4>
						<p>SEO is made up of multiple elements, and knowing what and how they work is key to understanding why SEO is so important. It's crucial because it makes your website more visible, more traffic and more opportunities.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--================ End Features Area =================-->
	

	<!--================Start Portfolio Area =================--> */}

	

	<section class="about_area textAlight-center ">
		<div class="container">
			<div class="row justify-content-start align-items-center">
				<div class="col-md-6">
	<h2  className='mb-5 pb-5'>SKILLS & ABILITIES</h2>
					<div class="about_img ml-5">
						<img class="w-100" src={require("../img/skills.png")} alt=""/>
					</div>
				</div>

				<div class="col-md-6">
					<div class="main_title">
						
						<Skills/>
						
					</div>
				</div>
			</div>
		</div>
	</section>






	<section class="portfolio_area section_gap_top mb-5 " id="portfolio">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main_title text-left">
                        <h2 className='display-4'>Recent project </h2>
                    </div>
                </div>
            </div>
    
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">

	<div class="d-block w-100">
      <Slider1/>
	</div>
    </div>

    <div class="carousel-item">
	<div class="d-block w-100">
	<Slider2/>
	</div>


    </div>
    {/* <div class="carousel-item">
	<div class="d-block w-100">
	<Slider1/>
	</div>
    </div> */}
  </div>
  <button class="btn carousel-control-prev" style={{opacity:0}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="btn carousel-control-next" style={{opacity:0}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden bg-dark">Next</span>
  </button>
  <div className=' d-flex justify-content-between mt-5'>
		<button className='btn primary_btn text-light'> &laquo; previous </button>

		<button className='btn primary_btn mr-4 text-light'>Next &raquo;</button>
		</div>
</div>

        </div>
    </section>
		
















	
	<div id="contact-us">
       <Contact/>

	</div>
	   
    </div>
  )
}
