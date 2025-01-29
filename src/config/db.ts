import { Sequelize } from "sequelize";

const db = new Sequelize('postgresql://rest_api_node_typescript_rcii_user:rTPFIH1NDkRW0LC6fEaviO4NJSWatB84@dpg-cud47ga3esus73fuh0ig-a.oregon-postgres.render.com/rest_api_node_typescript_rcii?ssl=true')

export default db