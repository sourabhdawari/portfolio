import React from 'react'
import nine from "../../img/portfolio/p9.png"
import Viewer from 'react-viewer';
export default function Work9() {
    const [ visible, setVisible ] = React.useState(false);
  return (
    <div>
      
						<div class="portfolio_box" >
							<div class="single_portfolio" id='nine'>
								<div class="overlay">
								<button className='portbtn overlay' onClick={() => { setVisible(true); } }>Click to view</button>
										<Viewer
										visible={visible}
										onClose={() => { setVisible(false); } }
										images={[{src:nine, alt: ''}]}
										/>
						
								
							</div>
						</div>
					
					</div>
    </div>
  )
}