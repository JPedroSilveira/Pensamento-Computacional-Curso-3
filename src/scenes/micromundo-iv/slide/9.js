import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Subtitle from '../../../components/text/subtitle'

import FamiliaSVG from '../../../images/content/micromundo-iv/SP4.svg'
import Image from '../../../components/image'
class SlideNine extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 3' subtitle='Modalidades Esportivas dos Catálogos Oficiais'/>
            <p>É importante que os estudantes conheçam e pratiquem as regras das modalidades esportivas da Olimpíada, para que tenham uma participação e um envolvimento mais qualificado nessa atividade, como atletas, público ou organizadores.</p>
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

export default SlideNine
