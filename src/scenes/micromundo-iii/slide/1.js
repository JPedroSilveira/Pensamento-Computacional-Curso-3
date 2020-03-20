import React from 'react'
import SlideCount from '../../../constants/slide-count'
import ContentBox from '../../../components/content-box'
import Image from '../../../components/image'
import PrimaryText from '../../../components/text/primary'
import ImageSlide from '../../../components/image-slide'

import FalaUmSVG from '../../../images/content/micromundo-iii/4-fala1.svg'
import FalaDoisSVG from '../../../images/content/micromundo-iii/4-fala2.svg'
import FalaTresSVG from '../../../images/content/micromundo-iii/4-fala3.svg'


import BairroSVG from '../../../images/content/micromundo-iii/Bairro.svg'
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
      case 3: 
        return FalaTresSVG
      default:
        throw Error('Erro ao buscar slide desconhecido.')
    }
  }

  render() {
    return (
      <ContentBox>
        <ImageSlide getSlide={this.getSlideImage} slideCount={SlideCount.MICROMUNDO_III_DIALOG} />
        <PrimaryText>
          <p>O bairro onde moramos é um espaço geopolítico rico o suficiente para que as crianças construam uma boa visão da organização geográfica, social, cultural e econômica, fundamentais para a vida em sociedade e para o convívio saudável com o meio ambiente e com outros seres vivos.</p>
          <p>Nosso bairro tem uma localização específica dentro de nossa cidade, faz fronteira com os bairros vizinhos e é constituído por várias ruas.</p>
          <p>Explorar e conhecer a história e a realidade de nosso bairro é por certo uma fonte inesgotável de conhecimento específico, mas, o que é mais importante, pode ajudar-nos a criar uma visão mais ampla que podemos extrapolar para compreender o mundo.</p>
          <p>A exploração do nosso bairro pode partir das ruas nas quais moram os alunos de uma turma e depois incluir as ruas de todos os alunos da escola.</p>
          <p>No bairro em que moramos encontramos diversos estabelecimentos comerciais, praças, igrejas, ambientes públicos ou privados de trabalho e lazer, postos de saúde, delegacias, hospitais, etc. Ao &quot;inventariarmos&quot; esses estabelecimentos, ou explorarmos questões como transporte urbano, abastecimento de água e de energia elétrica, ampliaremos nossa compreensão sobre os diferentes serviços disponíveis para a comunidade.</p>
          <Image src={BairroSVG} />
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideOne
