import React from 'react'
import four from "../../img/portfolio/p4.png"
import Viewer from 'react-viewer';
export default function Work4() {
  const [ visible, setVisible ] = React.useState(false);
  return (
    <div>
      	
						<div class="portfolio_box" >
							<div class="single_portfolio" id='four'>
								<div class="overlay">
								<button className='portbtn overlay' onClick={() => { setVisible(true); } }>Click to view</button>
										<Viewer
										visible={visible}
										onClose={() => { setVisible(false); } }
										images={[{src:four, alt: ''}]}
										/>
								
								
							</div>
						</div>
					
					</div>
    </div>
  )
}
