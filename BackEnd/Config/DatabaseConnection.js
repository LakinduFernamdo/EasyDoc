import pkg from "pg";
import dotenv from "dotenv";
import fs from "fs";



const { Client } = pkg;

function loadEnv(filePath) {              //Function to load environment variables from a specific file
    if (!fs.existsSync(filePath)) {
        throw new Error(`Environment file not found: ${filePath}`);
    }
    return dotenv.parse(fs.readFileSync(filePath));
}

//Create DataBase connection method  for each env files
function createDatabaseConnection(envPath) {
    const config = loadEnv(envPath);

    const client = new Client({
        user: config.DB_USER,
        host: config.DB_HOST,
        database: config.DB_NAME,
        password: config.DB_PASSWORD,
        port: config.DB_PORT ? Number(config.DB_PORT) : 5432,
    });

    return client;
}

// Initialize separate database connections
const supervisorDB = createDatabaseConnection("./SupervisorData.env");
const patientDB = createDatabaseConnection("./PatientData.env");
const doctorDB = createDatabaseConnection("./DoctorData.env");
// Connect to the databases
async function connectDatabases() {
    try {
        

        await patientDB.connect();
        console.log(`✅ 😈 Connected to Patient Database: ${patientDB.database}`);

        await supervisorDB.connect();
        console.log(`✅ 😈 Connected to Supervisor Database: ${supervisorDB.database}`);

        await doctorDB.connect();
        console.log(`✅ 😈 Connected to Doctor Database: ${doctorDB.database}`);

    } catch (error) {
        console.error("❌ Database connection error:", error.message);
    }
}


export { connectDatabases, supervisorDB, patientDB, doctorDB };
export default connectDatabases;  //This should be the default export
