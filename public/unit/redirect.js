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

    if(info.detail.status != 200 || state.unit != info.detail.data[0].valor){
        api.registrarDadosGenericos('unit', state.unit)
    } 

    getSavedSlide()
}

function getSavedUnit() {
    window.addEventListener('evObtemDadosGenericos', getSavedUnitCallback, false)
    try{
        api.obterDadosGenericos('unit')
    } catch {
        throw Error('Erro ao buscar unidade salva do AVAMEC')
    }
}

function getSavedSlideCallback(info) {
    window.removeEventListener('evObtemDadosGenericos', this.getSavedSlideCallback, false)
    if(info.detail.status === 200){
        state.slide = info.detail.data[0].valor
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
