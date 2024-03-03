import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  ResponsiveContainer,
  EditorContainer,
  EditContent,
  Head,
  Image,
  ButtonBold,
  ButtonItalic,
  ButtonUnderline,
  ButtonContainer,
  Hr,
  TextArea,
  ButtonItem,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    textAreaInput: '',
    isActiveBold: false,
    isActiveItalic: false,
    isActiveUnderline: false,
  }

  onChangeTextArea = event => {
    this.setState({textAreaInput: event.target.value})
  }

  onClickBold = () => {
    this.setState(prevState => ({isActiveBold: !prevState.isActiveBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isActiveItalic: !prevState.isActiveItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({
      isActiveUnderline: !prevState.isActiveUnderline,
    }))
  }

  render() {
    const {
      textAreaInput,
      isActiveBold,
      isActiveItalic,
      isActiveUnderline,
    } = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <EditorContainer>
            <Head>Text Editor</Head>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </EditorContainer>
          <EditContent>
            <ButtonContainer>
              <ButtonItem>
                <ButtonBold
                  data-testid="bold"
                  onClick={this.onClickBold}
                  isActiveBold={isActiveBold}
                >
                  <VscBold size={25} />
                </ButtonBold>
              </ButtonItem>
              <ButtonItem>
                <ButtonItalic
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  isActiveItalic={isActiveItalic}
                >
                  <GoItalic size={25} />
                </ButtonItalic>
              </ButtonItem>
              <ButtonItem>
                <ButtonUnderline
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  isActiveUnderline={isActiveUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </ButtonUnderline>
              </ButtonItem>
            </ButtonContainer>
            <Hr />
            <TextArea
              type="textarea"
              col="50"
              row="4"
              onChange={this.onChangeTextArea}
              value={textAreaInput}
              isActiveBold={isActiveBold}
              isActiveUnderline={isActiveUnderline}
              isActiveItalic={isActiveItalic}
            />
          </EditContent>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default TextEditor
