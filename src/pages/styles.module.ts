import styled from 'styled-components'
import { AppBar, Button, Box, TextField, Typography } from '@material-ui/core'
import { GetApp } from '@material-ui/icons'

interface Props {
  width?: string
  margin?: string
  colorText?: string
}

export const StyledAppBar = styled(AppBar)`
  &.MuiAppBar-root {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    width: ${(props: Props) => props.width};
    height: 48px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background: #ff5a5f;
    border-radius: 4px;
    margin: 10px;
    text-transform: none;
  }
`

export const Container = styled(Box)`
  &.MuiBox-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`
export const Content = styled(Box)`
  &.MuiBox-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
  }
`
export const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    width: 300px;
    height: 48px;
    margin: 40px 0px 40px 0px;
  }
`
export const StyledTypography = styled(Typography)`
  &.MuiTypography-root {
    color: ${(props: Props) => props.colorText || "#FF6347"};
    margin: ${(props: Props) => props.margin};
  }
`
export const StyledIconDownload = styled(GetApp)`
  &.MuiSvgIcon-root {

  }
`