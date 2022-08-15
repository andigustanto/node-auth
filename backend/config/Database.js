import {Sequelize} from "sequelize";

const db = new Sequelize('theworker2022', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;