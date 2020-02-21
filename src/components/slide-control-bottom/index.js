import React from 'react'
import SlideControlBar from '../slide-control-bar'
import SlideControlNumber from '../slide-control-number'

/*Props
 - hasNextUnit: boolean, true if exists a next unit
 - hasPreviousUnit: boolean, true if exists a previous unit 
 - slide: string, slide being shown now
 - slideCount: string, how many slides the unit has
 - onChangeSlide: function, function to update the slide
 - onChangeUnit: function, function to update the unit
 - slideProgress: list, lista contendo os slides e o status de visualização do tipo:
    - viewed: boolean, indica se o slide foi visto
    - slide: number, número do slide
*/

class SlideControlBottom extends React.Component {
    render(){
        return (
            <div className='slide-control-bottom'>
                <SlideControlBar 
                    hasNextUnit={this.props.hasNextUnit}
                    hasPreviousUnit={this.props.hasPreviousUnit}
                    onChangeSlide={this.props.onChangeSlide} 
                    onChangeUnit={this.props.onChangeUnit} 
                    slideCount={this.props.slideCount} 
                    slide={this.props.slide}/>
                <div className='slide-control-number-container'>
                    <SlideControlNumber 
                        onChange={this.props.onChangeSlide} 
                        slideCount={this.props.slideCount}
                        slideProgress={this.props.slideProgress} 
                        slide={this.props.slide}/>
                </div>
            </div>
        )
    }
}

export default SlideControlBottom