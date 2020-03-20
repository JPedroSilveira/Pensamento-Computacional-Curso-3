import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Subtitle from '../../../components/text/subtitle'
import FamiliaSVG from '../../../images/content/micromundo-iv/SP3.svg'
import Image from '../../../components/image'
/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideEleven extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 4' subtitle='Indo Além dos Catálogos Oficiais'/>
          <p>Uma escola deve ser um espaço integrado à sua comunidade e deve estar fortemente atenta aos movimentos sociais, culturais e esportivos, buscando em todas as oportunidades integrar-se ao seu ecossistema, permitindo a concretização dos seus objetivos mais amplos, além do oferecimento de conteúdos.</p>
          
          <p>As práticas escolares devem ter em conta o que é relevante para os seus &quot;usuários&quot; e buscar oferecer o suporte científico que proporcione transformações na sociedade que favoreçam o crescimento individual e coletivo, fortalecendo o papel de seus alunos como criadores de conhecimento. O campo esportivo é um dos instrumentos para fortalecer essa integração.</p>
          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image center width="510px" src={FamiliaSVG} />
            </div>
            </div>
            <Subtitle>Questões Avaliativas</Subtitle> 
             <p>Convidamos você, na Questão Avaliativa que segue, a selecionar a opção apropriada, considerando seus conhecimentos dos pilares do Pensamento Computacional.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideEleven
