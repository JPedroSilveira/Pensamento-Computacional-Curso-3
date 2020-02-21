import React from 'react'
import GenericButton from '../generic-button'
import Image from '../image'
import ForwardFilled from '../../images/component/forward-filled.png'
import BackFilled from '../../images/component/back-filled.png'

/*Props
 - hasNextUnit: boolean, true if exists a next unit
 - hasPreviousUnit: boolean, true if exists a previous unit 
 - slideCount: string, how many slides the unit has
 - onChangeSlide: function, function to update the slide
 - onChangeUnit: function, function to update the unit
*/

class SlideControlBar extends React.Component {
    changeSlide = newSlide => {
        this.props.onChangeSlide(newSlide.toString())
    }

    nextUnit = () => {
        this.props.onChangeUnit(true)
    }

    previousUnit = () => {
        this.props.onChangeUnit(false)
    }

    previous = () => {
        if(this.props.slide === '1'){
            this.previousUnit()
        } else {
            this.changeSlide(parseInt(this.props.slide) - 1)
        }
    }

    next = () => {
        if(this.props.slide === this.props.slideCount){
            this.nextUnit()
        } else {
            this.changeSlide(parseInt(this.props.slide) + 1)
        }
    }

    renderNextSlideName = () => {
        if(this.props.slide === this.props.slideCount){
            if(this.props.hasNextUnit){
                return 'próxima unidade'
            } else {
                return null
            }
        } else {
            return 'slide '.concat(parseInt(this.props.slide) + 1)
        }
    }

    renderPreviousSlideName = () => {
        if(this.props.slide === '1'){
            if(this.props.hasPreviousUnit){
                return 'unidade anterior'
            } else {
                return null
            }
        } else {
            return 'slide '.concat(parseInt(this.props.slide) - 1)
        }
    }

    render(){
        return (

            <div className='slide-control-bar'>
                <div className='side-bar'></div>
                <div className='central-bar'>


                {(this.props.slide != 1 ||!(this.props.slide == 1 && !this.props.hasPreviousUnit)) &&  <GenericButton onClick={this.previous} className='slide-control-bar-button'>
                        <Image className='button-image' src={BackFilled} alt='Voltar'/>
                        <div className='white-bar'></div>
        </GenericButton> }

                    <div className='unit previous'>
                	    {this.renderPreviousSlideName()}
                    </div>

                    <div className='unit next'>
                        {this.renderNextSlideName()}
                    </div>
                                    
                    {(this.props.slide != 1 ||!(this.props.slide == 1 && !this.props.hasNextUnit)) && <GenericButton onClick={this.next} className='slide-control-bar-button'>
                        <div className='white-bar'></div>
                        <Image className='button-image' src={ForwardFilled} alt='Avançar'/>
                    </GenericButton> }
                    
                </div>
                <div className='side-bar'></div>
            </div>
        )
    }
}

export default SlideControlBar