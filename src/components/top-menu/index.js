import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import TopBarImage from '../../images/component/top.svg'

/*
Props:
    course: string, name of the course
    unit: string, name of the unit
    slide: string, number of the slide
    slideCount: int, how much slides the unit has
*/
class TopMenu extends React.Component {
    constructor(props){
        super(props)
        window.addEventListener('scroll', this.onScroll)
        this.state = {
            SlideInfoClass: this.props.hide ? 'slide-info-hidden' : 'slide-info'
        }
    }

    onScroll = (event) => {
        if(this.props.hide) {
            if (event.target.scrollingElement) {
                //Distancia entre a posicao da rolagem e o topo
                const scrollTop = event.target.scrollingElement.scrollTop

                //Tamanho da pagina exibida ao usuario
                const clientHeight = event.target.scrollingElement.clientHeight
            
                if (scrollTop > clientHeight*0.25) {
                    this.setState({
                        SlideInfoClass: 'slide-info'
                    })
                } else {
                    this.setState({
                        SlideInfoClass: 'slide-info-hidden'
                    })
                }
            }
        } 
    }

    render() {
        return (
            <div className='top-menu' style={{'zIndex':'10'}}>
                    <div className='top-menu-bar'></div>
                    <div className={this.state.SlideInfoClass}>
                        <div className='slide-name' style={{ backgroundImage: 'url(' + TopBarImage + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='course-name'>
                                {this.props.course}
                            </div>
                            <div className='unit-name'>
                                {ReactHtmlParser(this.props.unit)}
                            </div>
                        </div>
                        <div className='slide-number'>
                            SLIDE {this.props.slide} DE {this.props.slideCount}
                        </div>
                    </div>
             </div>
        )
    }   
}

export default TopMenu