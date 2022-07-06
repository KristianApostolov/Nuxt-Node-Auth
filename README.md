# Nuxt-Node-Auth
This authentication example is built with:
Nuxt 3 and Tailwind CSS on the frontend. 
Node JS( Expess JS ), TypeORM, Redis, MariaDB on the backend.

To run it on your local machine first make sure the ports 3000 and 4000 are free.
Then open two terminals in the root of the project.
To deploy the backend api: <br/>
	1. Host a Redis and a MariaDB instance either in a local docker container or in a dedicated hosting service and make a .env file following the .env.sample file<br/>
  2. Type ```cd backend``` into the terminal. <br/>
  3. install the dependencies by typing ```npm install``` into the terminal.<br/>
  4. Run the server by typing: ```ts-node index``` (index.ts is the entry point of the application).<br/>
  5. Upon seeing those 3 messages your node ts server instance is ready: <img width="157" alt="Screenshot_1" src="https://user-images.githubusercontent.com/90000349/177564006-35390168-3cd9-4aa3-b6ff-2390702330f4.png">
<br/><br/>
To deploy the frontend:
1. Type ```cd frontend``` into the terminal.<br/>
2. Type ```yarn install ```(If you don't have yarn first do ```npm install -g yarn```) into the terminal to install the dependencies.
3. Type ```yarn dev``` into the terminal to run a development instance of the frontend server.
4. Go on ```http://localhost:3000``` in the browser.

Here is how the website should look like:
<img width="960" alt="3 (3)" src="https://user-images.githubusercontent.com/90000349/177568418-aabb7cdf-f1e7-4d34-970d-ee14d69bf311.png">
<br/>
<img width="960" alt="3 (1)" src="https://user-images.githubusercontent.com/90000349/177568549-5625273d-2c8c-4037-ba32-c2a4bc837fd4.png">
<br/>
<img width="960" alt="3 (2)" src="https://user-images.githubusercontent.com/90000349/177568583-dec1fa52-e49b-4636-a419-93553279400d.png">
