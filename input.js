let connection ;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (input) => { 
    if (input ===  '\u0003'){
      process.exit();
    } else if( input === 'w'){
      connection.write("UPKEY");
    } else if( input === 'a'){
      connection.write("LEFTKEY");
    } else if( input === 's'){
      connection.write("DOWNKEY");
    } else if( input === 'd'){
      connection.write("RIGHTKEY");
    }
    connection.write(`Say: ${input}`);
};


module.exports = setupInput;
