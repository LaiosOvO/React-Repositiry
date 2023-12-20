
// 一些属性的 key 常量化了
declare const MENU_PATH = "path"
declare const MENU_SHOW = "show"
declare const MENU_KEEPALIVE = "keep_alive"
declare const MENU_KEY = "m_id"
declare const MENU_ICON = "icon"
declare const MENU_TITLE = "title"
declare const MENU_CHILDREN = "children"
declare const MENU_PARENTKEY = "parent_m_id"
declare const MENU_ALLPATH = "allPath"
declare const MENU_PARENTPATH = "parentPath"
declare const MENU_LAYOUT = "layout"
declare const MENU_ORDER = "order"
declare let __IS_THEME__: boolean;

// 关于主题的变量
declare const CUSTOMVARLESSDATA: {
    [key: string]: string
}

interface ImportMetaEnv {
    readonly REACT_APP_MODE: 'development' | 'production'
    readonly REACT_APP_ROUTERBASE: string
    readonly REACT_APP_API_BASEURL: string
    readonly REACT_APP_MOCK: string
    readonly REACT_APP_COLOR: string
    readonly REACT_APP_ROUTER_ISHASH: "1" | any
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}