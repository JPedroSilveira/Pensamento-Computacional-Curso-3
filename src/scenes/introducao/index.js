import React, {Fragment} from 'react'
import BaseScene from '../base-scene'

import UnitId from '../../constants/unit-id'
import SlideCount from '../../constants/slide-count'

import SlideOne from './slide/1'
import SlideTwo from './slide/2'
import SlideThree from './slide/3'
/* import SlideFour from './slide/4' */

class Introducao extends BaseScene {
  constructor(props){
    super(props)
    this.state = {
      id: UnitId.INTRODUCAO,
      slideCount: SlideCount.INTRODUCAO,
      slide: props.slide,
      hasNextUnit: true,
      hasPreviousUnit: false,
      slideProgress: []
    }
    this.getUnitState()
  }

  renderSlide = () => {
    switch(this.state.slide.toString()){
      case '1':
        return (<SlideOne setHeader={this.showHeader}/>)
      case '2':
        return (<SlideTwo setHeader={this.showHeader}/>)
      case '3':
        return (<SlideThree setHeader={this.showHeader}/>)
      default:
        return this.errorSlideNotFound()
    }
  }

  render() {
    return (
      <Fragment>
        {super.render(this.renderSlide())}
      </Fragment>
    )
  }
}

export default Introducao
