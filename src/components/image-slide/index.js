import React, {Fragment} from 'react'
import HTMLService from '../../services/html'
import EmptySpace from '../empty-space'
import Image from '../image'
import BackFilled from '../../images/component/back-filled.png'
import ForwardFilled from '../../images/component/forward-filled.png'
import DeleteSign from '../../images/component/delete-sign.png'
import SpeechBubbleFilled from '../../images/component/speech-bubble-filled.png'

/*Props
    getSlide: function(int), return the image of some slide by number
    slideCount: integer, represents the number os slides to show
    close: function, close the dialog
*/
class ImageSlide extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            slide: 1,
            nextButtonClass: 'button',
            previousButtonClass: 'button closed',
            showSlide: true
        }
        HTMLService.setOverflowHidden()
    }

    hasNextSlide = slide => {
        return (slide + 1) <= this.props.slideCount
    }

    hasPreviousSlide = slide => {
        return (slide - 1) >= 1
    }

    nextSlide = () => {
        if(this.hasNextSlide(this.state.slide)){
            const nextSlide = this.state.slide + 1
            this.setState({
                slide: nextSlide,
                nextButtonClass: this.hasNextSlide(nextSlide) ? 'button' : 'button closed',
                previousButtonClass: this.hasPreviousSlide(nextSlide) ? 'button' : 'button closed'
            })
        }
    }

    previousSlide = () => {
        if(this.hasPreviousSlide(this.state.slide)){
            const previousSlide = this.state.slide - 1
            this.setState({
                slide: previousSlide,
                nextButtonClass: this.hasNextSlide(previousSlide) ? 'button' : 'button closed',
                previousButtonClass: this.hasPreviousSlide(previousSlide) ? 'button' : 'button closed'
            })
        }
    }

    close = () => {
        HTMLService.setOverflowVisible()
        this.setState({
            showSlide: false
        })
    }

    open = () => {
        HTMLService.setOverflowHidden()
        this.setState({
            showSlide: true
        })
    }

    renderSlide = () => {
        if(this.state.showSlide){
            return (
                <div className='image-slide' style={{'z-index':'15'}}>
                    <div style={{'margin-left':'50%','width':'50%', 'minHeight':'50px'}}>
                    <Image onClick={this.close} className='close-button' src={DeleteSign}/>
                     </div>
                    <div className='image'> <Image src={this.props.getSlide(this.state.slide)}/></div> 
                    
                    <EmptySpace/>
                    <div className='control-bar' style={{'position':'fixed', 'bottom':'0'}}>
                        <Image onClick={this.previousSlide} className={this.state.previousButtonClass} src={BackFilled}/>
                        <Image onClick={this.nextSlide} className={this.state.nextButtonClass} src={ForwardFilled}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div onClick={this.open} className='open-button-container'>
                    Abrir diálogo &nbsp; <Image onClick={this.close} className='open-button' src={SpeechBubbleFilled}/>
                </div>
            )
        }
    }

    render() {
        return (
            <Fragment>
                {this.renderSlide()}
            </Fragment>            
        )
    }   
}

export default ImageSlide