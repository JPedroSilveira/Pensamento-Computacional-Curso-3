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
class SlideSix extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={3} title='Questão Avaliativa - 3' subtitle='Uma Vida em Imagens - Parte 2'/>
          <p>Uma vez organizadas em categorias, as fotos da Dona Veridiana precisam &quot;caber&quot; em um álbum que será exibido durante a apresentação. Um outro grupo ficou responsável por definir o processo de seleção de um certo número de fotos, dentro de cada categoria, de modo que a quantidade total não ultrapassasse um limite previamente determinado.</p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Arte, Matemática, e Língua Portuguesa.</TextBNCC>
          <p>Qual o pilar do Pensamento Computacional que será exercitado <b>com mais ênfase</b> na concepção e realização desta parte da apresentação?</p>
          <IntegralActivity activity={Activities.getMicromundoIActiviryThree(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSix
