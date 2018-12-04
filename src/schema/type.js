const {Parser} = require('acorn');
const esprima = require('esprima');
const acornLoose = require('acorn-loose');
const stdLib = require('@stdlib/stdlib');

const addTwoNumbers = function (numberA, numberB) {
  return numberA + numberB;
};

class TypeBuilder {
  buildTypes (){
    console.log('STDLIB TO BE PARSED');
    let libKeys = Object.keys(stdLib);
    // console.log(libKeys);

    // let fnString = String(stdLib.array);
    // console.log('FNSTRING:');
    // console.log(fnString);
    // let parsedFn = esprima.parseScript(fnString, {tolerant: true});
    
    // console.log('PARSED FN:', parsedFn.body[0].declarations[0].init.params);

    for(let i in libKeys){
      let libname = libKeys[i];
      let lib = stdLib[libname];
      let libFns = Object.keys(lib);


      for(let j in libFns){
        let funcName = libFns[j];
        let fn = lib[funcName];

        if(j == 0 && i == 0) {
          console.log('STRINGIFIED FUNCTION:', String(new fn()));

          // let parsedFn = esprima.parseScript(`const ${funcName} = ${String(fn)}`); //acornLoose.parse(fn); --FN Expression
          let parsedFn = esprima.parseScript(String(new fn()), {tolerant: true}); //acornLoose.parse(new fn()); --FN Declaration

          console.log(`Parsed output of ${libname}.${funcName}`, parsedFn);
        };
      }

      // if(i == 1) console.log("LIB:", lib);
    }

    let parsed = acornLoose.parse(stdLib); //esprima.parseScript(stdLib); //Parser.parse(stdLib);

    return parsed;
  }//end buildTypes
}

module.exports = TypeBuilder;