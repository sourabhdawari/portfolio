import React from 'react'
import Work1 from './work/Work1'
import Work2 from './work/Work2'
import Work3 from './work/Work3'
import Work4 from './work/Work4'

export default function Slider1() {
  return (
    <div>
        <div class="">
				<div class="row portfolio-grid justify-content-center ">
				
				<div class="col-lg-4 all latest ">
					<Work1/>
				</div>
				<div class="col-lg-4 all p-3 latest">

					<Work2/>
					<Work3/>
				</div>

				<div class="col-lg-4 all latest">

          <Work4/>
				</div>
				
					
				</div>
			</div>
    </div>
  )
}