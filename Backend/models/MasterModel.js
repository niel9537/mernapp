import { Sequelize } from "sequelize";
import db from "../configs/Database.js";

const {DataTypes} = Sequelize;

const Master = db.define('master',{
    nama:DataTypes.STRING,
    jenis:DataTypes.STRING,
    foto:DataTypes.STRING
},{
    freezeTableName: true
});

export default Master;

(async()=>{
    await db.sync();
})();