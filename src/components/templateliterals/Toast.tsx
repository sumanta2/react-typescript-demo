/*
* Position prop can be one of
* "left-center" | "left-top" | "left-bottom" "center" | "center-top" |
* "center-bottom" | "right-center" | "right-top" | "right-bottom"

*/ //ToastProps type accept only these type of value

type HorizontalPosition = 'left'|'center'|'right'
type VerticalPosition= 'top' | 'center' | 'bottom'
type ToastProps= {
    position:Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'>  //Exclude means it does not accept this type
    | "center"
}

export const Toast = ({position}:ToastProps) => {
  return (
    <div>
        Toast Notification Position - {position}
    </div>
  )
}
