import express from "express";
import {
    getMasterById,
    getMasters,
    saveMaster,
    updateMaster,
    deleteMaster
} from "../controllers/MasterController.js";
const router = express.Router();

router.get('/masters',getMasters);
router.get('/masters/:id',getMasterById);
router.post('/masters',saveMaster);
router.patch('/masters/:id',updateMaster);
router.delete('/masters/:id',deleteMaster);
export default router;