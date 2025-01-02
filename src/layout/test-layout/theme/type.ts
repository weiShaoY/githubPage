import type { ThemeMode } from '#/enum'

import type { VNode } from 'vue'

// 主题令牌
export const themeTokens = {
  colors: {
    palette: {
      primary: {
        lighter: null,
        light: null,
        default: null,
        dark: null,
        darker: null,
      },
      secondary: {
        lighter: null,
        light: null,
        default: null,
        dark: null,
        darker: null,
      },
      success: {
        lighter: null,
        light: null,
        default: null,
        dark: null,
        darker: null,
      },
      warning: {
        lighter: null,
        light: null,
        default: null,
        dark: null,
        darker: null,
      },
      error: {
        lighter: null,
        light: null,
        default: null,
        dark: null,
        darker: null,
      },
      info: {
        lighter: null,
        light: null,
        default: null,
        dark: null,
        darker: null,
      },
      gray: {
        100: null,
        200: null,
        300: null,
        400: null,
        500: null,
        600: null,
        700: null,
        800: null,
        900: null,
      },
    },
    common: {
      white: null,
      black: null,
      border: null,
    },
    text: {
      primary: null,
      secondary: null,
      disabled: null,
    },
    background: {
      default: null,
      paper: null,
      neutral: null,
    },
  },
  typography: {
    fontFamily: {
      primary: null,
      secondary: null,
    },
    fontSize: {
      xs: null,
      sm: null,
      default: null,
      lg: null,
      xl: null,
    },
    fontWeight: {
      light: null,
      normal: null,
      medium: null,
      semibold: null,
      bold: null,
    },
    lineHeight: {
      none: null,
      tight: null,
      normal: null,
      relaxed: null,
    },
  },
  spacing: {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    10: null,
    12: null,
    16: null,
    20: null,
    24: null,
    32: null,
  },
  borderRadius: {
    none: null,
    sm: null,
    default: null,
    md: null,
    lg: null,
    xl: null,
    full: null,
  },
  shadows: {
    'none': null,
    'sm': null,
    'default': null,
    'md': null,
    'lg': null,
    'xl': null,
    '2xl': null,
    '3xl': null,
    'inner': null,
    'dialog': null,
    'card': null,
    'dropdown': null,
    'primary': null,
    'secondary': null,
    'info': null,
    'success': null,
    'warning': null,
    'error': null,
  },
  screens: {
    'xs': null,
    'sm': null,
    'md': null,
    'lg': null,
    'xl': null,
    '2xl': null,
  },
  opacity: {
    0: null,
    5: null,
    10: null,
    20: null,
    25: null,
    30: null,
    35: null,
    40: null,
    45: null,
    50: null,
    55: null,
    60: null,
    65: null,
    70: null,
    75: null,
    80: null,
    85: null,
    90: null,
    95: null,
    100: null,
  },
  zIndex: {
    drawer: null,
    modal: null,
    snackbar: null,
    tooltip: null,
  },
}

// 定义 UI 库适配器的属性接口
export type UILibraryAdapterProps = {
  mode: ThemeMode
  children: VNode
}

// 定义 UI 库适配器函数组件
export type UILibraryAdapter = (props: UILibraryAdapterProps) => VNode

// 判断是否为叶子对象
export type IsLeafObject<T> = T extends object ? (T[keyof T] extends null | string ? true : false) : false

// 将 Channel 添加到叶子对象
export type AddChannelToLeaf<T> = T extends object
  ? IsLeafObject<T> extends true
    ? T & { [K in keyof T as `${string & K}Channel`]: string } // 仅向叶子添加 Channel
    : { [K in keyof T]: AddChannelToLeaf<T[K]> } // 递归处理其他层级
  : T
