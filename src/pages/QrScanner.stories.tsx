import React from 'react'
import { QRScanner } from './QRScanner'

export default {
  title: 'QR Scanner',
  component: QRScanner,
  parameters: {
    layout: 'centered',
  },
}

export const Scanner = () => (<QRScanner/>)