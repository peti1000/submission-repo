const ErrorNotification = ({ errorMessage }) => {

    const errorStyle = {
        color: 'blue',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if (errorMessage === null) {
        return null
    }
    return (
        <div style={errorStyle}>
            {errorMessage}
        </div>
    )
}
export default ErrorNotification