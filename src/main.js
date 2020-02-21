import React, {Fragment} from 'react'
import Url from './services/url'
import UnitService from './services/unit'
import './sass/main.min.css'

class Main extends React.Component {
  constructor() {
    super()

    this.state = {
        unit: Url.getUnit(),
        slide: Url.getSlide()
    }
  }

  render() {
    return (
      <Fragment>
          {UnitService.getUnit(this.state.unit, this.state.slide)}
      </Fragment>
    )
  }
}

export default Main
