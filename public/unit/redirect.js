let state = {
    unit: document.title,
    slide: 1
}

const api = new window.BridgeRestApi()

function startApp() {
    
    const slide = (state.slide).toString().split('"').join('')
    window.location = "../index.html?unit=".concat(state.unit).concat("&slide=").concat(slide)
    try{
        api.registrarUltimaPaginaAcessada(state.unit, "index.html?unit=".concat(state.unit).concat("&slide=").concat(slide))
    } catch(e) {
        console.error("Erro ao atualizar página acessada na API.")
    }

}

function getSavedUnitCallback(info) {
    window.removeEventListener('evObtemDadosGenericos', getSavedUnitCallback, false)

    console.log("----------------------")
    console.log("State Unit:")
    console.log(state.unit)
    console.log("Valor API")
    console.log(info.detail.data[0].valor)

    if (info.detail.status !== 200) {
        const data = info.detail.data
        const unitData = data.filter(unit => unit.chave === 'unit')
        console.log("unit data")
        console.log(unitData)
        if (unitData.length === 1 && state.unit !== unitData[0].valor) {
            api.registrarDadosGenericos('unit', state.unit)
        }
    }

    console.log("----------------------")

    getSavedSlide()
}

function getSavedUnit() {
    window.addEventListener('evObtemDadosGenericos', getSavedUnitCallback, false)
    try {
        api.obterDadosGenericos('unit')
    } catch {
        throw Error('Erro ao buscar unidade salva do AVAMEC')
    }
}

function getSavedSlideCallback(info) {
    window.removeEventListener('evObtemDadosGenericos', this.getSavedSlideCallback, false)
    
    let slideData = null

    if(info.detail.status === 200){
        const data = info.detail.data
        slideData = data.filter(unit => unit.chave === getSlideId())
    }
    
    if (slideData && slideData.length === 1) {
        state.slide = slideData[0].valor
    } else {
        api.registrarDadosGenericos(getSlideId(), state.slide)
    }

    startApp()
}

function getSavedSlide() {
    window.addEventListener('evObtemDadosGenericos', getSavedSlideCallback, false)
    try{
        api.obterDadosGenericos(getSlideId())
    } catch {
        throw Error('Erro ao buscar slide salvo do AVAMEC')
    }
}

function getSlideId() {
    return 'slide'.concat('_').concat(state.unit)
}

getSavedUnit()
