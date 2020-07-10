import React, {Fragment} from 'react'

import ListService from '../../services/list'

import AvamecServices from '../../services/avamec'

import ActivityState from '../../constants/activity-state'
import UnitState from '../../constants/unit-state' 
import QuestionState from '../../constants/question-state'
import OptionValues from '../../constants/option-values'

import BaseActivity from '../base-activity/'

import BasicButton from '../basic-button'
import InlineBox from '../inline-box'
import ActivityOption from '../activity-option'
import InputRadioButton from '../input-radio-button'
import Box from '../box'
import Color from '../../constants/color'
import Bold from '../text/bold'

import LoadImage from '../../images/component/load-image.png'
import PressedLoadImage from '../../images/component/pressed-load-image.png'
import './styles.css'

import AvaMECApiConstants from '../../constants/avamec-api-constants'

/*PROPS DESTA CLASSE DEVE CONTER UM OBJETIVO "atividade" DO TIPO:
    activity: um objetivo com os atributos:
        id: String única para este dado genérico, sendo que deve ter no máximo o valor da constante ActivityConstants.MAX_LENGTH_ID de caracteres
        unitId: String,
        questions: Lista de objetos com os atributos:
            id: String, //Deve ter no máximo o valor da constante MAX_CARACTERES_ID de caracteres
            title: String,
            statement: String,
            options: Lista de objetos com os atributos:
                value: '1' para verdadeira e '0' para falsa,
                key: String numérica,
                text: String,
                tip: String
.*/

class IntegralActivity extends BaseActivity {
    constructor(props) {
        super(props)

        this.state = {
            activityState: ActivityState.EMPTY,
            grade: 0,
            selectedOptions: this.generateDefaultOptionsData(), 
            unitState: UnitState.NOT_COMPLETED
        }

    }

    componentDidMount() {
        this.getSavedAnswer()

        this.getUnitConclusionData()
    }

    generateDefaultOptionsData = () => {
        let selectedOptions = []

        this.props.activity.questions.forEach(question => {
            selectedOptions.push({
                questionId: question.id,
                key: "0",
                state: QuestionState.NOT_ANSWERED
            })
        })

        return selectedOptions
    }

    getSavedAnswer = () => {
        AvamecServices.getActivity(this.props.activity.id, this.getSavedAnswerCallback)
    }

    getSavedAnswerCallback = (info) => {
        if (info.detail.status === 200) {
            let data = info.detail.data

            if (data.mapaAtributos.quantidadeRespostasResgistradas > 0) {   
                let selectedOptions = []

                this.props.activity.questions.forEach(question => {
                    let resposta = null
    
                    let respostas = data.questoesUsuario.find(questaoUsuario =>
                        questaoUsuario.questao.identificador === question.id
                    ).respostas

                    let hasAnswers = respostas !== undefined

                    if (hasAnswers) {

                        resposta = respostas.find(resposta =>
                            resposta.valor === AvaMECApiConstants.SELECTED_OPTION_VALUE
                        )

                        let hasSelectedOption = resposta !== undefined

                        if (hasSelectedOption){

                            let option = this.getOptionByQuestionIdAndKey(question.id, resposta.chave)

                            if (option.value === OptionValues.RIGHT) {
                                selectedOptions.push({
                                    questionId: question.id,
                                    key: resposta.chave,
                                    state: QuestionState.ANSWERED_RIGHT
                                })
                            } else {
                                selectedOptions.push({
                                    questionId: question.id,
                                    key: resposta.chave,
                                    state: QuestionState.ANSWERED_WRONG
                                })
                            }
                        } else { 
                            selectedOptions.push({
                                questionId: question.id,
                                key: null,
                                state: QuestionState.NOT_ANSWERED
                            })
                        }
                    }
                })

                this.setState({
                    activityState: ActivityState.ANSWERED,
                    grade: data.nota,
                    selectedOptions: selectedOptions
                })
            }
        } 

        /* this.shuffleOptions() */

        AvamecServices.closeGetActivity(this.getSavedAnswerCallback)
    }

    

    saveActivityAnswer = () => {
        let apiActivity = {
            "identificador": this.props.activity.id,
            "questoes": []
        }

        this.props.activity.questions.forEach(question => {
            let apiQuestion = {
                "identificador": question.id,
                "gabaritos": []
            }

            let selectedOption = this.getSelectedOptionByQuestionId(question.id)

            question.options.forEach(option => {
                let apiTemplate = {
                    "chave": option.key,
                    "valor": option.key === selectedOption.key ? 
                        AvaMECApiConstants.SELECTED_OPTION_VALUE : 
                        AvaMECApiConstants.NOT_SELECTED_OPTION_VALUE
                }

                apiQuestion.gabaritos.push(apiTemplate)
            })
            apiActivity.questoes.push(apiQuestion)
        })

        AvamecServices.saveActivity(apiActivity, this.saveActivityCallback)
    }

    saveActivityCallback = info => {
        if (info.detail.status === 200) {
            this.setState({
                activityState: ActivityState.ANSWERED,
                grade: info.detail.data.notaAtividade
            })

            this.getUnitConclusionData()
            this.getSavedAnswer()
        }

        AvamecServices.closeSaveActivity(this.saveActivityCallback)
    }

    onChangeSelectedOption = data => {
        if (this.state.unitState !== UnitState.COMPLETED && this.state.activityState !== ActivityState.ANSWERED) {
            let index = this.getIndexSelectedOptionByQuestionId(data.currentTarget.name)

            if (this.state.selectedOptions[index].state === QuestionState.NOT_ANSWERED) {
                this.state.selectedOptions[index].key = data.currentTarget.value

                this.forceUpdate()
            }
        }
    }

    getIndexSelectedOptionByQuestionId = (questionId) => {
        return this.state.selectedOptions.findIndex(option => option.questionId === questionId)
    }

    getSelectedOptionByQuestionId = (questionId) => {
        return this.state.selectedOptions.find(option => option.questionId === questionId)
    }

    getOptionByQuestionIdAndKey = (questionId, key) => {
        let question = this.props.activity.questions.find(question =>
            question.id === questionId
        )

        return question.options.find(option => option.key === key)
    }

    shuffleOptions = () => {
        this.props.activity.questions.forEach(question => {
            let seletedOption = this.getSelectedOptionByQuestionId(question.id)

            if (seletedOption.state !== QuestionState.ANSWERED) {
                question.options = ListService.shuffle(question.options)
            }
        })

        this.forceUpdate()
    }

    isSelectedOption = (question, option) => {
        let index = this.getIndexSelectedOptionByQuestionId(question.id) 

        return this.state.selectedOptions[index].key === option.key
    }

    retry = () => {
        this.shuffleOptions()

        let selectedOptions = this.state.selectedOptions

        selectedOptions.forEach(selectedOption => {
            if (selectedOption.state === QuestionState.ANSWERED_WRONG) {
                selectedOption.key = null
                selectedOption.state = QuestionState.NOT_ANSWERED
            }
        })

        this.setState({
            activityState: ActivityState.RETRY,
            selectedOptions: selectedOptions
        })
    }

    renderQuestions = () => {
        return (
            <Fragment>
                {this.props.activity.questions.map((question, key) => {
                    return (
                        <div key={key}>
                            <InlineBox>
                                {this.renderOptions(question)}
                            </InlineBox>
                        </div>
                    )
                })}
            </Fragment>
        )
    }

    renderOptions = (question) => {
        return (
            <Fragment>
                {question.options.map((option, key) => {
                    return (
                        <ActivityOption key={key}>
                            {this.renderOptionText(question, option)}
                            {this.renderOptionTip(question, option)}
                        </ActivityOption>
                    )
                })}
            </Fragment>
        )
    }

    renderOptionText = (question, option) => {
        let isSelectedOption = this.isSelectedOption(question, option)

        return (
            <InputRadioButton
                text={option.text}
                radioName={question.id}
                radioValue={option.key}
                checked={isSelectedOption}
                onChange={this.onChangeSelectedOption} />
        )
    }

    renderOptionTip = (question, option) => {
        let isSelectedOption = this.isSelectedOption(question, option)

        if (isSelectedOption) {

            let indexSelectedOption = this.getIndexSelectedOptionByQuestionId(question.id)

            let selectedOption = this.state.selectedOptions[indexSelectedOption]

            if (selectedOption.state === QuestionState.ANSWERED_RIGHT) {
                return (
                    <Box backgroundColor={Color.HINT_RIGHT_BG}>
                        <div style={{'marginTop':'1em'}}>
                            <Bold>Resposta Certa: </Bold>
                            {option.tip}
                        </div>
                    </Box>
                )
            } else if (selectedOption.state === QuestionState.ANSWERED_WRONG) {
                return (
                    <Box backgroundColor={Color.HINT_WRONG_BG}>
                        <div style={{'marginTop':'1em'}}>
                            <Bold>Resposta Errada: </Bold>
                            {option.tip}
                        </div>
                    </Box>
                )
            }
        }
    }

    renderSendButton = () => {   
        if(this.state.activityState !== ActivityState.ANSWERED) {
            if (this.state.unitState !== UnitState.COMPLETED) {
                return (
                    <BasicButton centralize={true} onClick={this.saveActivityAnswer}>
                        ENVIAR RESPOSTAS
                    </BasicButton>
                )
            } else {
                return (
                    <BasicButton centralize={true} disabled={true}>
                        UNIDADE CONCLUÍDA
                    </BasicButton>
                )
            }
        }
    }

    renderRetryButton = () => {
        if (this.state.activityState === ActivityState.ANSWERED) {
            let hasWrongOrEmptyOption = this.state.selectedOptions
                .some(selectedOption => selectedOption.state === QuestionState.ANSWERED_WRONG
                        || selectedOption.state === QuestionState.NOT_ANSWERED)
            if (hasWrongOrEmptyOption) {
                console.log("---------------------")
                console.log("renderRetryButton")
                console.log("---------------------")
                console.log(this.state.unitState)
                console.log("---------------------")
                if(this.state.unitState === UnitState.COMPLETED){
                    return (
                        <BasicButton centralize={true} disabled={true}>
                            UNIDADE CONCLUÍDA
                        </BasicButton>
                    )
                } else {
                    return (
                        <BasicButton
                            centralize={true}
                            onClick={this.retry}
                            onMouseOver={e => e.currentTarget.firstChild.src = PressedLoadImage}
                            onMouseOut={e => e.currentTarget.firstChild.src = LoadImage}>
                            <img src={LoadImage} alt="Clique para tentar responder novamente ao questionário." />
                            TENTAR NOVAMENTE
                        </BasicButton>
                    )
                }
                
            }
        }
    }

    render() {
        return (
            <div className="container-new-integral-activity">
                {this.renderQuestions()}<br />

                {this.renderSendButton()}

                {this.renderRetryButton()}
            </div>
        )
    }
}

export default IntegralActivity
