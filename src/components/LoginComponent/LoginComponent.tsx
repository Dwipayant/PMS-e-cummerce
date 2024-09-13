import { Button, Form } from "react-bootstrap"
import { IUser } from "../../models/IUser"
import NavBarComponent from "../NavbarComponent/NavbaraComponent"
import React, { useState } from "react"
import HeaderComponent from "../HeaderComponent/HeaderComponent"
interface ILoginState {
    user: IUser
}
const LoginComponent: React.FC = () => {
    const [state, setState] = useState<ILoginState>({
        user: {
            isLogIn: false
        }
    })
    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
        setState({ user: { isLogIn: true } })
    }
    const handleLogout = (): void => {
        setState({ user: { isLogIn: false } })
    }
    return (
        <>
            {
                state?.user?.isLogIn ? (<>
                    <NavBarComponent />
                    
                </>) : (<Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(event) => handleLogin(event)}>
                        Submit
                    </Button>
                </Form>)
            }

        </>
    )
}

export default LoginComponent