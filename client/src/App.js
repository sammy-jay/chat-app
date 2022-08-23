import { useEffect } from "react";
import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:5000");

function App() {
  useEffect(() => {
    socket.on("connection");
  }, []);

  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
}
export default App;
