import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        siteUrl: 'https://uppercase.group/',
        phoneSite: '+971 52 184 1181',
        phoneSiteFormat: '+971521841181',
        step: 0,
        questions: {
            quest_1: 'Нужна помощь для определения типа компании',
            quest_2: 'Требуется помощь в определении',
            quest_2_r: 1,
            quest_3: 'ОАЭ', 
            quest_3_r: 1,
            quest_4: [],
            quest_4_r: 1,
            quest_5: 'Прицениваюсь',
            quest_6_1: '',
            quest_6_r: 10,
            quest_6_3: '',
            quest_7_1: 'office',
            quest_7_1r: 50,
            quest_7_2: [],
            quest_7_3: 'price',
            quest_7_3r: 10000,
            connection: []
        },
        isMobile: false,
        isCallBack: false,
        utm: {
            utm_source: false,
            utm_campaign: false,
            utm_medium: false,
            utm_content: false,
            utm_term: false
        }
    },
    mutations: {
        callBack(s){
            s.isCallBack = !s.isCallBack
        },
        handleResize(s) {
            if(window.innerWidth >= 768){
                s.isMobile = true
            }else{
                s.isMobile = false
            }
        },
        SET_UTM: (state,payload) => {
            state.utm.utm_source = payload.utm_source,
            state.utm.utm_content = payload.utm_source,
            state.utm.utm_campaign = payload.utm_campaign,
            state.utm.utm_medium = payload.utm_medium,
            state.utm.utm_term = payload.utm_term
        }
    },
    actions: {
        setUtm: (context,utm) => {
            context.commit('SET_UTM',utm);
        },
        callBack({commit}) {
            commit('callBack')
        },
        skip({commit}, val){
            commit('skip', val)
        },
        handleResize({commit}) {
            commit('handleResize')
        }
    },
    getters: {
        utm : state=>state.utm,
        siteUrl: s => s.siteUrl,
        phoneSite: s => s.phone_site,
        phoneSiteFormat: s => s.phone_site_format,
        step: s => s.step,
        questions: s => s.questions,
        phoneCalback: s => s.phoneCalback,
        isMobile: s=> s.isMobile,
        isCallBack: s=> s.isCallBack
    }
})