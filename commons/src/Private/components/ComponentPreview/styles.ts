import styled from 'styled-components'
import { Descriptions } from 'antd'

export const ComponentPreviewArea = styled.div`
  background-color: aliceblue;
  padding: 2rem;
  display: grid;
  place-items: center;
`

export const StyledDescriptions = styled(Descriptions)`
  && {
    & table {
      width: auto;
    }
  }
`

export const ComponentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
