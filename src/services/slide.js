import Avamec from './avamec'
import GenericDataId from '../constants/generic-data-id'

class Slide {    
    saveSlide = (unit, slide) => {
        Avamec.saveGenericData(this.getSlideId(unit), slide)
        Avamec.saveLastPage(unit, slide)
    }

    getSlideId = unit => {
        return GenericDataId.SLIDE.concat("_").concat(unit)
    }

    /* 
    Salva pela primeira vez o dado genérico onde está salvo o progresso de slides da unidade
    param:
        unit: string, id da unidade
        savedData: list, lista do tipo:
            slide: number, número do slide
            viewed: boolean, verdadeiro caso o slide tenha sido visto e falso caso contrário
    */
    firstSaveSlideProgress = (unit, savedData) => {
        Avamec.saveGenericData(this.getSlideProgressId(unit), savedData)
    }

    /* 
    Atualiza o dado genérico onde está salvo o progresso de slides da unidade
    param:
        unit: string, id da unidade
        slide: number, número do slide concluído
        savedData: list, lista do tipo:
            slide: number, número do slide
            viewed: boolean, verdadeiro caso o slide tenha sido visto e falso caso contrário
    return:
        dados de slides atualizados
    */
    saveSlideProgress = (unit, slide, savedData) => {
        let indexCurrentSlide = savedData.findIndex(data => String(data.slide) === slide)

        console.log("-----------------------------------------")
        console.log("saveSlideProgress")
        console.log("-----------------------------------------")
        console.log(slide)

        if (indexCurrentSlide >= 0) {
            savedData[indexCurrentSlide].viewed = true

            Avamec.saveGenericData(this.getSlideProgressId(unit), savedData)
        }

        console.log(savedData)
        console.log("-----------------------------------------")
        
        return savedData
    }

    /* 
    Busca o dado genérico onde está salvo o progresso de slides da unidade
    param:
        unit: string, id da unidade
        callback: function, função que receberá o retorno da chamada da API
    return:
        savedData: list, lista do tipo:
            slide: number, número do slide
            viewed: boolean, verdadeiro caso o slide tenha sido visto e falso caso contrário
    */
    getSlideProgress = (unit, callback) => {
        Avamec.getGenericData(this.getSlideProgressId(unit), callback)
    }

    /*
    Finaliza o listener da API
    param:
        callback: function, função utilizada para receber os dados da API
    */
    closeGetSlideProgress = (callback) => {
        Avamec.closeGetGenericData(callback)
    }

    /*
    Dada uma unidade retorna o id do dado genérico onde está salvo o progresso de slides correspondentes
    param:
        unit: string, id da unidade
    return:
        id do dado genérico onde está salvo o progresso de slides correspondentes
    */
    getSlideProgressId = (unit) => {
        return GenericDataId.UNIT_PROGRESS.concat("_").concat(unit)
    }
}

export default (new Slide())

