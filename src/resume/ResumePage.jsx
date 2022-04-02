import React from "react";
import Resume from './Resume'
import { PDFViewer } from '@react-pdf/renderer';

export default function ResumePage(props) {
  
  return (
    <div style={{height:'100vh'}}>
      <PDFViewer
        width='100%'
        height='100%'
      >
        <Resume />
      </PDFViewer>
    </div>
  )
}
