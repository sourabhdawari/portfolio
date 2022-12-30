import React from 'react'
import two from "../../img/portfolio/p2.png"
import Viewer from 'react-viewer';
export default function Work2() {
    const [ visible, setVisible ] = React.useState(false);
  return (
    <div>
      
						<div class="portfolio_box" >
							<div class="single_portfolio" id='two'>
								<div class="overlay">
								<button className='portbtn overlay' onClick={() => { setVisible(true); } }>Click to view</button>
										<Viewer
										visible={visible}
										onClose={() => { setVisible(false); } }
										images={[{src:two, alt: ''}]}
										/>
							
								
							</div>
						</div>
					
					</div>
    </div>
  )
}
