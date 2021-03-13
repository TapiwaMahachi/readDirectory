import app from './config/express.js';
import {port, env} from './config/vars.js';




app.listen(port, ()=>console.log(`Listening to port: ${port} (${env})`));
