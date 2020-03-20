import React, {Fragment} from 'react'
import ReactHtmlParser from  'react-html-parser'
import Error from './error'
import SlideService from '../services/slide'
import AVAMECService from '../services/avamec'
import HttpStatus from '../services/http-status'
import UnitService from '../services/unit'
import HTMLService from '../services/html'
import URLService from '../services/url'
import Footer from '../components/footer'
import TopMenu from '../components/top-menu'
import Header from '../components/header'
import Logo from '../components/logo'
import UnitTitle from '../components/unit-title'
import PageUp from '../components/page-up'
import InfoBarBottom from '../components/info-bar-bottom'
import EmptySpace from '../components/empty-space'

import Background from '../images/component/background.svg'

const mainCenterStyle = { backgroundColor: '#ffffff', backgroundImage: 'url(' + Background + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'inherit' }

class BaseScene extends Error {

    getUnitState = () => {
        AVAMECService.getIfNextUnitExist(this.state.id, this.callBackIfNextUnitExists)
        AVAMECService.getIfPreviousUnitExist(this.state.id, this.callBackIfPreviousUnitExists)
        this.getUnitProgress()
    }

    onChangeSlide = newSlide => {
        this.saveUnitAndSlideProgress(newSlide)
        SlideService.saveSlide(this.state.id, newSlide)
        URLService.updateSlide(newSlide)
        this.setState({
            slide: newSlide
        })
        HTMLService.pageUp()    
    }

    onChangeUnit = next => {
        if(next){
            this.nextUnit()
        } else {
            this.previousUnit()
        }
    }

    nextUnit = () => {
        if(this.state.hasNextUnit){
            AVAMECService.getNextUnit(this.state.id)
        }
    }

    previousUnit = () => {
        if(this.state.hasPreviousUnit){
            AVAMECService.getPreviousUnit(this.state.id)
        }
    }

    getUnitProgress = () => {
        SlideService.getSlideProgress(this.state.id, this.getUnitProgressCallback)
    }

    getUnitProgressCallback = response => {
        let slideProgress = []
        SlideService.closeGetSlideProgress(this.getUnitProgressCallback)
        if(response.detail.status === 200){
            slideProgress = JSON.parse(response.detail.data[0].valor)
        } else if(response.detail.status === 412) {
            for(let count = 1; count <= this.state.slideCount; count++) {
                slideProgress.push({
                    slide: count,
                    viewed: count === this.state.slide
                })
            }
            SlideService.firstSaveSlideProgress(this.state.id, slideProgress)
        
            AVAMECService.saveUnitProgress(this.state.id, (1 / this.state.slideCount) * 100)
        }

        this.setState({
            slideProgress: slideProgress
        })
    }

    saveUnitAndSlideProgress = viewedSlide => {
        const updatedSlideProgress = SlideService.saveSlideProgress(this.state.id, viewedSlide, this.state.slideProgress)

        const countViewed = this.state.slideProgress.filter(item => item.viewed).length
        
        AVAMECService.saveUnitProgress(this.state.id, (countViewed / this.state.slideCount) * 100)

        this.setState({
            slideProgress: updatedSlideProgress
        })
    }

    callBackIfNextUnitExists = event => {
        try {
            if(!HttpStatus.isError(event.status)) {
                this.setState({
                    hasNextUnit: event.detail.data
                })
            }
        } catch {
            console.error('Erro ao buscar outras unidades no servidor.')
        }

        AVAMECService.closeGetIfNextUnitExistListener(this.callBackIfNextUnitExists)
    }

    callBackIfPreviousUnitExists = event => {
        try {
            if(!HttpStatus.isError(event.status)) {
                this.setState({
                    hasPreviousUnit: event.detail.data
                })
            }
        } catch {
            console.error('Erro ao buscar outras unidades no servidor.')
        }
        AVAMECService.closeGetIfPreviousUnitExistListener(this.callBackIfPreviousUnitExists)
    }

    showHeader = () => {
        this.setState({
            renderHeader: true
        })
    }

    hideHeader = () => {
        this.setState({
            renderHeader: false
        })
    }

    renderHeader = () => {
        if(this.state.renderHeader){
            return (
                <div className='main-center'>
                    <Header>
                        <Logo/>
                    </Header>
                    <UnitTitle>
                        {ReactHtmlParser(UnitService.getUnitName(this.state.id))}
                    </UnitTitle>
                </div>
            )
        } else {
            return (
                <Fragment>
                    <EmptySpace/><EmptySpace/><EmptySpace/>
                </Fragment>
            )
        }
    }

    render(slide) {
        return (
            <Fragment>
                <TopMenu 
                    slide={this.state.slide}
                    slideCount={this.state.slideCount}
                    unit={UnitService.getUnitName(this.state.id)}
                    course={UnitService.getCourseName()}
                    hide={this.state.renderHeader}
                />
                <div className='main-center' style={mainCenterStyle}>
                    {this.renderHeader()}
                    <div className='content'>
                        {slide}
                    </div>
                    <PageUp/>
                    <InfoBarBottom 
                        slide={this.state.slide}
                        slideCount={this.state.slideCount}
                    />
                </div>  
                <Footer
                    hasNextUnit={this.state.hasNextUnit} 
                    hasPreviousUnit={this.state.hasPreviousUnit} 
                    slide={this.state.slide} 
                    onChangeUnit={this.onChangeUnit} 
                    onChangeSlide={this.onChangeSlide} 
                    slideCount={this.state.slideCount}
                    slideProgress={this.state.slideProgress}
                />      
            </Fragment>
        )
    }
}

export default BaseScene
