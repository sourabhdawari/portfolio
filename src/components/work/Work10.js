import React from 'react'
import ten from "../../img/portfolio/p10.png"
import Viewer from 'react-viewer';
export default function Work10() {
    const [ visible, setVisible ] = React.useState(false);
  return (
    <div>
      
						<div class="portfolio_box" >
							<div class="single_portfolio" id='ten'>
								<div class="overlay">
								<button className='portbtn overlay' onClick={() => { setVisible(true); } }>Click to view</button>
										<Viewer
										visible={visible}
										onClose={() => { setVisible(false); } }
										images={[{src:ten, alt: ''}]}
										/>
						
								
							</div>
						</div>
					
					</div>
    </div>
  )
}

