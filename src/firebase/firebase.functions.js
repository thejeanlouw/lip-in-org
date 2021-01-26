import firebase, {auth, firestore} from './firebase.utils'


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`lipin-org-users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const { displayName, email, phoneNumber} = userAuth;
        const createdAt= new Date();
        const signedAgreements = false;
        const onboardedComplete = false;

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                signedAgreements,
                onboardedComplete,
                ...additionalData
            });
        } catch (error) {
            console.log('ERROR CREATING USER', error.message);
        }
    }

    return userRef;

}