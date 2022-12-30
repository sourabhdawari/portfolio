import React from 'react'
import eight from "../../img/portfolio/p8.png"
import Viewer from 'react-viewer';
export default function Work8() {
    const [ visible, setVisible ] = React.useState(false);
  return (
    <div>
      
						<div class="portfolio_box" >
							<div class="single_portfolio" id='eight'>
								<div class="overlay">
								<button className='portbtn overlay' onClick={() => { setVisible(true); } }>Click to view</button>
										<Viewer
										visible={visible}
										onClose={() => { setVisible(false); } }
										images={[{src:eight, alt: ''}]}
										/>
						
								
							</div>
						</div>
					
					</div>
    </div>
  )
}