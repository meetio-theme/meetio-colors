/*eslint-disable no-undef */
const path = require("path")
const fs = require("fs")
const rimraf = require("rimraf")

const {light, dark} = require("./settings/")

rimraf("colors", () => {
    fs.mkdir("colors", () => {
        fs.writeFileSync(`${}.js`,
            buffer,
            err => {
                if (err) {
                    console.log(err)
                }
            }
        )
    })
})
