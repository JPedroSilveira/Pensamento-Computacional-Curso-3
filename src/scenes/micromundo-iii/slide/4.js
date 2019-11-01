import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import Bold from '../../../components/text/bold'
import EmptySpace from '../../../components/empty-space'
import Subtitle from '../../../components/text/subtitle'
import IntegralActivity from '../../../components/integral-activity'
import SubtitleBar from '../../../components/subtitle-bar'
import TextBNCC from '../../../components/text/bncc'
import Activities from '../../../services/activities'

class SlideFour extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={3} title='Questão Avaliativa - 1' subtitle='Solicitação de Ciclofaixa ou Espaço Compartilhado'/>
            <p>No levantamento realizado por nossos alunos, ficou evidenciado que nosso bairro tem um relevo que favorece o uso de bicicletas, e que muitas ruas têm condições para a criação de uma faixa específica para circulação das mesmas.  Dada a impossibilidade de destinar recursos financeiros para construir ciclovias para todos os destinos, foi definido como objetivo encontrar trajetos que contemplem os interesses de pelo menos 25% da população trabalhadora. Assim, considerando-se apenas o uso da casa para o trabalho e vice-versa, precisarão ser planejados corredores viários, a serem implantados futuramente, que facilitem o acesso aos principais pontos de trabalho.</p>
            <TextBNCC>BNCC: Nesta situação é possível trabalhar, por exemplo, o desenvolvimento de habilidades em: Geografia, Matemática, Ciências e Língua Portuguesa.</TextBNCC>
            <p>Qual das seguintes atividades parece <b>menos apropriada</b> para contribuir com a solução do problema?</p>
            <IntegralActivity activity={Activities.getMicromundoIIIActiviryOne(this.props.unitId)} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideFour
