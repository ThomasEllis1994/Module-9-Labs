const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Post extends Model {}
// Sequelize will create this table if it doesn't exist on startup
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            // required: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            // required: true,
        },
        imageURL: {
            type: DataTypes.STRING,
            allowNull: true,
            // required: true,
            // unique: true,(when to use unique?)
        },
        likes: {
            type: DataTypes.INTEGER,
        },
        userID: {
            type: DataTypes.INTEGER,
            // required: true,
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize: sequelizeInstance,
        modelName: "posts", // use lowercase plural format
        timestamps: true,
        freezeTableName: true,
    }
);
module.exports = Post;
