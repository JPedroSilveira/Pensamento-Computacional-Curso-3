import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import TextBNCC from '../../../components/text/bncc'
import SubtitleBar from '../../../components/subtitle-bar'
import Activities from '../../../services/activities'
import IntegralActivity from '../../../components/integral-activity'

/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideSeven extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 4' subtitle='Músicas Típicas'/>
          <p>Um grupo com interesses musicais, que possui uma banda com um repertório variado, ficou responsável por apresentar músicas típicas dos diferentes lugares em que Dona Veridiana viveu ou visitou.</p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Arte, História e Geografia.</TextBNCC>
          <p>Qual o pilar do Pensamento Computacional que será exercitado<b> com mais ênfase</b> na concepção e realização desta parte da apresentação?</p>
          <IntegralActivity activity={Activities.getMicromundoIActiviryFour(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSeven
