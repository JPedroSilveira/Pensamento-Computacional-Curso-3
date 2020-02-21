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
import SlideNine from './slide/9'
import SlideTen from './slide/10'
import SlideEleven from './slide/11'
import SlideTwelve from './slide/12'
import SlideThirteen from './slide/13'

class Micromundo_IV extends BaseScene {
  constructor(props){
    super(props)
    this.state = {
      id: UnitId.MICROMUNDO_IV,
      slideCount: SlideCount.MICROMUNDO_IV,
      slide: props.slide,
      hasNextUnit: true,
      hasPreviousUnit: true,
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
      case '9':
        return (<SlideNine setHeader={this.showHeader}/>)
      case '10':
        return (<SlideTen setHeader={this.showHeader}/>)
      case '11':
        return (<SlideEleven setHeader={this.showHeader}/>)
      case '12':
        return (<SlideTwelve setHeader={this.showHeader}/>)
      case '13':
        return (<SlideThirteen setHeader={this.showHeader}/>)
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

export default Micromundo_IV
