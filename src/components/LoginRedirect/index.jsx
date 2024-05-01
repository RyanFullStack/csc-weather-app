import { useEffect } from "react"

function LoginRedirect() {
    useEffect(() => {
        window.location = 'https://csc-login.onrender.com/'
    }, [])

    return (
        <div>
            Redirecting...
        </div>
    )
}

export default LoginRedirect
