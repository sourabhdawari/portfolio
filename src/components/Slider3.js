import React from 'react'
import Work8 from './work/Work8'
import Work9 from './work/Work9'
import Work10 from './work/Work10'
import Work2 from './work/Work2'

export default function Slider3() {
  return (
    <div>
        <div class="">
				<div class="row portfolio-grid justify-content-center ">
				
				<div class="col-lg-4 all latest ">
					<Work9/>
				</div>
				<div class="col-lg-4 all p-3 latest">

					<Work2/>
					<Work10/>
				</div>

				<div class="col-lg-4 all latest">

          <Work8/>
				</div>
				
					
				</div>
			</div>
    </div>
  )
}