import React from 'react'
import SlideControlBottom from '../slide-control-bottom'
import UnitName from '../../constants/unit-name'

class Footer extends React.Component {
    render(){
        return (
            <footer className="footer">
                <div className='slide-info'>
                    <SlideControlBottom 
                        hasNextUnit={this.props.hasNextUnit} 
                        hasPreviousUnit={this.props.hasPreviousUnit} 
                        slide={this.props.slide} 
                        onChangeUnit={this.props.onChangeUnit} 
                        onChangeSlide={this.props.onChangeSlide} 
                        slideCount={this.props.slideCount}
                        slideProgress={this.props.slideProgress}
                        />
                </div>
                <div className="copyright" style={{'fontSize':'10pt'}}>
                    © UFRGS. {UnitName.COURSE_NAME_COMPLETE}
                </div>
            </footer>
            
        )
    }
}

export default Footer