import React from 'react'

/*Props
    - size: accept 'small, medium, large', default 'medium'
    - weight: accept 'normal, strong', default 'normal'
*/
class TextPrimary extends React.Component {
    constructor(props){
        super(props)

        this.className = 'text-primary'
        
        this.defineSize(this.props.size)

        this.defineWeight(this.props.weight)
    }

    defineSize = sizeName => {
        if(sizeName === 'small'){
            this.className = this.className.concat(' small')
        } else if(sizeName === 'large') {
            this.className = this.className.concat(' large')
        }
    }

    defineWeight = weightName => {
        if(weightName === 'strong'){
            this.className = this.className.concat(' strong')
        }
    }

    render(){
        return (
            <div className={this.className}>
                {this.props.children}
            </div>
        )
    }
}

export default TextPrimary