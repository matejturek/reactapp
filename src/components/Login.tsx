import { useDispatch } from "react-redux";
import { login } from "../store/loginSlice";


const Login: React.FC = () => {
    const dispatch = useDispatch()

    const onFormSubmit = () => {
        dispatch(login())
    }   

    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
            </div>
            <div>
                <input type="submit" value="Log in" />
            </div>

            <button className="bg-black text-white"> Log in</button>
        </form>
    );
};

export default Login;
