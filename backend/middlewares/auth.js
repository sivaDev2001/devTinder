const adminauthentication = (req,res,next)=>{
    const token = "hello"
    const auth = token==="hello"
    console.log('admin authentication')
    if(!auth)
    {
        res.status(401).send('unautherized')
    }
    else{
        next()
    }
}

const userauthentication = (req,res,next)=>{
    const token="hello"
    const auth = token==="hello"
    if(!auth)
    {
        res.status(401).send('unauthorized')
    }
    next()
}

module.exports={
    adminauthentication,
    userauthentication
}