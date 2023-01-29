const { eslint_config } = require( '@teamskunk/lint' )
// const { styleguide } = require( '@teamskunk/lint' )

// Export the default eslint config
module.exports = {
    ...eslint_config
}

// Manually import the styleguide
// module.exports = {

//     // Do your configs here
//     extends:
//     parser:
//     settings:

//     rules: {
//         // Import styleguide
//         ...styleguide 
        
//     },
// }