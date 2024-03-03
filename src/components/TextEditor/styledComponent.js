import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #25262c;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1b1c22;
  width: 80%;
  height: 90%;
`
export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 50%;
`

export const Head = styled.h1`
  font-family: 'Roboto';
  color: white;
  font-size: 28px;
  font-weight: bold;
`
export const Image = styled.img`
  width: 65%;
`
export const EditContent = styled.div`
  background-color: #25262c;
  width: 45%;
  height: 90%;
  justify-content: center;
  align-self: center;
`
export const ButtonContainer = styled.ul`
  display: flex;
  flex-direction: row;
`
export const ButtonBold = styled.button`
  color: white;
  background-color: #25262c;
  color: ${props => (props.isActiveBold ? '#faff00' : '#f1f5f9')};
  margin-left: 10px;
  margin-top: 10px;
  border: none;
  margin: 0px;
  cursor: pointer;
`
export const ButtonItalic = styled.button`
  color: white;
  background-color: #25262c;
  color: ${props => (props.isActiveItalic ? '#faff00' : '#f1f5f9')};
  margin-left: 10px;
  margin-top: 10px;
  border: none;
  margin: 0px;
  cursor: pointer;
`
export const ButtonUnderline = styled.button`
  color: white;
  background-color: #25262c;
  color: ${props => (props.isActiveUnderline ? '#faff00' : '#f1f5f9')};
  margin-left: 10px;
  margin-top: 10px;
  border: none;
  margin: 0px;
  cursor: pointer;
`
export const ButtonItem = styled.li`
  list-style-type: none;
`
export const Hr = styled.hr`
  color: #334155;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  margin: 0px;
  outline: none;
  color: white;
  font-family: 'Roboto';
  font-style: ${props => (props.isActiveItalic ? 'italic' : 'normal')};
  font-weight: ${props => (props.isActiveBold ? 'bold' : 'normal')};
  text-decoration: ${props =>
    props.isActiveUnderline ? 'underline' : 'normal'};
`
