import styled from 'styled-components'
import TextInputField from '../../../../components/fields/text-input-field/text-input-field.component'

export const NotesContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  padding: 12px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const NotesField = styled(TextInputField)`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  && {
    padding: 12px;
  }
`

export const AddLine = styled.div`
  border: 1px dashed #3d3d3d;
  /* margin-top: 12px; */
  /* margin-left: 12px; */
  /* margin-right: 12px; */
  display: flex;
  border-radius: 6px;
  padding: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    border-color: #000;
  }
`
