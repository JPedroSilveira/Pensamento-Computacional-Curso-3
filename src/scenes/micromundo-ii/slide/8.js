import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Subtitle from '../../../components/text/subtitle'

import FamiliaSVG from '../../../images/content/micromundo-ii/slide-8.svg'
import Image from '../../../components/image'


/*Props:
    unitId: String, representa o id da unidade em que a atividade se encontra
.*/
class SlideEight extends React.Component {

  constructor(props) {
    super(props)
    this.props.setHeader()
  }

  render() {
    return (
      <ContentBox>
        <PrimaryText>
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 2' subtitle='Adquirindo Produtos'/>
          <p>Os alunos foram às compras com a indicação de que poderiam escolher o que quisessem, até um máximo de 5 produtos de diferentes naturezas, sem se preocupar com o preço.  No caixa, os produtos de cada aluno foram acomodados em embalagens individuais. Na volta para escola, cada um colocou uma etiqueta com seu nome nos seus produtos.</p>
          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image center width="510px" src={FamiliaSVG} />
            </div>
            </div>
            <Subtitle>Questões Avaliativas</Subtitle>
            <p>Nas Questões Avaliativas que seguem, convidamos você a refletir sobre o papel dos pilares do Pensamento Computacional na execução de tarefas relacionadas à Situação-problema descrita.</p>
          </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideEight
