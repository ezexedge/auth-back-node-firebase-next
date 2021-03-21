import admin from '../firebase'

export const showMessage = (req,res) => {
    res.send('holaaa')
}

export const currentUser = async (req,res)=> {

    try{

       const firebaseUser = await admin.auth().verifyIdToken(req.headers.token)
        console.log('respuesta de auht',firebaseUser)
        res.json(firebaseUser)

    }catch(err){
        res.status(401).json({error : err.message})
    }
    
}

export const privateRoute =  async (req,res) => {
    console.log('req headers',req.headers.token)
    res.json({
        ok: true
    })
}