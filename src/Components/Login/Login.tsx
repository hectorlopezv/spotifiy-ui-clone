import './Login.css';
import {loginURL} from '../../lib/spotify';

export interface LogoProps {
    
}
 
const Login: React.FC<LogoProps> = () => {
    return (  

        <div className="login">
            <h1>Login Component</h1>
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            {/*sportifu logo */}
            {/*login with spotify button*/}
            <a href={loginURL}>Login with spotify</a>
        </div>
    );
}
 
export default Login;