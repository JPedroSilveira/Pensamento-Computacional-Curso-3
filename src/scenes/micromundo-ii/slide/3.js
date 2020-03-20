import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Subtitle from '../../../components/text/subtitle'

import FamiliaSVG from '../../../images/content/micromundo-ii/slide-3.svg'
import Image from '../../../components/image'

class SlideThree extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 1' subtitle='Organizando as Barracas e as Vendas'/>
            <p>Para viabilizar a realização da feira beneficente com a venda de produtos de artesãos locais, a administração municipal cedeu uma certa quantidade de barracas e orientou a coordenação da feira sobre as regras envolvidas (espaçamento mínimo entre as barracas, pontos de energia, espaço para circulação de pedestres, acesso de veículos para carga e descarga, etc.).</p>
            <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image center width="510px" src={FamiliaSVG} />
            </div>
            </div>
            <Subtitle>Questões Avaliativas</Subtitle> 
            <p>Convidamos você a selecionar, nas Questões Avaliativas que seguem, o pilar do Pensamento Computacional <b>mais apropriado</b> para apoiar a execução de tarefas relacionadas à Situação-problema descrita.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideThree
