//Reading in JSON object from master.json
// FIXED SYNTAX ERROR on line 7 [unnecessary comma]
master =
{
	"server": {
		"id": 0,
		"owner_id": "2442d8f7-0bba-4f9c-ae6d-83287ad96383"
	},
	"url": "https://nodecraft.com"
}


// Reading in JSON object from target.json
target = 
{
	"server": {
		"host": "127.0.0.1",
		"port": 25565,
		"args": ["java", "-Xms1024M", "-Xmx2048M", "-jar", "minecraft_server.jar", "nogui"],
		"enabled": true
	},
	"debug": true
}





// Merge the two objects using the Object.assign() function.
var result = Object.assign({}, master, target)

// Output JSON string 
console.log(JSON.stringify(result))
