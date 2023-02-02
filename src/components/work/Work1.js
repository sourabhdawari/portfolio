import React from 'react'
import one from "../../img/portfolio/p1.png"
import Viewer from 'react-viewer';
export default function Work1() {
    const [ visible, setVisible ] = React.useState(false);
  return (
    <div>
      
						<div class="portfolio_box" >
							<div class="single_portfolio" id='one'>
								<div class="overlay">
								<button className='portbtn overlay' onClick={() => { setVisible(true); } }>Click to view</button>
								
										<Viewer
										className="viewer"

										visible={visible}
										onClose={() => { setVisible(false); } }
										images={[{src:one, alt: ''}]}
										/>
								</div>
								
							</div>
					
					
					</div>
    </div>
  )
}
