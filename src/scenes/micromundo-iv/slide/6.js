import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import SubtitleBar from '../../../components/subtitle-bar'
import Subtitle from '../../../components/text/subtitle'
import FamiliaSVG from '../../../images/content/micromundo-iv/SP2.svg'
import Image from '../../../components/image'
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
          <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA 2' subtitle='Nas Escolas de uma Cidade'/>
          <p>As competições são distribuídas, em geral, entre os espaços esportivos das escolas participantes. É importante que essa distribuição leve em conta critérios tais como a qualidade das disputas, o envolvimento das torcidas e, ao mesmo tempo, prestigiem o espaço físico de todas as escolas.</p> 
          <p>A habilitação de uma determinada infraestrutura passa por um apurado processo de inspeção, para garantir a integridade física dos participantes, e permite um melhor conhecimento das potencialidades e necessidades das escolas.</p>
          <p>Igualmente, a escola deve buscar exercer o seu papel de agente integrador, dado que todos os habitantes de uma determinada região circunvizinha estão de certa forma com ela implicados, seja como alunos, pais, parentes ou professores. Assim, é importante que na realização das atividades esportivas também seja buscado o apoio de outras estruturas esportivas no seu entorno.</p>
          <div style={{textAlign:"center", width:"100%"}}>
            <div style={{display:"inline-block"}}>
          <Image center width="510px" src={FamiliaSVG} />
            </div>
            </div>
            <Subtitle>Questão Avaliativa</Subtitle> 
           <p>Convidamos você a selecionar, na Questão Avaliativa que segue o pilar do Pensamento Computacional <b>mais apropriado</b> para apoiar a execução da tarefa relacionada à Situação-problema descrita.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default SlideSix
