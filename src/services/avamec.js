import AvamecEvent from '../constants/avamec-event'
import AvamecError from '../constants/avamec-error'

class AvaMecApiServices {
    constructor() {
        this.api = new window.BridgeRestApi()
    }

    getUnitConclusionData = (unit, callback) => {
        if (unit !== undefined) {
            window.addEventListener(AvamecEvent.GET_UNIT_CONCLUSION_DATA, callback, false)

            try {
                this.api.obterDadosConclusaoUnidade(unit)
            } catch {
                throw Error(AvamecError.GET_UNIT_CONCLUSION_DATA)
            }
        }
    }

    closeGetUnitConclusionDataListener = callback => {
        window.removeEventListener(AvamecEvent.GET_UNIT_CONCLUSION_DATA, callback, false)
    }

    getCourseData = callback => {
        window.addEventListener(AvamecEvent.COURSE_DATA, callback, false)

        try {
            this.api.obterDadosCurso()
        } catch {
            throw Error(AvamecError.COURSE_DATA)
        }
    }

    closeGetCourseDataListener = callback => {
        window.removeEventListener(AvamecEvent.COURSE_DATA, callback, false)
    }

    changeUnit = unit => {
        if (unit !== undefined) {
            try {
                this.api.obterUnidade(unit)
            } catch {
                throw Error(AvamecError.NEXT_UNIT)
            }
        }
    }

    getIfNextUnitExist = (unit, callback) => {
        if (unit !== undefined) {
            window.addEventListener(AvamecEvent.GET_IF_NEXT_UNIT_EXIST, callback, false)

            try {
                this.api.obterSeExisteProximaUnidade(unit)
            } catch {
                throw Error(AvamecError.GET_IF_NEXT_UNIT_EXIST)
            }
        }
    }

    closeGetIfNextUnitExistListener = callback => {
        window.removeEventListener(AvamecEvent.GET_IF_NEXT_UNIT_EXIST, callback, false)
    }

    getIfPreviousUnitExist = (unit, callback) => {
        if (unit !== undefined) {
            window.addEventListener(AvamecEvent.GET_IF_PREVIOUS_UNIT_EXIST, callback, false)

            try {
                this.api.obterSeExisteUnidadeAnterior(unit)
            } catch {
                throw Error(AvamecError.GET_IF_PREVIOUS_UNIT_EXIST)
            }
        }
    }

    closeGetIfPreviousUnitExistListener = callback => {
        window.removeEventListener(AvamecEvent.GET_IF_PREVIOUS_UNIT_EXIST, callback, false)
    }

    getPreviousUnit = unit => {
        if (unit !== undefined) {
            try {
                this.api.obterUnidadeAnterior(unit)
            } catch {
                throw Error(AvamecError.GET_PREVIOUS_UNIT)
            }
        }
    }

    getNextUnit = unit => {
        if (unit !== undefined) {
            try {
                this.api.obterProximaUnidade(unit)
            } catch {
                throw Error(AvamecError.GET_NEXT_UNIT)
            }
        }
    }

    saveUnitProgress = (unit, percentage) => {
        if (unit !== undefined) {
            try {
                this.api.registrarPorcentagemConclusaoUnidade(unit, String(percentage))
            } catch {
                throw Error(AvamecError.SAVE_UNIT_PROGRESS)
            }
        }
    }

    closeGetUnitProgressListener = callback => {
        window.removeEventListener(AvamecEvent.UNIT_PROGRESS, callback, false)
    }



    getGenericData = (id, callback) => {
        if (id !== undefined) {
            window.addEventListener(AvamecEvent.GET_GENERIC_DATA, callback, false)

            try {
                this.api.obterDadosGenericos(id)
            } catch {}
        }
    }

    closeGetGenericData = callback => {
        window.removeEventListener(AvamecEvent.GET_GENERIC_DATA, callback, false)
    }

    saveGenericData = (id, data) => {
        if (id !== undefined) {
            try {
                this.api.registrarDadosGenericos(id, JSON.stringify(data))
            } catch {
                throw Error(AvamecError.SAVE_GENERIC_DATA)
            }
        }
    }

    getActivity = (id, callback) => {
        if (id !== undefined) {
            window.addEventListener(AvamecEvent.GET_ACTIVITY, callback, false)

            try {
                this.api.obterRespostaAtividade(id)
            } catch { }
        }
    }

    closeGetActivity = callback => {
        window.removeEventListener(AvamecEvent.GET_ACTIVITY, callback, false)
    }

    saveActivity = (activity, callback) => {
        if (activity !== undefined) {
            window.addEventListener(AvamecEvent.REGISTER_ACTIVITY, callback, false)

            try {
                this.api.registrarRespostaAtividade(activity)
            } catch {
                throw Error(AvamecError.SAVE_ACTIVITY)
            }
        }
    }

    closeSaveActivity = callback => {
        window.removeEventListener(AvamecEvent.REGISTER_ACTIVITY, callback, false)
    }

    saveLastPage = (unit, slide) => {
        this.api.registrarUltimaPaginaAcessada(unit, "index.html?unit=".concat(unit).concat("&slide=").concat(slide))
    }
}

export default (new AvaMecApiServices())

