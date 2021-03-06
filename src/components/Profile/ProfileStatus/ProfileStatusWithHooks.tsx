import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './ProfileStatus.module.css'

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}
const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status)
  }, [props.status])
  const onChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }
  const activedEditMode = () => {
    setEditMode(true)
  }
  const deactivedEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }
  return (
    <div >
      {!editMode &&
        <div>
          <span onDoubleClick={activedEditMode}>{props.status || '----'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input onChange={onChanged} type="text" autoFocus={true} onBlur={deactivedEditMode} value={status} />
        </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks;