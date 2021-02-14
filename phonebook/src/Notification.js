const Notification = ({ type, message }) => {
    if (type === null) {
        return null
    }
    if (type === "error")
        return (
            <div className="error">
                {message}
            </div>
        )
    if (type === "success")
        return (
            <div className="success">
                {message}
            </div>
        )
}
export default Notification