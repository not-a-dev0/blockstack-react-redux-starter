import React from 'react'
import { connect } from 'react-redux'
import { editorFileConentChange, editorFilePathChange } from '../../actions/editorActions'
import { getBlockstackFile, putBlockstackFile } from '../../actions/fileActions'

const mapStateToProps = ({editor}) => {
  return {
    editor
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleFileContentChange: (e) => {
      const { value } = e.target
      console.log(value)
      dispatch(editorFileConentChange(value))
    },
    handleFilePathChange: (e) => {
      const { value } = e.target
      dispatch(editorFilePathChange(value))
    },
    handleSaveButton: () => {
      dispatch(putBlockstackFile({ context: 'editor' }))
    },
    handleGetFileButton: () => {
      dispatch(getBlockstackFile({ context: 'editor' }))
    }
  }
}

const Editor = ({editor, handleFileContentChange, handleFilePathChange, handleSaveButton, handleGetFileButton}) => {
  return (
    <section>
      <div className='field'>
        <label className='label'>File Path</label>
        <div className='control'>
          <input type='text' className='input' onChange={handleFilePathChange} value={editor.path} />
        </div>
      </div>
      <div className='field'>
        <label htmlFor='' className='label'>File Content</label>
        <div className='control'>
          <textarea className='textarea' onChange={handleFileContentChange} value={editor.content} />
        </div>
      </div>
      <div className='field is-grouped'>
        <div className='control'>
          <button className='button' onClick={handleSaveButton}>Save</button>
        </div>
        <div className='control'>
          <button className='button' onClick={handleGetFileButton}>Get File</button>
        </div>
      </div>
      <p>Save will save the file contents to the file path provided</p>
      <p>Get file will attempt to get the file contents of the file name in the 'File Path' input</p>
    </section>
  )
}

const EditorContainer = connect(mapStateToProps, mapDispatchToProps)(Editor)

export default EditorContainer
