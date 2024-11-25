const args = minimist(process.argv.slice(2), {
    alias: {
      num1: 'n1',
      num2: 'n2'
    }
  });
  
  console.log(`Num1 is: ${args.num1}`); // Works with --num1 or -n1