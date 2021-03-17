const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr><th>Location</th><th>Number of Hours</th><th>Money</th></tr>')
      res.write('<tr><td>New York</td><td>72</td><td>1500</td></tr>')  
      res.write('<tr><td>Niagara Falls</td><td>24</td><td>500</td></tr>')  
      res.write('<tr><td>Miami</td><td>48</td><td>1000</td></tr>')  
      res.write('<tr><td>Disney World</td><td>36</td><td>800</td></tr>')  
      res.write('</table>')  
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})