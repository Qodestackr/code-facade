import React from 'react'
import AceEditor from 'react-ace';


function Ace() {
  return (
    <div className="grid grid-cols-3">
        <AceEditor />
        <AceEditor />
        <AceEditor />
    </div>
  )
}

export default Ace


// Create file system : Virtual File system