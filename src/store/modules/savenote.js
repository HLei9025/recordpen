
export default {
    namespaced: true,
    state: {
        noteTitleInfo: '',
        noteContentInfo: '',
        saveNoteMessage: ''
    },
    mutations: {
        saveNoteTitle(state, params){
            state.noteTitleInfo = params;
            console.log(params)
        },
        saveNoteContent(state, params){
            state.noteContentInfo = params
        },
        saveNoteMessageAction(state, params){
            state.saveNoteMessage = params;
        }
    },
    actions: {

    }
}