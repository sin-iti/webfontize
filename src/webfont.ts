import * as fs from "fs";
import * as path from "path";
let ttf2woff2: any = require("ttf2woff2");
let ttf2woff: any = require("ttf2woff");
let ttf2svg: any = require("ttf2svg");
let ttf2eot: any = require("ttf2eot");
let ttfTransformer = {
    "woff2": ttf2woff2,
    "woff": ttf2woff,
    "svg": ttf2svg,
    "eot": ttf2eot
};
fs.readFile(path.resolve(__dirname, "../fontOrigin/pb-addons.ttf"), (err, data) => {
    if (err) {
        throw err;
    } else {
        for(let type in ttfTransformer) {            
            fs.writeFile(path.resolve(__dirname, `../dist/font.${type}`), (ttfTransformer[type])(data), (err) => {
                if (err) {
                    throw err;
                } else {
                    console.log(`成功生成${path.resolve(__dirname, `../dist/font.${type}`)}`);
                }
            });
        }
    }
});