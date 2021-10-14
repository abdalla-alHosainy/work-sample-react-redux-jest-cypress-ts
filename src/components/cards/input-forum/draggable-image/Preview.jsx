import React, { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import styled from "@emotion/styled"
import SVG from "../../../../assets/svg"
import theme from "../../../../style"
const color = theme.cards.color
const font = theme.cards.font

function Previews(props) {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const thumbs = files.map(file => (
    <div key={file.name}>
      <div>
        <Preview src={file.preview} />
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <Holder>
      <Draggable {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <div>
          <SVG.DragImage />
        </div>
        <h2>Drag & Drop Image here, or click to select files</h2>
      </Draggable>
      <aside>{thumbs}</aside>
    </Holder>
  )
}
const Holder = styled.div`
  font-size: 1vw;
  display: flex;
  flex-direction: column;
  margin: 1em 0em;
`
const Draggable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color.lightGray};
  width: 100%;
  height: 19vh;
  border-radius: 0.7em;
  border: dashed 0.15em ${color.gray};
  cursor: pointer;
  div {
    svg {
      /* display: block; */
      fill: ${color.gray};
      width: 5em;
      margin: 0;
    }
  }
  h2 {
    font-size: 1.2em;
    ${font.bold};
    color: ${color.gray};
    line-height: 1.3;
    text-align: center;
    margin: 0.3em;
    padding: 0;
  }
  &:hover {
    border: dashed 0.15em ${color.black};
    svg {
      fill: ${color.black};
    }
    h2 {
      color: ${color.black};
    }
  }
`
const Preview = styled.img`
  position: absolute;
  width: 100%;
  top: 1vh;
`
export default Previews
