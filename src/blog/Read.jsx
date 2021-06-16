import React from "react";
import { useParams } from "react-router-dom";
import Article from "./Article";

export default function Read() {
  let { name } = useParams();

  return(
    <div className='container'>
      <div style={{marginTop: '3em'}}>
        <Article name={name} />
      </div>
    </div>
  )
}