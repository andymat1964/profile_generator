const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = "";

rl.question('What\'s your name?', (answer) => {
  profile = "My name is " + answer + "\n";
    console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question('What\'s an activity you like to do?', (answer) => {  
        profile += "An activity i like to do is" + answer + "\n";
          console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question('What do you listen to while doing that?', (answer) => {
              profile += "I like to listen to" + answer + "\n";
                console.log(`Thank you for your valuable feedback: ${answer}`);
                  rl.question('Which meal is your favourite?', (answer) => {
                      profile += "My favourite meal is" + answer + "\n";
                      console.log(`Thank you for your valuable feedback: ${answer}`);
                        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
                          profile += "My favourite thing to eat for my favourite meal is", (answer) + "\n";
                            console.log(`Thank you for your valuable feedback: ${answer}`);
                              rl.question("Which sport is your absolute favourite?", (answer) => {
                                profile += "My favourite sport is"+ answer + "\n";
                                  console.log(`Thank you for your valuable feedback: ${answer}`);
                                  rl.question("What is your superpower?", (answer) => {
                                    profile += "My superpower is cooking a great steak" + answer + "\n";
                                      console.log(`Thank you for your valuable feedback: ${answer}`)
                                      rl.close();
                                  });
                                  
                              
                              });

                              
                        });


                  });    
                       

            });   

          
      });


});
console.log(profile);
