import { DataTypes, Model} from 'sequelize';
import { sequelize } from '../dbConnect.js';
export const sequelizeInstance = sequelize
// import Debts from './debts'


class Users extends Model { }
//Sequelize will create this table if it doesn't exist on startup
Users.init({
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true
    },
    name: {
        type: DataTypes.STRING, allowNull: false, required: true,
    },
    email: {
        type: DataTypes.STRING, allowNull: false, required: true, unique: true
    },
    password: {
        type: DataTypes.STRING, allowNull: false, required: true,
    },
},
    {
        sequelize: sequelizeInstance, modelName: 'Users', timestamps: true, freezeTableName: true
    }
)

export default Users
