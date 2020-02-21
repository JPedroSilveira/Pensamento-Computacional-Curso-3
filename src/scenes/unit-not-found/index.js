import React, {Fragment} from 'react'
import BaseScene from '../base-scene'

import UnitId from '../../constants/unit-id'

class UnitNotFound extends BaseScene {
  constructor(props){
    super(props)
    this.state = {
      id: UnitId.NOT_FOUND,
      slideCount: 0,
      slide: 0,
      hasNextUnit: false,
      hasPreviousUnit: false,
      slideProgress: []
    }
     
  }

  renderSlide = () => {
    return this.errorUnitNotFound()
  }

  render() {
    return (
      <Fragment>
        {super.render(this.renderSlide())}
      </Fragment>
    )
  }
}

export default UnitNotFound
