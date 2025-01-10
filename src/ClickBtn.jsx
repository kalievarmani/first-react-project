export const ClickBtn = (props) => {
    const clickHandler = () => {
        props.setCount(prevState =>++prevState)
    }
    return(
        <div className="click_btn" onClick={clickHandler}>Click Me!!!</div>
    )
}