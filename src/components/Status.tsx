type StatusProps={
    status: 'loading' | 'success' | 'error'  //it accept only this three type string otherwise typescript generate error
}

const Status = (props:StatusProps) => {
    let message
    if (props.status === 'loading')
    {
        message='Loading...'
    }
    else if(props.status === 'success')
    {
        message='Data fetched successfully'
    }
    else if(props.status === 'error')
    {
        message='Error'
    }
  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}

export default Status