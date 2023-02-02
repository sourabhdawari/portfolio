import React from 'react'
import seven from "../../img/portfolio/p7.png"
import Viewer from 'react-viewer';
export default function Work7() {
    const [ visible, setVisible ] = React.useState(false);
  return (
    <div>
      
						<div class="portfolio_box" >
							<div class="single_portfolio" id='seven'>
								<div class="overlay">
								<button className='portbtn overlay' onClick={() => { setVisible(true); } }>Click to view</button>
										<Viewer
										visible={visible}
										onClose={() => { setVisible(false); } }
										images={[{src:seven, alt: ''}]}
										/>
						
								
							</div>
						</div>
					
					</div>
    </div>
  )
}