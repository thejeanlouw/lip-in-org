import firebase, {auth, firestore, googleProvider} from './firebase.utils'




export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithEmailAndPassword = async ({email, password}) =>{
    return (await auth.signInWithEmailAndPassword(email, password))};
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`lipin-org-users/${userAuth.uid}`);
    const snapShot = await userRef.get();
  
    if(!snapShot.exists){
        const {photoURL, uid, emailVerified, email, displayName} = userAuth;
        try {
            await userRef.set({
                photoURL,
                uid,
                emailVerified,
                email,
                displayName,
                createdAt: new Date(),
                signedAgreements: false,
                onboardedComplete: false,
                subscription: 'free',
                ...additionalData
            });
        } catch (error) {
            console.log('ERROR CREATING USER', error.message);
        }
    }

    return userRef;

}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(element => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, element);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items} = doc.data();
        return {
            routeName: encodeURI(title),
            id: doc.id,
            title,
            items
        }
    })
    debugger;
    console.log(transformedCollection);

    return transformedCollection.reduce((acc, col) => {
        acc[col.title.toLowerCase()] = col;
        return acc;
    }, {})
}