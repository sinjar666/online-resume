#!/usr/bin/env node

(() =>  {
    const fs = require('fs');

    var fname = process.argv[2];

    fs.readFile(fname, (err, data) => {
        if(err)
            throw err;
        
        var obj = JSON.parse(data);

        obj.forEach((item) => {
            for(let i=0; i < item.count; ++i)
                process.stdout.write(item.word + " ");
        });        

    });
    
}).call(this);