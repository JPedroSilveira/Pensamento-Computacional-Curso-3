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
          <SubtitleBar type={3} title='Questão Avaliativa - 3' subtitle='Alocação das Competições'/>
          <p>A distribuição dos jogos entre as escolas participantes depende de quais possuem infraestrutura que permita a realização adequada de certas modalidades esportivas (quadra, campo, pista de corrida, piscina, etc.), bem como da quantidade de partidas ou provas necessárias para cada modalidade.</p>
          <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em:  Matemática, Educação Física, Ciências  e Língua Portuguesa.</TextBNCC>
          <p>Indique qual dos pilares do Pensamento Computacional seria <b>mais importante</b> para a tarefa de alocação das competições às escolas participantes:</p>
          <IntegralActivity activity={Activities.getMicromundoIVActiviryThree(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSeven
