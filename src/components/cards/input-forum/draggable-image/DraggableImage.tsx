import React from "react"
import styled from "@emotion/styled"
import SVG from "../../../../assets/svg"
import theme from "../../../../style"
import { useDropzone } from "react-dropzone"
import { useDispatch } from "react-redux"
import { setImage } from "../../../../redux/cardSlice"
import * as yup from "yup"
const color = theme.cards.color
const font = theme.cards.font

const DraggableImage = () => {
  const [file, setFiles] = React.useState("")
  const [imageUrl, setImageUrl] = React.useState("")
  const [hasImage, setHasImage] = React.useState(false)
  const dispatch = useDispatch()
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    onDrop: acceptedFiles => {
      let file = URL.createObjectURL(acceptedFiles[0])
      handleSetImage(file)
    },
  })
  function handleSetImage(src: string) {
    setFiles(src)
    setHasImage(true)
    dispatch(setImage(src))
  }
  function handleDropImage() {
    setFiles("")
    setHasImage(false)
    dispatch(setImage(""))
  }
  function handleDropImageFromUrl() {
    yup
      .object({
        url: yup.string().url(),
      })
      .validate({ url: imageUrl })
      .then(e => handleSetImage(imageUrl))
  }
  return (
    <Holder>
      <Draggable>
        <div id="draggable-area" data-test-id="draggable-area" {...getRootProps()}>
          <input {...getInputProps()} />
          <div id="drag-image-icon">
            <SVG.DragImage />
          </div>
          <h2>
            Drag & Drop Image here, or <br /> click to select file
          </h2>
        </div>
        {hasImage && (
          <Preview>
            <div
              id="close-preview-image-icon"
              data-test-id="close-preview-image"
              onClick={handleDropImage}
            >
              <SVG.Close />
            </div>
            <img src={file} data-test-id="preview-image" />
          </Preview>
        )}
      </Draggable>
      <UrlInput>
        <input
          type="text"
          name="image-url-input"
          id="image-url-input"
          data-test-id="image-url-input"
          onBlur={e => setImageUrl(e.target.value)}
          placeholder="Image URL"
        />
        <button onClick={handleDropImageFromUrl}>Use URL</button>
      </UrlInput>
    </Holder>
  )
}

const Holder = styled.div`
  position: relative;
  font-size: 1vw;
  display: flex;
  flex-direction: column;
  margin: 0.4em 0em 0em 0em;
`
const Draggable = styled.div`
  position: relative;
  #draggable-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${color.lightGray};
    width: 100%;
    height: 22vh;
    border-radius: 0.7em;
    border: dashed 0.15em ${color.gray};
    box-sizing: border-box;
    cursor: pointer;

    #drag-image-icon {
      svg {
        /* display: block; */
        fill: ${color.gray};
        width: 4em;
        margin: 0.4em;
      }
    }
    h2 {
      font-size: 1.1em;
      ${font.bold};
      color: ${color.gray};
      line-height: 1.3;
      text-align: center;
      margin: 0.3em;
      padding: 0;
    }
    &:hover {
      border: dashed 0.15em ${color.black};
      #drag-image-icon {
        svg {
          fill: ${color.black};
        }
      }
      h2 {
        color: ${color.black};
      }
    }
  }
`
const Preview = styled.div`
  position: absolute;
  width: 104%;
  height: 104%;
  top: -0.6vh;
  left: -0.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 0.7em;
  background-color: ${color.offWhite};
  img {
    width: 100%;
    /* height: 100%; */
  }
  #close-preview-image-icon {
    /* z-index: 2; */
    cursor: pointer;
    position: absolute;
    right: 1vw;
    top: 1.4vw;
    svg {
      width: 1.5vw !important;
      fill: ${color.white};
      mix-blend-mode: difference;
      pointer-events: none;
      opacity: 0.5;
    }
    &:hover {
      svg {
        opacity: 1;
      }
    }
  }
`
const UrlInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.1em 0em 0em 0em;

  input {
    font-size: 1em;
    outline: none;
    border: 0.11em solid ${color.gray};
    background-color: transparent;
    border-radius: 0.3em;
    padding: 0.2em 0.7em;
    width: 54%;
    ${font.regular};
    line-height: 0.5;
    /* margin-right: 1em; */
    &:focus {
      border: 0.11em solid ${color.black};
    }
    &:hover {
      background-color: ${color.lightGray};
    }
  }
  button {
    background-color: ${color.black};
    border: none;
    border-radius: 0.3em;
    font-size: 1vw;
    color: ${color.white};
    padding: 0.5em 0.8em;
    cursor: pointer;
    &:hover {
      background-color: ${color.darkGray};
    }
  }
`

export default DraggableImage
