import React from 'react'
import three from "../../img/portfolio/p3.png"
import Viewer from 'react-viewer';
export default function Work3() {
    const [ visible, setVisible ] = React.useState(false);
  return (
    <div>
      
						<div class="portfolio_box" >
							<div class="single_portfolio" id='three'>
								<div class="overlay">
								<button className='portbtn overlay' onClick={() => { setVisible(true); } }>Click to view</button>
										<Viewer
										visible={visible}
										onClose={() => { setVisible(false); } }
										images={[{src:three, alt: ''}]}
										/>
							
								
							</div>
						</div>
					
					</div>
    </div>
  )
}
