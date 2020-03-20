import React from 'react'
import Button from '../generic-button'

/*Props
 - slide: string, opened slide
 - slideCount: string, how many slides the unit has
 - onChange: function, function to update the slide
  - slideProgress: list, lista contendo os slides e o status de visualização do tipo:
    - viewed: boolean, indica se o slide foi visto
    - slide: number, número do slide
*/

class SlideControlNumber extends React.Component {
    changeSlide = newSlide => {
        this.props.onChange(newSlide)
    }

    renderSlideButtons = () => {
        let buttons = []
        for(let slide = 1; slide <= this.props.slideCount; slide++){
            buttons.push(
                <Button key={slide} className={'slide-button'.concat(this.getSlideClass(slide))} value={slide.toString()} onClick={this.changeSlide}>
                    {slide}
                </Button>
            )
        }
        return buttons
    }

    getSlideClass = slide => {        
        if (this.props.slideProgress) {
            let slideData = this.props.slideProgress.filter(item => item.slide === slide)
    
            if (slideData.length === 1 && slideData[0].viewed){
                return " viewed"
            }
        }
        
        return ""
    }

    render(){
        return (
            this.conditionToRender(this.props.slideCount)
        )
    }

    conditionToRender(slideNumber){
        if (slideNumber !== 1) {
            return (            
                <div className='slide-control-number'>

                    ir para o slide:
                    <div className='slide-control-number-buttons'>
                        {this.renderSlideButtons()}
                    </div>
            
                </div>
            )
        }
        else return null
    }
}

export default SlideControlNumber