import { Motia } from '../motia'

export type Runtime = {
  steps: string
  streams: string
  runtime: any
}

export type WorkbenchPlugin = {
  packageName: string
  componentName?: string
  label?: string
  labelIcon?: string
  position?: 'bottom' | 'top'
  props?: any
}

export type MotiaPlugin = {
  workbench: WorkbenchPlugin[]
}

export type MotiaPluginBuilder = (motia: Motia) => MotiaPlugin

export type Config = {
  runtimes?: Runtime[]
  plugins?: MotiaPluginBuilder[]
}
