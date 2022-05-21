import React from "react"

export type IComponentContract = {
  component: React.FC,
  componentName: string,
  propTypes: Array<{
    name: string,
    types: Array<string>
    defaultValue: string
  }>, 
}