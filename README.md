Keli - WIP
===============
 
Nothing to see here. As of now.
 
Goals
===============
 
General:
 
 - Keli is a system which can generate a web application comprised of HTML, CSS and JS
 - Keli let you organize your code in modules which can inherit from each other
 - Each module is made of HTML (returned by a JS function), CSS and JS
 - Keli should be able to generate the needed HTML client-side
 - Keli should be able to generate HTML server-side and assemble CSS and client-side JS
 - Keli could be used as a "templating engine"
 
In each module:
 
 - index.js returns HTML (leaving the user free to use templating engine or pure JS to build their composable HTML)
 - a module can inherit from parent simply by using require
 - *.styl, *.scss, *.coffee... are built through a task runner (grunt, gulp..)
 - client.js get concatenated following the require used in modules and will be run client-side
 - client.css get concatenated following the require used in modules
 
A base module:
 
 - will contain a basic HTML structure (HTML Kickstart?)
 - will include the CSS and JS files in development
 - will include the concatenated CSS and JS files in production
 
A base module won't be any different from the others, it's just something I don't think normal users will mess up with
