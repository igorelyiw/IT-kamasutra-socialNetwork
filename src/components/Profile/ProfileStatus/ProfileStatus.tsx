import React, { ChangeEvent } from 'react';
import s from './ProfileStatus.module.css';

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}
class ProfileStatus extends React.Component<PropsType> {
  state = {
    editMode: false,
    status: this.props.status
  }

  activatedEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  dectivatedEditMode() {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState(
      { status: e.currentTarget.value }
    )
  }
  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }
  render() {
    return (
      <div >
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activatedEditMode}> {this.props.status || '----'} </span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.dectivatedEditMode.bind(this)} value={this.state.status} type="text" />
          </div>
        }
      </div>
    )
  }
}
export default ProfileStatus;