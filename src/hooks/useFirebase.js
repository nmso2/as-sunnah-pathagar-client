import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');


    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');


    const logInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handaleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handalePhoneChange = e => {
        setPhone(e.target.value);
    }
    const handaleAddressChange = e => {
        setAddress(e.target.value);
    }
    const handalePasswordChange = e => {
        setPassword(e.target.value);
    }

    const createNewUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmailPassword = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }




    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {

            }
            setIsLoading(false);
        });
        // eslint-disable-next-line
    }, [])


    useEffect(() => {
        fetch(`https://as-sunnah-pathagar.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            });
    }, [user?.email])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            setError('');
        }).catch((error) => {
            setError(error);
        }).finally(() => setIsLoading(false));
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {
            setError('');
        }).catch((error) => {
            setError(error);
        });
    }

    const saveUser = (email, displayName, phone, address, method) => {
        const user = { email, displayName, phone, address };
        fetch('https://as-sunnah-pathagar.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        error,
        logInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading,
        createNewUser,
        handleNameChange,
        handaleEmailChange,
        handalePhoneChange,
        handaleAddressChange,
        handalePasswordChange,
        loginWithEmailPassword,
        name,
        email,
        password,
        phone,
        address,
        setUserName,
        setError,
        saveUser
    }

}

export default useFirebase;