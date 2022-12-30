import React from 'react'
import five from "../../img/portfolio/p5.png"
import Viewer from 'react-viewer';
export default function Work5() {
    const [ visible, setVisible ] = React.useState(false);
  return (
    <div>
  
						<div class="portfolio_box" >
							<div class="single_portfolio" id='five'>
								<div class="overlay">
								<button className='portbtn overlay' onClick={() => { setVisible(true); } }>Click to view</button>
										<Viewer
										visible={visible}
										onClose={() => { setVisible(false); } }
										images={[{src:five, alt: ''}]}
										/>
						
								
							</div>
						</div>
					
					</div>
    </div>
  )
}
