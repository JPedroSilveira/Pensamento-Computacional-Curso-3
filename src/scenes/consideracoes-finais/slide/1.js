import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import ImageSlide from '../../../components/image-slide'

import FalaUmSVG from '../../../images/content/consideracoes-finais/6-fala1.svg'
import FalaDoisSVG from '../../../images/content/consideracoes-finais/6-fala2.svg'

/*Props
  renderTop: function(bool), called to show the header
*/
class SlideOne extends React.Component {
  constructor(props){
    super(props)
    
    this.props.setHeader()
  }

  getSlideImage = id => {
    switch(id){
      case 1: 
        return FalaUmSVG
      case 2: 
        return FalaDoisSVG
      default:
        throw Error('Erro ao buscar slide desconhecido.')
    }
  }

  render() {
    return (
      <ContentBox>
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.CONSIDERACOES_FINAIS_DIALOG} />
        <PrimaryText>
          <p>Neste curso vimos, através dos Micromundos, que o Pensamento Computacional está naturalmente presente em nossa prática diária, permeando o cotidiano, em variadas situações que podem ser exploradas em sala de aula, no contexto da BNCC.</p>
          <p>Reconhece-se hoje, internacionalmente, a importância das estratégias de raciocínio do Pensamento Computacional para a realidade do mundo atual. E as pesquisas apontam que  essas estratégias deveriam ser desenvolvidas não só nos primeiros anos de escolaridade, capitalizando a naturalidade das crianças para essa forma de pensamento, mas ao longo de toda a vida escolar das crianças e jovens.</p>
          <p>Assim, este curso, voltado para os  Anos Finais do Ensino Fundamental, insere-se no esforço de sensibilização e motivação dos professores para realizarem o trabalho com o Pensamento Computacional em sala de aula, embasado no uso dos quatro pilares, não necessariamente usando soluções prontas e acabadas, mas principalmente apontando caminhos para que o professor desenvolva os seus próprios recursos, ampliando o acervo pedagógico para o tema.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideOne
