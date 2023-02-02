import React from 'react'
import six from "../../img/portfolio/p6.png"
import Viewer from 'react-viewer';
export default function Work6() {
    const [ visible, setVisible ] = React.useState(false);
  return (
    <div>
      
						<div class="portfolio_box" >
							<div class="single_portfolio" id='six'>
								<div class="overlay">
								<button className='portbtn overlay' onClick={() => { setVisible(true); } }>Click to view</button>
										<Viewer
										visible={visible}
										onClose={() => { setVisible(false); } }
										images={[{src:six, alt: ''}]}
										/>
						
								
							</div>
						</div>
					
					</div>
    </div>
  )
}
