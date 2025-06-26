import itemModal from "../modals/itemModal.js";

export const createItem = async (req,res,next) => {
    try {
        const {name,description,category,price,rating,hearts} = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

        const total = Number(price) * 1;
        
        const newItem = new itemModal({
            name,
            description,
            category,
            price,
            rating,
            hearts,
            imageUrl,
            total
        })

        const saved = await newItem.save();
        res.status(201).json(saved)

        
    } 
    catch (err) {
        if(err.code === 11000){
            res.status(400).json({message : "item name already exists"})
        }
    }
}

//get fucntion to get all items
export const getItem = async (_req,res,next) => {
    try {
        const items = await itemModal.find().sort({createdAt : -1})
        const host = `https://${_req.get('host')}`;


        const withFullUrl = items.map(i => ({
            ...i.toObject(),
            imageUrl: i.imageUrl ? host + i.imageUrl : ''
        }))
        res.json(withFullUrl)
    }
    catch (err) {
        next(err);
    }
}

//delete function to delete item
export const deleteItem = async (req,res,next) => {
    try {
        const removed = await itemModal.findByIdAndDelete(req.params.id);
        if(!removed){
            return res.status(404).json({message : "item not found"})
        }
        res.status(204).end()
    } 
    catch (error) {
        next(err);
    }
}