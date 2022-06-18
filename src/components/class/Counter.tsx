import {Component} from 'react'

type counterProps={
    message:string
}
type counterState={
    count:number
}
// export class Counter extends Component<counterProps, counterState> {  //when used or provide only prop types
// export class Counter extends Component<{}, counterState> {   // //when used or provide only state types
export class Counter extends Component<counterProps, counterState> {  // //when used or provide  prop and state types
    state={
        count:0,
    }
    handleClick=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render(){
        return (
            <>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message}{this.state.count}
            </>
        )
    }
}

