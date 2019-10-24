import React, {Fragment} from 'react'
import BaseScene from '../base-scene'

import UnitId from '../../constants/unit-id'
import SlideCount from '../../constants/slide-count'

import SlideOne from './slide/1'
import SlideTwo from './slide/2'
import SlideThree from './slide/3'
import SlideFour from './slide/4'
import SlideFive from './slide/5'
import SlideSix from './slide/6'
import SlideSeven from './slide/7'
import SlideEight from './slide/8'

class Micromundo_I extends BaseScene {
  constructor(props){
    super(props)
    this.state = {
      id: UnitId.MICROMUNDO_I,
      slideCount: SlideCount.MICROMUNDO_I,
      slide: props.slide,
      hasNextUnit: true,
      hasPreviousUnit: true
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
      case '4':
        return (<SlideFour setHeader={this.showHeader}/>)
      case '5':
        return (<SlideFive setHeader={this.showHeader}/>)
      case '6':
        return (<SlideSix setHeader={this.showHeader}/>)
      case '7':
        return (<SlideSeven setHeader={this.showHeader}/>)
      case '8':
        return (<SlideEight setHeader={this.showHeader}/>)
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

export default Micromundo_I
