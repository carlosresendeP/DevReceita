import generateResponseReceita from '../services/openai.service.js'

export const askRevenue = async (req, res)=>{

    try{
        const {ask} = req.body 
    
        if(!ask){
            return res.status(400).json({
                erro: 'Pergunta não informada'
            })
        }


        const response = await generateResponseReceita(ask)

        return res.status(200).json({response})

    }catch(err){
        console.error('Erro ao processar a solicitação, tente novamente mais tarde.', err)
        return res.status(500).json({
            erro: 'Erro ao processar a solicitação, tente novamente mais tarde.'
        })
    }

}