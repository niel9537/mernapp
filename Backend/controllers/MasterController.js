import Master from "../models/MasterModel.js";
import path from "path";
export const getMasters = async(req,res)=>{
    try {
        const response = await Master.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMasterById = async(req,res)=>{
    try {
        const response = await Master.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveMaster = (req,res)=>{
    if(req.foto === null)return res.status(400).json({msg:"No Image Uploaded"});
 
    const nama = req.body.nama;
    const jenis = req.body.jenis;
    const foto = req.files.foto;
    const fotoSize = foto.data.length;
    const ext = path.extname(foto.name);
    const fotoNama = foto.md5 + ext;
    const finalFoto = `${req.protocol};//${req.get("host")}/images/${fotoNama}`;
    const allowedType = ['.png','.jpg','.jpeg'];
    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:"Invalid Images"});
    if(fotoSize>5000000) return res.status(422).json({msg:"Image Must Be Less Than 5 MB"});

    foto.mv(`./public/images/${fotoNama}`, async(err)=>{
        if(err) return res.status(500).json({msg:err.message});
        try {
            await Master.create({nama:nama,jenis:jenis,foto:finalFoto});
            res.status(201).json({msg:"Master Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })
    
}
export const updateMaster = (req,res)=>{
    
}

export const deleteMaster = (req,res)=>{
    
}

